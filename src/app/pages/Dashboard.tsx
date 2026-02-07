import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Sparkles, 
  FileText, 
  TrendingUp, 
  Search, 
  Bookmark, 
  User,
  Eye,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function Dashboard() {
  const navigate = useNavigate();

  // Profile completion data - read from localStorage
  const [uploadedCount, setUploadedCount] = useState(2);
  const [totalDocuments, setTotalDocuments] = useState(5);

  useEffect(() => {
    // Read from localStorage
    const saved = localStorage.getItem('profileUploadedCount');
    const total = localStorage.getItem('profileTotalDocuments');
    if (saved) setUploadedCount(parseInt(saved));
    if (total) setTotalDocuments(parseInt(total));

    // Listen for storage changes (when user navigates back from CompleteProfile)
    const handleStorageChange = () => {
      const saved = localStorage.getItem('profileUploadedCount');
      const total = localStorage.getItem('profileTotalDocuments');
      if (saved) setUploadedCount(parseInt(saved));
      if (total) setTotalDocuments(parseInt(total));
    };

    window.addEventListener('storage', handleStorageChange);
    // Also check on focus (when user returns to this tab)
    window.addEventListener('focus', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleStorageChange);
    };
  }, []);

  const profileCompletion = Math.round((uploadedCount / totalDocuments) * 100);
  const chartData = [
    { name: "Completed", value: profileCompletion },
    { name: "Remaining", value: 100 - profileCompletion },
  ];
  const COLORS = ['#4F46E5', '#E5E7EB']; // Indigo for completed, Gray for remaining

  const kpiCards = [
    { 
      title: "Live Tenders", 
      value: "47", 
      icon: TrendingUp, 
      gradient: "from-indigo-500 to-blue-500",
      action: () => navigate("/tenders")
    },
    { 
      title: "Analyze Tenders", 
      value: "12", 
      icon: Search, 
      gradient: "from-purple-500 to-pink-500",
      action: () => navigate("/tenders")
    },
    { 
      title: "Generated Bid Docs", 
      value: "8", 
      icon: FileText, 
      gradient: "from-amber-500 to-orange-500",
      action: () => navigate("/saved-bids")
    },
    { 
      title: "Won Bids", 
      value: "3", 
      icon: CheckCircle2, 
      gradient: "from-green-500 to-emerald-500",
      action: () => navigate("/won-bids")
    },
  ];

  const recentActivities = [
    {
      id: "1",
      type: "match",
      icon: Sparkles,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      title: "New tender matched",
      description: "Industrial Valves - Karnataka PWD",
      time: "2 hours ago",
      actionText: "View Tender",
      action: () => navigate("/tenders")
    },
    {
      id: "2",
      type: "view",
      icon: Eye,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      title: "Bid viewed",
      description: "Steel Fasteners Supply - NHAI",
      time: "5 hours ago",
      actionText: "Open Bid",
      action: () => navigate("/saved-bids")
    },
    {
      id: "3",
      type: "pending",
      icon: AlertCircle,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      title: "Documents pending",
      description: "Complete your profile for better matches",
      time: "1 day ago",
      actionText: "Upload",
      action: () => navigate("/complete-profile")
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              OpportunityX
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate("/tenders")}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                My Tenders
              </button>
              <button 
                onClick={() => navigate("/saved-bids")}
                className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Saved Bids
              </button>
              <button
                onClick={() => navigate("/tenders")}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                New Tenders
              </button>
              <button
                onClick={() => navigate("/profile")}
                className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Profile
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white">AS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl mb-2">Welcome back, Acme Solutions</h2>
          <p className="text-gray-600">Here's what's happening with your tenders today</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={card.action}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{card.title}</p>
              <p className="text-4xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity - Timeline Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl">Recent Activity</h3>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={activity.action}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all cursor-pointer border border-transparent hover:border-indigo-100"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 ${activity.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {activity.title}
                      </p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                    <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      {activity.actionText} →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <h3 className="text-xl mb-6">Quick Actions</h3>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/tenders")}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Browse Tenders</span>
              </button>

              <button
                onClick={() => navigate("/complete-profile")}
                className="w-full bg-white text-indigo-600 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all border border-indigo-200 flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                <span>Complete Profile</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Profile Completion</p>
                  <p className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {profileCompletion}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{uploadedCount} of {totalDocuments} documents</p>
                </div>
                <div className="relative w-24 h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={42}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      {profileCompletion}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                <p className="text-sm text-gray-900 mb-1">Need working capital?</p>
                <p className="text-xs text-gray-600 mb-3">Boost your bidding power with Metal Capital</p>
                <button
                  onClick={() => navigate("/")}
                  className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}