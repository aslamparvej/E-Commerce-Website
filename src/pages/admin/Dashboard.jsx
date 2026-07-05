import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, ShoppingCart, XCircle, Filter } from "lucide-react";

import WeeklyReportChart from "../../components/admin/WeeklyReportChart";

const summaryCards = [
  {
    title: "Total Sales",
    subtitle: "Last 7 days",
    value: "$350K",
    previousValue: "$235",
    growth: "+10.4%",
    type: "sales",
    icon: <DollarSign size={40} className="text-green-500" />,
  },
  {
    title: "Total Orders",
    subtitle: "Last 7 days",
    value: "10.7K",
    previousValue: "7.6k",
    growth: "+14.4%",
    type: "orders",
    icon: <ShoppingCart size={40} className="text-blue-600" />,
  },
  {
    title: "Pending & Canceled",
    subtitle: "Last 7 days",
    pending: {
      count: 509,
      users: 204,
    },
    canceled: {
      count: 94,
      growth: "+14.4%",
    },
    type: "status",
    icon: <XCircle size={40} className="text-yellow-500" />,
  },
];

const weeklyReport = {
  title: "Report for this week",
  tabs: ["This week", "Last week"],
  stats: [
    {
      label: "Customers",
      value: "52k",
    },
    {
      label: "Total Products",
      value: "3.5k",
    },
    {
      label: "Stock Products",
      value: "2.5k",
    },
    {
      label: "Out of Stock",
      value: "0.5k",
    },
    {
      label: "Revenue",
      value: "250k",
    },
  ],
  chartData: [
    { day: "Sun", value: 15 },
    { day: "Mon", value: 28 },
    { day: "Tue", value: 28 },
    { day: "Wed", value: 20 },
    { day: "Thu", value: 38 },
    { day: "Fri", value: 22 },
    { day: "Sat", value: 30 },
  ],
};

const activeUsers = {
  title: "Users in last 30 minutes",
  totalUsers: "21.5K",
  usersPerMinute: [4, 8, 3, 6, 9, 4, 7, 2, 8, 5, 6, 3, 7, 5, 8, 4, 6, 3, 9, 7],
  salesByCountry: [
    {
      country: "US",
      flag: "🇺🇸",
      sales: "30k",
      growth: "+25.8%",
    },
    {
      country: "Brazil",
      flag: "🇧🇷",
      sales: "30k",
      growth: "+10.8%",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      sales: "25k",
      growth: "+35.8%",
    },
  ],
};

const transactions = {
  title: "Transaction",
  list: [
    {
      id: "#6545",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$64",
    },
    {
      id: "#5412",
      orderDate: "01 Oct | 11:29 am",
      status: "Pending",
      amount: "$557",
    },
    {
      id: "#6622",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$156",
    },
    {
      id: "#6462",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
    {
      id: "#6462",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
  ],
};

const topProducts = {
  title: "Top Products",
  products: [
    {
      name: "Apple iPhone 13",
      itemCode: "#FXZ-4567",
      price: "$999.00",
    },
    {
      name: "Nike Air Jordan",
      itemCode: "#FXZ-4567",
      price: "$72.40",
    },
    {
      name: "T-shirt",
      itemCode: "#FXZ-4567",
      price: "$35.40",
    },
    {
      name: "Assorted Cross Bag",
      itemCode: "#FXZ-4567",
      price: "$80.00",
    },
  ],
};

const bestSellingProducts = {
  title: "Best Selling Product",
  products: [
    {
      name: "Apple iPhone 13",
      totalOrder: 104,
      status: "Stock",
      price: "$999.00",
    },
    {
      name: "Nike Air Jordan",
      totalOrder: 56,
      status: "Stock out",
      price: "$999.00",
    },
    {
      name: "T-shirt",
      totalOrder: 266,
      status: "Stock",
      price: "$999.00",
    },
    {
      name: "Cross Bag",
      totalOrder: 506,
      status: "Stock",
      price: "$999.00",
    },
  ],
};

const addNewProduct = {
  title: "Add New Product",
  categories: ["Electronic", "Fashion", "Home"],
  products: [
    {
      name: "Smart Fitness Tracker",
      price: "$39.99",
    },
    {
      name: "Leather Wallet",
      price: "$19.99",
    },
    {
      name: "Electric Hair Trimmer",
      price: "$34.99",
    },
  ],
};

const Dashboard = () => {
  return (
    <div class="grid grid-cols-12 gap-x-6 gap-y-6 p-6 bg-gray-100 min-h-screen">
      {/* Top Summary Cards */}
      {summaryCards.map((stat) => (
        <div class="col-span-12 md:col-span-4 bg-white rounded-lg p-6 shadow-sm flex justify-between items-center">
          <div>
            <h2 className="text-lg text-gray-800 font-semibold ">
              {stat.title}
            </h2>
            <p className="text-sm text-neutral-500">{stat.subtitle}</p>
            <div className="flex items-center gap-2 mt-4">
              <p className="text-3xl text-primary font-bold">{stat.value}</p>
              <p className="text-[1rem] text-black">{stat.type}</p>
              <span className="text-sm text-green-500 font-medium">
                {stat.growth}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Previous 7days{" "}
              <span className="text-blue-500 font-bold">
                ({stat.previousValue})
              </span>
            </p>
          </div>
          <div>{stat.icon}</div>
        </div>
      ))}

      {/* Report + Users Section  */}
      <div class="col-span-12 lg:col-span-8 bg-white rounded-lg p-4 shadow-sm min-h-80">
        <WeeklyReportChart />
      </div>

      <div class="col-span-12 lg:col-span-4 bg-white rounded-lg p-4 shadow-sm min-h-80">
        Users in last 30 minutes
      </div>

      {/* Transaction + Top Products  */}
      <div class="col-span-12 lg:col-span-8 bg-white rounded-lg p-4 shadow-sm min-h-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 text-lg font-medium">Transaction</h2>
          <button className="px-4 py-1.5 bg-primary text-white rounded-sm flex gap-2 items-center">
            Filter <Filter size={16} />
          </button>
        </div>

        <table className="w-full">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="text-sm text-gray-500 font-medium text-start">No</th>
              <th className="text-sm text-gray-500 font-medium text-start">Order Id</th>
              <th className="text-sm text-gray-500 font-medium text-start">Order Date</th>
              <th className="text-sm text-gray-500 font-medium text-start">Status</th>
              <th className="text-sm text-gray-500 font-medium text-start">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.list?.map((t, index)=>(
              <tr>
                <td className="text-sm text-gray-700 font-medium py-2">{index + 1}.</td>
                <td className="text-sm text-gray-700 font-medium py-2">{t.id}</td>
                <td className="text-sm text-gray-700 font-medium py-2">{t.orderDate}</td>
                <td className="text-sm text-gray-700 font-medium py-2">{t.status}</td>
                <td className="text-sm text-gray-700 font-medium py-2">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="col-span-12 lg:col-span-4 bg-white rounded-lg p-4 shadow-sm min-h-80">
         <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 text-lg font-medium">Top Products</h2>
          <Link to="/admin/products">All product</Link>
        </div>
      </div>

      {/* Best Selling + Add New  */}
      <div class="col-span-12 lg:col-span-8 bg-white rounded-lg p-4 shadow-sm min-h-80">
        Best Selling Product
      </div>

      <div class="col-span-12 lg:col-span-4 bg-white rounded-lg p-4 shadow-sm min-h-80">
        Add New Product
      </div>
    </div>
  );
};

export default Dashboard;
