const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
const SENATORS_BY_DOOR = 2;

function senateEvacuation(values){

	/*Get number of steps */
	var steps = getStepsNumber(values);

	while(steps > 0)
	{
		var index = null;
		var secondIndex = null;		
		var elementsWithoutZeros = values.filter(v => v > 0); /* Get elements greater than zero */

		if(allEquals(elementsWithoutZeros) && elementsWithoutZeros.length == 3)
		{
			var firstValue = values.find(v => v !== 0);
			index = values.indexOf(firstValue);
		}else
		{
			var nextVal = nextValues(values); /*Get the high number or the highest numbers */		
			index = values.indexOf(nextVal[0]);
			if(nextVal.length > 1)
			{
				secondIndex = values.indexOf(nextVal[1], index + 1); /*Get second index */
			}

		}
		/*Print values */
		printValues(values, index, secondIndex);		
		/*Update values */
		values = updateValues(values, index, secondIndex);

		steps--;
	}

}

function printValues(values, index, secondIndex = null){
	if(secondIndex){
		console.log(values, ALPHABET[index]+ALPHABET[secondIndex]);
	}else if(values[index] > 1){
		console.log(values, ALPHABET[index]+ALPHABET[index]);
	}else{
		console.log(values, ALPHABET[index]);
	}
}

function updateValues(values, index, secondIndex = null){
	if(secondIndex){
		values[index] = values[index] - 1;
		values[secondIndex] = values[secondIndex] - 1;
	}else if(values[index] > 1){
		values[index] = values[index] - 2;
	}else{
		values[index] = values[index] - 1;
	}
	
	return values;
}

function nextValues(values){
	/*Get the greater value */
	var max = Math.max(...values); /*Max element*/
	return values.filter(value => value === max); /*Get all Max elements */
}

function allEquals(values){
	var firstValue = values.find(v => v !== 0); /*Get first element different zero */
	return values.every(v => v === firstValue || v === 0); /*All elements are equal, except zeros: true or false */
}

function getStepsNumber(values){
	var reducer = (acc, curr) => acc + curr;
	var valuesSum = values.reduce(reducer);
	return Math.round( valuesSum / SENATORS_BY_DOOR); /* Math.round(7/2) = 4 */
}




var senators = [4,2,3,2];
//var senators = [2,2,1];
//var senators = [2, 2];
//var senators = [3, 2, 2];
//var senators = [1, 1, 2];
//var senators = [2, 3, 1];

//var senators = [4,4,4];
senateEvacuation(senators);



