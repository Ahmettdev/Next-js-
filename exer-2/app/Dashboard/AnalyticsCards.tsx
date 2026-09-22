export async function AnalyticsCards() {
  // Waxaa la simulating-garaynayaa Fast API Call (1 ilbiriqsi)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const stats = [
    {
      title: "Dakhliga Maanta",
      value: "$2,845.00",
      change: "+12.5%",
      isPositive: true,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Isticmaalayaasha Cusub",
      value: "+1,240",
      change: "+8.2%",
      isPositive: true,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Celceliska Dalabaadka",
      value: "$142.50",
      change: "-2.1%",
      isPositive: false,
      color: "from-purple-500 to-violet-600",

    },
  ];

  return (
   


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          stats.map((stat, index) =>
            <div key={index} className={`bg-gradient-to-r ${stat.color} p-6 rounded-lg shadow-md`}>
              <h3 className="text-lg font-semibold text-white">{stat.title}</h3>

              <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
              <p className={`mt-1 text-sm font-medium ${stat.isPositive ? "text-green-400" : "text-red-400"}`}>
                {stat.change}

              </p>
            </div>
          )
        }
      </div>

  )
}

