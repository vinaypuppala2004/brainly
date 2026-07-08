import { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    onChange?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, onChange }, ref) => {
        return (
            <div>
                <input
                    ref={ref}
                    placeholder={placeholder}
                    type="text"
                    className="px-4 py-2 border rounded m-2"
                    onChange={onChange}
                />
            </div>
        );
    }
);