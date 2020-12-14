import start1 from './tasks/day-1.js';
import start2 from './tasks/day-2.js';

downloadFile(1).then(v => start1(v));
downloadFile(2).then(v => start2(v));

async function downloadFile(day: number) {
    let response = await fetch(`./dist/data/input-${day}.txt`);

    if (response.status != 200) {
        throw new Error("Server Error");
    }

    return await response.text();
}