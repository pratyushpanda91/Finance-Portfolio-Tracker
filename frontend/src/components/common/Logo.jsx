import { Wallet } from "lucide-react";

const Logo = () => {
    return (
        <div className="mb-8 flex flex-col items-center">
            <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-2xl bg-blue-100">
                <Wallet size={36} className="text-blue-600" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Finance Portfolio
            </h1>
        </div>
    );
};

export default Logo;