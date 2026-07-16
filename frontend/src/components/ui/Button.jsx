const Button = ({
    children,
    type = "button",
    disabled = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`w-full rounded-xl bg-blue-600 sm:w-auto py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;