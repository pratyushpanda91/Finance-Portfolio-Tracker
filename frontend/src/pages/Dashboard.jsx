import { useEffect, useState } from "react";
import {
    DollarSign,
    TrendingUp,
    ChartColumn,
    Briefcase,
    Plus,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/common/Navbar";
import PageContainer from "../components/common/PageContainer";
import SummaryCard from "../components/dashboard/SummaryCard";
import InvestmentTable from "../components/investment/InvestmentTable";
import InvestmentForm from "../components/investment/InvestmentForm";

import { getPortfolioSummary } from "../services/portfolio.service";

import {
    getInvestments,
    createInvestment,
    updateInvestment,
    deleteInvestment,
} from "../services/investment.service";

const Dashboard = () => {
    const [summary, setSummary] = useState({
        totalInvestment: 0,
        currentValue: 0,
        totalProfitLoss: 0,
        totalInvestments: 0,
    });

    const [investments, setInvestments] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [selectedInvestment, setSelectedInvestment] = useState(null);

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const [pagination, setPagination] = useState({
        totalPages: 1,
        total: 0,
    });

    useEffect(() => {
    fetchDashboardData();
}, [page, search]);

    const fetchDashboardData = async () => {
        try {
            const [summaryResponse, investmentResponse] = await Promise.all([
                getPortfolioSummary(),
                getInvestments({
                    page,
                    limit: 5,
                    search,
            })
            ]);

            setSummary(summaryResponse.data);
            setInvestments(
                investmentResponse.data.investments
            );

            setPagination(
                investmentResponse.data.pagination
            );
        } catch (error) {
            console.error(error);
            toast.error("Failed to load dashboard.");
        }
    };

    const handleCreateInvestment = async (formData) => {
        try {
            setLoading(true);

            const response = await createInvestment(formData);

            toast.success(response.message);

            setShowForm(false);

            fetchDashboardData();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to create investment."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateInvestment = async (formData) => {
        try {
            setLoading(true);

            const response = await updateInvestment(
                selectedInvestment.id,
                formData
            );

            toast.success(response.message);

            setSelectedInvestment(null);

            setShowForm(false);

            fetchDashboardData();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to update investment."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (investment) => {
        setSelectedInvestment(investment);

        setShowForm(true);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Delete this investment?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await deleteInvestment(id);

            toast.success(response.message);

            fetchDashboardData();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to delete investment."
            );
        }
    };

    const handleCancel = () => {
        setSelectedInvestment(null);

        setShowForm(false);
    };

    const handleToggleForm = () => {
        if (showForm) {
            handleCancel();
            return;
        }

        setSelectedInvestment(null);

        setShowForm(true);
    };

    return (
        <PageContainer>
            <Navbar />

            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                    Dashboard
                </h2>

                <p className="mt-2 text-slate-500">
                    Track and manage all your investments.
                </p>
            </div>

            <section className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <SummaryCard
                    title="Total Investment"
                    value={`₹${summary.totalInvestment.toLocaleString()}`}
                    icon={<DollarSign size={28} />}
                />

                <SummaryCard
                    title="Current Value"
                    value={`₹${summary.currentValue.toLocaleString()}`}
                    icon={<TrendingUp size={28} />}
                />

                <SummaryCard
                    title="Profit / Loss"
                    value={`₹${summary.totalProfitLoss.toLocaleString()}`}
                    icon={<ChartColumn size={28} />}
                />

                <SummaryCard
                    title="Investments"
                    value={summary.totalInvestments}
                    icon={<Briefcase size={28} />}
                />
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Investment Portfolio
                        </h2>

                        <p className="text-slate-500">
                            Manage all your investments in one place.
                        </p>
                    </div>

                    <button
                        onClick={handleToggleForm}
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <Plus size={18} />

                        {showForm ? "Close Form" : "Add Investment"}
                    </button>
                </div>

                {showForm && (
                    <InvestmentForm
                        initialData={selectedInvestment}
                        loading={loading}
                        onCancel={handleCancel}
                        onSubmit={
                            selectedInvestment
                                ? handleUpdateInvestment
                                : handleCreateInvestment
                        }
                    />
                )}

                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <input
        type="text"
        placeholder="Search investment..."
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
        }}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 md:max-w-sm"
    />

    <p className="text-sm text-slate-500">
        {pagination.total} Investments
    </p>

</div>

                <InvestmentTable
                    investments={investments}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <div className="mt-6 flex items-center justify-center gap-4">

    <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
    >
        Previous
    </button>

    <span>
        Page {page} of {pagination.totalPages}
    </span>

    <button
        disabled={page === pagination.totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
    >
        Next
    </button>

</div>
            </section>
        </PageContainer>
    );
};

export default Dashboard;