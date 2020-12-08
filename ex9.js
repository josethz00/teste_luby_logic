function divideArray(value, divisions) {

    const newArr = [];
    let valueCopy = [...value];
    const numOfChild = Math.ceil(valueCopy.length / divisions);

    for (let i = 0; i < numOfChild; i++) {
      newArr.push(valueCopy.splice(0, divisions));
    }

    return newArr;

}

console.log(divideArray([1, 2, 3, 4, 5], 2));