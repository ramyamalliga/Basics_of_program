const strings = ["hello", "world", "racecar","madam", "apple"];
const firstPalindrome = findFirstPalindrome(strings);
console.log(firstPalindrome); 

function isPalindrome(str){
    str =str.toLowerCase();
    str =str.replace(/[^a-z0-9]/);
    return str === str.split('').reverse().join('');
}
function findFirstPalindrome(arr){
    for (let i=0; i < arr.length; i++){
        if(isPalindrome(arr[i])){
            return arr[i];
        }
    }
    return null;
    
}
