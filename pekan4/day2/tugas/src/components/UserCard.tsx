import React from "react";

interface UserCardProps {
    name: string
    age: number
    isActive: boolean
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {

    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Umur: {age}</p>
            <p>Status: {isActive ? "Aktif" : "Nonaktif "}</p>
        </div>
    )
}

export default UserCard