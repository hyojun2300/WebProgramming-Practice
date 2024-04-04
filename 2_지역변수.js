console.log('지역변수');
function account() {
  var userName = "이은성";
  console.log("반갑습니다 " + userName + "님");
}
account();
// console.log(userName);

console.log();

function naver() {
    console.log('Naver function start');
    var userName="J";
    google();
    console.log('Naver function end');
}

function google() {
    console.log('Google function start');
    var userName = 'S';
    console.log('Google function end');
}
naver();

