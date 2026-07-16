// const Button = ({
//     children,
//     type = "button",
//     disabled = false,
//     className = "",
// }) => {
//     return (
//         <button
//             type={type}
//             disabled={disabled}
//             className={`w-full rounded-xl bg-blue-600 sm:w-auto py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;

const VARIANT_STYLES = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    onClick,
    className = "",
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${VARIANT_STYLES[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;