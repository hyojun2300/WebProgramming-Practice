const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,  
});

rl.question('점수 입력 : ', function(score) {
    if(score>=91 && score <=100) {
        console.log('A');
    }
    else if(score >=81 && score <= 90) {
        console.log('B');
    }
    else if(score >=71 && score <= 80) {
        console.log('B');
    }
    else if(score >=61 && score <= 70) {
        console.log('B');
    }
    else if(score >=0 && score <= 60) {
        console.log('B');
    }
    else {
        console.log('범위를 벗어남');
    }
    rl.close();
}) 