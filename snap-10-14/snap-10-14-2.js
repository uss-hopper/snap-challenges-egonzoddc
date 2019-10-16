/**
 * Convert a weight or mass to grams.
 *
 * @param weight The weight or mass to be converted.
 * @param units The abbreviation for the units in which this weight/mass is measured. Acceptable values: "lbs", "oz","g", "kg" "mg".
 * @returns The mass in grams.
 */
function convertWeightToGrams (weight, units) {

	if(units.toLowerCase() === "lbs"){
		weight = weight * 453.592;
	} else if (units.toLowerCase() === "oz") {
		weight = weight * 28.3495;
	} else if (units.toLowerCase() === "kg") {
		weight = weight * 1000;
	} else if (units.toLowerCase() === "mg") {
		weight = weight / 1000;
	}

	return weight;
}
console.log(convertWeightToGrams(2, "lbs"));
console.log(convertWeightToGrams( 12,"oz"));

// /**
//  * Find teh sum of all unique positive factors of a number.
//  * @param int number The number which we are finding factors for
//  * @returns The sum of all unique positive factors.
//  */
// function sumUniquePositiveFactors (number) {
// 	let sum = 0;
// 	for(i=1; i<=number; i++) {
// 		if(number % i === 0) {
// 			sum = sum + i;
// 		}
// 	}
// 	return sum;
//
// }