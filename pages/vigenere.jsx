import { useRef, useState } from "react";
import VigenereEncrypt from "../functions/VigenereEncrypt";
import VigenereDecrypt from "../functions/VigenereDecrypt";

const Vigenere = () => {
    const textInput = useRef(null)
    const keyInput = useRef(null)

    const [text, setText] = useState("")
    const [key, setKey] = useState("")
    const [resultText, setResultText] = useState("")

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