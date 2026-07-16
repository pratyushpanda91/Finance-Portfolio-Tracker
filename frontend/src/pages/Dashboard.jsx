import { useEffect, useState } from "react";
import {
    DollarSign,
    TrendingUp,
    ChartColumn,
    Briefcase,
    Plus,
    Search,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/common/Navbar";
import PageContainer from "../components/common/PageContainer";
import SummaryCard from "../components/dashboard/SummaryCard";
import InvestmentTable from "../components/investment/InvestmentTable";
import InvestmentForm from "../components/investment/InvestmentForm";
import Button from "../components/ui/Button";

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

    const [isLoading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
        total: 0,
    });

    useEffect(() => {
        fetchDashboardData();
    }, [page, search]);

    const fetchDashboardData = async () => {
        try {

            setIsLoading(true);

            const [
                summaryResponse,
                investmentResponse,
            ] = await Promise.all([
                getPortfolioSummary(),
                getInvestments({
                    page,
                    limit: 5,
                    search,
                }),
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

        } finally {

            setIsLoading(false);

        }
    };

    const handleCreateInvestment = async (formData) => {

        try {

            setLoading(true);

            const response =
                await createInvestment(formData);

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

            const response =
                await updateInvestment(
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

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Delete this investment?"
        );

        if (!confirmed) return;

        try {

            const response =
                await deleteInvestment(id);

            toast.success(response.message);

            fetchDashboardData();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete investment."
            );

        }

    };

    const handleEdit = (investment) => {

        setSelectedInvestment(investment);

        setShowForm(true);

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

                <h1 className="text-3xl font-bold text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                    Track and manage all your investments.
                </p>

            </div>

            <section className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                <SummaryCard
                    title="Total Investment"
                    value={`₹${summary.totalInvestment.toLocaleString()}`}
                    icon={<DollarSign size={22} />}
                />

                <SummaryCard
                    title="Current Value"
                    value={`₹${summary.currentValue.toLocaleString()}`}
                    icon={<TrendingUp size={22} />}
                />

                <SummaryCard
                    title="Profit / Loss"
                    value={`₹${summary.totalProfitLoss.toLocaleString()}`}
                    icon={<ChartColumn size={22} />}
                />

                <SummaryCard
                    title="Investments"
                    value={summary.totalInvestments.toLocaleString()}
                    icon={<Briefcase size={22} />}
                />

            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Investment Portfolio
                        </h2>

                        <p className="text-slate-500">
                            Manage all your investments in one place.
                        </p>

                    </div>

                    <Button onClick={handleToggleForm}>

                        <Plus size={18} />

                        {showForm
                            ? "Close Form"
                            : "Add Investment"}

                    </Button>

                </div>

                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <div className="w-full md:w-96">

    <input
        type="text"
        placeholder="Search investment..."
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
        }}
        className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
    />

</div>

                    <p className="text-sm text-slate-500">
                        {pagination.total.toLocaleString()} Investments
                    </p>

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

                <InvestmentTable
                    investments={investments}
                    loading={isLoading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <div className="mt-6 flex items-center justify-center gap-4">

                    <Button
                        variant="secondary"
                        disabled={page === 1}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Previous
                    </Button>

                    <span className="text-sm font-medium text-slate-600">
                        Page {pagination.page} of {pagination.totalPages}
                    </span>

                    <Button
                        variant="secondary"
                        disabled={
                            pagination.page ===
                            pagination.totalPages
                        }
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </Button>

                </div>

            </section>

        </PageContainer>
    );
};

export default Dashboard;