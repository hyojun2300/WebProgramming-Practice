const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("단수 : ", function(num) {
    var i=1;
    while(i<10) {
        console.log(num*i);
        i++;
    }
});