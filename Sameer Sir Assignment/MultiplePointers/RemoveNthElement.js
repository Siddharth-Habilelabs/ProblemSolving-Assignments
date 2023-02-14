// Q2 In an array remove nth element as given by user

const arr = [1, 2, 2, 3, 4, 5, 6, 7]

const removeNthElement = (arr, n) => {
    return arr.filter(function (element) {
        return element != n;
    });
}

let resultArr = removeNthElement(arr, 2)
console.log(resultArr);