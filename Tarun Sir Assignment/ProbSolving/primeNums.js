// 1. Print all primes number between these input
const prime = (n1, n2) => {
    console.log("Prime numbers")
    console.log(1)

    for (let j = n1; j <= n2; j++) {
        let count = 0
        for (let i = 1; i <= j / 2; i++) {
            if (j % i == 0)
                count++
        }

        if (count == 1) {
            console.log(j);
        }
    }
}
prime(1, 10)
