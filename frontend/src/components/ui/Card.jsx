const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-10 shadow-lg ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;