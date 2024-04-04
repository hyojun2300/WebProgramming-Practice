function plus(a,b) {
    return(a+b);
}

var a = plus(10,20);
console.log(a);
console.log();

const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function checkAge(age) {
    if(age>19) {return true;}
    else {return false;}
}

rl.question("age : " ,function(age)
{
    if(checkAge(age)) {
        console.log('입장가능');
    }
    else {
        console.log('입장불가능');
    }
    rl.close();
});
