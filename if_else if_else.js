const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요 : ', function(num) {
    if(num >= 90 && num <=100) {
        console.log('장학생입니다');
    }
    else if (num>=60 && num < 90){
        console.log('합격입니다');
    }
    else {
        console.log("값이 유효하지 않습니다")
    }
    rl.close();
})