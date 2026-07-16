const PageContainer = ({ children }) => {
    return (
        <main className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-7xl px-6 py-8">
                {children}
            </div>
        </main>
    );
};

export default PageContainer;