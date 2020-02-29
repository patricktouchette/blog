function isPallindrome(str) {
    const value = '' + str;
    
    // split the string into array
    // reverse it
    // and then join is back into a string 
    const reversed = value.split('').reverse().join('')
    console.log(reversed);

    // check if the original value is the
    // same as the reversed value
    if (value === reversed ) {
        return true;
    }
    return false;


}

console.log(isPallindrome(123321));
console.log(isPallindrome('abba'));
console.log(isPallindrome('abbc'));
