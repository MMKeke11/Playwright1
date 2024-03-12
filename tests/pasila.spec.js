const {test, expect} = require('@playwright/test');
const { chromium } = require('playwright');

test('has title', async ({page}) => {
    await page.goto('https://areena.yle.fi/1-3822119'); // Navigate to the provided URL

    await page.waitForSelector('.DesktopDropdown_item__D8_Qk');

    // Extract all seasons
    const seasons = await page.$$eval('.DesktopDropdown_item__D8_Qk', elements =>
      elements.map(element => element.textContent.trim())
    );

    console.log('Seasons:', seasons);

    await page.waitForSelector('.CardPage_listItem__UL6aP');

    const clips = await page.$$eval('.CardPage_listItem__UL6aP', elements =>
      elements.map(element => {
        const title = element.querySelector('.Card_title__snUTV a').textContent.trim();
        const description = element.querySelector('.Card_description__MExCG').textContent.trim();
        const duration = element.querySelector('.CardLabels_genericLabel__MddZ0 time').textContent.trim();
        const date = element.querySelector('.CardLabels_genericLabel__MddZ0:nth-child(2)').textContent.trim();
        return { title, description, duration, date };
      })
    );

    console.log('Clips:', clips);

  console.log('Clips:', clips);

  


function levenshteinDistance(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    // Check if lengths exceed reasonable bounds
    if (len1 > 1000 || len2 > 1000) {
        throw new Error('String lengths exceed reasonable bounds');
    }
  
    // Create a matrix to store distances
    let dp = new Array(len1 + 1);
    for (let i = 0; i <= len1; i++) {
      dp[i] = new Array(len2 + 1);
      dp[i][0] = i;
    }
    for (let j = 0; j <= len2; j++) {
      dp[0][j] = j;
    }
  
    // Calculate Levenshtein distance
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
          let cost = (str1[i - 1] === str2[j - 1]) ? 0 : 1;
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1, // deletion
            dp[i][j - 1] + 1, // insertion
            dp[i - 1][j - 1] + cost // substitution
          );
        }
      }
  
    // Return the final Levenshtein distance
    return dp[len1][len2];
  }
  
  // Example usage:
  const seasons1 = seasons;
  const seasons2 = clips.map(clip => clip.title);
  
  let totalDistance = 0;
  for (let season1 of seasons1) {
    let minDistance = Infinity;
    for (let season2 of seasons2) {
      const distance = levenshteinDistance(season1, season2);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
    totalDistance += minDistance;
  }
  
  const similarity = 1 - totalDistance / Math.max(seasons1.length, seasons2.length);
  console.log('Similarity:', similarity);
}
)

