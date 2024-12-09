function findCommonNum(arr1, arr2) {
    const common = arr1.filter(num => arr2.includes(num));
    return common;
}

const result = findCommonNum([1, 3, 33, 8], [76, 8, 13, 54]);
console.log(result); 


