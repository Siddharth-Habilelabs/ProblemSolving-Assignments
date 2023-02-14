// 6. Prime factorization of A Number

function primeFactorization(n) {
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    const result = [];
    for (let i = 2; i <= n; i++) {
        while (isPrime(i) && n % i === 0) {
            result.push(i);
            n = n / i;
        }
    }
    return result;
}
console.log(primeFactorization(100));