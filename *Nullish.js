var id = "jam";
var result = (id ?? jam)
? "아이디가 입력되었습니다" : "아이디가 입력되지 않았습니다";

console.log(result);

console.log();

var id2 = "";
var result2 = (id??null)? "아이디가 입력" : "아이디 입력되지 않음";

console.log(result2);