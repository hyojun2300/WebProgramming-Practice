const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("단수 : ",function(data) {
    for(var i=1;i<10;i++) {
        console.log(data+'x'+i+'='+data*i);
    }
    rl.close();
});