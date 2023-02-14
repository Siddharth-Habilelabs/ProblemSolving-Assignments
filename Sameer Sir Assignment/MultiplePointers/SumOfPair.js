// Q1 Sum of pair = given sum

const arr = [1, 2, 2, 3, 4, 5, 6, 7]        // sorted

arr.sort()

const sumOfPair = (arr, givenSum) => {

    let arrLen = arr.length,
        firstIndex = 0,
        lastIndex = arrLen - 1,
        sum = arr[lastIndex]


    while (firstIndex < lastIndex) {

        sum = arr[firstIndex] + arr[lastIndex]

        if (sum === givenSum) {
            // console.log(`(${arr[firstIndex]}, ${arr[lastIndex]})`);
            firstIndex++
            lastIndex--
            return 1
        }
        else if (sum > givenSum) {
            lastIndex--
        }
        else if (sum < givenSum) {
            firstIndex++
        }
    }
    return 0

}

console.log(sumOfPair(arr, 10));