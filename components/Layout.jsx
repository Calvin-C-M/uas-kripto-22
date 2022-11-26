import Sidebar from "./Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

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
            <Sidebar />
        </div>
    );
}
 
export default Layout;