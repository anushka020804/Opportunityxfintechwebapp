import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { CheckCircle2, Sparkles, User } from "lucide-react";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Illustration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur-2xl"
            />
            
            {/* Main Circle */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>

            {/* Floating Sparkles */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-amber-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to Qistonpe
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Your business is ready to discover tenders
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go to Dashboard</span>
          </button>

          <button
            onClick={() => navigate("/complete-profile")}
            className="bg-white text-indigo-600 px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-indigo-200 flex items-center justify-center gap-2 group"
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Complete Profile</span>
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 p-6 bg-white rounded-xl shadow-md border border-gray-100"
        >
          <p className="text-sm text-gray-600 mb-3">What's Next?</p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Browse Tenders</p>
                <p className="text-xs text-gray-600">Discover relevant opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">AI Analysis</p>
                <p className="text-xs text-gray-600">Get smart bid insights</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Generate Bids</p>
                <p className="text-xs text-gray-600">Create winning proposals</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
