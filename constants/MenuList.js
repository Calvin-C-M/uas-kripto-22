import { AiOutlineCode, AiOutlineQrcode, AiOutlineCodepen } from "react-icons/ai"

const MENULIST = [
    { id: 0, title: "Vigenere", icons: <AiOutlineCode />, link: "/vigenere", description: "" },
    { id: 1, title: "ROT13", icons: <AiOutlineQrcode />, link: "/rot13", description: "" },
    { id: 2, title: "VigeneROT13", icons: <AiOutlineCodepen />, link: "/vigenerot", description: "" }
]

export default MENULIST;