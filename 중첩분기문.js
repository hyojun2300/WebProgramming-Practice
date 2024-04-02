const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요 : ', function(num) {
    if(num >= 60 && num <=100) {
        if(num >=90) {
            console.log('장학생입니다');
        }
        else {
            console.log('합격입니다');
        }
    }
    else {
        if(num>=0 && num <60) {
            console.log('불합격입니다');
        }
        else {
            console.log("값이 중요하지 않습니다");
        }
    }
    rl.close();
})