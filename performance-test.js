const n = 3500;

let result;

console.time('performance');

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    result = Math.random();
    // for (let k = 0; k < n; k += 1) {
    // }
  }
}

console.timeEnd('performance');
