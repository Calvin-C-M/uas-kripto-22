import isUpperCase from "./isUpperCase"
import isLowerCase from "./isLowerCase"

const Rot13Shift = (text="") => {
    let result = ""
    for(let i=0; i<text.length; i++) {
        let charAscii = text.charCodeAt(i)

        if(isUpperCase(charAscii)) {
            charAscii += 13
            if(charAscii < 65) charAscii += 26
            if(charAscii > 90) charAscii -= 26
        } else if(isLowerCase(charAscii)) {
            charAscii += 13
            if(charAscii < 97) charAscii += 26
            if(charAscii > 122) charAscii -= 26
        }

        result += String.fromCodePoint(charAscii)
    }

    return result
}

export default Rot13Shift;