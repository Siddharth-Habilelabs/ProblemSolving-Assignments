// Q1 Q4 min and max sum of consecutive numbers

const arr = [2, 3, -1, -4, -4, 6, 7, 8, 1]
// const arr = []

const errorHandling = (arr, k) => {
    if (arr.length < k) {
        console.log("error: length of array should be greater than sub array length");
        return true
    }

    if (k === 1) {
        console.log("error: value of k should be greater than 1");
        return true
    }

    return false
}

const minMaxSubArraySum = async (arr, k) => {
    try {
        const error = await errorHandling(arr, k);

        if (!error) {
            let arrLen = arr.length
            let subArrSum = 0

            for (i = 0; i < k; i++) {
                subArrSum += arr[i]
            }
            let maxSum = subArrSum,
                minSum = subArrSum

            for (i = k; i < arrLen; i++) {
                subArrSum = subArrSum + arr[i] - arr[i - k]
                // for max sum
                if (subArrSum > maxSum) maxSum = subArrSum
                // for min sum
                if (subArrSum < minSum) minSum = subArrSum

                // subArrSum > maxSum && (maxSum = subArrSum) || subArrSum < minSum && (minSum = subArrSum)
            }
            console.log("max sum ->", maxSum, ", min sum ->", minSum);
        }
    }
    catch (error) {
        console.log(error);
    }

}
minMaxSubArraySum(arr, 2)