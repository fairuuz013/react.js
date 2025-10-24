import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../app/store"
import { fetchUsers } from "../features/users/userSlice"
import { useEffect } from "react"

export default function UserList() {
    const dispatch = useDispatch<AppDispatch>()
    const { users, loading, error } = useSelector((state: RootState) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (loading) return <p>Loading data...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Daftar User</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> — {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
