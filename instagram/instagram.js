const puppeteer = require('puppeteer');

if (process.argv.length < 3) {
	console.log('Usage: node instagram.js @user');
	process.exit();
}

let user = process.argv[2];
if (user.match(/^@/)) {
	user = user.substr(1);
}

console.log(`Loading @${user}`);

(async () => {
	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();
	page.on('domcontentloaded', async () => {
		let links = await page.$$('article > div > div > div > div > a');
		for (let link of links) {
			const href = await page.evaluate(el => el.getAttribute('href'), link);
			console.log(`https://www.instagram.com${href}`);
		}
	});
	await page.goto(`https://www.instagram.com/${user}`);
})();
