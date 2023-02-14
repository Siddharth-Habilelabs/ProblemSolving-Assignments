// Q3 Count number of each element in an array

const arr = [1, 2, 1, 6, 4, 3, 3, 2, 3]

const countUniqueVal = (arr) => {

    let count = {};

    arr.forEach(element => {
        if (element in count) {
            count[element] = 1 + count[element]
        }
        else {
            count[element] = 1
        }
    });

    console.log(count);
}
countUniqueVal(arr)







// for (i = 0; i < arrLen; i++) {
//     count[arr1[i]] = 1 + (count[arr1[i]] || 0);
// }