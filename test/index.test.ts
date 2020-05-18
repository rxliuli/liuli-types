import { Async } from "../src/func/Async";
import { AsyncFunc } from "../src/func/AsyncFunc";
import { Func } from "../src/func/Func";

const func: () => number = () => 0;
const asyncFunc: Async<typeof func> = () => Promise.resolve(0);
function f1(func: AsyncFunc) {}
f1(asyncFunc);
function f2(func: Func) {}
f2(func);
