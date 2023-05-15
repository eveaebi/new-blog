/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',              //SITE_URL would be your domain/website
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}