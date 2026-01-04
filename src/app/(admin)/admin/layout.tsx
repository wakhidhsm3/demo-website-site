export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-100">
            <aside className="w-64 bg-slate-900 text-white p-4">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <nav className="space-y-2">
                    <div className="p-2 hover:bg-slate-800 rounded cursor-pointer">Dashboard</div>
                    <div className="p-2 hover:bg-slate-800 rounded cursor-pointer">Users</div>
                    <div className="p-2 hover:bg-slate-800 rounded cursor-pointer">Themes</div>
                </nav>
            </aside>
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
