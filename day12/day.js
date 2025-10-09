let word ="good man"
function isPalindrome(word){
    let boolean=true;
    for(let i=0; i<word.length/2; i++){
        if (word.charAt(i)!==word.charAt(word.length-1-i)) {
            boolean=false;
        }
    }
    return boolean;
}
//function randomnumber(array,number){
  //  for (let i=0;i<array,number;i++){
  //      if (array[i]==number)

   // }
//
let array = [];
let uniquenumbers= []
array=randomnumber();
console.log(array);

 