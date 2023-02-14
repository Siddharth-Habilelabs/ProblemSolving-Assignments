const dupRemover = (arr) => {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in count) {
            count[arr[i]] += 1
        }
        else
            count[arr[i]] = 1
    }

    console.log(Object.keys(count));
}
dupRemover([1, 3, 3, 5, 5, 7])

// const dupRemover = (arr) => {
//     let count = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (count.includes(arr[i])) {
//             continue
//         }
//         else
//             count += arr[i]
//     }
//     console.log(count);
// }
// dupRemover([1, 3, 3, 5, 5, 7])