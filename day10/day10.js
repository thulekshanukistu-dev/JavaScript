
function sum (number,number1){
  (sum=number+number1);
   return sum;
}
console.log (sum(10,20))

function sum (num1,num2,num3){
    (sum=num1+num2+num3);
    return sum;

}
console.log (sum(40,50,60))

let num1,num2,num3;
num1=10;
num2=20;
num3=30;

function sum(num1,num2){
    let sum=(num1+num2);
    return sum;
}
let output;
output = sum(num1,sum(num2,num3));
console.log("num1 is "+num1);
console.log("num2 is "+num2);
console.log("num3 is "+num3);
console.log(output);

//check palindrome
let str = "AMMA";
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return no;
        }
        j--;
    }
    return yes;
}



console.log(isPalindrome(str));
