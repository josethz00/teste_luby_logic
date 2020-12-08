function removeNested (value) {

    const newArr = [];

    for (let i=0; i< value.length; i++) {
        
        if (value[i].constructor.name === 'Array')
            value[i].forEach((val) => newArr.push(val));
        
        else
            newArr.push(value[i]);

    }

    return newArr;

}

console.log(removeNested([1, 2, [3], [4, 5]]))