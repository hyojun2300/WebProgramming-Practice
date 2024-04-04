var nickName=function() {
    console.log('J');
};
nickName();

var userName = nickName;
userName();

nickName=function() {
    console.log('S');
};
nickName();