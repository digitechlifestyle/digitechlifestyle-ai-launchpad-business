"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [company, setCompany] = useState("Example Business Ltd");
  const [industry, setIndustry] = useState("Retail / Services");
  const [website, setWebsite] = useState("https://examplebusiness.com");
  const [staff, setStaff] = useState(12);
  const [pain, setPain] = useState("Too much manual admin, slow customer replies, inconsistent marketing");
  const [reportReady, setReportReady] = useState(false);

  const score = useMemo(() => {
    const base = 46;
    const staffBoost = Math.min(Number(staff) || 0, 50) * 0.55;
    const painBoost = pain.length > 30 ? 20 : 10;
    return Math.min(96, Math.round(base + staffBoost + painBoost));
  }, [staff, pain]);

  const savings = useMemo(() => Math.round((Number(staff) || 1) * 460), [staff]);

  const agents = [
    ["AI Audit Agent", "Scans the website, files and intake answers to find business gaps."],
    ["Savings Agent", "Calculates time, cost and process savings from AI automation."],
    ["Sales Agent", "Finds missed leads, weak follow-up and conversion opportunities."],
    ["Support Agent", "Creates customer service chatbot and FAQ automation recommendations."],
    ["Ops Agent", "Maps repetitive admin tasks that can be automated safely."],
    ["Security Agent", "Flags data, compliance and human-review requirements before launch."]
  ];

  const opportunities = [
    ["Customer Service", "Deploy secure FAQ and support chatbot", "High", "8–15 hrs/week"],
    ["Sales", "Lead scoring and automated follow-up", "High", "More enquiries converted"],
    ["Marketing", "AI content engine for SEO, email and social", "Medium", "5–10 hrs/week"],
    ["Admin", "AI inbox and document assistant", "High", "10–20 hrs/week"],
    ["Finance", "Invoice, expense and reporting assistant", "Medium", "Fewer manual errors"]
  ];

  return (
    <div style={page}>
      <main style={container}>
        <nav style={nav}>
          <div style={brand}><span style={logo}>AI</span> Launchpad</div>
          <div style={navLinks}><span>AI Audit</span><span>Agents</span><span>Security</span><span>ROI</span></div>
          <button style={outlineButton}>Request Demo</button>
        </nav>

        <section style={hero}>
          <div>
            <div style={pill}>Enterprise-grade AI adoption platform</div>
            <h1 style={heroTitle}>Show companies exactly what AI can save them.</h1>
            <p style={heroText}>
              AI Launchpad helps undecided businesses upload their website and documents, then uses specialist AI agents to reveal savings, gaps, risks and a step-by-step implementation plan.
            </p>
            <div style={buttonRow}>
              <button style={primaryButton} onClick={() => setReportReady(true)}>Run AI Savings Audit</button>
              <button style={secondaryButton}>View Agent Network</button>
            </div>
            <div style={proofRow}>
              <span>✓ We do not sell client data</span>
              <span>✓ Secure file handling</span>
              <span>✓ Human approval before deployment</span>
            </div>
          </div>

          <div style={heroPanel}>
            <div style={panelHeader}>
              <span>AI Agent Command Centre</span>
              <strong style={liveBadge}>LIVE SCAN</strong>
            </div>
            <div style={radarWrap}>
              <div style={radarOuter}><div style={radarMiddle}><div style={radarInner}>AI</div></div></div>
              <div style={{ ...agentDot, top: 28, left: 78 }}>Audit</div>
              <div style={{ ...agentDot, top: 92, right: 26 }}>ROI</div>
              <div style={{ ...agentDot, bottom: 50, left: 28 }}>Ops</div>
              <div style={{ ...agentDot, bottom: 26, right: 68 }}>Sales</div>
            </div>
            <div style={scanBar}><span style={{ ...scanFill, width: `${score}%` }} /></div>
            <div style={miniStats}>
              <Mini label="Readiness" value={`${score}%`} />
              <Mini label="Monthly Saving" value={`£${savings.toLocaleString()}`} />
              <Mini label="Agents" value="6" />
            </div>
          </div>
        </section>

        <section style={seoBlock}>
          <h2>AI consulting, business automation and cost-saving software in one platform.</h2>
          <p>SEO-focused positioning for businesses searching for AI audit, AI automation, AI cost savings, AI chatbot installation, AI agents for business, and secure AI implementation.</p>
        </section>

        <section style={metricsGrid}>
          <Metric label="AI Readiness" value={`${score}/100`} accent="#2563eb" />
          <Metric label="Estimated Monthly Saving" value={`£${savings.toLocaleString()}`} accent="#16a34a" />
          <Metric label="Manual Work Reduced" value="25–50 hrs/mo" accent="#7c3aed" />
          <Metric label="Data Policy" value="Never Sold" accent="#b45309" />
        </section>

        <section style={twoCol}>
          <div style={cardBlack}>
            <h2>Company Intake</h2>
            <p>Businesses can add their website, files and pain points. The platform turns these inputs into an AI adoption report.</p>
            <Input value={company} setValue={setCompany} placeholder="Company name" />
            <Input value={industry} setValue={setIndustry} placeholder="Industry" />
            <Input value={website} setValue={setWebsite} placeholder="Website URL" />
            <Input value={staff} setValue={setStaff} placeholder="Number of staff" type="number" />
            <textarea value={pain} onChange={(e) => setPain(e.target.value)} placeholder="Main business problems" style={{ ...input, minHeight: 92 }} />
            <div style={uploadBox}>Secure upload: PDFs, CSVs, FAQs, policies, price lists</div>
          </div>

          <div style={cardWhite}>
            <h2>Professional AI Agent Network</h2>
            <div style={agentGrid}>
              {agents.map(([title, text]) => <AgentCard key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section style={twoColWide}>
          <div style={cardWhite}>
            <h2>Top AI Savings Opportunities</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {opportunities.map((item, i) => (
                <div key={item[0]} style={opportunityRow}>
                  <strong>{i + 1}. {item[0]}</strong>
                  <span>{item[1]}</span>
                  <b style={impactBadge}>{item[2]}</b>
                  <span>{item[3]}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={cardWhite}>
            <h2>Secure 30 / 60 / 90 Day Roadmap</h2>
            <Roadmap title="30 Days: Quick Savings" items={["Install website chatbot", "Automate lead capture", "Create AI email templates"]} />
            <Roadmap title="60 Days: Department Agents" items={["Sales follow-up agent", "Admin document agent", "Marketing content agent"]} />
            <Roadmap title="90 Days: Pro Deployment" items={["CRM and inbox integrations", "Management dashboard", "Human approval workflows"]} />
          </div>
        </section>

        {reportReady && (
          <section style={reportBox}>
            <h2>Generated Demo Audit for {company}</h2>
            <p><strong>Industry:</strong> {industry}</p>
            <p><strong>Website:</strong> {website}</p>
            <p><strong>AI Readiness:</strong> {score}/100</p>
            <p><strong>Estimated Monthly Saving:</strong> £{savings.toLocaleString()}</p>
            <p><strong>Recommended First Module:</strong> Secure customer support chatbot + lead capture agent.</p>
          </section>
        )}

        <section style={securityBand}>
          <div>
            <h2>Security promise for every company upload.</h2>
            <p>No selling customer data. Clear data controls. Optional human review. Delete reports and files on request. Built for trust from day one.</p>
          </div>
          <button style={whiteButton}>View Privacy Policy</button>
        </section>
      </main>
    </div>
  );
}

function Input({ value, setValue, placeholder, type = "text" }) {
  return <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} style={input} />;
}

function Mini({ label, value }) {
  return <div style={mini}><span>{label}</span><strong>{value}</strong></div>;
}

function Metric({ label, value, accent }) {
  return <div style={metric}><span style={{ color: accent, fontWeight: 900 }}>{label}</span><strong>{value}</strong></div>;
}

function AgentCard({ title, text }) {
  return <div style={agentCard}><div style={agentIcon}>◆</div><strong>{title}</strong><p>{text}</p></div>;
}

function Roadmap({ title, items }) {
  return <div style={roadmap}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

const page = { minHeight: "100vh", background: "#ffffff", color: "#050505", padding: 30, fontFamily: "Inter, Arial, sans-serif" };
const container = { maxWidth: 1240, margin: "0 auto" };
const nav = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, paddingBottom: 34 };
const brand = { fontSize: 24, fontWeight: 950, display: "flex", alignItems: "center", gap: 10, letterSpacing: -0.5 };
const logo = { background: "#050505", color: "white", borderRadius: 12, padding: "8px 10px", fontSize: 14 };
const navLinks = { display: "flex", gap: 24, color: "#555", fontWeight: 800, flexWrap: "wrap" };
const hero = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 42, alignItems: "center", padding: "34px 0 42px" };
const pill = { display: "inline-block", border: "1px solid #111", borderRadius: 999, padding: "10px 16px", fontWeight: 900, background: "#fff" };
const heroTitle = { fontSize: 70, lineHeight: .92, letterSpacing: -4, margin: "22px 0", fontWeight: 950 };
const heroText = { fontSize: 20, lineHeight: 1.65, color: "#444", maxWidth: 700 };
const buttonRow = { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 };
const primaryButton = { background: "#050505", color: "white", border: 0, borderRadius: 18, padding: "15px 22px", fontWeight: 950, cursor: "pointer", boxShadow: "0 16px 36px rgba(0,0,0,.18)" };
const secondaryButton = { background: "#fff", color: "#050505", border: "1px solid #111", borderRadius: 18, padding: "15px 22px", fontWeight: 950, cursor: "pointer" };
const outlineButton = { background: "#fff", border: "1px solid #111", borderRadius: 999, padding: "11px 18px", fontWeight: 900 };
const proofRow = { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22, color: "#0f766e", fontWeight: 900, fontSize: 13 };
const heroPanel = { background: "#050505", color: "white", borderRadius: 34, padding: 26, minHeight: 420, boxShadow: "0 30px 80px rgba(0,0,0,.25)", position: "relative", overflow: "hidden" };
const panelHeader = { display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 950 };
const liveBadge = { color: "#22c55e", border: "1px solid #22c55e", borderRadius: 999, padding: "6px 9px", fontSize: 12 };
const radarWrap = { height: 270, position: "relative", display: "grid", placeItems: "center" };
const radarOuter = { width: 220, height: 220, borderRadius: "50%", border: "1px solid #333", display: "grid", placeItems: "center" };
const radarMiddle = { width: 148, height: 148, borderRadius: "50%", border: "1px solid #555", display: "grid", placeItems: "center" };
const radarInner = { width: 78, height: 78, borderRadius: "50%", background: "white", color: "#050505", display: "grid", placeItems: "center", fontWeight: 950, fontSize: 24 };
const agentDot = { position: "absolute", background: "white", color: "#050505", borderRadius: 999, padding: "8px 11px", fontSize: 12, fontWeight: 950 };
const scanBar = { height: 12, background: "#222", borderRadius: 999, overflow: "hidden" };
const scanFill = { display: "block", height: "100%", background: "linear-gradient(90deg,#22c55e,#60a5fa)", borderRadius: 999 };
const miniStats = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 16 };
const mini = { background: "#111", border: "1px solid #333", borderRadius: 18, padding: 13, display: "grid", gap: 5 };
const seoBlock = { borderTop: "1px solid #111", borderBottom: "1px solid #111", padding: "34px 0", textAlign: "center", margin: "28px 0" };
const metricsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 };
const metric = { border: "1px solid #111", borderRadius: 24, padding: 20, background: "#fff", display: "grid", gap: 8 };
const twoCol = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22, marginTop: 24 };
const twoColWide = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 22, marginTop: 24 };
const cardBlack = { background: "#050505", color: "white", borderRadius: 30, padding: 24, boxShadow: "0 20px 50px rgba(0,0,0,.16)" };
const cardWhite = { background: "#fff", color: "#050505", border: "1px solid #111", borderRadius: 30, padding: 24, boxShadow: "0 16px 36px rgba(0,0,0,.06)" };
const input = { width: "100%", boxSizing: "border-box", border: "1px solid #333", borderRadius: 16, padding: 13, marginBottom: 10, fontSize: 15, outline: "none", background: "#fff", color: "#050505" };
const uploadBox = { border: "1px dashed #aaa", borderRadius: 18, padding: 18, textAlign: "center", marginTop: 6, color: "#22c55e", fontWeight: 950 };
const agentGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 };
const agentCard = { background: "#fafafa", border: "1px solid #ddd", borderRadius: 18, padding: 16 };
const agentIcon = { color: "#2563eb", fontSize: 18, marginBottom: 8 };
const opportunityRow = { display: "grid", gridTemplateColumns: "1fr 1.4fr .7fr 1fr", gap: 12, alignItems: "center", border: "1px solid #ddd", borderRadius: 18, padding: 14, color: "#333" };
const impactBadge = { color: "#16a34a", background: "#f5f5f5", padding: "7px 10px", borderRadius: 999, textAlign: "center" };
const roadmap = { border: "1px solid #ddd", borderRadius: 18, padding: 16, marginTop: 12, background: "#fff" };
const reportBox = { border: "2px solid #050505", borderRadius: 28, padding: 24, marginTop: 24, background: "#f8fafc" };
const securityBand = { background: "#050505", color: "white", borderRadius: 30, padding: 28, marginTop: 24, display: "flex", justifyContent: "space-between", gap: 22, flexWrap: "wrap", alignItems: "center" };
const whiteButton = { background: "white", color: "#050505", border: 0, borderRadius: 18, padding: "14px 20px", fontWeight: 950 };
