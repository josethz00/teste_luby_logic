function cleanArray (value) {

    const newArr = [];

    for (let i=0; i<value.length; i++){

        if (!!value[i]){
            newArr[i] = value[i]
        }
        
    }

    return newArr;

}

console.log(cleanArray([1,2,'', undefined]));