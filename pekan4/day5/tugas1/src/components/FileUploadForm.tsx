import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [preview, setPreview] = useState<string | null>(null);

    // Ambil file dari react-hook-form
    const file = watch("avatar");

    // Setiap kali file berubah, bikin URL buat preview
    const handlePreview = () => {
        if (file && file.length > 0) {
            const newPreview = URL.createObjectURL(file[0]);
            setPreview(newPreview);
        } else {
            setPreview(null);
        }
    };

    const onSubmit = (data: any) => {
        console.log(" Data Form:", data);
        alert("Mantapn coy  dikirim! ");
        reset();
        setPreview(null);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-w-sm mx-auto mt-10 border p-6 rounded-2xl shadow-md"
        >
            <h1 className="text-xl font-bold text-center">Dynamic Avatar Form </h1>

            {/* Nama */}
            <div>
                <label className="font-medium">Nama:</label>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Masukkan nama kamu..."
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                />
            </div>

            {/* Avatar Upload */}
            <div>
                <label className="font-medium">Upload Avatar:</label>
                <input
                    type="file"
                    accept="image/*"
                    {...register("avatar")}
                    onChange={handlePreview}
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                />
            </div>

            {/* Preview */}
            {preview && (
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-600">Preview:</p>
                    <img
                        src={preview}
                        alt="Preview Avatar"
                        className="w-32 h-32 object-cover rounded-full border"
                    />
                </div>
            )}

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Submit 🚀
            </button>
        </form>
    );
}
