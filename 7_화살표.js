let plus = (a,b) => 
{
    return a+b;
}
// let plus = (a,b) => a+b;

let result = plus(10,20);
console.log(result);

plus = a => a+1;

result = plus(10);
console.log(result);

plus = () => "PLUS";
result = plus();
console.log(result)