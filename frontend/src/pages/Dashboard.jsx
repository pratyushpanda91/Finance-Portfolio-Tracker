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

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [summaryResponse, investmentResponse] =
                await Promise.all([
                    getPortfolioSummary(),
                    getInvestments(),
                ]);

            setSummary(summaryResponse.data);
            setInvestments(investmentResponse.data.investments);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load dashboard.");
        }
    };

    const handleCreateInvestment = async (formData) => {
        console.log(formData);
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

    const handleEdit = (investment) => {
        console.log(investment);
    };

    const handleDelete = (id) => {
        console.log(id);
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
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <Plus size={18} />

                        {showForm ? "Close Form" : "Add Investment"}
                    </button>
                </div>

                {showForm && (
                    <InvestmentForm
                        onSubmit={handleCreateInvestment}
                        loading={loading}
                    />
                )}

                <InvestmentTable
                    investments={investments}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </section>
        </PageContainer>
    );
};

export default Dashboard;