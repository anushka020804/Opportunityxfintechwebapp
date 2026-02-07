import { useState } from "react";
import { useNavigate } from "react-router";
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
  X
} from "lucide-react";

interface Tender {
  id: string;
  tenderNumber: string;
  buyerName: string;
  organization: string;
  quantity: string;
  tenderValue: string;
  submissionDate: string;
  status: "new" | "active" | "closing-soon" | "expired";
  category: string;
}

export function TenderListing() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const tenders: Tender[] = [
    {
      id: "1",
      tenderNumber: "TND-001",
      buyerName: "Karnataka Public Works Department",
      organization: "Karnataka PWD",
      quantity: "5000 units",
      tenderValue: "₹45,00,000",
      submissionDate: "Feb 15, 2026",
      status: "new",
      category: "Industrial Valves"
    },
    {
      id: "2",
      tenderNumber: "TND-002",
      buyerName: "National Highways Authority of India",
      organization: "NHAI",
      quantity: "10000 units",
      tenderValue: "₹82,50,000",
      submissionDate: "Feb 12, 2026",
      status: "closing-soon",
      category: "Steel Fasteners"
    },
    {
      id: "3",
      tenderNumber: "TND-003",
      buyerName: "Indian Railways",
      organization: "Railway Board",
      quantity: "2500 units",
      tenderValue: "₹35,00,000",
      submissionDate: "Feb 20, 2026",
      status: "active",
      category: "Railway Equipment"
    },
    {
      id: "4",
      tenderNumber: "TND-004",
      buyerName: "Delhi Metro Rail Corporation",
      organization: "DMRC",
      quantity: "7500 units",
      tenderValue: "₹62,00,000",
      submissionDate: "Feb 18, 2026",
      status: "active",
      category: "Industrial Valves"
    },
    {
      id: "5",
      tenderNumber: "TND-005",
      buyerName: "Maharashtra State Electricity Board",
      organization: "MSEB",
      quantity: "3000 units",
      tenderValue: "₹28,00,000",
      submissionDate: "Feb 5, 2026",
      status: "expired",
      category: "Electrical Components"
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "new":
        return { label: "New", bg: "bg-green-100", text: "text-green-700", border: "border-green-200" };
      case "active":
        return { label: "Active", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" };
      case "closing-soon":
        return { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" };
      case "expired":
        return { label: "Expired", bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" };
      default:
        return { label: "Active", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" };
    }
  };

  const filteredTenders = tenders.filter((tender) => {
    const matchesSearch = 
      tender.buyerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === "all" || tender.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

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
            <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Browse Tenders
            </h1>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>{showFilters ? "Hide" : "Show"} Filters</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg">Filters</h3>
                  <button
                    onClick={() => {
                      setSelectedStatus("all");
                    }}
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    Clear All
                  </button>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-sm text-gray-700 mb-3 block">Status</label>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All" },
                      { value: "new", label: "New" },
                      { value: "active", label: "Active" },
                      { value: "closing-soon", label: "Closing Soon" },
                      { value: "expired", label: "Expired" }
                    ].map((status) => (
                      <label key={status.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          checked={selectedStatus === status.value}
                          onChange={() => setSelectedStatus(status.value)}
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-900">{status.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tender List */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tenders by buyer, organization, or category..."
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="text-indigo-600">{filteredTenders.length}</span> tenders
              </p>
            </div>

            {/* Tender Cards */}
            <div className="space-y-4">
              {filteredTenders.map((tender, index) => {
                const statusConfig = getStatusConfig(tender.status);
                return (
                  <motion.div
                    key={tender.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200">
                                {tender.tenderNumber}
                              </span>
                            </div>
                            <h3 className="text-lg text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                              {tender.buyerName}
                            </h3>
                            <p className="text-sm text-gray-600">{tender.organization}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border} text-xs whitespace-nowrap`}>
                        {statusConfig.label}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Category</p>
                        <p className="text-sm text-gray-900">{tender.category}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Quantity</p>
                        <p className="text-sm text-gray-900">{tender.quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Tender Value</p>
                        <p className="text-sm text-gray-900 flex items-center gap-1">
                          <IndianRupee className="w-3 h-3" />
                          {tender.tenderValue}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Submission Date</p>
                        <p className="text-sm text-gray-900 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {tender.submissionDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {tender.status === "closing-soon" && (
                          <>
                            <AlertCircle className="w-4 h-4 text-amber-600" />
                            <span className="text-amber-600">Closing in 2-3 days</span>
                          </>
                        )}
                        {tender.status === "new" && (
                          <>
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Not yet open for bidding</span>
                          </>
                        )}
                        {tender.status === "active" && (
                          <>
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600">Open for bidding</span>
                          </>
                        )}
                        {tender.status === "expired" && (
                          <>
                            <AlertCircle className="w-4 h-4 text-gray-600" />
                            <span className="text-gray-600">Bidding closed</span>
                          </>
                        )}
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/tender/${tender.id}`);
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all text-sm shadow-md hover:shadow-lg"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredTenders.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">No tenders found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}