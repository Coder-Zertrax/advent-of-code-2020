/*
 * result 1: 239
 * result 2: 188
 */

export default function start4(file: string) {
    const data: string[] = file.split("\n\n");

    const resultPart1: number = solvePart1(data);
    const resultPart2: number = solvePart2(data);

    console.log(`Day 4-1: ${resultPart1}`);
    console.log(`Day 4-2: ${resultPart2}`);
}

/**
 * Day 4 - Part 1
 */
function solvePart1(data: string[]): number {
    let validCount: number = 0;

    for (let i = 0; i < data.length; i++) {
        let entry: string[] = data[i].split(/[\n\ ]/);

        if (entryHasValidSchema(entry)) {
            validCount++;
        }
    }

    return validCount;
}

/**
 * Day 4 - Part 2
 */
function solvePart2(data: string[]): number {
    let validCount: number = 0;

    for (let i = 0; i < data.length; i++) {
        let entry: string[] = data[i].split(/[\n\ ]/);

        if (entryIsValid(entry)) {
            validCount++;
        }
    }

    return validCount;
}

function entryIsValid(entry: string[]): boolean {
    if (!entryHasValidSchema(entry)) {
        return false;
    }

    for (let j = 0; j < entry.length; j++) {
        let prop: string[] = entry[j].split(":");
        let name: string = prop[0];
        let value: string = prop[1];

        switch (name) {
            case "byr":
                if (isNotBetween(value, 1920, 2002)) return false;
                break;

            case "iyr":
                if (isNotBetween(value, 2010, 2020)) return false;
                break;

            case "eyr":
                if (isNotBetween(value, 2020, 2030)) return false;
                break;

            case "hgt":
                const REGEX_CM = /[0-9]{3}cm$/;
                const REGEX_IN = /[0-9]{2}in$/;
                let rcm: boolean = !!value.match(REGEX_CM);
                let rin: boolean = !!value.match(REGEX_IN);

                if (
                    (!rcm && !rin) || 
                    (rcm && isNotBetween(value, 150, 193)) ||
                    (rin && isNotBetween(value, 59, 76))
                ) {
                    return false;
                }
                break;

            case "hcl":
                const REGEX_HCL = /#[0-9a-f]{6}/m;
                if (!value.match(REGEX_HCL)) return false;
                break;

            case "ecl":
                const ECL_VALID_VALUES: string[] = [
                    "amb",
                    "blu",
                    "brn",
                    "gry",
                    "grn",
                    "hzl",
                    "oth",
                ];
                if (ECL_VALID_VALUES.indexOf(value) === -1) return false;
                break;

            case "pid":
                const REGEX_PID = /^[0-9]{9}$/m;
                if (!value.match(REGEX_PID)) return false;
                break;
        }
    }

    return true;
}

function entryHasValidSchema(entry: string[]): boolean {
    if (
        entry.length === 8 ||
        (entry.length === 7 && !entry.find((v) => v.startsWith("cid")))
    ) {
        return true;
    }
    return false;
}

function isNotBetween(value: string, min: number, max: number) {
    let valueInt: number = parseInt(value);
    return valueInt < min || valueInt > max;
}
