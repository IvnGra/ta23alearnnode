import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

function cacheGet(name) {
    if (fs.existsSync(`./cache/${name}.html`)) {
        return fs.readFileSync(`./cache/${name}.html`);
    }
    return false;
}

function cacheSet(name, value) {
    if (!fs.existsSync('./cache')) {
        fs.mkdirSync('./cache');
    }
    fs.writeFileSync(`./cache/${name}.html`, value);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    let baseUrl = 'https://www.gocomics.com';
    let url = baseUrl + '/peanuts';
    for (let i = 0; i < 10; i++) {
        let name = url.replaceAll('/', '').replaceAll(':', '');
        let data = cacheGet(name);
        if (!data) {
            console.log('LIVE REQUEST!!!!!!');
            await sleep(1000);
            let res = await axios.get(url, {
                headers: {

                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            data = res.data;
            cacheSet(name, data);
        }
        const $ = cheerio.load(data);


        let img = $('div.Comic_comic__7K2CQ img.Comic_comic__image__6e_Fw');
        let src = img.attr('src');
        let title = img.attr('alt') || 'Peanuts';


        let date = $('time').attr('datetime');
        title = date ? `Peanut (${date})` : title;

        console.log(src);
        console.log(title);

        let prev = $('a[aria-label="Previous comic"]').attr('href');
        if (!prev) {
            prev = $('a[data-test-id="comic-nav-previous"]').attr('href');
        }
        if (!prev) break;
        if (!prev.startsWith('http')) prev = baseUrl + prev;
        url = prev;
    }
}
main();