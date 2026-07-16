import { Pencil, Trash2 } from "lucide-react";

const InvestmentRow = ({
    investment,
    onEdit,
    onDelete,
}) => {
    return (
        <tr className="border-t border-slate-200 transition hover:bg-slate-50">

            <td className="px-6 py-5 font-semibold text-slate-800">
                {investment.investmentName}
            </td>
            <td className="px-6 py-5">
                {investment.investmentType}
            </td>
            <td className="px-6 py-5">
                ₹{investment.investedAmount.toLocaleString()}
            </td>
            <td className="px-6 py-5 font-medium text-green-600">
                ₹{investment.currentValue.toLocaleString()}
            </td>

            <td className="px-6 py-5">
                {new Date(
                    investment.purchaseDate
                ).toLocaleDateString()}
            </td>
            <td className="px-6 py-5">
                <div className="flex gap-3">

                    <button
                        onClick={() => onEdit(investment)}
                        className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                    >
                        <Pencil size={18}/>
                    </button>

                    <button
                        onClick={() => onDelete(investment.id)}
                        className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                    >
                        <Trash2 size={18}/>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default InvestmentRow;