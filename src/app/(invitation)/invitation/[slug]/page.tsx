export default async function InvitationPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Wedding Invitation</h1>
                <p>Viewing invitation for: {slug}</p>
            </div>
        </div>
    );
}
