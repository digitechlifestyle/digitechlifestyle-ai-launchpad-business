"use client";

import { useState } from "react";

const agents = [
  {
    name: "AI Audit Agent",
    role: "Scans the business and finds the biggest AI opportunities.",
    output: "Found 14 automation gaps across customer service, admin, marketing and sales.",
    actions: ["Read website", "Review uploaded files", "Score AI readiness", "Create priority list"]
  },
  {
    name: "Savings Agent",
    role: "Calculates time and money that AI could save each month.",
    output: "Estimated monthly saving: £5,520 from support, inbox, sales follow-up and admin automation.",
    actions: ["Calculate staff hours", "Estimate manual task cost", "Rank ROI", "Build savings report"]
  },
  {
    name: "Sales Agent",
    role: "Finds missed leads, weak follow-up and revenue leaks.",
    output: "Recommended lead capture chatbot, automated follow-up emails and CRM reminders.",
    actions: ["Analyse lead forms", "Find lost enquiries", "Suggest sales workflows", "Create follow-up plan"]
  },
  {
    name: "Support Agent",
    role: "Creates chatbot and FAQ automation recommendations.",
    output: "Recommended first install: website FAQ chatbot trained on company FAQs and policies.",
    actions: ["Read FAQs", "Identify repeated questions", "Design chatbot flow", "Escalate complex cases"]
  },
  {
    name: "Ops Agent",
    role: "Maps repetitive back-office work that can be automated.",
    output: "Admin automation could reduce manual work by 25–50 hours per month.",
    actions: ["Map workflows", "Find bottlenecks", "Suggest automations", "Build rollout plan"]
  },
  {
    name: "Security Agent",
    role: "Protects uploaded business data and flags risk before deployment.",
    output: "Privacy recommendation: encrypted storage, delete controls and no-data-sale policy.",
    actions: ["Check data sensitivity", "Flag compliance risk", "Recommend controls", "Create security checklist"]
  }
];

const opportunities = [
  ["Customer Service", "Deploy secure FAQ and support chatbot", "High", "8–15 hrs/week"],
  ["Sales", "Lead scoring and automated follow-up", "High", "More enquiries converted"],
  ["Marketing", "AI content engine for SEO, email and social", "Medium", "5–10 hrs/week"],
  ["Admin", "AI inbox and document assistant", "High", "10–20 hrs/week"],
  ["Finance", "Invoice, expense and reporting assistant", "Medium", "Fewer manual errors"]
];

export default function LaunchpadClient() {
  const [company, setCompany] = useState("Example Business Ltd");
  const [industry, setIndustry] = useState("Retail / Services");
  const [website, setWebsite] = useState("https://examplebusiness.com");
  const [staff, setStaff] = useState(12);
  const [pain, setPain] = useState("Too much manual admin, slow customer replies, inconsistent marketing");
  const [activeAgent, setActiveAgent] = useState(agents[0]);
  const [reportReady, setReportReady] = useState(false);

  const score = Math.min(96, Math.round(46 + Math.min(Number(staff) || 0, 50) * 0.55 + (pain.length > 30 ? 20 : 10)));
  const savings = Math.round((Number(staff) || 1) * 460);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const runAudit = () => {
    setReportReady(true);
    setTimeout(() => scrollTo("report"), 50);
  };

  return (
    <main style={page}>
      <nav style={nav}>
        <div style={brand}><span style={logo}>AI</span> Launchpad</div>
        <div style={navLinks}>
          <button type="button" onClick={() => scrollTo("audit")} style={navLink}>AI Audit</button>
          <button type="button" onClick={() => scrollTo("agents")} style={navLink}>Agents</button>
          <button type="button" onClick={() => scrollTo("security")} style={navLink}>Security</button>
          <button type="button" onClick={() => scrollTo("roi")} style={navLink}>ROI</button>
        </div>
        <button type="button" onClick={() => scrollTo("audit")} style={outlineButton}>Request Demo</button>
      </nav>

      <section style={hero}>
        <div>
          <div style={pill}>Interactive AI adoption platform</div>
          <h1 style={heroTitle}>Show companies exactly what AI can save them.</h1>
          <p style={heroText}>A platform that scans a company website, business files and pain points, then uses AI agents to recommend savings, automations and installable AI systems.</p>
          <div style={buttonRow}>
            <button type="button" style={primaryButton} onClick={runAudit}>Run AI Savings Audit</button>
            <button type="button" style={secondaryButton} onClick={() => scrollTo("agents")}>See What Agents Do</button>
          </div>
          <div style={proofRow}><span>✓ We do not sell client data</span><span>✓ Secure file handling</span><span>✓ Human approval workflows</span></div>
        </div>

        <div style={heroPanel}>
          <div style={panelHeader}><span>AI Agent Command Centre</span><strong style={liveBadge}>INTERACTIVE</strong></div>
          <div style={radarWrap}>
            <div style={radarOuter}><div style={radarMiddle}><div style={radarInner}>{score}%</div></div></div>
            {agents.slice(0, 4).map((agent, index) => (
              <button key={agent.name} type="button" onClick={() => { setActiveAgent(agent); scrollTo("agents"); }} style={{ ...agentDot, ...dotPositions[index] }}>{agent.name.split(" ")[0]}</button>
            ))}
          </div>
          <div style={miniStats}><Mini label="Readiness" value={`${score}%`} /><Mini label="Monthly Saving" value={`£${savings.toLocaleString()}`} /><Mini label="Agents" value="6" /></div>
        </div>
      </section>

      <section id="roi" style={metricsGrid}>
        <Metric label="AI Readiness" value={`${score}/100`} accent="#2563eb" />
        <Metric label="Estimated Monthly Saving" value={`£${savings.toLocaleString()}`} accent="#16a34a" />
        <Metric label="Manual Work Reduced" value="25–50 hrs/mo" accent="#7c3aed" />
        <Metric label="Data Policy" value="Never Sold" accent="#b45309" />
      </section>

      <section id="audit" style={twoCol}>
        <div style={cardBlack}>
          <h2>Company Intake</h2>
          <p>Add business details below, then run the audit to generate a demo report.</p>
          <Input value={company} setValue={setCompany} placeholder="Company name" />
          <Input value={industry} setValue={setIndustry} placeholder="Industry" />
          <Input value={website} setValue={setWebsite} placeholder="Website URL" />
          <Input value={staff} setValue={setStaff} placeholder="Number of staff" type="number" />
          <textarea value={pain} onChange={(e) => setPain(e.target.value)} placeholder="Main business problems" style={{ ...input, minHeight: 92 }} />
          <button type="button" style={whiteButton} onClick={runAudit}>Generate Audit Report</button>
        </div>

        <div id="agents" style={cardWhite}>
          <h2>Click an AI Agent</h2>
          <p style={{ color: "#555" }}>Each card changes the live demo output below.</p>
          <div style={agentGrid}>{agents.map((agent) => <button type="button" key={agent.name} onClick={() => setActiveAgent(agent)} style={agent.name === activeAgent.name ? activeAgentCard : agentCard}><strong>{agent.name}</strong><p>{agent.role}</p></button>)}</div>
        </div>
      </section>

      <section style={agentDemo}>
        <div><h2>{activeAgent.name}</h2><p>{activeAgent.role}</p><h3>Demo Output</h3><p style={outputBox}>{activeAgent.output}</p></div>
        <div><h3>What this agent does</h3><ul>{activeAgent.actions.map((action) => <li key={action}>{action}</li>)}</ul><button type="button" style={primaryButton} onClick={runAudit}>Add to Client Proposal</button></div>
      </section>

      <section style={twoColWide}>
        <div style={cardWhite}><h2>Top AI Savings Opportunities</h2>{opportunities.map((item, i) => <div key={item[0]} style={opportunityRow}><strong>{i + 1}. {item[0]}</strong><span>{item[1]}</span><b style={impactBadge}>{item[2]}</b><span>{item[3]}</span></div>)}</div>
        <div style={cardWhite}><h2>30 / 60 / 90 Day Roadmap</h2><Roadmap title="30 Days: Quick Savings" items={["Install website chatbot", "Automate lead capture", "Create AI email templates"]} /><Roadmap title="60 Days: Department Agents" items={["Sales follow-up agent", "Admin document agent", "Marketing content agent"]} /><Roadmap title="90 Days: Pro Deployment" items={["CRM and inbox integrations", "Management dashboard", "Human approval workflows"]} /></div>
      </section>

      {reportReady && <section id="report" style={reportBox}><h2>Generated Demo Audit for {company}</h2><p><strong>Industry:</strong> {industry}</p><p><strong>Website:</strong> {website}</p><p><strong>AI Readiness:</strong> {score}/100</p><p><strong>Estimated Monthly Saving:</strong> £{savings.toLocaleString()}</p><p><strong>Recommended First Module:</strong> {activeAgent.name} + secure customer support chatbot.</p></section>}

      <section id="security" style={securityBand}><div><h2>Security promise for every company upload.</h2><p>No selling customer data. Clear data controls. Optional human review. Delete reports and files on request.</p></div><button type="button" style={whiteButton}>View Privacy Policy</button></section>
    </main>
  );
}

function Input({ value, setValue, placeholder, type = "text" }) { return <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} style={input} />; }
function Mini({ label, value }) { return <div style={mini}><span>{label}</span><strong>{value}</strong></div>; }
function Metric({ label, value, accent }) { return <div style={metric}><span style={{ color: accent, fontWeight: 900 }}>{label}</span><strong>{value}</strong></div>; }
function Roadmap({ title, items }) { return <div style={roadmap}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }

const page = { minHeight: "100vh", background: "#fff", color: "#050505", padding: 30, fontFamily: "Inter, Arial, sans-serif", maxWidth: 1240, margin: "0 auto" };
const nav = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, paddingBottom: 34, flexWrap: "wrap" };
const brand = { fontSize: 24, fontWeight: 950, display: "flex", alignItems: "center", gap: 10 };
const logo = { background: "#050505", color: "white", borderRadius: 12, padding: "8px 10px", fontSize: 14 };
const navLinks = { display: "flex", gap: 12, flexWrap: "wrap" };
const navLink = { background: "transparent", border: 0, color: "#555", fontWeight: 900, cursor: "pointer" };
const hero = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 42, alignItems: "center", padding: "34px 0 42px" };
const pill = { display: "inline-block", border: "1px solid #111", borderRadius: 999, padding: "10px 16px", fontWeight: 900 };
const heroTitle = { fontSize: 64, lineHeight: .94, letterSpacing: -3, margin: "22px 0", fontWeight: 950 };
const heroText = { fontSize: 20, lineHeight: 1.65, color: "#444" };
const buttonRow = { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 };
const primaryButton = { background: "#050505", color: "white", border: 0, borderRadius: 18, padding: "15px 22px", fontWeight: 950, cursor: "pointer" };
const secondaryButton = { background: "#fff", color: "#050505", border: "1px solid #111", borderRadius: 18, padding: "15px 22px", fontWeight: 950, cursor: "pointer" };
const outlineButton = { background: "#fff", border: "1px solid #111", borderRadius: 999, padding: "11px 18px", fontWeight: 900, cursor: "pointer" };
const whiteButton = { background: "white", color: "#050505", border: 0, borderRadius: 18, padding: "14px 20px", fontWeight: 950, cursor: "pointer" };
const proofRow = { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22, color: "#0f766e", fontWeight: 900, fontSize: 13 };
const heroPanel = { background: "#050505", color: "white", borderRadius: 34, padding: 26, minHeight: 420, boxShadow: "0 30px 80px rgba(0,0,0,.25)", position: "relative" };
const panelHeader = { display: "flex", justifyContent: "space-between", fontWeight: 950 };
const liveBadge = { color: "#22c55e", border: "1px solid #22c55e", borderRadius: 999, padding: "6px 9px", fontSize: 12 };
const radarWrap = { height: 270, position: "relative", display: "grid", placeItems: "center" };
const radarOuter = { width: 220, height: 220, borderRadius: "50%", border: "1px solid #333", display: "grid", placeItems: "center" };
const radarMiddle = { width: 148, height: 148, borderRadius: "50%", border: "1px solid #555", display: "grid", placeItems: "center" };
const radarInner = { width: 78, height: 78, borderRadius: "50%", background: "white", color: "#050505", display: "grid", placeItems: "center", fontWeight: 950, fontSize: 24 };
const agentDot = { position: "absolute", background: "white", color: "#050505", border: 0, borderRadius: 999, padding: "8px 11px", fontSize: 12, fontWeight: 950, cursor: "pointer" };
const dotPositions = [{ top: 28, left: 78 }, { top: 92, right: 26 }, { bottom: 50, left: 28 }, { bottom: 26, right: 68 }];
const miniStats = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 };
const mini = { background: "#111", border: "1px solid #333", borderRadius: 18, padding: 13, display: "grid", gap: 5 };
const metricsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 };
const metric = { border: "1px solid #111", borderRadius: 24, padding: 20, background: "#fff", display: "grid", gap: 8 };
const twoCol = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22, marginTop: 24 };
const twoColWide = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 22, marginTop: 24 };
const cardBlack = { background: "#050505", color: "white", borderRadius: 30, padding: 24 };
const cardWhite = { background: "#fff", color: "#050505", border: "1px solid #111", borderRadius: 30, padding: 24 };
const input = { width: "100%", boxSizing: "border-box", border: "1px solid #333", borderRadius: 16, padding: 13, marginBottom: 10, fontSize: 15 };
const agentGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 };
const agentCard = { background: "#fafafa", border: "1px solid #ddd", borderRadius: 18, padding: 16, textAlign: "left", cursor: "pointer" };
const activeAgentCard = { ...agentCard, border: "2px solid #050505", background: "#f0fdf4" };
const agentDemo = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 22, marginTop: 24, background: "#050505", color: "white", borderRadius: 30, padding: 24 };
const outputBox = { background: "#111", border: "1px solid #333", borderRadius: 18, padding: 16, color: "#86efac" };
const opportunityRow = { display: "grid", gridTemplateColumns: "1fr 1.4fr .7fr 1fr", gap: 12, alignItems: "center", border: "1px solid #ddd", borderRadius: 18, padding: 14, marginBottom: 10 };
const impactBadge = { color: "#16a34a", background: "#f5f5f5", padding: "7px 10px", borderRadius: 999, textAlign: "center" };
const roadmap = { border: "1px solid #ddd", borderRadius: 18, padding: 16, marginTop: 12 };
const reportBox = { border: "2px solid #050505", borderRadius: 28, padding: 24, marginTop: 24, background: "#f8fafc" };
const securityBand = { background: "#050505", color: "white", borderRadius: 30, padding: 28, marginTop: 24, display: "flex", justifyContent: "space-between", gap: 22, flexWrap: "wrap", alignItems: "center" };
