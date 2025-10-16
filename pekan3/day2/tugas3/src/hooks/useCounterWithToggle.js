import useCounter from "./useCounter";
import useToggle from "./useToggle";


export default function userCounterWithToggle() {
    const counter = useCounter(0)
    const [isVisible, toggleVisible] = useToggle(true)

    
  return {
    ...counter,     // gabung semua fungsi dari useCounter
    isVisible,
    toggleVisible,
  };
}