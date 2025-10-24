import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Tipe data state (biar TS tau bentuknya)
interface CounterState {
    value: number
}

// Nilai awal (initial state)
const initialState: CounterState = {
    value: 0,
}

// Buat slice
const counterSlice = createSlice({
    name: "counter", // nama slice
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // contoh kalau mau nambah nilai custom
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Export action dan reducer-nya
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
