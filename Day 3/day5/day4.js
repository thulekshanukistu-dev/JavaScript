//for days
let day =1;
switch(day){
    case 1:{
        console.log("monday");
    }
    break;
    case 2:{
        console.log("tuesday");
    }
    break;
    case 3:{
        console.log('wednesday');

    }
        break;
    case 3:{
        console.log("thursday");
    }
        break;
    case 4:{
        console.log("friday");
    }
        break;
    default :{
        console.log("weekend");
    }
}



//write a program that asks the time//
let time = 12;
switch(time){
    
    case 5:{
        console.log("good morning");
    }
    break;
    case 6:{
        console.log("good morning");
    }
    break;
    case 7:{
        console.log("good morning");
    }
    break;
      case 8:{
        console.log("good morning");
    }
    break;
         case 9:{
        console.log("good morning");
        }
        break;
         case 10:{
        console.log("good morning");
        }
            break;
         case 11:{
        console.log("good morning");
        }
            break;
         case 12:{
        console.log("good afternoon");
        }
        

            break;
         case 13:{
        console.log("good afternoon");
        }
            break;
         case 14:{
        console.log("good afternoon");
        }
            break;
         case 15:{
        console.log("good afternoon");
        }
            break;
         case 16:{
        console.log("good afternoon");
        }
            break;
         case 17:{
        console.log("good afternoon");
        }
            break;
         case 18:{
        console.log("good night");
        }
            break;
         case 19:{
        console.log("good night");
        }
            break;
         case 20:{
        console.log("good night");
        }
        break;
         case 21:{
        console.log("good night");
        }
        

            
    
}




function greetings(time){
    switch(time){
        case (time>=5 && time<12 ):
            console.log("good morning");
            break;
            case (time>=12 && time<17):
                console.log("good afternoon");
           case (time>=17 && time<21):
                console.log("goodnight")
    }

}
greetings(19);

//for loop 

for(let i=1; i<5;i++){
    console.log("count",i);
}


//for while


let i = 0;
while (i < 3) {
    console.log("number:",i);
    i++;
}