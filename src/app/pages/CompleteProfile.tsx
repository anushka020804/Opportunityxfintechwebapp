import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Upload, FileText, CheckCircle2, Clock, ArrowLeft } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Document {
  id: string;
  name: string;
  status: "uploaded" | "pending";
}

export function CompleteProfile() {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Document[]>([
    { id: "1", name: "Company Registration", status: "uploaded" },
    { id: "2", name: "GST Certificate", status: "uploaded" },
    { id: "3", name: "PAN", status: "pending" },
    { id: "4", name: "Financial Docs", status: "pending" },
    { id: "5", name: "Compliance Docs", status: "pending" },
  ]);

  const uploadedCount = documents.filter((doc) => doc.status === "uploaded").length;
  const pendingCount = documents.length - uploadedCount;
  const completionPercentage = Math.round((uploadedCount / documents.length) * 100);

  // Save to localStorage whenever documents change
  useEffect(() => {
    localStorage.setItem('profileUploadedCount', uploadedCount.toString());
    localStorage.setItem('profileTotalDocuments', documents.length.toString());
  }, [uploadedCount, documents.length]);

  // Data for pie chart
  const chartData = [
    { name: "Completed", value: uploadedCount },
    { name: "Pending", value: pendingCount },
  ];

  const COLORS = ['#10B981', '#E5E7EB']; // Green for completed, Gray for pending

  const handleDocumentClick = (id: string) => {
    // Simulate upload
    setDocuments(documents.map((doc) =>
      doc.id === id ? { ...doc, status: "uploaded" as const } : doc
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Complete Profile
            </h1>
          </div>
          
          {/* Profile Completion */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Profile Completion</p>
              <p className="text-xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {completionPercentage}%
              </p>
              <p className="text-xs text-gray-500">{uploadedCount} of {documents.length} docs</p>
            </div>
            <div className="relative w-20 h-20">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={35}
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
                  {completionPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2">Document Upload</h2>
            <p className="text-gray-600">
              Upload your documents to complete your profile and unlock all features
            </p>
          </div>

          {/* Document Upload Grid - NON-SCROLLABLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => doc.status === "pending" && handleDocumentClick(doc.id)}
                className={`group relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                  doc.status === "uploaded"
                    ? "border-green-200 hover:border-green-300"
                    : "border-dashed border-indigo-300 hover:border-indigo-400 cursor-pointer hover:shadow-xl"
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {doc.status === "uploaded" ? (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Uploaded</span>
                    </div>
                  ) : (
                    <div className="bg-amber-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs shadow-md">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Pending</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex flex-col items-center text-center h-40 justify-center">
                    {doc.status === "uploaded" ? (
                      <>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-lg text-gray-900 mb-1">{doc.name}</h3>
                        <p className="text-sm text-green-600">Document uploaded</p>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                          <Upload className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-lg text-gray-900 mb-1">{doc.name}</h3>
                        <p className="text-sm text-gray-600">Click to upload</p>
                      </>
                    )}
                  </div>

                  {/* Drag & Drop Area */}
                  {doc.status === "pending" && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Drag & drop or click to browse
                      </p>
                    </div>
                  )}
                </div>

                {/* Hover Effect Background */}
                {doc.status === "pending" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Why upload these documents?</h4>
                <p className="text-sm text-gray-600">
                  These documents help us verify your business and ensure you meet tender eligibility requirements.
                  Complete your profile to get instant eligibility checks and faster bid generation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue to Dashboard
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}