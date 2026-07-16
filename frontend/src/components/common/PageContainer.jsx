// const PageContainer = ({ children }) => {
//     return (
//         <main className="min-h-screen bg-slate-100">
//             <div className="mx-auto max-w-7xl px-6 py-8">
//                 {children}
//             </div>
//         </main>
//     );
// };

// export default PageContainer;
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