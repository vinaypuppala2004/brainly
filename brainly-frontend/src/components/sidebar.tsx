import { SidebarItem } from "./SideBarItem"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { Logo } from "../icons/Logo"

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 border-r-2 pl-6 ">
        <div className="flex text-2xl items-center pt-4">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-4"> 
            <SidebarItem text = "twitter" icon = {<TwitterIcon />}/>
            <SidebarItem text = "youtube" icon = {<YoutubeIcon />}/>
        </div>
    </div>
}