import { Pencil, Trash2 } from "lucide-react";

const InvestmentRow = ({
    investment,
    onEdit,
    onDelete,
}) => {
    return (
        <tr className="border-t border-slate-200 transition hover:bg-slate-50">
            <td className="truncate px-4 py-5 font-semibold text-slate-800 sm:px-6">
                {investment.investmentName}
            </td>

            <td className="whitespace-nowrap px-4 py-5 text-slate-600 sm:px-6">
                {investment.investmentType}
            </td>

            <td className="whitespace-nowrap px-4 py-5 text-right tabular-nums text-slate-700 sm:px-6">
                ₹{investment.investedAmount.toLocaleString()}
            </td>

            <td className="whitespace-nowrap px-4 py-5 text-right tabular-nums font-medium text-green-600 sm:px-6">
                ₹{investment.currentValue.toLocaleString()}
            </td>

            <td className="whitespace-nowrap px-4 py-5 text-slate-600 sm:px-6">
                {new Date(investment.purchaseDate).toLocaleDateString()}
            </td>

            <td className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-end gap-2">
                    <button
                        onClick={() => onEdit(investment)}
                        aria-label="Edit investment"
                        className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(investment.id)}
                        aria-label="Delete investment"
                        className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default InvestmentRow;