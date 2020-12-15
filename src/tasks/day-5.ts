/*
 * result 1: 996
 * result 2: 671
 */

export default function start5(file: string) {
    const data: string[] = file.split("\n");

    const ids: number[]= calculateSeatIds(data);
    const resultPart1: number = solvePart1(ids);
    const resultPart2: number = solvePart2(ids);

    console.log(`Day 5-1: ${resultPart1}`);
    console.log(`Day 5-2: ${resultPart2}`);
}

/**
 * Day 5 - Part 1
 */
function solvePart1(ids: number[]): number {
    return Math.max(...ids);
}

/**
 * Day 5 - Part 2
 */
function solvePart2(ids: number[]): number {
    ids = ids.sort((a, b) => a - b);

    for (let i = 1; i < ids.length - 1; i++) {
        if (ids[i] + 1 !== ids[i + 1]) {
            return ids[i] + 1;
        }
    }
    
    return -1;
}

function calculateSeatIds(data: string[]): number[] {
    let ids: number[] = [];

    for (let i = 0; i < data.length; i++) {
        let line: string = data[i];
        let vector = [127, 0, 127, 7, 0, 7];

        // Rows
        for (let j = 0; j < 7; j++) {
            vector[0] = Math.round(vector[0] / 2);

            if (line[j] === "B") {
                vector[1] += vector[0];
            } else {
                vector[2] -= vector[0];
            }
        }

        // Colums
        for (let j = 7; j < 10; j++) {
            vector[3] = Math.round(vector[3] / 2);

            if (line[j] === "R") {
                vector[4] += vector[3];
            } else {
                vector[5] -= vector[3];
            }
        }

        let rowNr: number = vector[1];
        let colNr: number = vector[4];
        let id: number = rowNr * 8 + colNr;
        ids.push(id);
    }

    return ids;
}
