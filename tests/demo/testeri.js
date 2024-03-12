const { chromium } = require('playwright');

(async () => {
    console.log("Hello, World!");
  const browser = await chromium.launch(); // Launch a Chromium browser
  const page = await browser.newPage(); // Open a new page

  await page.goto('https://areena.yle.fi/1-3822119'); // Navigate to the provided URL

  // Continue with your tasks such as extracting information or performing actions on the page

  
})();