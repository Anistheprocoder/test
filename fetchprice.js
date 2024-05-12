const puppeteer = require('puppeteer');

async function fetchPrice() {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    // Open a new page
    const page = await browser.newPage();
    // Navigate to the URL
    await page.goto('https://www.studioneat.com/products/marktwo');

    // Selector for the price element, using the ID provided
    const selector = '#productPrice'; // This targets the div with id "productPrice"

    // Extract the price text
    const price = await page.$eval(selector, el => el.innerText);

    // Console the price
    console.log(price);

    // Close the browser
    await browser.close();
}

fetchPrice();
