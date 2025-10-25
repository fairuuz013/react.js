import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose }: { onClose: () => void }) {
    return createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999, // 🔥 biar ga ketimpa elemen lain
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: 20,
                    borderRadius: 10,
                    textAlign: "center",
                    minWidth: 200,
                }}
            >
                <h3>🌀 Ini Modal Portal</h3>
                <button
                    style={{
                        marginTop: 10,
                        padding: "5px 15px",
                        borderRadius: 5,
                        cursor: "pointer",
                    }}
                    onClick={onClose}
                >
                    Tutup
                </button>
            </div>
        </div>,
        document.body
    );
}

export default function PortalModal() {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                padding: 20,
                border: "1px solid gray",
                borderRadius: 10,
                marginBottom: 20,
            }}
        >
            <h2>🔹 Portal Modal</h2>
            <button
                onClick={() => setOpen(true)}
                style={{ padding: "5px 15px", borderRadius: 5, cursor: "pointer" }}
            >
                Buka Modal
            </button>

            {open && <Modal onClose={() => setOpen(false)} />}
        </div>
    );
}
