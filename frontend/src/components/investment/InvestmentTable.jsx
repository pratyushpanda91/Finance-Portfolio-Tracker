import InvestmentRow from "./InvestmentRow";

const SkeletonRow = () => (
    <tr className="border-t border-slate-200">
        {Array.from({ length: 6 }).map((_, i) => (
            <td key={i} className="px-4 py-5 sm:px-6">
                <div className="h-4 w-full max-w-[100px] rounded bg-slate-200" />
            </td>
        ))}
    </tr>
);

const InvestmentTable = ({
    investments,
    loading = false,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[680px] table-fixed border-collapse">
                    <colgroup>
                        <col className="w-[22%]" />
                        <col className="w-[13%]" />
                        <col className="w-[15%]" />
                        <col className="w-[15%]" />
                        <col className="w-[17%]" />
                        <col className="w-[18%]" />
                    </colgroup>

                    <thead className="bg-slate-100">
                        <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                            <th className="px-4 py-4 sm:px-6">Name</th>
                            <th className="px-4 py-4 sm:px-6">Type</th>
                            <th className="px-4 py-4 text-right sm:px-6">Invested</th>
                            <th className="px-4 py-4 text-right sm:px-6">Current</th>
                            <th className="px-4 py-4 sm:px-6">Purchase Date</th>
                            <th className="px-4 py-4 text-right sm:px-6">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <SkeletonRow key={i} />
                            ))
                        ) : investments.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-16 text-center">
                                    <p className="font-medium text-slate-700">
                                        No investments found.
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Start by adding your first investment.
                                    </p>
                                </td>
                            </tr>
                        ) : (
                            investments.map((investment) => (
                                <InvestmentRow
                                    key={investment.id}
                                    investment={investment}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvestmentTable;