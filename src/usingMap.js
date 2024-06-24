const map1 = new Map();
map1.set("manufacturer", "Asus");
map1.set("operating system", "windows");
map1.set("screen", 16);
map1.set("info", "none");
let screenSize = map1.get("screen");
console.log(map1);
console.log(screenSize);
//output: 16
console.log(map1.size);
//output: 4
map1.delete("screen");
console.log(map1);
//output: 3
