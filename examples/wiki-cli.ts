import { SWIKI } from './mod.ts'

const swiki = new SWIKI();

let result = await swiki.run();
console.log(result);
