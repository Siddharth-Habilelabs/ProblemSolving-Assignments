// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


const starTriangle1 = () => {
    let string = ""
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            string += "*"
        }
        string += "\n"
    }
    return string;
}
console.log(starTriangle1());