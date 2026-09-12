import Link from "next/link";

export const TimePage = () => {
    const time = new Date().toLocaleTimeString();
    return (
        <div>
            <nav className="space-x-4 mb-4">
                <Link href="/">Home</Link> | <Link href="/about">About</Link>
                 <Link href="/dashboard">Dashboard</Link>
                 <Link href="/dashboard/analytics">Analytics</Link>
                 <Link href="/dashboard/recent-orders">Recent Orders</Link>

            </nav>
            <h1>Current Time</h1>
            <p>{time}</p>
        </div>
    );
}