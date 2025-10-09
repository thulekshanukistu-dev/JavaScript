let  numbers = [];


function addanelemant(numbers,index,valve) {
    if ( index<0 || index>numbers.lengh) {
        console.log("invaild index value");

    }
    else {
        numbers.splice(index,0,valve);
        console.log("new array is "+numbers);
    }
}
addanelemant(numbers ,0 ,5)


function printallement(numbers){
    console.log(numbers);

}
printallement(numbers)


 

 function findmax(number){
    let max=number[0];
    for (let i=1; i<numbers.lengh; i++){
        if (max<numbers[i]){
            max=numbers[i];
        }
    }
    console.log("the maximum value in this array is : "+max);

 }

 findmax(numbers);
 
 var num = [1,2,3,4,5,6,7]
function addingnumber(num){
    let sum = 0;
    for (let i=0 ; i<num.length; i++){
         sum += num[i];
         
        }
         console.log("Total "+sum);   
        }

addingnumber(num);