//if check whether a year is leap year or not.
var Num = 2020 ;
function checkthenumber(Num)  {
   
    if (Num%4==0)
        return "leap year" ;
    else 
        return "not";
 

 }
    console.log(checkthenumber(Num))




//write a program that takes three numbers and prints the latgest number.
var num1=10
var num2=20
var num3=30
function checknumer(num1,num2,num3){
    if (num1>num2)
        return "numer 1 is largest number";
    else if (num2>num3)
        return "number 2 is largest number";
    else if (num3>num2)
        return "number 3 is largest number";
}
console.log (checknumer(num1,num2,num3))


var char = "f"
function checkvovels(char){
    if ( char=="a" || char=="e" || char== "i" ||char== "o"||char== "u" )
        return "it is a vawol"
    else
        return "consonant"
}
console.log(checkvovels(char))


let marks1 = 40
let marks2 = 60
let marks3 = 70 

let average = (marks1 + marks2 +marks3)/3
function result(average) {
      if (average>=40)
        return "pass"
    else
        return "fail"
}
console.log(result(average))

