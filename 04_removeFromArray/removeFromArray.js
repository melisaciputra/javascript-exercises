const removeFromArray = function(arr, ...filterItems) {
    for (let i = 0; i< filterItems.length; i++){
        arr = arr.filter(function(e) { return e !== filterItems[i]; });
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
