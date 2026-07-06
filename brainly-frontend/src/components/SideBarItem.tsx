import { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text: String;
    icon: ReactElement;
}) {
    return <div className="flex py-2 cursor-pointer hover:bg-grey-200">
        <div className="p-2">{icon}</div>
        <div className="p-2">{text}</div>
    </div>
}