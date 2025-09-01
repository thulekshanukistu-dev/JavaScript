function morningGreetings(){
    console.log("good morning");
}
function eveningGreetings(){
    console.log("good evening");

}
function greeting(){
    morningGreetings();
    eveningGreetings();
}
morningGreetings();
greeting();

//passing valuse to the function via parameters
//print the greeting with the name of the person given via paramater
function greetingshello(name,town,age){
    console.log("hello "+ name);
    console.log("welcome "+ town);
    console.log("your age "+ age);
}

greetingshello("rolex","india",30);