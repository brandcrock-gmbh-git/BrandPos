const fs = require("fs");
const path = require("path");

function generateRobots() {
  const robotsContent = `
       User-agent: *
       Disallow: /


Sitemap: http://localhost:3000/en/sitemap.xml
Sitemap: http://localhost:3000/de/sitemap.xml
    `;

  fs.writeFileSync(path.resolve("./public/robots.txt"), robotsContent);
}

generateRobots();

