const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://dualpalettevision.com' });

  // Add your routes manually here
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').end(data);
})();
