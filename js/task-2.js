function makeArray(firstArray, secondArray, maxLength) {
    const total = [];
    for (let i = 0; i < firstArray.length; i++){
        total.push(firstArray[i]);
    }
    for (let i = 0; i < secondArray.length; i++){
        total.push(secondArray[i]);
    }
    if (total.length > maxLength) {
        const result = [];
        for (let i = 0; i < maxLength; i++) {
            result.push(total[i]);
        }
    return result
    }
    return total
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
