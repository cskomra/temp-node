// destructure: readFileSync is coming from the module fs
const {readFileSync, writeFileSync} = require('fs');

console.log('start\n');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

const flag = {flag: 'a'};

writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second} \n`,
flag);

console.log('done with this task\n');
console.log('starting the next one\n');