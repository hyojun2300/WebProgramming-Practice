console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(true&&false);

console.log();

var id = 'JJJJ';
var pw = '1111';
var result = (id == 'JJJJ' && pw == '1111') ? "로그인" : "틀림";
console.log(result);
var result = (id == 'JJJJ' && pw == 1111) ? "로그인" : "틀림";
console.log(result);

console.log();

console.log(false&&'J');
console.log(true&&'J');
console.log('j'&&false);
console.log('j'&&true);
console.log('j'&&'1111');
console.log(null&&false);

