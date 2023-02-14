// Q3 return 3rd largest number in array

const arr = [1, 2, 4, 4, 5, 8, 8, 9, 9]
// const arr = [1,1,1]
// const arr = []

const errorHandling = (arr) => {
    if (arr.length < 3) {
        console.log("error: array should contain at least 3 values");
        return true
    }
    return false
}

const thirdLargestEle = async (arr) => {
    try {
        const error = await errorHandling(arr);

        if (!error) {
            let count = {};

            arr.forEach(element => {
                if (element in count) {
                    count[element] = 1 + count[element]
                }
                else {
                    count[element] = 1
                }
            });

            let distinctArr = Object.keys(count)

            if (distinctArr.length < 3) {
                console.log("there should be at least 3 distinct elements to calculate third largest");
                return false
            }

            let result = distinctArr[distinctArr.length - 3]
            console.log(result);
            return true
        }
    }
    catch (error) {
        console.log(error);
    }
}
thirdLargestEle(arr)




