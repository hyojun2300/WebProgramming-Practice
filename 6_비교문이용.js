var userName = 'Js';
var userPw = '1111';

function account(id,pw) {
    console.log(id);
    var name = 'Js';
    var password = '1111';

    if(pw==undefined) {
        pw='1111';
    }
    if(id==name) {
        if(userPw==password) {
            console.log('userName');
        }
    }
}
account(userName);