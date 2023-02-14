// 4. Print Reverse of a number
const reverseOfNumber = (n) => {
    let result = 0;

    while (n > 0) {
        let digit = n % 10;
    
        result = result * 10 + digit;
    
        n = Math.floor(n / 10);
    }
    console.log("Reversed number is :", result)
}
reverseOfNumber(12345)

