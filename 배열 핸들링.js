var arr = new Array();
var arr = [];

var arr1 = ['Javascript', 'C', 'Python'];

for(var i=0;i<3;i++) {
    console.log(arr1[i]);
}

console.log();

console.log('==== 배열에 데이터 추가 ====');

arr1.push('ASP.net');
arr1.push('C#,net');

console.log();

console.log('==== 배열 출력 ====');
for(var i=0;i<arr1.length;i++) {
    console.log(arr1[i]);
}