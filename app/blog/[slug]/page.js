import { articles } from '../../data/siteData';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = articles.find((item) => item.slug === params.slug);

  return {
    title: article ? `${article.title} | DigitechLifestyle` : 'Article | DigitechLifestyle',
    description: article ? article.excerpt : 'DigitechLifestyle article.',
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <main className="container">
        <h1>Article Not Found</h1>
      </main>
    );
  }

  return (
    <main className="container narrow">
      <article className="contentPage">
        <p className="tag">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="subtitle">{article.excerpt}</p>

        <section className="adBlock">
          <p>In-Article AdSense Placement</p>
        </section>

        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <section className="ctaBox">
          <h2>Build Your Digital Lifestyle</h2>
          <p>
            Get weekly AI tools, automation workflows and digital wealth ideas from DigitechLifestyle.
          </p>
          <a className="primaryBtn" href="/#newsletter">Join The Newsletter</a>
        </section>
      </article>
    </main>
  );
}
