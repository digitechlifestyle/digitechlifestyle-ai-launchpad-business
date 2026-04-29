import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const runAudit = () => {
    setResult({
      score: 78,
      savings: "£2,400/month",
      opportunities: [
        "Chatbot for customer support",
        "Automated email replies",
        "AI marketing content",
        "Lead capture automation"
      ]
    });
  };

  return (
    <main style={{ fontFamily: "Arial", padding: 40 }}>
      <h1>AI Launchpad for Business</h1>
      <p>Discover how AI can save your business money.</p>

      <input
        placeholder="Enter your website or business info"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <button onClick={runAudit} style={{ marginLeft: 10 }}>
        Run AI Audit
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Results</h2>
          <p><strong>AI Score:</strong> {result.score}/100</p>
          <p><strong>Estimated Savings:</strong> {result.savings}</p>

          <h3>Opportunities</h3>
          <ul>
            {result.opportunities.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
