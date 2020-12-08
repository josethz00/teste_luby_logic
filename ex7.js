const isArrayEqual = (value1, value2) => JSON.stringify(value1)==JSON.stringify(value2);
console.log(isArrayEqual([1,2,3,4], [1,2,3,4]));