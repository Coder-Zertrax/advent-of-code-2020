/*
 * result 1:    921504
 * result 2: 195700142
 */

export default function start1(file: string) {
    let data: string[] = file.split("\n");

    let resultPart1: number = solvePart1(data);
    let resultPart2: number = solvePart2(data);

    console.log(`Task 1-1: ${resultPart1}`);
    console.log(`Task 1-2: ${resultPart2}`);
}

/**
 * Day 1 - Part 1
 */
function solvePart1(data: string[]): number {
    for (let i = 0; i < data.length; i++) {
        let first: number = parseInt(data[i]);

        for (let j = 0; j < data.length; j++) {
            let second: number = parseInt(data[j]);

            if (first + second === 2020) {
                return first * second;
            }
        }
    }
}

/**
 * Day 1 - Part 2
 */
function solvePart2(data: string[]): number {
    for (let i = 0; i < data.length; i++) {
        let first: number = parseInt(data[i]);

        for (let j = 0; j < data.length; j++) {
            let second: number = parseInt(data[j]);

            for (let k = 0; k < data.length; k++) {
                let third: number = parseInt(data[k]);

                if (first + second + third === 2020) {
                    return first * second * third;
                }
            }
        }
    }
}
