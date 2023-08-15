const findTheOldest = function(arr) {
    let result = arr.reduce((oldest, current) => {
        if (!("yearOfDeath" in oldest)) oldest.yearOfDeath = new Date().getFullYear();
        if (!("yearOfDeath" in current)) current.yearOfDeath = new Date().getFullYear();

        if((oldest.yearOfDeath-oldest.yearOfBirth) < (current.yearOfDeath-current.yearOfBirth)) {
            oldest = current;
        }
        console.table(oldest);
        return oldest;
    },arr[0]);
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
