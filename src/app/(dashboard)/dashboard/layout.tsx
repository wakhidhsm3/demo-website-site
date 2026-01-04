export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50">
            <header className="fixed top-0 w-full bg-white border-b z-10 h-16 flex items-center px-6">
                <div className="font-bold text-lg">Wedding Planner</div>
            </header>
            <div className="flex pt-16 w-full h-full">
                <aside className="w-64 bg-white border-r p-4 hidden md:block">
                    <nav className="space-y-1">
                        <div className="p-2 bg-pink-50 text-pink-600 rounded">Overview</div>
                        <div className="p-2 hover:bg-gray-100 rounded">Guests</div>
                        <div className="p-2 hover:bg-gray-100 rounded">Theme</div>
                    </nav>
                </aside>
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
