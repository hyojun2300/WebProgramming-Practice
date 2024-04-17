const color = ['red','green','blue'];

let r=color[0];
let g=color[1];
let b=color[2];

let [r2,g2,b2]  = color;
[b2,g2,r2] = [r2,g2,b2]

console.log(r);
console.log(g);
console.log(b);

console.log(r2);
console.log(g2);
console.log(b2);

// let user = {
//     id:'java',
//     pw:'1111',
//     name:'자바',
//     age:30
// };

// let id=user.id;
// let pw=user.pw;
// let name=user.name;
// let age=user.age;

// console.log(id);
// console.log(pw);
// console.log(name);
// console.log(age);

const [,,x,y,z='python'] = ['C','js','reaact'];
console.log(x);
console.log(y);
console.log(z);

const [e,f, ...rest] = ['C','JS','Python','React','C++'];
console.log(e);
console.log(f);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);

const arr1=['C','JS'];
const arr2=['python','react','C++'];
const arr3=[arr1,arr2];
console.log(arr3);
const arr4=[...arr1,...arr2];
console.log(arr4);


let user = {
    name: '잠수함',
    age:30,
};

let {id='guest', pw='1234', name,age} = user;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);

let {id2,...reamining} = user;
console.log(id2);
console.log(reamining.age);
console.log(reamining.name);
console.log(reamining.pw);