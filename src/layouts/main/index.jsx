import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

export default function MainLayout(){
    return(
        <div className="w-full flex">
            <SideBar />
            <Outlet />
            
        </div>
    )
}