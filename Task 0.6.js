function returnMax(){
    let highest = arguments[0];

    for(let index = 0; index <= arguments.length; index++)
    {
        if(arguments[index] > highest)
        {
            highest = arguments[index];
        }
    }
    

    return highest;
}




