import isLowerCase from "./IsLowerCase"
import isUpperCase from "./IsUpperCase"
import generateKey from "./GenerateKey"

const VigenereEncrypt = (text="", key="") => {
    let result = ""

    const newKey = generateKey(key.toUpperCase(), text)

    for(let i=0; i<text.length; i++) {
        let currChar = text.charCodeAt(i)
        let currKey = newKey.charCodeAt(i) - 65

        if(isUpperCase(currChar)) {
            currChar += currKey
            if(currChar < 65) currChar += 26
            if(currChar > 90) currChar -= 26
        } else if(isLowerCase(currChar)) {
            currChar += currKey
            if(currChar < 97) currChar += 26
            if(currChar > 122) currChar -= 26
        }

        result += String.fromCharCode(currChar)
    }

    return result
}

export default VigenereEncrypt;