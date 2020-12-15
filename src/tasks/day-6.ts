/*
 * result 1: 6583
 * result 2: 3290
 */

export default function start5(file: string) {
    const data: string[] = file.split("\n\n");

    const resultPart1: number = solvePart1(data);
    const resultPart2: number = solvePart2(data);

    console.log(`Day 6-1: ${resultPart1}`);
    console.log(`Day 6-2: ${resultPart2}`);
}

/**
 * Day 6 - Part 1
 */
function solvePart1(data: string[]): number {
    let sum: number = 0;

    for (let i = 0; i < data.length; i++) {
        sum += new Set(data[i].replace(/\r?\n|\r/g, "").split("")).size;
    }

    return sum;
}

/**
 * Day 6 - Part 2
 */
function solvePart2(data: string[]): number {
    let sum: number = 0;

    for (let i = 0; i < data.length; i++) {
        let entry: string[] = data[i].split("\n");

        let first: Set<string> = new Set(entry[0]);
        for (let j = 1; j < entry.length; j++) {
            let temp = new Set(entry[j]);

            first.forEach(c => {
                if (!temp.has(c)) {
                    first.delete(c);
                }
            });
        }

        sum += first.size;
    }

    return sum;
}