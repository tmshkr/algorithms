const times10 = n => n * 10;

console.log("times10(9):", times10(9));

function memoize(fn) {
  const cache = {};

  return (...args) => {
    const key = args.toString();
    if (key in cache) {
      console.log("found in cache");
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedTime10 = memoize(times10);

console.log("memoizedTime10(5):", memoizedTime10(5));
console.log("memoizedTime10(6):", memoizedTime10(6));
console.log("memoizedTime10(5):", memoizedTime10(5));
