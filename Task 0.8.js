function convertNumToTime(number){

    let hours = Math.floor( number / 60);
    let minutes = number % 60;

    if(hours > 1 && minutes > 1)
    {
        console.log(hours +" hours, " + minutes + " minutes");
    }
    else if(hours > 1 && minutes < 2)
    {
        console.log(hours +" hours, " + minutes + " minute");
    }
    else if(hours < 2 && minutes < 2 )
    {
        console.log(hours +" hour, " + minutes + " minute");
    }
    else if(hours < 2 && minutes > 1 )
    {
        console.log(hours +" hour, " + minutes + " minutes");
    }
   
}


    