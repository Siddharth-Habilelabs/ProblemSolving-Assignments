// 1 2 3 4 5 
// 1 2 3 4  
// 1 2 3 
// 1 2 
// 1 


const numTriangle2 = () => {
    let str = ""
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        str += "\n"
    }
    return str;
}
console.log(numTriangle2());
