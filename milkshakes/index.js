/*Get total malted */
const getSum = (arr) =>{
    var index = 0;
    var total = 0;
    while(index < arr.length){
        total = total + arr[index + 1];
        index = index + 2;
    }
    return total;
};
/* Sort Array by malted pair desc 
[[1, 0, 2, 0],[1, 1],[5, 0, 5, 0]] => [ [ 1, 1 ], [ 1, 0, 2, 0 ], [ 5, 0 ] ]
*/
const sort = (arr) =>{
    arr.sort((a, b)=>{
        var aSum = getSum(a);
        var bSum = getSum(b);
        return bSum - aSum;
    });
    return arr;
}

const replace = (arr) => {
    var i = 0;
    while(i < arr.length){
        arr[i] = typeof arr[i] === "undefined" ? 0 : arr[i];
        i++;
    }
    return arr;
}

const calculate = (N, T) => {
    var batch = new Array(N);
    var isPossible = true;
    T = sort(T);
    var i = 0;
    while(i < T.length && isPossible){
        var array = T[i];
        var totalPairs = array.length / 2;
        var index = 0;
        while(totalPairs > 0){
            var X = array[index]; /*Flavor*/
            var Y = array[index + 1]; /*Malted/Unmalted */
            var position = X - 1;
            var value = typeof batch[position];
            if(value === "undefined")
            {
                batch[position] = Y;
            }
            else if(value == Y)
            {
                /* No pair will occur more than once for a single customer. */
                isPossible = false;
            }
            else if(value != Y)
            {
                /* For each customer, you make at least one milkshake type that they like. */
                if(i == T.length -1)
                { /*Es el ultimo par */
                    isPossible = false;
                }
            }
            totalPairs--;
            index = index + 2; /*Add two for each pair */
        }
        i++;
    }

    batch = replace(batch);
    console.log('Batch:', batch);
    console.log('isPossible:', isPossible ? "POSSIBLE" : "IMPOSSIBLE");
}


var N = 5;
var T = [
    [1, 0, 2, 0],
    [1, 1],
    [5, 0]
];
/*
Batch: [ 1, 0, 0, 0, 0 ]
isPossible: POSSIBLE
*/

var N = 1;
var T = [
    [1, 1],
    [1, 0]
];
/*
Batch: [ 1 ]
isPossible: IMPOSSIBLE
*/

var N = 6;
var T = [
    [1, 0, 3, 0],
    [1, 1, 2, 0],
    [5, 0, 4, 0],
    [6, 1]
];
/*
Batch: [ 1, 0, 0, 0, 0, 1 ]
isPossible: POSSIBLE
*/


calculate(N, T);
