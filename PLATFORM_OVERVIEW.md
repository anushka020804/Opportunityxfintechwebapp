# OpportunityX + Metal Capital Platform - Complete Overview

## 🎯 Platform Architecture

**OpportunityX + Metal Capital** is an integrated B2B fintech ecosystem by **Qistonpe** that combines:
1. **OpportunityX**: AI-powered tender management platform (9 screens)
2. **Metal Capital**: Working capital financing dashboard (1 screen)

---

## 📊 Complete User Journey (10 Screens)

### **PHASE 1: OPPORTUNITYX - TENDER MANAGEMENT (Screens 1-9)**

#### **Screen 1: Landing Page** 🏠
**Route**: `/`

**Two Product Cards**:
1. **Metal Capital Card** (Amber-Orange gradient)
   - Working capital solutions
   - "Apply Now" → Contact form modal
   
2. **OpportunityX Card** (Indigo-Blue gradient)
   - Tender management platform
   - "Get Started" → Business verification

---

#### **Screen 2: Business Verification** 🏢
**Route**: `/verify-business`

**Features**:
- PAN number input
- Auto-fetch business details (simulated)
- Display: Business name, GST, registration date
- Progress: Step 1 of 3 (33%)

---

#### **Screen 3: HSN Code Setup** 📊
**Route**: `/hsn-setup`

**Features**:
- Enterprise data table
- 5 pre-populated HSN codes
- Add/remove HSN codes
- Progress: Step 2 of 3 (66%)

---

#### **Screen 4: Welcome Screen** 🎉
**Route**: `/welcome`

**Features**:
- Onboarding confirmation
- Success checklist
- Two paths:
  1. Complete Profile First → Upload documents
  2. Start Exploring Tenders → Browse immediately

---

#### **Screen 5: Document Upload (Complete Profile)** 📄
**Route**: `/complete-profile`

**Features**:
- 5 required documents
- Dynamic progress bar (updates as docs upload)
- Interactive pie chart (synced with Dashboard)
- Upload buttons turn orange → green

**Documents**:
1. ✓ PAN Card (pre-filled)
2. ✓ GST Certificate (pre-filled)
3. 📄 Company Registration Certificate
4. 📄 Bank Statement
5. 📄 ITR Returns

---

#### **Screen 6: Dashboard** 📊
**Route**: `/dashboard`

**4 KPI Cards**:
1. Profile Completion (60%)
2. Active Tenders (127)
3. Eligible Matches (45)
4. **Won Bids (3)** ← Navigates to Won Bids page

**Features**:
- Interactive pie chart (synced with Complete Profile)
- Quick action buttons
- Recent activity feed

---

#### **Screen 7: Tender Listing** 📋
**Route**: `/tenders`

**Features**:
- Status filters: All, New, Active, Closing Soon, Expired
- 5 unique tenders (TND-001 to TND-005)
- Each tender shows:
  - Tender number
  - Status badge
  - Organization
  - Contract value
  - Location
  - HSN match
  - Match percentage
  - "Check Eligibility" button

**Tender Details**:
- **TND-001**: Industrial Valves - ₹45L - Karnataka - 95% match
- **TND-002**: Railway Equipment - ₹35L - Pan India - 88% match
- **TND-003**: Steel Components - ₹28.5L - Maharashtra - 92% match
- **TND-004**: Pipeline Fittings - ₹18.75L - Gujarat - 85% match
- **TND-005**: Industrial Machinery - ₹52L - Tamil Nadu - 78% match

---

#### **Screen 8: Quick Eligibility Check** 🤖
**Route**: `/eligibility/:tenderId`

**4-Step AI Analysis**:

**Step 1: Basic Requirements** ✅
- Auto-checks from profile
- Status: Eligible (green)

**Step 2: Financial Eligibility** 📊
- Upload ITR returns
- Orange → Green after upload
- AI processing animation

**Step 3: Technical Capability** 🔧
- Upload experience certificates
- Orange → Green after upload

**Step 4: Legal Compliance** ⚖️
- Upload compliance documents
- Orange → Green after upload

**After All 4 Green**:
- "Generate Bid Document" button enables

**Metal Capital Cross-Sell**:
- Shows ONLY for non-Metal Capital customers
- Amber-orange CTA card at bottom
- "Apply for Credit" → Contact form modal

---

#### **Screen 9: Won Bids** 🏆
**Route**: `/won-bids`

**3 Summary KPI Cards**:
1. Total Won Bids: 3
2. Total Contract Value: ₹1.08 Crores
3. Average Win Margin: 3.5%

**3 Won Contract Cards**:

**Contract #1**:
- Industrial Valves Supply - Karnataka PWD
- Value: ₹45,00,000
- Status: Upcoming (Amber badge)
- Win Margin: 2.5%

**Contract #2**:
- Railway Equipment - Indian Railways
- Value: ₹35,00,000
- Status: In Progress (Blue badge)
- Win Margin: 3.8%

**Contract #3**:
- Steel Components - NHAI
- Value: ₹28,50,000
- Status: Completed (Green badge)
- Win Margin: 4.2%

**Each Contract Has**:
- Download Contract button → Professional 4-page PDF
- View Details button → Modal with full details

**Metal Capital CTA Section**:
- Working capital offer
- Two buttons:
  1. "Apply for Credit Now" → Contact form modal
  2. **"Go to Metal Capital Dashboard"** → New dashboard

---

### **PHASE 2: METAL CAPITAL - FINANCING DASHBOARD (Screen 10)**

#### **Screen 10: Metal Capital Dashboard** 💰
**Route**: `/metal-capital-dashboard`

**Purpose**: Manage working capital after winning bids

**Design**:
- Amber-orange themed (matching Metal Capital branding)
- Back button to Won Bids
- "Back to OpportunityX" button → Main dashboard

---

**4 KPI Cards**:

1. **Total Credit Limit**: ₹80L
   - Approved credit limit
   - Amber-orange gradient

2. **Available Credit**: ₹20L
   - Ready to disburse
   - Green gradient

3. **Active Loans**: 2
   - Currently running
   - Indigo-blue gradient

4. **Outstanding Amount**: ₹38L
   - Total repayable
   - Purple-pink gradient

---

**Quick Actions Section** (3 buttons):
1. Request Disbursement
2. Make Payment
3. Download Statement

---

**Your Loans Section**:

**Loan #1 - MC-001**:
- Contract: Industrial Valves Supply
- Loan Amount: ₹35,00,000
- Disbursed: ₹35,00,000
- Outstanding: ₹28,00,000
- Interest Rate: 12.5%
- Tenure: 6 months
- Status: Active (Green badge)
- Next Due: Mar 15, 2026
- **Progress Bar**: 20% repaid (visual indicator)
- Actions: Make Payment, Download Statement

**Loan #2 - MC-002**:
- Contract: Railway Equipment Supply
- Loan Amount: ₹25,00,000
- Disbursed: ₹15,00,000
- Outstanding: ₹10,00,000
- Interest Rate: 11.8%
- Tenure: 4 months
- Status: Active (Green badge)
- Next Due: Mar 10, 2026
- **Progress Bar**: 60% repaid
- Actions: Make Payment, Download Statement

**Loan #3 - MC-003**:
- Contract: Steel Components
- Loan Amount: ₹20,00,000
- Disbursed: ₹20,00,000
- Outstanding: ₹0
- Interest Rate: 12.0%
- Tenure: 3 months
- Status: Completed (Gray badge)
- **Success Message**: "This loan has been fully repaid. Thank you for your timely payments!"

---

**Payment Schedule Section**:

**Enterprise Data Table** with columns:
- Due Date
- Principal Amount
- Interest Amount
- Total Amount
- Status Badge (Paid/Upcoming/Overdue)
- Action (Pay Now / Receipt)

**3 Sample Payments**:
1. Mar 15, 2026 - ₹6,19,791 - Upcoming
2. Mar 10, 2026 - ₹3,89,750 - Upcoming
3. Feb 15, 2026 - ₹6,19,791 - Paid

---

**Help Section** (Bottom CTA):
- Indigo-blue gradient
- Contact Support button
- View FAQs button

---

## 🔄 Complete Flow Navigation Map

```
START → Landing Page (/)
  │
  ├─► Metal Capital Card
  │   └─► Apply Now → Contact Form Modal → Success Toast
  │
  └─► OpportunityX Card
      └─► Get Started
          │
          ├─► Business Verification (/verify-business)
          │   └─► Continue
          │       │
          │       ├─► HSN Setup (/hsn-setup)
          │       │   └─► Continue
          │       │       │
          │       │       ├─► Welcome Screen (/welcome)
          │       │       │   ├─► Complete Profile
          │       │       │   │   │
          │       │       │   │   ├─► Upload Documents (/complete-profile)
          │       │       │   │   │   └─► Dashboard (/dashboard)
          │       │       │   │   │       ├─► Won Bids KPI
          │       │       │   │   │       │   │
          │       │       │   │   │       │   ├─► Won Bids Page (/won-bids)
          │       │       │   │   │       │   │   ├─► Download contracts (PDF)
          │       │       │   │   │       │   │   ├─► View details (modal)
          │       │       │   │   │       │   │   ├─► Apply for Credit → Form Modal
          │       │       │   │   │       │   │   └─► **Go to Metal Capital Dashboard**
          │       │       │   │   │       │   │       │
          │       │       │   │   │       │   │       ├─► **Metal Capital Dashboard (/metal-capital-dashboard)**
          │       │       │   │   │       │   │       │   ├─► View loans
          │       │       │   │   │       │   │       │   ├─► Payment schedule
          │       │       │   │   │       │   │       │   ├─► Request disbursement
          │       │       │   │   │       │   │       │   ├─► Make payments
          │       │       │   │   │       │   │       │   ├─► Download statements
          │       │       │   │   │       │   │       │   └─► Back to OpportunityX Dashboard
          │       │       │   │   │       │   │
          │       │       │   │   │       ├─► Browse Tenders
          │       │       │   │   │       │   │
          │       │       │   │   │       │   ├─► Tender Listing (/tenders)
          │       │       │   │   │       │   │   ├─► Filter by status
          │       │       │   │   │       │   │   ├─► View 5 tenders
          │       │       │   │   │       │   │   └─► Check Eligibility
          │       │       │   │   │       │   │       │
          │       │       │   │   │       │   │       ├─► Eligibility Check (/eligibility/:tenderId)
          │       │       │   │   │       │   │       │   ├─► 4-step analysis
          │       │       │   │   │       │   │       │   ├─► Upload documents
          │       │       │   │   │       │   │       │   ├─► Generate bid
          │       │       │   │   │       │   │       │   └─► Metal Capital CTA → Form Modal
          │       │       │   │
          │       │       │   └─► Start Exploring
          │       │       │       └─► (Same as Browse Tenders above)
```

---

## 🎨 Design System

### **OpportunityX Theme** (Indigo/Blue)
- Primary: `from-indigo-500 to-blue-500`
- Success: `from-green-500 to-emerald-500`
- Background: `from-indigo-50 via-white to-blue-50`

### **Metal Capital Theme** (Amber/Orange)
- Primary: `from-amber-500 to-orange-500`
- Background: `from-amber-50 via-white to-orange-50`
- Consistent with Metal Capital branding across platform

### **Common Elements**
- Cards: `rounded-2xl` with soft shadows
- Buttons: `rounded-xl` with gradients
- Inputs: `rounded-xl` with focus rings
- Modals: White overlay with backdrop blur
- Animations: Motion/React with staggered entrances

---

## 💡 Key Features

### **OpportunityX Features**:
1. ✅ AI-powered tender matching
2. ✅ 4-step eligibility analysis
3. ✅ Document upload & tracking
4. ✅ Dynamic progress tracking
5. ✅ Professional bid generation
6. ✅ Contract management
7. ✅ 5 unique tenders with details
8. ✅ Interactive pie charts (synced via localStorage)

### **Metal Capital Features**:
1. ✅ Credit limit tracking
2. ✅ Multi-loan management
3. ✅ Disbursement requests
4. ✅ Payment scheduling
5. ✅ Repayment progress bars
6. ✅ Statement downloads
7. ✅ Outstanding amount tracking
8. ✅ Completed loan history

### **Integration Features**:
1. ✅ Seamless navigation between platforms
2. ✅ Context-aware Metal Capital CTAs
3. ✅ Shared contact form modal
4. ✅ Cross-platform branding consistency
5. ✅ Single user session across both platforms

---

## 📱 Contact Form Modal

**Used in 3 places**:
1. Landing Page - Metal Capital card
2. Eligibility Check - Bottom CTA (non-customers only)
3. Won Bids - Bottom CTA

**Design**:
- White overlay (90% opacity) with backdrop blur
- Amber-orange gradient header
- Building2 icon

**Form Fields**:
- Full Name (required)
- Phone Number (required if no email)
- Email Address (required if no phone)
- OR divider
- Info tooltip

**Validation**:
- Name must be filled
- Either phone OR email required (or both)
- Submit button disabled until valid

**Success Flow**:
1. User fills form
2. Clicks "Submit Application"
3. Modal closes
4. Green success toast appears:
   - "Thanks for applying! Our team will get back to you shortly."
5. Auto-dismisses after 3 seconds

---

## 🔗 Navigation Structure

### **Primary Navigation Paths**:

**From Landing Page**:
- → Business Verification (OpportunityX onboarding)
- → Contact Form Modal (Metal Capital application)

**From Dashboard**:
- → Complete Profile
- → Tender Listing
- → Won Bids

**From Won Bids**:
- → Dashboard (back button)
- → Metal Capital Dashboard (new CTA)
- → Contract downloads
- → Contact Form Modal

**From Metal Capital Dashboard**:
- → Won Bids (back button)
- → OpportunityX Dashboard (header button)

**From Tender Listing**:
- → Dashboard (back button)
- → Eligibility Check (per tender)

**From Eligibility Check**:
- → Tender Listing (back button)
- → Contact Form Modal (Metal Capital CTA)

---

## 📊 Data & State Management

### **localStorage Usage**:
1. Document upload status (5 documents)
2. Pie chart data (synced between Dashboard & Complete Profile)
3. User profile data

### **URL Parameters**:
- `/eligibility/:tenderId` - Tender-specific analysis

### **Mock Data**:
1. 5 unique tenders with full details
2. 3 won contracts
3. 3 Metal Capital loans
4. Payment schedule entries
5. Business verification details

---

## 🎯 Business Logic

### **OpportunityX**:
- **Tender Matching**: HSN code comparison → match percentage
- **Document Tracking**: Upload status → progress bar → pie chart
- **Eligibility Analysis**: 4-step validation → enable/disable actions
- **Contract Generation**: Professional 4-page PDF downloads

### **Metal Capital**:
- **Credit Calculation**: Total limit - Active loans = Available credit
- **Loan Progress**: (Disbursed - Outstanding) / Disbursed × 100%
- **Payment Status**: Date-based status (Paid/Upcoming/Overdue)
- **Outstanding Total**: Sum of all active loan balances

---

## 🚀 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router (Data mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Charts**: Recharts
- **PDF Generation**: jsPDF
- **State**: React useState + localStorage

---

## ✨ Premium Features

### **Visual Design**:
- ✅ Investor-ready premium UI
- ✅ Stripe/Razorpay quality
- ✅ Soft shadows & gradients
- ✅ Smooth micro-interactions
- ✅ Responsive layouts

### **User Experience**:
- ✅ Clear visual hierarchy
- ✅ Progress indicators
- ✅ Status badges
- ✅ Toast notifications
- ✅ Modal confirmations
- ✅ Loading states
- ✅ Empty states

### **Accessibility**:
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Color contrast
- ✅ Screen reader labels

---

## 📈 Platform Statistics (Demo Data)

### **OpportunityX Metrics**:
- 127 Active Tenders
- 45 Eligible Matches (35% match rate)
- 3 Won Bids
- ₹1.08 Cr Total Contract Value
- 3.5% Average Win Margin
- 60% Profile Completion

### **Metal Capital Metrics**:
- ₹80L Total Credit Limit
- ₹20L Available Credit
- 2 Active Loans
- ₹38L Outstanding Amount
- 3 Total Loans (1 completed)
- ₹60L Total Disbursed

---

## 🎉 Success Flows

### **Tender Management Success**:
1. User discovers relevant tender (high match %)
2. Completes eligibility check (all 4 steps green)
3. Generates & submits bid
4. Wins contract
5. Views in Won Bids page
6. Downloads professional contract

### **Financing Success**:
1. User wins contract
2. Needs working capital
3. Applies for Metal Capital credit
4. Gets approved (24 hours)
5. Requests disbursement
6. Receives funds
7. Fulfills contract
8. Makes scheduled payments
9. Completes loan

### **Cross-Platform Success**:
1. User on OpportunityX
2. Wins multiple bids
3. Needs working capital
4. Discovers Metal Capital CTA
5. Applies for credit
6. Navigates to Metal Capital Dashboard
7. Manages loans & payments
8. Returns to OpportunityX
9. Continues bidding
10. Seamless experience across both platforms

---

## 🔒 Security & Compliance

- PAN verification (simulated)
- GST validation
- Document verification
- Secure file uploads
- Data encryption (placeholder)
- Compliance documentation
- Terms & conditions

---

This is the complete OpportunityX + Metal Capital integrated platform - a premium B2B fintech ecosystem for tender management with working capital financing! 🚀💰
