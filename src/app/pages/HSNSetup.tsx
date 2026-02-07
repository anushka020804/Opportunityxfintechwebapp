import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Plus, Edit2, Trash2, Check, X, Mail, MessageCircle } from "lucide-react";

interface HSNRow {
  id: string;
  hsnCode: string;
  productKeyword: string;
}

export function HSNSetup() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<HSNRow[]>([
    { id: "1", hsnCode: "7326", productKeyword: "Steel Fasteners" },
    { id: "2", hsnCode: "8481", productKeyword: "Industrial Valves" },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editHsn, setEditHsn] = useState("");
  const [editKeyword, setEditKeyword] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [whatsappNotif, setWhatsappNotif] = useState(true);

  const handleAddRow = () => {
    const newRow: HSNRow = {
      id: Date.now().toString(),
      hsnCode: "",
      productKeyword: "",
    };
    setRows([...rows, newRow]);
    setEditingId(newRow.id);
    setEditHsn("");
    setEditKeyword("");
  };

  const handleEdit = (row: HSNRow) => {
    setEditingId(row.id);
    setEditHsn(row.hsnCode);
    setEditKeyword(row.productKeyword);
  };

  const handleSave = (id: string) => {
    setRows(rows.map((row) => 
      row.id === id ? { ...row, hsnCode: editHsn, productKeyword: editKeyword } : row
    ));
    setEditingId(null);
  };

  const handleCancel = (id: string) => {
    // If it's a new row with no data, remove it
    const row = rows.find((r) => r.id === id);
    if (row && !row.hsnCode && !row.productKeyword) {
      setRows(rows.filter((r) => r.id !== id));
    }
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSubmit = () => {
    navigate("/welcome");
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
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-sm text-green-600">Business Verification</span>
            </div>
            <div className="w-16 h-0.5 bg-indigo-600" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-sm text-indigo-600">HSN Setup</span>
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
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2">HSN & Product Setup</h2>
            <p className="text-gray-600">Add HSN codes and product keywords to match relevant tenders</p>
          </div>

          {/* HSN Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm text-gray-700">HSN Code</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-700">Product Keyword</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr 
                      key={row.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        {editingId === row.id ? (
                          <input
                            type="text"
                            value={editHsn}
                            onChange={(e) => setEditHsn(e.target.value)}
                            placeholder="7326"
                            className="w-full px-3 py-2 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            autoFocus
                          />
                        ) : (
                          <span className="text-gray-900">{row.hsnCode}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editingId === row.id ? (
                          <input
                            type="text"
                            value={editKeyword}
                            onChange={(e) => setEditKeyword(e.target.value)}
                            placeholder="Steel Fasteners"
                            className="w-full px-3 py-2 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        ) : (
                          <span className="text-gray-900">{row.productKeyword}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          {editingId === row.id ? (
                            <>
                              <button
                                onClick={() => handleSave(row.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="Save"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleCancel(row.id)}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Cancel"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleEdit(row)}
                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(row.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Row Button */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button
                onClick={handleAddRow}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add Row</span>
              </button>
            </div>
          </motion.div>

          {/* Notification Preferences Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6"
          >
            <h3 className="text-xl mb-2">Notification Preferences</h3>
            <p className="text-gray-600 mb-6">Get alerts for relevant tenders</p>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={emailNotif}
                  onChange={(e) => setEmailNotif(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-900">Email</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={whatsappNotif}
                  onChange={(e) => setWhatsappNotif(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">WhatsApp</span>
                </div>
              </label>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
