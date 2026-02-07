import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { 
  ArrowLeft,
  Building2,
  Calendar,
  IndianRupee,
  MapPin,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
  Download,
  Share2,
  Bookmark,
  Sparkles,
  Award,
  Upload
} from "lucide-react";
import jsPDF from "jspdf";
import { useState } from "react";

export function TenderDetails() {
  const navigate = useNavigate();
  const { tenderId } = useParams();
  
  // State for tracking uploaded documents for each criterion
  const [uploadedCriteria, setUploadedCriteria] = useState<{ [key: string]: boolean }>({});

  // Handle document upload for eligibility criteria
  const handleDocumentUpload = (criteria: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png';
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Update uploaded criteria state
        setUploadedCriteria(prev => ({
          ...prev,
          [criteria]: true
        }));
        
        // If ISO certification is uploaded, save to localStorage
        if (criteria.toLowerCase().includes('iso')) {
          localStorage.setItem('isoUploaded', 'true');
        }
        
        alert(`${criteria} uploaded successfully!`);
      }
    };
    input.click();
  };

  // Tender data based on ID
  const getTenderData = (id: string | undefined) => {
    const tenderDatabase: { [key: string]: any } = {
      "1": {
        id: "1",
        title: "Industrial Valves Supply - Karnataka PWD",
        organization: "Karnataka Public Works Department",
        description: "Supply and installation of industrial valves for water distribution projects across Karnataka state. The project requires high-quality valves meeting IS standards with proper documentation and certification.",
        tenderValue: "₹45,00,000",
        estimatedValue: "₹40,00,000 - ₹50,00,000",
        publishDate: "Jan 28, 2026",
        submissionDeadline: "Feb 15, 2026",
        openingDate: "Feb 16, 2026",
        location: "Bangalore, Karnataka",
        matchScore: 92,
        category: "Industrial Equipment",
        sector: "Public Works",
        
        eligibilityCriteria: [
          { criteria: "Valid GST Registration", met: true },
          { criteria: "Minimum 3 years experience in valve supply", met: true },
          { criteria: "ISO 9001:2015 Certification", met: false },
          { criteria: "Previous government tender experience", met: true },
          { criteria: "Turnover of minimum ₹1 Crore in last FY", met: true },
        ],
        
        requiredDocuments: [
          "Company Registration Certificate",
          "GST Registration Certificate",
          "PAN Card",
          "ISO Certification (if available)",
          "Financial Statements (Last 3 Years)",
          "Previous Work Experience Certificates",
          "Technical Specifications Compliance",
        ],
        
        scopeOfWork: [
          "Supply of 500+ industrial valves (various sizes: 2\", 4\", 6\", 8\")",
          "Installation and commissioning at designated sites",
          "Testing and quality certification",
          "1-year warranty and maintenance support",
          "Training for PWD staff on valve operation",
        ],
        
        summary: "This tender involves the supply and installation of over 500 industrial valves for Karnataka's water distribution infrastructure. The project requires IS 14846:2000 compliant valves with cast iron or ductile iron bodies, suitable for PN 10/16 working pressure. The scope includes delivery, on-site installation, quality testing, and a 1-year warranty period. Payment will be structured in four phases: 30% advance, 40% on delivery, 20% post-installation, and 10% after warranty completion. Suppliers must demonstrate minimum 3 years of experience, hold valid GST registration, and show a turnover of at least ₹1 Crore in the previous fiscal year. ISO 9001:2015 certification is preferred. The successful bidder will also provide operational training to PWD staff.",
        
        contactInfo: {
          officer: "Executive Engineer",
          department: "Karnataka PWD - Water Resources Division",
          email: "ee.pwd.kr@gov.in",
          phone: "+91-80-2234-5678",
        }
      },
      "2": {
        id: "2",
        title: "Steel Fasteners Supply - NHAI",
        organization: "National Highways Authority of India",
        description: "Supply of high-grade steel fasteners for highway construction and maintenance projects. Requires ASTM A325 compliant bolts, nuts, and washers with proper testing certificates and quality documentation.",
        tenderValue: "₹82,50,000",
        estimatedValue: "₹75,00,000 - ₹90,00,000",
        publishDate: "Jan 25, 2026",
        submissionDeadline: "Feb 12, 2026",
        openingDate: "Feb 13, 2026",
        location: "New Delhi",
        matchScore: 88,
        category: "Construction Materials",
        sector: "Infrastructure",
        
        eligibilityCriteria: [
          { criteria: "Valid GST Registration", met: true },
          { criteria: "ISO 3506 material compliance certification", met: true },
          { criteria: "Minimum 5 years experience in fastener supply", met: true },
          { criteria: "NABL accredited testing lab reports", met: false },
          { criteria: "Turnover of minimum ₹2 Crore in last FY", met: true },
        ],
        
        requiredDocuments: [
          "Company Registration Certificate",
          "GST Registration Certificate",
          "Material Test Certificates",
          "ISO 3506 Compliance Certificate",
          "Financial Statements (Last 3 Years)",
          "Previous Supply Order Copies",
          "Manufacturing Facility Details",
        ],
        
        scopeOfWork: [
          "Supply of 10,000+ steel fasteners (M12 to M30 sizes)",
          "Hot-dip galvanized coating as per IS 2629",
          "Material testing and certification",
          "Packaging as per NHAI specifications",
          "Delivery to multiple project sites across North India",
        ],
        
        summary: "This tender covers the supply of high-strength steel fasteners for NHAI's highway construction projects across northern India. All fasteners must comply with ASTM A325 standards and be hot-dip galvanized per IS 2629. The order includes various bolt sizes from M12 to M30, complete with nuts and washers. Payment terms: 20% advance, 60% on delivery, 20% after installation verification. Suppliers must have minimum 5 years experience, NABL-accredited test reports, and demonstrate₹2 Crore turnover. Delivery timeline is 60 days from order placement.",
        
        contactInfo: {
          officer: "Project Director",
          department: "NHAI - Northern Region",
          email: "pd.north@nhai.gov.in",
          phone: "+91-11-2345-6789",
        }
      },
      "3": {
        id: "3",
        title: "Railway Equipment Supply - Indian Railways",
        organization: "Indian Railways",
        description: "Supply of specialized railway equipment including signal components, track fasteners, and safety devices for modernization of railway infrastructure across multiple zones.",
        tenderValue: "₹35,00,000",
        estimatedValue: "₹32,00,000 - ₹38,00,000",
        publishDate: "Jan 30, 2026",
        submissionDeadline: "Feb 20, 2026",
        openingDate: "Feb 21, 2026",
        location: "Mumbai, Maharashtra",
        matchScore: 85,
        category: "Railway Equipment",
        sector: "Transportation",
        
        eligibilityCriteria: [
          { criteria: "Valid GST Registration", met: true },
          { criteria: "RDSO approval for railway components", met: false },
          { criteria: "Minimum 4 years experience in railway supply", met: true },
          { criteria: "Previous railway tender completion", met: true },
          { criteria: "Turnover of minimum ₹1.5 Crore in last FY", met: true },
        ],
        
        requiredDocuments: [
          "Company Registration Certificate",
          "GST Registration Certificate",
          "RDSO Approval Certificate",
          "IS 2062 Material Compliance",
          "Financial Statements (Last 3 Years)",
          "Railway Project Experience Certificates",
          "Quality Management System Certificate",
        ],
        
        scopeOfWork: [
          "Supply of 2500+ railway equipment units",
          "Signal components meeting RDSO specifications",
          "Track fastening systems with rust-proof coating",
          "Installation support and technical guidance",
          "2-year warranty on all supplied equipment",
        ],
        
        summary: "This tender is for supplying specialized railway equipment to support Indian Railways' infrastructure modernization program. All components must meet RDSO specifications and IS 2062 material standards. The scope includes signal components, track fasteners, and safety devices. Payment schedule: 25% advance, 50% on delivery, 25% after successful installation and testing. Bidders must demonstrate railway supply experience, hold necessary RDSO approvals, and show financial capability with ₹1.5 Crore minimum turnover.",
        
        contactInfo: {
          officer: "Chief Engineer (Procurement)",
          department: "Indian Railways - Western Zone",
          email: "ce.western@indianrailways.gov.in",
          phone: "+91-22-2267-8901",
        }
      },
      "4": {
        id: "4",
        title: "Industrial Valves - Delhi Metro",
        organization: "Delhi Metro Rail Corporation",
        description: "Supply of pneumatic and hydraulic valves for metro station infrastructure including water supply systems, fire fighting systems, and HVAC controls across multiple metro stations.",
        tenderValue: "₹62,00,000",
        estimatedValue: "₹58,00,000 - ₹68,00,000",
        publishDate: "Jan 26, 2026",
        submissionDeadline: "Feb 18, 2026",
        openingDate: "Feb 19, 2026",
        location: "Delhi NCR",
        matchScore: 90,
        category: "Industrial Valves",
        sector: "Metro Infrastructure",
        
        eligibilityCriteria: [
          { criteria: "Valid GST Registration", met: true },
          { criteria: "CE marking on valves for safety compliance", met: true },
          { criteria: "Minimum 3 years experience in metro/subway projects", met: false },
          { criteria: "ISO 9001 and ISO 14001 certification", met: true },
          { criteria: "Turnover of minimum ₹2.5 Crore in last FY", met: true },
        ],
        
        requiredDocuments: [
          "Company Registration Certificate",
          "GST Registration Certificate",
          "CE Marking Certificates",
          "ISO 9001 & ISO 14001 Certificates",
          "Financial Statements (Last 3 Years)",
          "Metro Project Experience (if any)",
          "Product Catalogues and Technical Specifications",
        ],
        
        scopeOfWork: [
          "Supply of 7500+ pneumatic and hydraulic valves",
          "Valves suitable for working pressure up to 16 bar",
          "Installation at 12 metro stations",
          "Commissioning and performance testing",
          "3-year comprehensive warranty and AMC",
        ],
        
        summary: "DMRC requires high-quality pneumatic and hydraulic valves for water supply, fire protection, and HVAC systems across 12 metro stations. All valves must be CE marked and meet international safety standards. The scope includes supply, installation, testing, and 3-year maintenance. Payment terms: 30% advance, 40% on delivery, 20% after installation, 10% after warranty period. Minimum turnover requirement is ₹2.5 Crore. Metro project experience is preferred but not mandatory.",
        
        contactInfo: {
          officer: "General Manager (Civil)",
          department: "DMRC - Phase IV Projects",
          email: "gm.civil@delhimetrorail.com",
          phone: "+91-11-2341-2345",
        }
      },
      "5": {
        id: "5",
        title: "Electrical Components - MSEB",
        organization: "Maharashtra State Electricity Board",
        description: "Supply of electrical components including circuit breakers, transformers, and distribution equipment for power distribution network upgrades across Maharashtra.",
        tenderValue: "₹28,00,000",
        estimatedValue: "₹25,00,000 - ₹30,00,000",
        publishDate: "Jan 20, 2026",
        submissionDeadline: "Feb 8, 2026",
        openingDate: "Feb 9, 2026",
        location: "Mumbai, Maharashtra",
        matchScore: 78,
        category: "Electrical Components",
        sector: "Power Distribution",
        
        eligibilityCriteria: [
          { criteria: "Valid GST Registration", met: true },
          { criteria: "BIS certification for electrical products", met: false },
          { criteria: "Minimum 5 years experience in power sector", met: true },
          { criteria: "Previous MSEB supply experience", met: false },
          { criteria: "Turnover of minimum ₹1 Crore in last FY", met: true },
        ],
        
        requiredDocuments: [
          "Company Registration Certificate",
          "GST Registration Certificate",
          "BIS Certification (IS 13947)",
          "Type Test Certificates",
          "Financial Statements (Last 3 Years)",
          "Power Sector Experience Certificates",
          "Manufacturing Facility Inspection Report",
        ],
        
        scopeOfWork: [
          "Supply of 3000+ electrical components",
          "Circuit breakers rated 11kV and 33kV",
          "Distribution transformers (100kVA to 500kVA)",
          "Installation and commissioning support",
          "2-year warranty on all equipment",
        ],
        
        summary: "Note: This tender has expired. MSEB required electrical components for network upgrades including circuit breakers and transformers. All equipment needed BIS certification per IS 13947. Payment was structured as 20% advance, 60% on delivery, 20% post-commissioning. The tender closed on Feb 8, 2026.",
        
        contactInfo: {
          officer: "Superintending Engineer",
          department: "MSEB - Distribution Circle Mumbai",
          email: "se.distribution@mahadiscom.in",
          phone: "+91-22-2345-6789",
        }
      },
    };

    return tenderDatabase[id || "1"] || tenderDatabase["1"];
  };

  const tender = getTenderData(tenderId);

  const metCriteria = tender.eligibilityCriteria.filter(c => c.met).length;
  const totalCriteria = tender.eligibilityCriteria.length;

  // Calculate actual met criteria including uploaded documents
  const actualMetCriteria = metCriteria + Object.values(uploadedCriteria).filter(Boolean).length;

  // Function to download document list
  const handleDownloadDocumentList = () => {
    const content = `REQUIRED DOCUMENTS CHECKLIST
Tender Reference: TND-${tenderId}
Tender: ${tender.title}
Organization: ${tender.organization}
Submission Deadline: ${tender.submissionDeadline}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENT CHECKLIST:

${tender.requiredDocuments.map((doc, index) => `${index + 1}. ${doc}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━��━━━━━━━

IMPORTANT INFORMATION:

Tender Value: ${tender.tenderValue}
Estimated Value: ${tender.estimatedValue}
Location: ${tender.location}
Category: ${tender.category}

Bid Opening Date: ${tender.openingDate}
Published Date: ${tender.publishDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION:

Contact Officer: ${tender.contactInfo.officer}
Department: ${tender.contactInfo.department}
Email: ${tender.contactInfo.email}
Phone: ${tender.contactInfo.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generated by OpportunityX - Qistonpe
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
`;

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TND-${tenderId}_Required_Documents.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Function to download document list as PDF
  const handleDownloadDocumentListPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    
    let yPosition = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginLeft = 20;
    const marginRight = 20;
    const contentWidth = pageWidth - marginLeft - marginRight;

    // Header - Company Name
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('OpportunityX - Qistonpe', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Title
    doc.setFontSize(14);
    doc.text('REQUIRED DOCUMENTS CHECKLIST', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 12;

    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, pageWidth - marginRight, yPosition);
    yPosition += 10;

    // Tender Information Section
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('TENDER INFORMATION', marginLeft, yPosition);
    yPosition += 7;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    
    doc.text(`Reference ID: TND-${tenderId}`, marginLeft, yPosition);
    yPosition += 5;
    
    const titleLines = doc.splitTextToSize(`Tender Title: ${tender.title}`, contentWidth);
    doc.text(titleLines, marginLeft, yPosition);
    yPosition += titleLines.length * 5;
    
    const orgLines = doc.splitTextToSize(`Organization: ${tender.organization}`, contentWidth);
    doc.text(orgLines, marginLeft, yPosition);
    yPosition += orgLines.length * 5;
    
    doc.text(`Submission Deadline: ${tender.submissionDeadline}`, marginLeft, yPosition);
    yPosition += 10;

    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, pageWidth - marginRight, yPosition);
    yPosition += 10;

    // Document Checklist Section
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('DOCUMENT CHECKLIST', marginLeft, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);

    tender.requiredDocuments.forEach((doc_item, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Checkbox
      doc.rect(marginLeft, yPosition - 3, 3, 3);
      
      // Document text
      const docLines = doc.splitTextToSize(`${index + 1}. ${doc_item}`, contentWidth - 10);
      doc.text(docLines, marginLeft + 6, yPosition);
      yPosition += Math.max(docLines.length * 5, 7);
    });

    yPosition += 5;

    // Check if we need a new page for the next section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, pageWidth - marginRight, yPosition);
    yPosition += 10;

    // Important Information Section
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('TENDER DETAILS', marginLeft, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);

    doc.text(`Tender Value: ${tender.tenderValue}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Estimated Value: ${tender.estimatedValue}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Location: ${tender.location}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Category: ${tender.category}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Published Date: ${tender.publishDate}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Bid Opening Date: ${tender.openingDate}`, marginLeft, yPosition);
    yPosition += 10;

    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, pageWidth - marginRight, yPosition);
    yPosition += 10;

    // Contact Information Section
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('CONTACT INFORMATION', marginLeft, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);

    doc.text(`Contact Officer: ${tender.contactInfo.officer}`, marginLeft, yPosition);
    yPosition += 5;
    
    const deptLines = doc.splitTextToSize(`Department: ${tender.contactInfo.department}`, contentWidth);
    doc.text(deptLines, marginLeft, yPosition);
    yPosition += deptLines.length * 5;
    
    doc.text(`Email: ${tender.contactInfo.email}`, marginLeft, yPosition);
    yPosition += 5;
    doc.text(`Phone: ${tender.contactInfo.phone}`, marginLeft, yPosition);
    yPosition += 15;

    // Footer
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, pageWidth - marginRight, yPosition);
    yPosition += 7;

    doc.setFontSize(8);
    doc.setFont(undefined, 'italic');
    doc.text(`Generated on: ${currentDate}`, marginLeft, yPosition);
    doc.text('OpportunityX by Qistonpe', pageWidth - marginRight, yPosition, { align: 'right' });

    // Save the PDF
    doc.save(`TND-${tenderId}_Required_Documents.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/tenders")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Tender Details
              </h1>
              <p className="text-sm text-gray-600">Reference ID: TND-{tenderId}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tender Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-gray-900 mb-2">{tender.title}</h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {tender.organization}
                  </p>
                </div>
              </div>

              {/* Match Score Banner */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-700 mb-1">AI Match Score</p>
                      <p className="text-2xl text-green-900">{tender.matchScore}% Match</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-700">Highly Recommended</p>
                    <p className="text-xs text-green-600">Based on your profile</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{tender.description}</p>
            </motion.div>

            {/* AI Generated Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full border border-purple-200">
                  AI Generated Summary
                </span>
              </div>
              
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Tender Summary
              </h3>
              
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {tender.summary}
                </p>
              </div>
            </motion.div>

            {/* Scope of Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Scope of Work
              </h3>
              
              <ul className="space-y-2">
                {tender.scopeOfWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl mb-4">Key Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Tender Value
                  </p>
                  <p className="text-xl text-indigo-600">{tender.tenderValue}</p>
                  <p className="text-xs text-gray-500 mt-1">Est: {tender.estimatedValue}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Submission Deadline
                  </p>
                  <p className="text-xl text-amber-600">{tender.submissionDeadline}</p>
                  <p className="text-xs text-gray-500 mt-1">18 days remaining</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Published Date
                  </p>
                  <p className="text-gray-900">{tender.publishDate}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Bid Opening
                  </p>
                  <p className="text-gray-900">{tender.openingDate}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </p>
                  <p className="text-gray-900">{tender.location}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Category
                  </p>
                  <p className="text-gray-900">{tender.category}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Eligibility & Actions */}
          <div className="space-y-6">
            {/* Eligibility Check */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-lg mb-4">Quick Eligibility Check</h3>
              
              <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-700">Criteria Met</span>
                  <span className="text-lg text-green-900">{actualMetCriteria}/{totalCriteria}</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${(actualMetCriteria / totalCriteria) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {tender.eligibilityCriteria.map((item, index) => {
                  // Check if uploaded or already met
                  const isMet = item.met || uploadedCriteria[item.criteria];
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        isMet ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"
                      }`}
                    >
                      {isMet ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm flex-1 ${isMet ? "text-green-800" : "text-amber-800"}`}>
                        {item.criteria}
                      </span>
                      
                      {/* Upload button for all unmet criteria */}
                      {!isMet && (
                        <button
                          onClick={() => handleDocumentUpload(item.criteria)}
                          className="ml-auto px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Upload className="w-3 h-3" />
                          Upload
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Analyze Button */}
              <button
                onClick={() => navigate(`/eligibility/${tenderId}`)}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-4 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mb-3"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-lg">Start AI Analysis</span>
              </button>

              <p className="text-xs text-center text-gray-500">
                Get detailed eligibility analysis and auto-generate bid documents
              </p>
            </motion.div>

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Required Documents
              </h3>
              
              <div className="space-y-2">
                {tender.requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 text-sm text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDownloadDocumentListPDF}
                className="w-full mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all border border-indigo-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Document List</span>
              </button>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Important Dates
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">Published</p>
                    <p className="text-xs text-gray-500">{tender.publishDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">Submission Deadline</p>
                    <p className="text-xs text-gray-500">{tender.submissionDeadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">Bid Opening</p>
                    <p className="text-xs text-gray-500">{tender.openingDate}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}