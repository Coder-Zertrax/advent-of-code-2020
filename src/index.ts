import start1 from './tasks/task-1.js';

downloadFile(1).then(v => start1(v));

async function downloadFile(day: number) {
    let response = await fetch(`./dist/data/input-${day}.txt`);

    if (response.status != 200) {
        throw new Error("Server Error");
    }

    return await response.text();
}