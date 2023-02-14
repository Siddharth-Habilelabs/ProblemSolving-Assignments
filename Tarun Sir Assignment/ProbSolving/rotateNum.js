// 5. Rotate a number by k 
const numberOfDigit = (n) => {
    let digit = 0
    while (n > 0) {
        digit++;
        n = Math.floor(n / 10);
    }
    return digit;
}

const rotateNumberByK = (n, k) => {
    let x = numberOfDigit(n)

    k = (k % x)

    if (k < 0)
        k += x

    let terms = 10 ** k
    let left = Math.floor(n / terms)
    let right = Math.floor(n % terms)

    let result = (right * (10 ** (x - k))) + (left)
    console.log(`Number after ${k} rotations :`, result);
}

rotateNumberByK(12345, -1);