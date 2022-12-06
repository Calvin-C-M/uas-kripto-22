import { useState, useRef } from "react";
import Rot13Shift from "../functions/Rot13Shift";
import VigenereEncrypt from "../functions/VigenereEncrypt";
import VigenereDecrypt from "../functions/VigenereDecrypt";

const VigeneRot = () => {
    const textInput = useRef(null)
    const keyInput = useRef(null)

    const [text, setText] = useState("")
    const [key, setKey] = useState("")
    const [algorithmFirst, setAlgorithmFirst] = useState("VIGENERE")
    const [resultText, setResultText] = useState("")

    const handleEncrypt = () => {
        if(algorithmFirst == "VIGENERE") {
            setResultText(Rot13Shift(VigenereEncrypt(text, key)))
        } else {
            setResultText(VigenereEncrypt(Rot13Shift(text), key))
        }
    }

    const handleDecrypt = () => {
        if(algorithmFirst == "VIGENERE") {
            setResultText(Rot13Shift(VigenereDecrypt(text, key)))
        } else {
            setResultText(VigenereDecrypt(Rot13Shift(text), key))
        }
    }

    const clearCalc = () => {
        textInput.current.value = ""
        keyInput.current.value = ""
        setResultText("")
    }

    return (
        <>
            <section>
                <header className="mb-5">
                    <h1 className="text-4xl">VigeneROT13 Cipher</h1>
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
                        <div className="mb-3">
                            <label htmlFor="encrypt-first" className="label">
                                Algorithm used first?
                            </label>
                            <select 
                                name="encrypt-first" 
                                id="encrypt-first" 
                                className="select"
                                onChange={e => setAlgorithmFirst(e.target.value)}
                            >
                                <option value="VIGENERE">Vigenere</option>
                                <option value="ROT13">ROT13</option>
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <button className="btn btn-primary" onClick={() => handleEncrypt()}>
                                Encrypt
                            </button>
                            <button className="btn btn-primary" onClick={() => handleDecrypt()}>
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
 
export default VigeneRot;