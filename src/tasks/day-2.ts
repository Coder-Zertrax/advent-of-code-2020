/*
 * result 1: 414
 * result 2: 413
 */

export default function start2(file: string) {
    let data: string[] = file.split("\n");

    let resultPart1: number = solvePart1(data);
    let resultPart2: number = solvePart2(data);

    console.log(`Day 2-1: ${resultPart1}`);
    console.log(`Day 2-2: ${resultPart2}`);
}

/**
 * Day 1 - Part 1
 */
function solvePart1(data: string[]): number {
    let validCount: number = 0;
    for (let i = 0; i < data.length; i++) {
        let entry: string[] = data[i].split(/[\ :-]+/);
        let min: number = parseInt(entry[0]);
        let max: number = parseInt(entry[1]);
        let char: string = entry[2];
        let password: string = entry[3];

        let temp: number = 0;
        for (let j = 0; j < password.length; j++) {
            if (password[j] === char) temp++;
        }

        if (temp >= min && temp <= max) {
            validCount ++;
        }

    }
    return validCount;
}

/**
 * Day 1 - Part 2
 */
function solvePart2(data: string[]): number {
    let validCount: number = 0;
    for (let i = 0; i < data.length; i++) {
        let entry: string[] = data[i].split(/[\ :-]+/);
        let index1: number = parseInt(entry[0]) - 1;
        let index2: number = parseInt(entry[1]) - 1;
        let char: string = entry[2];
        let password: string = entry[3];

        let first: boolean = password[index1] === char;
        let second: boolean = password[index2] === char;

        if (first ? !second : second) {
            validCount++;
        }
    }
    return validCount;
}
