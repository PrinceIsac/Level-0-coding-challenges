function commonChars(string1, string2){
    let charsInCommon = [];
    let shortestWord = string1.toLowerCase();
    let longestWord = string2.toLowerCase();

    if(string2.length < shortestWord.length)
    {
        shortestWord = string2;
        longestWord = string1;
    }

    for(let index = 0; index < longestWord.length;index++)
    {
        for(let x = 0; x < longestWord.length;x++)
        {
            if(shortestWord[index] === longestWord[x])
            {
                charsInCommon.push(shortestWord[index]);
                break;
            }
           
        }
       
    }
   
   
    console.log("Common letter: "+ charsInCommon);

}

