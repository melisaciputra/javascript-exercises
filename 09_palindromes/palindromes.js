const palindromes = function (str) {

    const arr = Array.from(str.toUpperCase().replace(/(?![0-9A-Z])./g, ''));
    let i = 0;
    let j = arr.length-1;
    while(i <= j){
        if (arr[i] != arr[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
