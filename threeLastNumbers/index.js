
const getNumber = (n) => Math.pow(3 + Math.sqrt(5),n);
const regex = /\d{1,3}(?=\.)/g;

function process(n){
    var str = getNumber(n);
    
    var found = String(str).match(regex);

    var elem = found[0];

    if(elem.length == 2)
        elem = '0' + elem;

    console.log(elem);
}

var number = 2; /* 027 */
var number = 5; /* 935 */
var number = 3; /* 143 */
var number = 20; /* 151 */
process(number);