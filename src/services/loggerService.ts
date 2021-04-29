import { greenBright, red, yellow } from 'chalk';

const log = {
    info: (msg: string) => console.log(greenBright(msg)),
    console: (msg: string) => console.log(yellow(msg)),
    error: (msg: string) => console.log(red(msg)),
};

export default log;
