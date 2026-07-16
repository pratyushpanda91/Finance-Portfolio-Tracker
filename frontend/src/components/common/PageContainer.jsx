const PageContainer = ({ children }) => {
    return (
        <main className="min-h-screen overflow-x-hidden bg-slate-100">
            <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    );
};

export default PageContainer;