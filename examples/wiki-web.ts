import { SWIKI } from './mod.ts'

const swiki = new SWIKI();

let result1 = await swiki.run("baju");
console.log(result1);

console.log("\n ==== \n")

let result2 = await swiki.run("rumah");
console.log(result2);
