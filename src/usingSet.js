const a = new Set([1, 2, 3, 2]);
const c = new Set([1, 2, 3, 5]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
const d = [2 + 2, "hey", a, giveNumber()];
console.log(d);
function giveNumber() {
  return 5;
}
