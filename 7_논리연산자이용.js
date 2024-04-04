var userName = 'Js';
var userPw = '1111';

function account(id,pw) {
    console.log(id);
    var name = 'Js';
    var password = '1111';

    pw=pw||'1111';
    // pw값이 undifined일 경우 '1111'대입 

    if(id==name) {
        if(userPw==password) {
            console.log('userName');
        }
    }
}
account(userName);