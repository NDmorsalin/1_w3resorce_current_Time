
var date=new Date();
// see today by switch
switch(date.getDay()){
    case 0: 
        toDay="Today is Sunday";
        break;
   case 1: 
        toDay="Today is Monday";
        break;
   case 2: 
        toDay="Today is Tuesday";
        break;
   case 3: 
        toDay="Today is Wednesday";
        break;
   case 4: 
        toDay="Today is Thursday";
        break;
   case 5: 
        toDay="Today is Friday";
        break;
   case 6: 
        toDay="Today is Saturday";
        break;
        
}
console.log(toDay);
//see toDay by if else..
if ( date.getDay() === 0){
    ifToDay = "Today is Sunday";
}else if( date.getDay() === 1){
    ifToDay = "Today is Monday";
}else if( date.getDay() === 2){
    ifToDay = "Today is Tuesday";
}else if( date.getDay() === 3){
    ifToDay = "Today is Wednesday";
}else if( date.getDay() === 4){
    ifToDay = "Today is Thursday";
}else if( date.getDay() === 5){
    ifToDay = "Today is Friday";
}else {
    ifToDay = "Today is Saturday";
}
console.log(ifToDay);


//current time

 
 function currentTime(time){
     var date=new Date(),toDay;
     var hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),ap;
     
    if(hour === 0){
         ap = " AM";
         hour = 12;
     }
     else if(hour < 12){
        ap = " AM";
     }
     else if(hour === 12){
         ap = " PM";
     }
    else if(hour > 12){
         ap = " PM";
         hour = hour - 12;
     }
     
        if(hour <= 9)
            {
             hour = "0" + hour;
             }
        if(minute <= 9) {
            minute = "0" +minute;
            }
        if(second <= 9){
            second= "0" +second;
            }

        time = hour + ap + " : " + minute 
                 + " : " + second ;
       console.log(time);
       return;
 };
setInterval(currentTime,1000);
currentTime();
 
 /*
 function factorial(num){
     fac=1;
     for(var i=1;i<=num;i++){
         fac*=i;
     }
     return fac;
 }
 console.log(factorial(5));
 */
 function tm(){
 var dt = new Date();
 var hr = dt.getHours(),
     min = dt.getMinutes(),
     sec = dt.getSeconds();
     
var ap = (hr >= 12) ? " PM ": " AM ";
hr = (hr >= 12) ? hr - 12 : hr;

if(hr === 0 && ap === " PM "){
    if(min === 0 && sec === 0){
        ap = " Noon";
        hr = 12;
    }
    else{
        ap = " PM ";
        hr = 12;
    }
}

if(hr === 0 && ap === " AM "){
    if(min === 0 && sec === 0){
        ap = " Midnight ";
        hr = 12;
    }
    else{
        ap = " AM ";
        hr = 12;
    }
}
if(hr <= 9) hr = "0" + hr;
if(min <= 9) min = "0" + min;
if(sec <= 9) sec = "0" + sec;
console.log("Now " + hr + ap + " : " +
            min + " : " + sec +" O clock");

}
setInterval(tm,1000);
tm();

