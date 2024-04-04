console.log('이름을 여러 번 호출');
function show() {
    console.log('Hello JS');
}
show();
show();
show();

console.log('매개변수가 있는 함수')
function plus(a,b) {
    console.log('두 수의 합 : ' +(a+b));
}
plus(2,4);
plus('J','S');
plus(3.14,1.59);

