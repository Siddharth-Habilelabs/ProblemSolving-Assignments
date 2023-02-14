// 3. Count digits in Number
function digits(n) {
    let c = 0,
    m = n
    
    while (m) {
        m = Math.floor(m / 10);
        c++
    }
    console.log("Length :",c)
}
digits(12345)