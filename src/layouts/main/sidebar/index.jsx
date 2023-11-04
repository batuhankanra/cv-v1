import Logo from "~/components/logo";
import Menu from "./menu";

export default function SideBar(){
    return(
        <aside className="w-[300px] min-h-screen border-r border-[#140f07]  shadow-xl ">
            <Logo />
            <Menu />
        </aside>
    )
}