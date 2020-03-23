let dragonArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function insertion_sort(inputArray) {

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (dragonArray[i] < dragonArray[j]) {
                temp = dragonArray[i];
                dragonArray[i] = dragonArray[j];
                dragonArray[j] = temp;
            }
        }

    }
    return inputArray;
}
let outputArray = insertion_sort(dragonArray);
console.log(outputArray);