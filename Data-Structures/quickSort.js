let inputArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var count = 0;

// Quick Sort Algorithm (Partitioning Method)

function quick_sort_handler(dragonArray) {

    if (dragonArray.length == 1 || dragonArray.length == 0) {
        return dragonArray;
    }

    let i = -1, j = 0, pivot, foo;
    pivot = dragonArray[dragonArray.length - 1];

    for (; j < dragonArray.length - 1; j++) {
        count++;
        if (dragonArray[j] < pivot) {
            i++;
            foo = dragonArray[j];
            dragonArray[j] = dragonArray[i];
            dragonArray[i] = foo;
        }
    }


    dragonArray[dragonArray.length - 1] = dragonArray[i + 1];
    dragonArray[i + 1] = pivot;

    let left = quick_sort_handler(dragonArray.slice(0, i + 1));
    let right = quick_sort_handler(dragonArray.slice(i + 2, dragonArray.length));


    return [...left, pivot, ...right];
}


let sortedArray = quick_sort_handler(inputArray);
console.log(sortedArray);