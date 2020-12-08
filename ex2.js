function revertArray (value) {

    const newArr = [];
    let i= value.length - 1;
    
    for (i; i>=0; i--) {
        newArr.push(value[i]);
    }

    return newArr;

}

console.log(revertArray([1,2,3,4,5]));