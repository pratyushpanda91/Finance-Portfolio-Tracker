// import { Pencil, Trash2 } from "lucide-react";

// const InvestmentRow = ({
//     investment,
//     onEdit,
//     onDelete,
// }) => {
//     return (
//         <tr className="border-t border-slate-200 transition hover:bg-slate-50">

//             <td className="px-6 py-5 font-semibold text-slate-800">
//                 {investment.investmentName}
//             </td>
//             <td className="px-6 py-5">
//                 {investment.investmentType}
//             </td>
//             <td className="px-6 py-5">
//                 ₹{investment.investedAmount.toLocaleString()}
//             </td>
//             <td className="px-6 py-5 font-medium text-green-600">
//                 ₹{investment.currentValue.toLocaleString()}
//             </td>

//             <td className="px-6 py-5">
//                 {new Date(
//                     investment.purchaseDate
//                 ).toLocaleDateString()}
//             </td>
//             <td className="px-6 py-5">
//                 <div className="flex gap-3">

//                     <button
//                         onClick={() => onEdit(investment)}
//                         className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
//                     >
//                         <Pencil size={18}/>
//                     </button>

//                     <button
//                         onClick={() => onDelete(investment.id)}
//                         className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
//                     >
//                         <Trash2 size={18}/>
//                     </button>
//                 </div>
//             </td>
//         </tr>
//     );
// };

// export default InvestmentRow;

/////////////////////////////////////////////////////////

// import {
//     Pencil,
//     Trash2,
// } from "lucide-react";

// const InvestmentRow = ({
//     investment,
//     onEdit,
//     onDelete,
// }) => {
//     return (
//         <tr className="border-t border-slate-200 transition hover:bg-slate-50">

//             <td className="px-6 py-5 font-semibold text-slate-800">
//                 {investment.investmentName}
//             </td>

//             <td className="px-6 py-5 text-slate-600">
//                 {investment.investmentType}
//             </td>

//             <td className="px-6 py-5 text-right tabular-nums text-slate-700">
//                 ₹{investment.investedAmount.toLocaleString()}
//             </td>

//             <td className="px-6 py-5 text-right font-semibold tabular-nums text-green-600">
//                 ₹{investment.currentValue.toLocaleString()}
//             </td>

//             <td className="px-6 py-5 text-slate-600">
//                 {new Date(
//                     investment.purchaseDate
//                 ).toLocaleDateString()}
//             </td>

//             <td className="px-6 py-5">

//                 <div className="flex justify-end gap-2">

//                     <button
//                         onClick={() => onEdit(investment)}
//                         className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
//                     >
//                         <Pencil size={16}/>
//                     </button>

//                     <button
//                         onClick={() => onDelete(investment.id)}
//                         className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
//                     >
//                         <Trash2 size={16}/>
//                     </button>

//                 </div>

//             </td>

//         </tr>
//     );
// };

// export default InvestmentRow;

//////////////////////////////////

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