import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Mail, Phone, Check } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const handleSendOTP = () => {
    if (!identifier.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowOTP(true);
    }, 800);
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOTP = () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) return;

    setVerifying(true);
    // Simulate verification
    setTimeout(() => {
      setVerifying(false);
      navigate("/verify-business");
    }, 1000);
  };

  const isEmail = identifier.includes("@");
  const isValidIdentifier = identifier.trim().length > 0 && (
    isEmail ? identifier.includes(".") : identifier.length >= 10
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
            OpportunityX
          </h1>
          <p className="text-gray-600">Sign in to discover tenders</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <h2 className="text-2xl mb-6 text-gray-900">Welcome Back</h2>

          {/* Email/Mobile Input */}
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Email or Mobile Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && isValidIdentifier && !showOTP && handleSendOTP()}
                placeholder="Enter email or mobile number"
                disabled={showOTP}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {identifier && (isEmail ? <Mail className="w-5 h-5 text-gray-400" /> : <Phone className="w-5 h-5 text-gray-400" />)}
              </div>
            </div>
          </div>

          {/* Send OTP Button */}
          {!showOTP && (
            <motion.button
              onClick={handleSendOTP}
              disabled={!isValidIdentifier || isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              whileHover={{ scale: isValidIdentifier ? 1.02 : 1 }}
              whileTap={{ scale: isValidIdentifier ? 0.98 : 1 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send OTP</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          )}

          {/* OTP Verification Section */}
          <AnimatePresence>
            {showOTP && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm text-gray-700">
                      Enter OTP
                    </label>
                    <button
                      onClick={() => {
                        setShowOTP(false);
                        setOtp(["", "", "", "", "", ""]);
                      }}
                      className="text-xs text-indigo-600 hover:text-indigo-700"
                    >
                      Change Number
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Sent to {identifier}
                  </p>

                  {/* OTP Input Boxes */}
                  <div className="flex gap-2 justify-between mb-4">
                    {otp.map((digit, index) => (
                      <motion.input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOTPChange(index, e.target.value.replace(/[^0-9]/g, ""))}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="w-full aspect-square text-center text-2xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    ))}
                  </div>

                  {/* Resend OTP */}
                  <div className="text-center">
                    <button
                      onClick={handleSendOTP}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      Didn't receive? <span className="text-indigo-600">Resend OTP</span>
                    </button>
                  </div>
                </div>

                {/* Verify OTP Button */}
                <motion.button
                  onClick={handleVerifyOTP}
                  disabled={otp.join("").length !== 6 || verifying}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  whileHover={{ scale: otp.join("").length === 6 ? 1.02 : 1 }}
                  whileTap={{ scale: otp.join("").length === 6 ? 0.98 : 1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {verifying ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Verify OTP</span>
                      <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            ← Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
