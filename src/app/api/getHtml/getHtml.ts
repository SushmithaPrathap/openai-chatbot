import puppeteer from "puppeteer";

export default async function handler(req: Request) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3001"); // URL of your Next.js page
  const html = await page.content(); // Captures the full HTML content, including after JS execution

  await browser.close();

  // res.setHeader('Content-Type', 'text/html');
  // res.send(html);
  return new Response(html);
}
