const Sidebar = () => {
    return ( 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                <header className="mb-5">
                    <h1 className="text-2xl font-bold">Cryptography App</h1> 
                </header>
            {/* <!-- Sidebar content here --> */}
                <li><a>Vigenere + ROT13</a></li>
                <li><a>Vigenere Cipher</a></li>
                <li><a>ROT13 Cipher</a></li>
            </ul>
        </div>
    );
}
 
export default Sidebar;