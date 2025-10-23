// GANTI FILE INI DENGAN:
import React from "react";

interface UserCardProps {
    name: string
    age: number
    isActive: boolean
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                        {name.charAt(0)}
                    </span>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600">Age: {age}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${isActive ? "bg-green-500" : "bg-red-500"
                        }`}></span>
                    {isActive ? "Active" : "Inactive"}
                </span>

                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    View Profile →
                </button>
            </div>
        </div>
    )
}

export default UserCard