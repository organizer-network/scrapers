const puppeteer = require('puppeteer');

if (process.argv.length < 3) {
	console.log('Usage: node instagram.js @user');
	process.exit();
}

let user = process.argv[2];
if (user.match(/^@/)) {
	user = user.substr(1);
}

function pause(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
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
			await link.click();

			let tries = 100;
			let caption_li = [];

			while (caption_li.length == 0) {
				caption_li = await page.$$('article > div > div > ul > li:first-child');
				tries--;
				await pause(100);
			}
			let caption = await page.evaluate(el => el.innerText, caption_li[0]);
			caption = caption.replace(new RegExp('^' + user), '');

			console.log(caption);

			await pause(500 + Math.random() * 3000);

			let close = await page.$('body > div> div > button');
			await close.click();

			await pause(500 + Math.random() * 3000);
		}
	});
	await page.goto(`https://www.instagram.com/${user}`);
})();
