export default function InvitationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased text-slate-900 bg-white">
            {/* Invitation specific global styles or fonts can act here */}
            {children}
        </div>
    );
}
