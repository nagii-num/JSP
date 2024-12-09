function numberofLetters(str){
    let count=0;
    for (let i = 0; i < str.length; i++){
        if (/[a-zA-Z]/.test(str[i])) {
            count++;
        }

    }
    return count;

}
let inputWords="numentica ui internship";
let result=numberofLetters(inputWords);
console.log(result);
