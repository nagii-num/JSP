function sumOfDigits(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    return sum;
  }
  let number = 96472;
  let result = sumOfDigits(number);
  console.log(result)
  