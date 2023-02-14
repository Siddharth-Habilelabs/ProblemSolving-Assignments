// Q4 Take all the zeroes to  the right of array
const arr = [1, 2, 0, 6, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0]

const shiftZeroes = (arr) => {
    let arrLen = arr.length,
        firstIndex = 0,
        lastIndex = arrLen - 1

    while (firstIndex < lastIndex) {
        if (arr[lastIndex] === 0) {
            lastIndex--
        }
        else if (arr[firstIndex] !== 0) {
            firstIndex++
        }
        else if (arr[firstIndex] === 0) {
            let temp = arr[firstIndex]
            arr[firstIndex] = arr[lastIndex]
            arr[lastIndex] = temp

            firstIndex++
            lastIndex--
        }
    }

    console.log(arr);
}

shiftZeroes(arr)