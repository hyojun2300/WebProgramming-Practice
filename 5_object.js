let dic = new Object();

dic.boy = "소년";
dic.girl = '소녀';
dic.friend = '친구';

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

let dic2 = {
    boy: "소년2",
    girl: "소녀2",
    friend: "친구2"
};

console.log(dic2.boy);
console.log(dic2.girl);
console.log(dic2.friend);

// 추가
dic2.apple = '사과';
dic2.ten = 10;
console.log(dic2.apple);
console.log(dic2.ten);

//삭제 
delete dic2.girl;
console.log(dic2.girl);

// 수정
dic.present='현재';
console.log(dic.present);
dic.present='선물';
console.log(dic.present);

const dic3 = {
    present:"현재",
};
dic3.present='선물';
console.log(dic3.present);


