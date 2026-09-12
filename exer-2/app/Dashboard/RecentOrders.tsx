export async function RecentOrders() {
  // Waxaa la simulating-garaynayaa Heavy Database Query (3 ilbiriqsi)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const orders = [
    { id: "ORD-9982", name: "Cali Axmed Farax", amount: "$240.00", status: "Completed", date: "Maanta, 2:30 PM", avatar: "CA" },
    { id: "ORD-9981", name: "Caasha Cumar Maxamed", amount: "$1,120.50", status: "Pending", date: "Maanta, 1:15 PM", avatar: "CC" },
    { id: "ORD-9980", name: "Xasan Maxamud Abdi", amount: "$89.99", status: "Completed", date: "Shalay, 6:45 PM", avatar: "XM" },
    { id: "ORD-9979", name: "Fartuun Xuseen Cali", amount: "$450.00", status: "Cancelled", date: "Shalay, 11:20 AM", avatar: "FX" },
  ];

  return (
    <div className="space-y-4">
        {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow-md grid grid-cols-2 items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                        {order.avatar}
                    </div>
                    <div>
                        <p className="font-semibold">{order.name}</p>
                        <p className="text-sm text-gray-500">{order.id}</p>
                    </div>
                </div>
                <div className="text-right">        

                    <p className="font-semibold">{order.amount}</p>
                    <p className={`text-sm ${order.status === "Completed" ? "text-green-500" : order.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                        {order.status}              

                    </p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                </div>
            </div>
        ))}
   </div>

);

}