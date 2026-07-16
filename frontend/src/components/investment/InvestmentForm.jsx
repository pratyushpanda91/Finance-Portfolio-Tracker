import { useEffect, useState } from "react";
import Button from "../ui/Button";

const initialFormData = {
    investmentName: "",
    investmentType: "STOCK",
    investedAmount: "",
    currentValue: "",
    purchaseDate: "",
};

const InvestmentForm = ({
    initialData = null,
    onSubmit,
    onCancel,
    loading,
}) => {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (initialData) {
            setFormData({
                investmentName: initialData.investmentName,
                investmentType: initialData.investmentType,
                investedAmount: initialData.investedAmount,
                currentValue: initialData.currentValue,
                purchaseDate: initialData.purchaseDate.split("T")[0],
            });
        } else {
            setFormData(initialFormData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            ...formData,
            investedAmount: Number(formData.investedAmount),
            currentValue: Number(formData.currentValue),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
            <h2 className="mb-6 text-xl font-bold text-slate-900">
                {initialData
                    ? "Edit Investment"
                    : "Add Investment"}
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Investment Name
                    </label>

                    <input
                        type="text"
                        name="investmentName"
                        value={formData.investmentName}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Investment Type
                    </label>

                    <select
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleChange}
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                        <option value="STOCK">Stock</option>
                        <option value="ETF">ETF</option>
                        <option value="MUTUAL_FUND">Mutual Fund</option>
                        <option value="CRYPTO">Crypto</option>
                        <option value="GOLD">Gold</option>
                        <option value="BOND">Bond</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Invested Amount
                    </label>

                    <input
                        type="number"
                        name="investedAmount"
                        value={formData.investedAmount}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Current Value
                    </label>

                    <input
                        type="number"
                        name="currentValue"
                        value={formData.currentValue}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Purchase Date
                    </label>

                    <input
                        type="date"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Saving..."
                        : initialData
                        ? "Update Investment"
                        : "Add Investment"}
                </Button>

                {initialData && (
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                )}

            </div>
        </form>
    );
};

export default InvestmentForm;