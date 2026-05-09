import { articles } from './data/siteData';

export default function sitemap() {
  const articleUrls = articles.map((article) => ({
    url: `https://digitechlifestyle.com/blog/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://digitechlifestyle.com',
      lastModified: new Date(),
    },
    {
      url: 'https://digitechlifestyle.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://digitechlifestyle.com/tools',
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}
