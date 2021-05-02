import { greenBright, red, yellow, magenta } from 'chalk';

export const log = {
    info: (msg: string) => console.log(greenBright(msg)),
    console: (msg: string) => console.log(yellow(msg)),
    error: (msg: string) => console.log(red(msg)),
};

export const clientMsg = {
    red: (msg: string) => red(msg),
    magenta: (msg: string) => magenta(msg),
};
