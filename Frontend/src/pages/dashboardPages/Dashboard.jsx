/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faX,
  faDollarSign,
  faGavel,
  faCheckCircle,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?.id;

  useEffect(() => {
    if (!userId) return; // Don't fetch if no user

    fetch("http://localhost:5000/api/dashboard/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDashboardData(data.data);
        }
      })
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, [userId]);

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  const { auctions, dash, tables, charts } = dashboardData;

  const categoryColors = {
    "Art and Antiques": "#8B4513",
    "Fashion and Accessories": "#E91E63",
    "Home and Garden": "#4CAF50",
    "Electronics and Gadgets": "#00BCD4",
    Vehicles: "#FF5722",
    Collectibles: "#9C27B0",
    "Sports and Outdoors": "#009688",
    "Toys and Games": "#FFEB3B",
    "Books and Media": "#795548",
    Photography: "#607D8B",
    "Crafts and Hobbies": "#FFC107",
    "Real Estate": "#3F51B5",
    "Wine and Spirits": "#8D2828",
    "Tickets and Experiences": "#FF9800",
    "Health and Beauty": "#E91E63",
  };

  const pieChartData = {
    labels: charts.auctionCategories.map((c) => c.category),
    datasets: [
      {
        data: charts.auctionCategories.map((c) => c.count),
        backgroundColor: charts.auctionCategories.map(
          (c) => categoryColors[c.category] || "#333"
        ),
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const barChartData = {
    labels: charts.auctionTrends.map((t) => t.category),
    datasets: [
      {
        label: "Number of Auctions",
        data: charts.auctionTrends.map((t) => t.count),
        backgroundColor: charts.auctionTrends.map(
          (t) => categoryColors[t.category] || "#333"
        ),
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  const getStatusPill = (status) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";
    switch (status.toLowerCase()) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "live":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "closed":
        return `${baseClasses} bg-red-100 text-red-800`;
      case "paid":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const kpiCards = [
    {
      title: "Total Auctions",
      value: auctions.totalAuctions,
      icon: faBoxArchive,
      color: "text-blue-500",
    },
    {
      title: "Active Bids",
      value: dash.activeBids,
      icon: faGavel,
      color: "text-green-500",
    },
    {
      title: "Auction Income",
      value: `$${dash.totalAuctionIncome}`,
      icon: faDollarSign,
      color: "text-indigo-500",
    },
    {
      title: "Completed Auctions",
      value: dash.completedAuctions,
      icon: faCheckCircle,
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 mt-1">
            Welcome back, {currentUser?.name || "User"}! Here's your performance
            overview.
          </p>
        </div>
        <Link
          to="/create-auction"
          className="bg-sky-600 text-white py-2 px-5 rounded-lg hover:bg-sky-700 transition-colors font-semibold shadow-sm"
        >
          Create Auction
        </Link>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card) => (
          <div
            key={card.title}
            className="bg-white p-5 rounded-xl shadow-sm flex items-center space-x-4"
          >
            <div className={`p-3 rounded-full bg-slate-100 ${card.color}`}>
              <FontAwesomeIcon icon={card.icon} className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">
                {card.title}
              </h2>
              <p className="text-2xl font-bold text-slate-800">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Auction Trends
          </h2>
          <div className="h-80">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Auction Categories
          </h2>
          <div className="h-80 flex items-center justify-center">
            {charts.auctionCategories.length > 0 ? (
              <Doughnut
                data={pieChartData}
                options={{ plugins: { legend: { position: "right" } } }}
              />
            ) : (
              <p className="text-gray-500">No category data available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Latest Auctions Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 uppercase">
                <tr>
                  <th className="p-3">Auction</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Bids</th>
                  <th className="p-3 text-center">Winner</th>
                </tr>
              </thead>
              <tbody>
                {tables.auctionOverview.map(({ auction, bidCount }) => (
                  <tr
                    key={auction.auctionId}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-3 font-medium text-slate-800 hover:text-sky-600">
                      <Link to={`/auction/${auction.auctionId}`}>
                        {auction.title}
                      </Link>
                    </td>
                    <td className="p-3">
                      <span className={getStatusPill(auction.status)}>
                        {auction.status}
                      </span>
                    </td>
                    <td className="p-3">{bidCount}</td>
                    <td className="p-3 text-center">
                      {auction.winnerId ? (
                        <FontAwesomeIcon
                          icon={faCrown}
                          className="text-yellow-500"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faX} className="text-red-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {tables.activities.slice(0, 5).map((activity) => (
              <li key={activity.id}>
                <Link
                  to={activity.link}
                  className="block hover:bg-slate-50 p-2 rounded-lg"
                >
                  <p className="font-semibold text-slate-700">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600">{activity.message}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(activity.createdAt).toLocaleString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
