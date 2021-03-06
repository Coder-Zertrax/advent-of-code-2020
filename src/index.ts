import start1 from './tasks/day-1.js';
import start2 from './tasks/day-2.js';
import start3 from './tasks/day-3.js';
import start4 from './tasks/day-4.js';
import start5 from './tasks/day-5.js';
import start6 from './tasks/day-6.js';
import start7 from './tasks/day-7.js';

downloadFile(1).then((v) => start1(v));
downloadFile(2).then((v) => start2(v));
downloadFile(3).then((v) => start3(v));
downloadFile(4).then((v) => start4(v));
downloadFile(5).then((v) => start5(v));
downloadFile(6).then((v) => start6(v));
downloadFile(7).then((v) => start7(v));

async function downloadFile(day: number) {
    let response = await fetch(`./dist/data/input-${day}.txt`);

    if (response.status != 200) {
        throw new Error('Server Error');
    }

    return await response.text();
}
