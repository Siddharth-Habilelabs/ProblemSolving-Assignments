const isPalindrome = (str) => {

    let strLen = (str.length) / 2,
        j = str.length - 1

    for (let i = 0; i < strLen; i++) {
        if (str[i] !== str[j]) {
            return false
        }
        j--
    }
    return true;

}
console.log(isPalindrome('faltoo'));