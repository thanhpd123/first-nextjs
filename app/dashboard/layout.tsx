export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section style={{ margin: "20px 0" }}>
        {children}
    </section>
}