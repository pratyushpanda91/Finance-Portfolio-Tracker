import InvestmentRow from "./InvestmentRow";

const InvestmentTable = ({
    investments,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full">
                <thead className="bg-slate-100">
                    <tr className="text-left text-sm uppercase tracking-wide text-slate-600">
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Invested</th>
                        <th className="px-6 py-4">Current</th>
                        <th className="px-6 py-4">Purchase Date</th>
                        <th className="px-6 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {investments.map((investment) => (

                        <InvestmentRow
                            key={investment.id}
                            investment={investment}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestmentTable;