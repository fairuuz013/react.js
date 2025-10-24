import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../app/store"
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice"
import { useState } from "react"

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    const [amount, setAmount] = useState(0)

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>

            <div style={{ marginTop: "20px" }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Masukkan nilai"
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Tambah Dengan Nilai
                </button>
            </div>
        </div>
    )
}
