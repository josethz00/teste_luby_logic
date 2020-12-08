const arrayIntersection = (value1, value2) => value1.filter(val => value2.includes(val));
console.log(arrayIntersection([6, 8], [8, 9]));