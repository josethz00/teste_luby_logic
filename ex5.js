function removeElements (value, num1, num2) {
    
    const newArr = [];

    for (let i=0; i < value.length; i++) {

        if (value[i] !== num1 && value[i] !== num2) {
            newArr.push(value[i]);
        }
        
    }

    return newArr;

}

console.log(removeElements([5,4,3,2,5], 5,3));