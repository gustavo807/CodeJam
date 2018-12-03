
const sortDesc = (a, b) => b - a;

function scalarProduct(arrayA, arrayB){
    var arrayResult = 0;
    arrayA.forEach((element, index) => {
        arrayResult += element * arrayB[index];
    });
    return arrayResult;
}

function calculate(arrayA, arrayB){
    arrayASorted = arrayA.sort();
    arrayBSorted = arrayB.sort(sortDesc);

    var result = scalarProduct(arrayASorted, arrayBSorted);
    console.log(arrayASorted);
    console.log(arrayBSorted);
    console.log(result);
}

var arr1 = [3,  4,  5, 2, 1];
var arr2 = [1, -2, -4, 5, 6,];
/*
[ 1, 2, 3, 4, 5 ]
[ 6, 5, 1, -2, -4 ]
-9
*/


var arr1 = [1, 3, -5];
var arr2 = [-2, 4, 1];
/*
[ -5, 1, 3 ]
[ 4, 1, -2 ]
-25
*/


var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 0, 1, 0, 1];
/*
[ 1, 2, 3, 4, 5 ]
[ 1, 1, 1, 0, 0 ]
6
*/

calculate(arr1, arr2);