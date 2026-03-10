/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onlyvet-news3.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/429', '/maintenance'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/429', '/maintenance', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://onlyvet-news3.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
