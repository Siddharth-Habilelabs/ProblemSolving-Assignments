// to check if input is hexcode or not
const isHex = (input) => {
    const hexRegex = /[0-9A-Fa-f]{6}/g;
    let result = input.match(hexRegex) ? true : false
    return result
}

// convert input to hexcode
const convertStringToHex = (input) => {
    let hexcode = '',
        inputLen = input.length

    for (let i = 0; i < inputLen; i++) {
        hexcode += (input.charCodeAt(i)).toString(16)
    }

    return hexcode;
}

// main function
// save hexcode in json file
const saveHexcodeInJson = (input) => {

    const fs = require('fs')

    if (!isHex(input)) {
        input = convertStringToHex(input)
    }

    fs.readFile("./hexData.json", 'utf8', (err, data) => {
        if (err) {
            const hexdata = {
                [input]: Date.now()
            }

            const jsonString = JSON.stringify(hexdata)

            fs.writeFile('hexData.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        }
        else {
            data = JSON.parse(data)
            data[input] = Date.now()

            console.log(data)

            fs.writeFile("./hexData.json", JSON.stringify(data), err => {
                if (err) console.log("Error writing file:", err);
            });
        }
    });

}
saveHexcodeInJson("SIDDHARTH")
// saveHexcodeInJson("siddharth")


const showHexcode = (input) => {
    const fs = require('fs')
    fs.readFile("./hexData.json", 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        data = JSON.parse(data)
        let user = { [input]: data[input] }
        console.log(user)
    });
}

// showHexcode("534944444841525448")