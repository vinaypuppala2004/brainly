import { useState, useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);

    const [type, setType] = useState("youtube");

    async function submit() {
        try {
            await axios.post(
                BACKEND_URL + "/api/v1/content",
                {
                    title: titleRef.current?.value,
                    link: linkRef.current?.value,
                    type,
                    tags:
                        tagsRef.current?.value
                            ?.split(",")
                            .map((tag) => tag.trim())
                            .filter((tag) => tag !== "") || [],
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );

            alert("Content added successfully");
            onClose();
        } catch (err) {
            console.log(err);
            alert("Failed to add content");
        }
    }

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                    <div className="bg-white rounded-2xl shadow-2xl w-[450px] p-8">
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="cursor-pointer hover:text-red-500 transition"
                            >
                                <CrossIcon />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-5 mt-2">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Add Content
                            </h2>

                            <Input
                                ref={titleRef}
                                placeholder="Title"
                            />

                            <Input
                                ref={linkRef}
                                placeholder="Link"
                            />

                            <Input
                                ref={tagsRef}
                                placeholder="Tags (comma separated)"
                            />

                            <div className="flex gap-8">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="youtube"
                                        checked={type === "youtube"}
                                        onChange={() => setType("youtube")}
                                    />
                                    <span>YouTube</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="twitter"
                                        checked={type === "twitter"}
                                        onChange={() => setType("twitter")}
                                    />
                                    <span>Twitter</span>
                                </label>
                            </div>

                            <Button
                                onClick={submit}
                                size="md"
                                varient="primary"
                                text="Submit"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}