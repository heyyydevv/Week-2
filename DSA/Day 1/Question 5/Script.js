function countVowels(str) {
    let count = 0;
        let vowels = 'aeiou';
    
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        } 
        return count;

  
    }
    console.log(countVowels("javascript"));  // Output: 3
    
