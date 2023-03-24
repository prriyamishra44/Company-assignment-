import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function RootLayout(){
    return(
        <>
        <Sidebar />
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default RootLayout;