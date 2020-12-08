function arrayToObject (value) {

    const keyArr = [];
    const valArr = [];
    const result = {};

    for (let i=0; i<value.length; i++) {
        keyArr[i] = value[i][0];
        valArr[i] = value[i][1];
    }


    for (let j=0; j<keyArr.length; j++){
        result[keyArr[j]] = valArr[j]
    }
    
    return result;

}

console.log(arrayToObject ([["c",2],["d",4]]));