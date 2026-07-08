import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    tags: {
        _id: string;
        title: string;
    }[];
}

export function Card({title, link, type, tags}: CardProps) {
    return <div className="bg-white rounded-md outline-slate-200 border border-gray-300 p-8 shadow-sm break-inside-avoid mb-6">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-3">
                    <ShareIcon size="md"/>
                </div>
                {title}
            </div>

            <div className="flex items-center text-sm">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                        <ShareIcon size="md"/>
                    </a>
                </div>

                <div className="text-gray-500">
                    <ShareIcon size="md"/>
                </div>
            </div>
        </div>

        <div className="pt-3">
            {type === "twitter" &&
                <blockquote className="twitter-tweet">
                    <a href={link}></a>
                </blockquote>
            }

            {type === "youtube" &&
                <iframe
                    className="w-full rounded-md"
                    src={link.replace("watch?v=", "embed/")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            }
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
                <span
                    key={tag._id}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                    #{tag.title}
                </span>
            ))}
        </div>

    </div>
}