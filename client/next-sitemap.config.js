/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.hackofiesta.com",
  generateRobotsTxt: true, // (optional)
  priority: 1,
};
