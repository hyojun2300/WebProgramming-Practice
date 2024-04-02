const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

rl.question('단축키를 입력하세요 : ', function(ch) {
    switch(parseInt(ch)) {
        case 1 : 
            console.log("엄마한테 전화가 걸린다.");
            break;
        case 2 : 
            console.log("아빠한테 전화가 걸린다.");
            break;
        case 3 : 
            console.log("동생한테 전화가 걸린다.");
        case 4 : 
            console.log("해당 단축키가 없습니다.");
            break;
    }
    rl.close();
})