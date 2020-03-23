const dragonArray = [11, 27, 13, 16, 17, 3, 0, 9, 1, 22, 4];

function merge_sort(inputArray) {
    let left = [];
    let right = []

    if (inputArray.length == 1) {
        return inputArray
    }
    let middle = Math.floor(inputArray.length / 2);

    left = inputArray.slice(0, middle);
    right = inputArray.slice(middle, inputArray.length);
    // console.log(left, right)

    return merge_procedure(merge_sort(left), merge_sort(right));

}

let resultArray = merge_sort(dragonArray);
console.log(resultArray);


function merge_procedure(array1, array2) {
    let final = [];
    let i = j = k = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            final.push(array1[i]);
            i++;
        } else {
            final.push(array2[j]);
            j++;
        }
        k++;
    }
    while (i < array1.length) {
        final.push(array1[i]);
        i++
    }
    while (j < array2.length) {
        final.push(array2[j]);
        j++;
    }
    return final
}