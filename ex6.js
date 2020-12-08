function removeDuplicates (value) {

    const seen = {};
    const newArr = [];

    for (let i = 0; i < value.length; i++) {

        if (seen[value[i]] !== 1) {
            seen[value[i]] = 1;
            newArr.push(value[i]);
        }

    }

    return newArr;
}

console.log(removeDuplicates([1,2,3,3,2,4,5,4,7,3]));