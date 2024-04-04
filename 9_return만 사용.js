const { default: Undici } = require("undici-types");

function Week() {
    console.log('MON');
    console.log('TUE');
    console.log('WED');
    return;
    console.log('THR');
    console.log('FRI');
    console.log('SAT');
    console.log('SUN');
}

console.log(Week() == undefined);