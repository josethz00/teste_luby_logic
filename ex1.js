function genArray (rounds, value) {

    const newArr = [];
    let i;
    
    for (i=0; i<rounds; i++){
        newArr[i] = value;
    }

    return newArr;

}

console.log(genArray(3, 'a'));