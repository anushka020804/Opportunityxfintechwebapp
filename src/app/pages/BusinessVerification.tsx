import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Building2, CheckCircle2, Loader2 } from "lucide-react";

export function BusinessVerification() {
  const navigate = useNavigate();
  const [pan, setPan] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [companyData, setCompanyData] = useState<any>(null);

  const handlePanChange = (value: string) => {
    setPan(value.toUpperCase());
    
    // Simulate auto-fetch when PAN is complete (10 characters)
    if (value.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        setCompanyData({
          companyName: "Acme Solutions Private Limited",
          gstNumber: "29AABCU9603R1ZX",
          establishmentYear: "2018",
          address: "Plot No. 42, Electronic City Phase 1, Bangalore, Karnataka - 560100",
        });
        setIsLoading(false);
      }, 1500);
    } else {
      setCompanyData(null);
    }
  };

  const handleContinue = () => {
    if (pan.length === 10 && companyData) {
      navigate("/hsn-setup");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            OpportunityX
          </h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="text-sm text-indigo-600">Business Verification</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-sm text-gray-500">HSN Setup</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="text-sm text-gray-500">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2">Verify Your Business</h2>
            <p className="text-gray-600">Let's get your company details to get started</p>
          </div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: Fetched Company Data */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl">Company Information</h3>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                  <p className="text-gray-600">Fetching company details...</p>
                </div>
              ) : companyData ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Company Name</label>
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-900">{companyData.companyName}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">GST Number</label>
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-900">{companyData.gstNumber}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Establishment Year</label>
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-900">{companyData.establishmentYear}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Address</label>
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-900">{companyData.address}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600">Enter your Business PAN to fetch details</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* RIGHT: Input Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-xl mb-6">Business Details</h3>

              <div className="space-y-5">
                {/* Required: Business PAN */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block flex items-center gap-1">
                    Business PAN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={pan}
                    onChange={(e) => handlePanChange(e.target.value)}
                    placeholder="AABCU9603R"
                    maxLength={10}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter 10-character PAN number</p>
                </div>

                {/* Optional Fields */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Owner Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Email <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@acmesolutions.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Mobile <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={handleContinue}
              disabled={!companyData || pan.length !== 10}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              Continue to HSN Setup
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
