import MENULIST from "../constants/MenuList";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div className="drawer drawer-mobile bg-slate-900">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <main className="drawer-content p-5">
                {/* <!-- Page content here --> */}
                { children }
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button absolute top-0 left-0 lg:hidden">
                    <AiOutlineMenu />
                </label>
            </main>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    <header className="mb-5">
                        <h1 className="text-2xl font-bold">Cryptography App</h1> 
                    </header>
                {/* <!-- Sidebar content here --> */}
                    { MENULIST.map(list => <li key={list.id}>
                        <Link href={list.link}>
                            { list.title }
                        </Link>
                    </li>) }
                </ul>
            </div>
        </div>
    );
}
 
export default Layout;