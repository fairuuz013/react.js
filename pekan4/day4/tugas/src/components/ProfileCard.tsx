interface ProfileCardProps {
    name: string;
    bio: string;
}

export default function ProfileCard({ name, bio }: ProfileCardProps) {
    return (
        <div className="border rounded-lg shadow p-4 text-center bg-white">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">{bio}</p>
        </div>
    )
}