import { useRef, useState } from "react";

const Rot13 = () => {
    const inputText = useRef(null)

    const [text,setText] = useState("")
    const [resultText, setResultText] = useState("")

    const isUpperCase = (char) => char >= 65 && char <= 90
    const isLowerCase = (char) => char >= 97 && char <= 122

    const shift = () => {
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

        setResultText(result)
    }

    const clearCalc = () => {
        inputText.current.value = ""
        setResultText("")
    }

    return (
        <>
            <section>
                <header className="mb-5">
                    <h1 className="text-4xl">ROT13 Cipher</h1>
                </header>
                <section className="flex gap-3 container bg-slate-700 rounded-lg p-5">
                    <section id="form" className="container">
                        <div className="mb-3">
                            <label htmlFor="text" className="label">
                                Enter Text
                            </label>
                            <textarea 
                                ref={inputText}
                                name="text"
                                id="text"
                                className="textarea textarea-primary w-80 resize-none"
                                onChange={e => setText(e.target.value)}
                            />
                        </div>                     
                        <div className="flex gap-3">
                            <button className="btn btn-primary" onClick={() => shift()}>
                                Shift
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
 
export default Rot13;