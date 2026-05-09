import { tools } from '../data/siteData';

export default function ToolsPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="tag">TOOLS DIRECTORY</p>
        <h1>Recommended Digital Tools</h1>
        <p className="subtitle">
          Curated tools for AI, automation, content creation, business and digital productivity.
        </p>
      </section>

      <section className="articleGrid">
        {tools.map((tool) => (
          <article key={tool.name} className="articleCard">
            <p className="tag">{tool.category}</p>
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <p>{tool.monetisation}</p>
            <button>View Tool</button>
          </article>
        ))}
      </section>
    </main>
  );
}
