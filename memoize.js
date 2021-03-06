const times10 = n => n * 10;

console.log("times10(9):", times10(9));

function memoize(fn) {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log(`${key} found in cache`);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedTimes10 = memoize(times10);

console.log("memoizedTimes10(5):", memoizedTimes10(5));
console.log("memoizedTimes10(6):", memoizedTimes10(6));
console.log("memoizedTimes10(5):", memoizedTimes10(5));
