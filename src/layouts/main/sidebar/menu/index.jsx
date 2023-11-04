import { mainMenu } from "~/utils/const"
import { NavLink } from "react-router-dom"

export default function Menu(){
    return (
        <nav>
            {mainMenu.map((menu,index)=>(
                <NavLink key={index} to={menu.path} className="w-[250px] block p-0 m-2 hover:bg-[#380081]  rounded-md  overflow-hidden">
                    <div className=" text-xl h-[40px] ml-5  my-2 gap-y-2  flex items-center  ">
                        {menu.title}
                    </div>
                </NavLink>
            ))}
        </nav>
    )
}