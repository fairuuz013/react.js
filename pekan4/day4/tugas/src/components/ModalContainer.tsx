import { useState } from "react";
import PortalModal from "./PortalModal"


export default function ModalContainer() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">🌀 React Portal Modal</h2>

            <button
                onClick={() => setIsOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Buka Modal
            </button>

            {/* tampilkan modal kalau isOpen = true */}
            {isOpen && <PortalModal onClose={() => setIsOpen(false)} />}
        </div>
    );
}



