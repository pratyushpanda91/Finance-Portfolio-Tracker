import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="mb-8 flex items-center justify-between rounded-2xl bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Wallet size={24} className="text-blue-600" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Finance Portfolio
                    </h1>

                    <p className="text-sm text-slate-500">
                        Welcome back 👋
                    </p>
                </div>
            </div>

            <button
                onClick={handleLogout}
                className="rounded-lg bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100"
            >
                Logout
            </button>
        </header>
    );
};

export default Navbar;