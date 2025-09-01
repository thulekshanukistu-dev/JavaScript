//write a program that checks if a number is prime (using only if...else)
    var num = 6
    function checknumer(num){
        if (num%num==0)
            return "prime number"
        else 
            return "prime number not "

    }
    console.log(checknumer(num))

    //A shop gives discounts based on purchase amount//
    var prize =6000
    function checkprize(prize){
        if( prize>5000)
            return prize*0.8
        else if (prize>2000)
            return prize*0.9
        else if(prize<2000) 
            return "no discount"

            

    }
    console.log(checkprize(prize))

    //check whether a person BMI shows//
    var weight=30
    var hight= 140
    function BMI(a,b){
      if(a/(b*b)>=30)
        return "obese"
    else if (a/(b*b)>=25)
        return "overweight"
    
    else if (a/(b*b)>=20)
    return "normal";
     
    else
        return "underweight"


    }
    console.log(BMI(weight,hight))
    
    // create a simple grading system//
    var marks  =90
    function checkresult(marks){
        if(90<=marks)
            return "A"
        else if (75<=marks)
            return "B"
        else if (50<=marks)
            return "C"
        else 
            return "F"

    }
    console.log(checkresult(marks))

    