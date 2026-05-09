import { articles } from '../data/siteData';

export default function BlogPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="tag">BLOG</p>
        <h1>DigitechLifestyle Articles</h1>
        <p className="subtitle">
          AI, automation, digital wealth and online business education.
        </p>
      </section>

      <section className="articleGrid">
        {articles.map((article) => (
          <article key={article.slug} className="articleCard">
            <p className="tag">{article.category}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
