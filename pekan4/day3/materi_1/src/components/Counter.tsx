import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { decrement, increment, incrementByAmount } from "../features/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Tambah</button>
            <button onClick={() => dispatch(decrement())}>Kurang</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Tambah 10</button>
        </>
    );
}
