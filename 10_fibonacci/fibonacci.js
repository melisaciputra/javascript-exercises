const fibonacci = function(input) {

    let num = 0;
    if (typeof input === 'string') num = parseInt(input);
    if (num < 0 ) return "OOPS";
        
    let current = 0;
    let prev = 0;
    let prevprev = 0;
    let i = 1;

    while(i<=num){
        if (i == 1) {
            current = 1;
        }
        else if(i > 1){
            current = prev + prevprev;
        }
        
        prevprev = prev;
        prev = current;
        i++;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
