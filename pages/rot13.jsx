import { useRef, useState } from "react";
import Rot13Shift from "../functions/Rot13Shift";

const Rot13 = () => {
    const inputText = useRef(null)

    const [text,setText] = useState("")
    const [resultText, setResultText] = useState("")

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
                            <button className="btn btn-primary" onClick={() => setResultText(Rot13Shift(text))}>
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