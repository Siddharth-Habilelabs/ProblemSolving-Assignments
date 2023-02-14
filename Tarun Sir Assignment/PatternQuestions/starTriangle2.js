// * * * * * 
// * * * * 
// * * *  
// * * 
// * 


const starTriangle2 = () => {
    let str = ""
    for (let i = 0; i < 5; i++) {
        for (let j = i; j < 5; j++) {
            str += "*"
        }
        str += "\n"
    }
    return str;
}
console.log(starTriangle2());