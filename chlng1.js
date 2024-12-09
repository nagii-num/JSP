
function getPositiveNumbers(arr) {
    let positiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveNumbers.push(arr[i]);
      }
    }
    return positiveNumbers;
  }
   inputArray = [-14, 4, 5, -2, 76];
   result = getPositiveNumbers(inputArray);
  console.log(result)
  