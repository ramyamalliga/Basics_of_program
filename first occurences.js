function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count += 1;
        }
    }
    return count;
}

let arr = [1, 2, 3, 1, 4, 1, 5];
let element = 1;
console.log(countOccurrences(arr, element));
