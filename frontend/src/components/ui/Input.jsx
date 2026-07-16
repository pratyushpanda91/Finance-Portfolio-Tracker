const Input = ({
    label,
    type = "text",
    name,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className="space-y-3">
            <label
                htmlFor={name}
                className="block text-sm font-medium tracking-wide text-slate-700"
            >
                {label}
            </label>

            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-800 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
        </div>
    );
};

export default Input;