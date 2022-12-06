import isLowerCase from "./IsLowerCase"
import isUpperCase from "./IsUpperCase"

const generateKey = (oldKey="", plainText="") => {
    let newKey = ""
    let remainder=0

    for(let i=0; i<plainText.length; i++) {
        let index = i-remainder

        // If encounter non letter char
        if(!((isUpperCase(plainText.charCodeAt(i)) || isLowerCase(plainText.charCodeAt(i))))) {
            remainder++
            newKey += " "
            continue
        }
        
        // If key has reached its string length
        if(index > oldKey.length-1) {
            newKey += oldKey.at(index-(Math.floor(index/oldKey.length)*oldKey.length))
        } else {
            newKey += oldKey.at(index)
        }
    }
    
    return newKey
}

export default generateKey;