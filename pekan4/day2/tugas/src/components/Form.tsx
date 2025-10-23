import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    username: string;
    email: string;
}

export default function Form() {
    const [data, setData] = useState<FormData>({ username: "", email: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Username: ${data.username}, Email: ${data.email}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Kirim</button>
        </form>
    );
}

