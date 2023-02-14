// Q2  find longest substring of a string containing distinct char

// const str = "habilelabs"
// const str = "structure"
const str = "probookcapslock"
// const str = "[]"

const errorHandling = (str) => {
    if (!str.length) {
        console.log("error: string should not be empty");
        return true
    }

    if (typeof str !== 'string') {
        console.log("error: enter valid string");
        return true
    }
    return false
}


const longestDistinctSubstr = async (str) => {
    try {
        const error = await errorHandling(str);

        if (!error) {
            let count = {},
                maxLen = 0,
                first = 0,
                last = 0

            let strLen = str.length

            for (let i = 0; i < strLen; i++) {
                let element = str[i]
                if (element in count) {

                    if (Object.keys(count).length > maxLen) {
                        maxLen = Object.keys(count).length

                        first = count[Object.keys(count)[0]]
                        last = i
                    }

                    i = count[element]
                    count = {}
                }
                else {
                    count[element] = i
                }
            }

            let resultStr = str.slice(first, last)
            console.log(resultStr, maxLen);
        }
    }
    catch (error) {
        console.log(error);
    }
}
longestDistinctSubstr(str)