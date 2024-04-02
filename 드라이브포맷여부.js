const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,  
});

rl.question('문자를 입력하세요 : ', function(ch) {
    if(ch == 'y') {
        console.log('포맷하겠습니다.');
    }
    else if(ch == 'n') {
        console.log("포맷하지 않겠습니다");
    }
    else {
        console.log("값이 유효하지 않습니다");
    }
    rl.close();
})