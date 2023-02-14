// Q5 largest subarray of distinct numbers in array

// const arr = [1, 3, 3, 4, 2, 5, 6, 7, 8, 9, 9]
// const arr = [1, 33, 4, 2, 5, 66, 7, 8, 9]
const arr = [0,0]


const errorHandling = (arr) => {
    if (arr.length < 2) {
        console.log("error: array should contain at least 2 value");
        return true
    }
    return false
}

const longestDistinctSubArr = async (arr) => {
    try {
        const error = await errorHandling(arr);

        if (!error) {
            let count = {},
                len = {},
                maxLen = 0

            // [1, 3, 3, 4, 2, 5, 6, 7, 8, 9, 9]
            for (let i = 0; i < arr.length; i++) {
                let element = arr[i]
                if (element in count) {
                    let tempLen = Object.keys(count).length

                    if (tempLen > maxLen) {
                        len = {}
                    }

                    if (tempLen > maxLen) {
                        maxLen = tempLen
                        len[Object.keys(count)] = tempLen
                    }

                    i = count[element]
                    count = {}
                }
                else {
                    count[element] = i
                }
            }
            if (Object.keys(len) === 0) {
                len[Object.keys(count)] = Object.keys(count).length
            }

            let resltArr = Object.keys(len)
            console.log(resltArr);
        }
    }
    catch (error) {
        console.log(error);
    }
}
longestDistinctSubArr(arr)