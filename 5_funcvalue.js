var userName = 'Js';
var userPw = '1111';

function account(id,pw='1112') {
    console.log(id);
    var name = 'Js';
    var password = '1111';

    if(id==name) {
        if(userPw==password) {
            console.log('userName');
        }
    }
}
account(userName,userPw);