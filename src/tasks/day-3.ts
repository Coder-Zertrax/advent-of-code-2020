/*
 * result 1:        274
 * result 2: 6050183040
 */

export default function start3(file: string) {
    let data: string[] = file.split("\n");

    let resultPart1: number = solvePart1(data);
    let resultPart2: number = solvePart2(data, resultPart1);

    console.log(`Day 3-1: ${resultPart1}`);
    console.log(`Day 3-2: ${resultPart2}`);
}

/**
 * Day 3 - Part 1
 */
function solvePart1(data: string[]): number {
    return solve(data, 3, 1);
}

/**
 * Day 3 - Part 2
 */
function solvePart2(data: string[], result1: number): number {
    let x1: number = solve(data, 1, 1);
    let x3: number = solve(data, 5, 1);
    let x4: number = solve(data, 7, 1);
    let x5: number = solve(data, 1, 2);

    return x1 * result1 * x3 * x4 * x5
}

function solve(data: string[], right: number, down: number) : number {
    let treeCount: number = 0;

    let lineLength: number = data[0].length;
    let x: number = 0;
    let y: number = 0;
    while (y < data.length) {
        if (x >= lineLength) x -= lineLength;
        if (data[y][x] === '#') treeCount++;

        x += right;
        y += down;
    }
    
    return treeCount;
}