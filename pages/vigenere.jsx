import { useRef, useState } from "react";
import VigenereEncrypt from "../functions/VigenereEncrypt";
import VigenereDecrypt from "../functions/VigenereDecrypt";

const Vigenere = () => {
    const textInput = useRef(null)
    const keyInput = useRef(null)

    const [text, setText] = useState("")
    const [key, setKey] = useState("")
    const [resultText, setResultText] = useState("")

    const isUpperCase = (char) => char >= 65 && char <= 90
    const isLowerCase = (char) => char >= 97 && char <= 122
    const isLetter = (char) => isUpperCase(char) || isLowerCase(char)

    // const generateKey = (oldKey="", plainText="") => {
    //     let newKey = ""
    //     let remainder=0

    //     for(let i=0; i<plainText.length; i++) {
    //         let index = i-remainder

    //         // If encounter non letter char
    //         if(!isLetter(plainText.charCodeAt(i))) {
    //             remainder++
    //             newKey += " "
    //             continue
    //         }
            
    //         // If key has reached its string length
    //         if(index > oldKey.length-1) {
    //             newKey += oldKey.at(index-(Math.floor(index/oldKey.length)*oldKey.length))
    //         } else {
    //             newKey += oldKey.at(index)
    //         }
    //     }
        
    //     return newKey
    // }

    // const encrypt = () => {
    //     let result = ""

    //     const newKey = generateKey(key.toUpperCase(), text)

    //     for(let i=0; i<text.length; i++) {
    //         let currChar = text.charCodeAt(i)
    //         let currKey = newKey.charCodeAt(i) - 65

    //         if(isUpperCase(currChar)) {
    //             currChar += currKey
    //             if(currChar < 65) currChar += 26
    //             if(currChar > 90) currChar -= 26
    //         } else if(isLowerCase(currChar)) {
    //             currChar += currKey
    //             if(currChar < 97) currChar += 26
    //             if(currChar > 122) currChar -= 26
    //         }

    //         result += String.fromCharCode(currChar)
    //     }

    //     setResultText(result)        
    // }

    // const decrypt = () => {
    //     let result = ""

    //     const newKey = generateKey(key.toUpperCase(), text)

    //     for(let i=0; i<text.length; i++) {
    //         let currChar = text.charCodeAt(i)
    //         let currKey = newKey.charCodeAt(i) - 65

    //         if(isUpperCase(currChar)) {
    //             currChar -= currKey
    //             if(currChar < 65) currChar += 26
    //             if(currChar > 90) currChar -= 26
    //         } else if(isLowerCase(currChar)) {
    //             currChar -= currKey
    //             if(currChar < 97) currChar += 26
    //             if(currChar > 122) currChar -= 26
    //         }

    //         result += String.fromCharCode(currChar)
    //     }

    //     setResultText(result)
    // }

    const clearCalc = () => {
        textInput.current.value = ""
        keyInput.current.value = ""
        setResultText("")
    }

    return (
        <>
            <section>
                <header className="mb-5">
                    <h1 className="text-4xl">Vigenere Cipher</h1>
                </header>
                <section className="flex gap-3 container bg-slate-700 rounded-lg p-5">
                    <section id="form" className="container">
                        <div className="mb-3">
                            <label htmlFor="text" className="label">
                                Enter Text
                            </label>
                            <textarea 
                                ref={textInput}
                                name="text"
                                id="text"
                                className="textarea textarea-primary w-80 resize-none"
                                onChange={e => setText(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="key" className="label">
                                Enter Key
                            </label>
                            <input 
                                ref={keyInput}
                                type="text" 
                                name="key" 
                                id="key" 
                                className="input input-primary w-full max-w-xs"
                                onChange={e => setKey(e.target.value)}
                            />
                        </div>                        
                        <div className="flex gap-3">
                            <button className="btn btn-primary" onClick={() => setResultText(VigenereEncrypt(text,key))}>
                                Encrypt
                            </button>
                            <button className="btn btn-primary" onClick={() => setResultText(VigenereDecrypt(text,key))}>
                                Decrypt
                            </button>
                            <button className="btn btn-error" onClick={() => clearCalc()}>
                                Clear
                            </button>
                        </div>
                    </section>
                    <section className="container bg-slate-900 p-3 rounded-lg">
                        {resultText}
                    </section>
                </section>
            </section>
        </>
    );
}
 
export default Vigenere;