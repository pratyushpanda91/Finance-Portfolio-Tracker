import Card from "./Card";
import Logo from "../common/Logo";

const AuthLayout = ({ title, subtitle, children, footer }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <Card>
                <Logo />

                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        {title}
                    </h2>

                    <p className="mt-3 text-base leading-7 text-slate-500">
                        {subtitle}
                    </p>
                </div>

                {children}

                <div className="mt-10 text-center text-sm text-slate-500">
                    {footer}
                </div>
            </Card>
        </div>
    );
};

export default AuthLayout;