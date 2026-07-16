const SummaryCard = ({ title, value, icon }) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {icon}
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500">
                {title}
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                {value}
            </h2>

        </div>
    );
};

export default SummaryCard;