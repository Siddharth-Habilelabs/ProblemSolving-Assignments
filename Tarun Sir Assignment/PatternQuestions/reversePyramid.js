// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 


const reversePyramid = () => {
    let str = "";

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < i; j++)
            str += " ";

        for (let k = 0; k < 2 * (5 - i) - 1; k++)
            str += "*";

        str += "\n";

    }
    console.log(str);
}

reversePyramid();