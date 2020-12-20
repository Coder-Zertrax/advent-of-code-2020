/*
 * result 1:   139
 * result 2: 58175
 */

interface HashMap {
    [details: string]: {
        items: Bag[];
        visited: boolean;
    };
}

interface Bag {
    name: string;
    count: number;
}

const NAME_REGEX = /(\d )?(\w* \w*)(?: bag)?/;

export default function start7(file: string) {
    const data: string[] = file.split('\n');

    const resultPart1: number = solvePart1(data);
    const resultPart2: number = solvePart2(data);

    console.log(`Day 7-1: ${resultPart1}`);
    console.log(`Day 7-2: ${resultPart2}`);
}

function solvePart1(data: string[]): number {
    // Init bags-Hashmap
    let bags: HashMap = {};
    for (let i = 0; i < data.length; i++) {
        let e: string[] = cleanUp(data[i]);

        e.slice(1).forEach((c) => {
            const name: string = c.split(':')[1];
            if (!bags[name]) {
                bags[name] = {
                    visited: false,
                    items: [],
                };
            }
            bags[name].items.push({ name: e[0], count: 0 });
        });
    }

    // Calculate Count
    let c: number = 0;
    let keys: Bag[] = bags['shiny gold'].items;
    let next: Bag = keys.pop();
    while (next !== undefined) {
        if (bags[next.name] === undefined) {
            bags[next.name] = {
                visited: true,
                items: [],
            };
            c++;
        } else if (!bags[next.name].visited) {
            keys = keys.concat(bags[next.name].items);
            bags[next.name].visited = true;
            c++;
        }
        next = keys.pop();
    }
    return c;
}

/**
 * Day 7 - Part 2
 */
function solvePart2(data: string[]): number {
    // Init bags-HashMap
    let bags: HashMap = {};
    for (let i = 0; i < data.length; i++) {
        let e: string[] = cleanUp(data[i]);

        bags[e[0]] = { items: [], visited: false };
        e.slice(1).forEach((c) => {
            let b: string[] = c.split(':');
            bags[e[0]].items.push({
                name: b[1],
                count: parseInt(b[0]),
            });
        });
    }

    return calculateSum(bags, bags['shiny gold'].items) - 1;
}

function cleanUp(data: string): string[] {
    return data
        .replace(' bags contain', ',')
        .replace(' no other bags', '')
        .split(', ')
        .map((e) => {
            let m = e.match(NAME_REGEX);
            if (m[1] === undefined) {
                return m[2];
            } else {
                return `${m[1].trim()}:${m[2]}`;
            }
        });
}

function calculateSum(bagsMap: HashMap, bags: Bag[]): number {
    let sum: number = 1;
    bags.forEach((b) => (sum += b.count * calculateSum(bagsMap, bagsMap[b.name].items)));
    return sum;
}
