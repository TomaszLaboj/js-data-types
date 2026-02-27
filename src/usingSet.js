const a = new Set([1, 2, 3, 2]);
const c = new Set([1, 2, 3, 5]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }

