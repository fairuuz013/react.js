import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data

})

interface User {
    id: number
    name: string
    email: string
}

interface UserState {
    users: User[]
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })

            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Gagal ambil data nya bang"
            })
    }
})

export default userSlice.reducer