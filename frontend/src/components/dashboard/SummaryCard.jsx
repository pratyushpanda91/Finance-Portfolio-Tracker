const SummaryCard = ({ title, value, icon }) => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {icon}
            </div>

            <p className="text-sm text-slate-500">
                {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {value}
            </h2>
        </div>
    );
};

export default SummaryCard;