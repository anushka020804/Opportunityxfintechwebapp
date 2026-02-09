import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { 
  Search, 
  Filter, 
  ArrowLeft, 
  Calendar,
  IndianRupee,
  Building2,
  TrendingUp,
  AlertCircle,
  Clock,
  MapPin,
  ChevronDown,
  Zap,
  BarChart3,
  TrendingDown,
  FileText
} from "lucide-react";

interface Tender {
  id: string;
  tenderNumber: string;
  buyerName: string;
  organization: string;
  ministry: string;
  location: string;
  quantity: string;
  tenderValue: string;
  submissionDate: string;
  postedDate: string;
  timeAgo: string;
  status: "past-24hrs" | "active" | "closing-soon" | "expired";
  category: string;
  matchPercentage: number;
}

export function TenderListing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>("past-24hrs");
  const [selectedMinistry, setSelectedMinistry] = useState<string>("all");
  const [selectedBuyer, setSelectedBuyer] = useState<string>("all");
  const [showDailySummary, setShowDailySummary] = useState(false);

  const tenders: Tender[] = [
    // Past 24 Hours Tenders
    {
      id: "1",
      tenderNumber: "TND-001",
      buyerName: "Karnataka Public Works Department",
      organization: "Karnataka PWD",
      ministry: "Ministry of Road Transport & Highways",
      location: "Karnataka",
      quantity: "5000 units",
      tenderValue: "₹45,00,000",
      submissionDate: "Feb 15, 2026",
      postedDate: "Feb 9, 2026",
      timeAgo: "2 hours ago",
      status: "past-24hrs",
      category: "Industrial Valves",
      matchPercentage: 95
    },
    {
      id: "2",
      tenderNumber: "TND-002",
      buyerName: "Indian Railways - Western Zone",
      organization: "Railway Board",
      ministry: "Ministry of Railways",
      location: "Pan India",
      quantity: "2500 units",
      tenderValue: "₹35,00,000",
      submissionDate: "Feb 20, 2026",
      postedDate: "Feb 9, 2026",
      timeAgo: "8 hours ago",
      status: "past-24hrs",
      category: "Railway Equipment",
      matchPercentage: 88
    },
    // Active Tenders - Ministry of Road Transport
    {
      id: "3",
      tenderNumber: "TND-003",
      buyerName: "National Highways Authority of India",
      organization: "NHAI",
      ministry: "Ministry of Road Transport & Highways",
      location: "Maharashtra",
      quantity: "10000 units",
      tenderValue: "₹82,50,000",
      submissionDate: "Feb 12, 2026",
      postedDate: "Feb 5, 2026",
      timeAgo: "4 days ago",
      status: "active",
      category: "Steel Fasteners",
      matchPercentage: 92
    },
    // Active Tenders - Ministry of Urban Affairs
    {
      id: "4",
      tenderNumber: "TND-004",
      buyerName: "Delhi Metro Rail Corporation",
      organization: "DMRC",
      ministry: "Ministry of Housing & Urban Affairs",
      location: "Delhi NCR",
      quantity: "7500 units",
      tenderValue: "₹62,00,000",
      submissionDate: "Feb 18, 2026",
      postedDate: "Feb 6, 2026",
      timeAgo: "3 days ago",
      status: "active",
      category: "Industrial Valves",
      matchPercentage: 85
    },
    // Closing Soon
    {
      id: "5",
      tenderNumber: "TND-005",
      buyerName: "Gujarat Road Development Corporation",
      organization: "GRDC",
      ministry: "Ministry of Road Transport & Highways",
      location: "Gujarat",
      quantity: "3500 units",
      tenderValue: "₹28,50,000",
      submissionDate: "Feb 10, 2026",
      postedDate: "Jan 20, 2026",
      timeAgo: "20 days ago",
      status: "closing-soon",
      category: "Pipeline Fittings",
      matchPercentage: 78
    },
    // Expired
    {
      id: "6",
      tenderNumber: "TND-006",
      buyerName: "Maharashtra State Electricity Board",
      organization: "MSEB",
      ministry: "Ministry of Power",
      location: "Maharashtra",
      quantity: "3000 units",
      tenderValue: "₹28,00,000",
      submissionDate: "Feb 5, 2026",
      postedDate: "Jan 15, 2026",
      timeAgo: "25 days ago",
      status: "expired",
      category: "Electrical Components",
      matchPercentage: 82
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "past-24hrs":
        return { label: "New (24hrs)", bg: "bg-green-100", text: "text-green-700", border: "border-green-200" };
      case "active":
        return { label: "Active", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" };
      case "closing-soon":
        return { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" };
      case "expired":
        return { label: "Expired", bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" };
      default:
        return { label: "Unknown", bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" };
    }
  };

  // Get unique ministries and buyers
  const ministries = ["all", ...Array.from(new Set(tenders.map(t => t.ministry)))];
  const buyers = ["all", ...Array.from(new Set(tenders.map(t => t.organization)))];

  // Filter tenders
  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = tender.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.buyerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.tenderNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || tender.status === selectedStatus;
    const matchesMinistry = selectedMinistry === "all" || tender.ministry === selectedMinistry;
    const matchesBuyer = selectedBuyer === "all" || tender.organization === selectedBuyer;
    
    return matchesSearch && matchesStatus && matchesMinistry && matchesBuyer;
  });

  // Daily Summary Stats
  const past24HoursTenders = tenders.filter(t => t.status === "past-24hrs");
  const totalValue24hrs = past24HoursTenders.reduce((sum, t) => 
    sum + parseFloat(t.tenderValue.replace(/[₹,]/g, "")), 0
  );
  const avgMatchPercentage = past24HoursTenders.length > 0
    ? past24HoursTenders.reduce((sum, t) => sum + t.matchPercentage, 0) / past24HoursTenders.length
    : 0;
  const topMinistry = past24HoursTenders.length > 0
    ? past24HoursTenders.reduce((acc, t) => {
        acc[t.ministry] = (acc[t.ministry] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    : {};
  const mostActiveMinistry = Object.entries(topMinistry).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  useEffect(() => {
    // Check if filter is passed from navigation
    if (location.state && location.state.filter) {
      setSelectedStatus(location.state.filter as string);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Browse Tenders
              </h1>
              <p className="text-sm text-gray-600">{filteredTenders.length} tenders available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by category, buyer, or tender number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">{showFilters ? "Hide Filters" : "Show Filters"}</span>
          </button>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-4"
            >
              {/* Status Filter */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Filter by Date</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setSelectedStatus("all");
                      setShowDailySummary(false);
                    }}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedStatus === "all"
                        ? "bg-indigo-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Tenders
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus("past-24hrs");
                      setShowDailySummary(false);
                    }}
                    className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                      selectedStatus === "past-24hrs"
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    Past 24 Hours
                  </button>
                  <button
                    onClick={() => setSelectedStatus("active")}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedStatus === "active"
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setSelectedStatus("closing-soon")}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedStatus === "closing-soon"
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Closing Soon
                  </button>
                  <button
                    onClick={() => setSelectedStatus("expired")}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedStatus === "expired"
                        ? "bg-gray-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Expired
                  </button>
                </div>
              </div>

              {/* Daily Summary Button - Only show when Past 24 Hours is selected */}
              {selectedStatus === "past-24hrs" && (
                <div>
                  <button
                    onClick={() => setShowDailySummary(!showDailySummary)}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all shadow-md flex items-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    {showDailySummary ? "Hide" : "Show"} Daily Summary
                  </button>
                </div>
              )}

              {/* Ministry Filter */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Filter by Ministry</label>
                <div className="relative">
                  <select
                    value={selectedMinistry}
                    onChange={(e) => setSelectedMinistry(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none pr-10"
                  >
                    <option value="all">All Ministries</option>
                    {ministries.filter(m => m !== "all").map(ministry => (
                      <option key={ministry} value={ministry}>{ministry}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Buyer Filter */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Filter by Buyer</label>
                <div className="relative">
                  <select
                    value={selectedBuyer}
                    onChange={(e) => setSelectedBuyer(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none pr-10"
                  >
                    <option value="all">All Buyers</option>
                    {buyers.filter(b => b !== "all").map(buyer => (
                      <option key={buyer} value={buyer}>{buyer}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Daily Summary Section */}
        {showDailySummary && selectedStatus === "past-24hrs" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl shadow-2xl p-8 mb-6 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl">Daily Summary</h2>
                  <p className="text-blue-100 text-sm">Past 24 hours insights</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* New Tenders */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-100" />
                    <p className="text-blue-100 text-sm">Past 24 Hours</p>
                  </div>
                  <p className="text-4xl">{past24HoursTenders.length}</p>
                  <p className="text-xs text-blue-100 mt-1">Posted today</p>
                </div>

                {/* Total Value */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="w-5 h-5 text-blue-100" />
                    <p className="text-blue-100 text-sm">Total Value</p>
                  </div>
                  <p className="text-4xl">₹{(totalValue24hrs / 100000).toFixed(1)}L</p>
                  <p className="text-xs text-blue-100 mt-1">Combined worth</p>
                </div>

                {/* Average Match */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-100" />
                    <p className="text-blue-100 text-sm">Avg Match</p>
                  </div>
                  <p className="text-4xl">{avgMatchPercentage.toFixed(0)}%</p>
                  <p className="text-xs text-blue-100 mt-1">Your compatibility</p>
                </div>

                {/* Top Ministry */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-blue-100" />
                    <p className="text-blue-100 text-sm">Top Ministry</p>
                  </div>
                  <p className="text-lg leading-tight">{mostActiveMinistry.replace("Ministry of ", "")}</p>
                  <p className="text-xs text-blue-100 mt-1">Most active</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tender Cards */}
        <div className="space-y-6">
          {filteredTenders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
              <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">No tenders found</p>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          ) : (
            filteredTenders.map((tender, index) => {
              const statusConfig = getStatusConfig(tender.status);
              return (
                <motion.div
                  key={tender.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 ${statusConfig.bg} ${statusConfig.text} text-xs rounded-full border ${statusConfig.border}`}>
                          {statusConfig.label}
                        </span>
                        {tender.status === "past-24hrs" && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {tender.timeAgo}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 font-mono">{tender.tenderNumber}</span>
                      </div>
                      <h3 className="text-xl mb-2">{tender.category}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{tender.buyerName}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">{tender.matchPercentage}% Match</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Contract Value</p>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4 text-gray-700" />
                        <p className="text-sm">{tender.tenderValue}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Quantity</p>
                      <p className="text-sm">{tender.quantity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-700" />
                        <p className="text-sm">{tender.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Submission Date</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-700" />
                        <p className="text-sm">{tender.submissionDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ministry */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm text-indigo-700">{tender.ministry}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => navigate(`/eligibility/${tender.id}`)}
                    className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Check Eligibility</span>
                  </button>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}