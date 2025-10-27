import { useState } from "react";
import { Button } from "@/components/ui/button";
import BasicForm from "@/components/BasicForm";
import MultiStepForm from "@/components/MultiStepForm";
import DynamicForm from "@/components/DynamicForm";
import FileUploadForm from "@/components/FileUploadForm";

export default function App() {
    // state buat nyimpen form mana yang aktif
    const [activeForm, setActiveForm] = useState("basic");

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">
                tugas harian pekan 4
            </h1>

            {/* Tombol navigasi antar form */}
            <div className="flex gap-3 mb-8">
                <Button
                    variant={activeForm === "basic" ? "default" : "outline"}
                    onClick={() => setActiveForm("basic")}
                >
                    Basic Form
                </Button>
                <Button
                    variant={activeForm === "multi" ? "default" : "outline"}
                    onClick={() => setActiveForm("multi")}
                >
                    Multi-Step Form
                </Button>
                <Button
                    variant={activeForm === "dynamic" ? "default" : "outline"}
                    onClick={() => setActiveForm("dynamic")}
                >
                    Dynamic Form
                </Button>
                <Button
                    variant={activeForm === "advanced" ? "default" : "outline"}
                    onClick={() => setActiveForm("advanced")}
                >
                    Advanced Form
                </Button>
            </div>

            {/* Bagian konten form */}
            <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
                {activeForm === "basic" && <BasicForm />}
                {activeForm === "multi" && <MultiStepForm />}
                {activeForm === "dynamic" && <DynamicForm />}
                {activeForm === "advanced" && <FileUploadForm />}
            </div>
        </div>
    );
}
