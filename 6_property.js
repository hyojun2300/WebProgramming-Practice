const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다`;
    },
    attack2(weapon) {
        return `${weapon}으로 공격한다`;
    }
}

console.log(unit.attack('주먹'));
console.log(unit.attack('총'));
console.log(unit.attack2('총'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("무조건 천원, 상품입력 : ", function(Object){
    let basket={
        [Object] : "1000원",
    }
    console.log(basket[Object]);

    rl.close();
});

// 단축 프로퍼티

let id = 'js';
let pw = '111';

// let user = {
//     id : id,
//     pw : pw,
// }

let user = {             
    pw,
}

console.log(user.id);
console.log(user.pw);

for(let info in user) {
    console.log(`${info} : ${user[info]}`);
}