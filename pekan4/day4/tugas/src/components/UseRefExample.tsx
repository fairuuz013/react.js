import { useRef } from "react";

export default function UseRefExample() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    }

    const changeColor = () => {
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = "#ffe4e1";
            inputRef.current.style.border = "2px solid hotpink";
        }

    };

    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">useRef DOM Access</h2>

            <input
                ref={inputRef}
                type="text"
                placeholder="Ketik apa aja"
                className="border rounded px-3 py-2 w-64" />


            <div className="mt-3 flex gap-3 justify-center">
                <button
                    onClick={handleFocus}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Fokus ke Input
                </button>

                <button
                    onClick={changeColor}
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                    Ubah Warna Input
                </button>
            </div>

        </div>


    )
};

