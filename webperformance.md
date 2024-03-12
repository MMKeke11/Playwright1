## Playwrightin käyttö suorituskyvyn testauksessa
Sivun latausajan mittaaminen
Playwrightilla voimme mitata sivun latausajan eri skenaarioissa. Voimme esimerkiksi mitata ajan, jonka sivusto tarvitsee latautuakseen ensimmäisen kerran tai ajan, joka kuluu tietyn toiminnon suorittamiseen, kuten kirjautumisen.

# Resurssien latausajan mittaaminen
Lisäksi voimme käyttää Playwrightia mittaamaan resurssien, kuten kuvien, skriptien ja tyylien, latausaikoja. Näiden resurssien optimointi voi merkittävästi parantaa sivuston suorituskykyä.

# Suorituskykymittareiden tarkistaminen
Playwrightin avulla voimme tarkistaa erilaisia suorituskykymittareita, kuten ensimmäinen sisältömaalaus (FCP), ensimmäisen merkityksellisen maalauksen (FP) ja ensimmäisen sisällönvälinen maalauksen (FMP) ajat. Nämä mittarit antavat meille käsityksen siitä, miten nopeasti sivusto latautuu ja käyttäjät saavat sisällön.

## Esimerkki koodia sivun latausajan mittaamisesta: 

const { test, expect } = require('@playwright/test');

test('Mittaa sivun latausaika', async ({ page }) => {
  await page.goto('https://www.google.com');
  const loadTime = await page.evaluate(() => window.performance.timing.loadEventEnd - window.performance.timing.navigationStart);
  console.log('Sivun latausaika:', loadTime, 'ms');
  expect(loadTime).toBeLessThan(5000); // Tarkista, että sivu latautuu alle 5 sekunnissa
});

## PageSpeed Insights
Yleiskatsaus: PageSpeed Insights analysoi verkkosivun sisällön ja antaa ehdotuksia sivun nopeuttamiseksi.

# Sivustolla mm. mitataan näitä mitattavia arvoja:
Largest Contentful Paint (LCP)
Interaction to Next Paint (INP)
First Contentful Paint (FCP)
Cumulative Layout Shift (CLS)
First Input Delay (FID)
Time to First Byte (TTFB)

Neljä pääkategoriaa mittauksessa on: tehokkuus, esteettömyys, Parhaat käytännöt sekä hakukoneoptimointi.

Diagnostiikka osiossa sivustolla näytetään optimointi ideat sivustolle.

linkki : https://pagespeed.web.dev/


