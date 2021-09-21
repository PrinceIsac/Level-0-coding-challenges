function printVowels(string){
  
    let lowerCaseStr = string.toLowerCase();
    const foundVowels = [];
    let vowels = "aeiou";

    for(let index = 0; index<string.length;index++)
    {
        if(vowels[0] === lowerCaseStr[index])
        {
            if(vowels[0] !== foundVowels[index])
            foundVowels.push(vowels[0])
        }
        else if(vowels[1] === lowerCaseStr[index])
        {
            foundVowels.push(vowels[1]) 
        }
        else if(vowels[2] === lowerCaseStr[index])
        {
            foundVowels.push(vowels[2])
        }
        else if(vowels[3] === lowerCaseStr[index])
        {
            foundVowels.push(vowels[3])
         }
        else if(vowels[4] === lowerCaseStr[index])
        {
            foundVowels.push(vowels[4])
        }
    }
    
    //Remove Duplicates
    for(let index = 0; index < foundVowels.length;index++)
    {
        for(let x = 0; x < foundVowels.length;x++)
        {   
                if(index !== x)
                {
                    if(foundVowels[index] === foundVowels[x])
                    {
                        foundVowels.splice(x,1);
                    }
                }
               
        }
    }
    
        console.log("Vowels: " + foundVowels);
    
    
   
}

