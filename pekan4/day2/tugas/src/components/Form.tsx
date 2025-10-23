// GANTI FILE INI DENGAN:
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
    username: string;
    email: string;
}

export default function Form() {
    const [data, setData] = useState<FormData>({ username: "", email: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Username: ${data.username}, Email: ${data.email}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Registration
                </h2>
                <p className="text-gray-600 mt-2">Join our community today</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
                Create Account
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
                By registering, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Terms of Service
                </a>
            </p>
        </form>
    );
}