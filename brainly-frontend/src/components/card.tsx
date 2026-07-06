import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title, link, type}: CardProps) {
    return <div className="p-8 bg-white rounded-md outline-slate-200 max-w-72  border-grey-300 border">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-3 ">
                    <ShareIcon size = 'md'/>
                </div>
                {title}
            </div>
            <div className="flex items-center text-sm">
                <div className="pr-2 text-gray-500">
                    <a href= {link} target="_blank">
                        <ShareIcon size = 'md'/>
                    </a>
                </div>
                
                <div className="text-gray-500"><ShareIcon size = 'md'/></div>
            </div>
        </div>
        <div className="pt-3">
            {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link}></a> 
            </blockquote>}
            {type === "youtube" && <iframe className= "w-full" src={link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {/* <iframe className= "w-full" src="https://www.youtube.com/embed/qVHaXD7zHDQ?si=dtPl-aIlVfe77lna" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        </div>
    </div>
}