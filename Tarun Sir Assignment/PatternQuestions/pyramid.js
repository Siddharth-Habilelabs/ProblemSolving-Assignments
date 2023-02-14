//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * *


const pyramid = () => {
  let str = "";
  for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5 - i; j++) {
      str += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
pyramid();
