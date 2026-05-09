const sections = [
  'AI Tools',
  'Digital Wealth',
  'Automation',
  'Smart Lifestyle',
  'Make Money Online',
  'Tool Directory',
];

const articles = [
  'Best AI Tools for Small Business',
  'What Are AI Agents?',
  'How AI Automation Saves Time',
  'Best Digital Wealth Apps',
  'How to Build Passive Income Online',
  'Best No-Code Automation Tools',
];

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <p className="tag">DIGITECHLIFESTYLE</p>
        <h1>The Future of Digital Living, Wealth, AI & Automation.</h1>
        <p className="subtitle">
          Learn how to use AI, automation, digital assets and smart online business systems to build income and modern digital freedom.
        </p>

        <div className="heroButtons">
          <a href="#articles" className="primaryBtn">Explore Articles</a>
          <a href="#newsletter" className="secondaryBtn">Join Newsletter</a>
        </div>
      </header>

      <section className="gridSection">
        {sections.map((section) => (
          <article key={section} className="card">
            <h2>{section}</h2>
            <p>
              Discover curated guides, tools, tutorials and monetisation strategies around {section.toLowerCase()}.
            </p>
          </article>
        ))}
      </section>

      <section className="adBlock">
        <p>Google AdSense Placement Area</p>
      </section>

      <section id="articles" className="articlesSection">
        <h2>Featured Articles</h2>

        <div className="articleGrid">
          {articles.map((article) => (
            <article key={article} className="articleCard">
              <h3>{article}</h3>
              <p>
                SEO-focused educational content designed to rank, build authority and generate affiliate revenue.
              </p>
              <button>Read More</button>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="newsletter">
        <h2>Join The DigitechLifestyle Newsletter</h2>
        <p>
          Weekly AI tools, automation workflows, digital wealth insights and online business opportunities.
        </p>

        <div className="newsletterForm">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
}
