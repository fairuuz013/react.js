import { useState } from "react";
import InputBox from "./InputBox";
import DisplayBox from "./DisplayBox";


export default function SheredState(){
    const [massage,setMasage] = useState("");

    return (
        <div>
            <h2>Berbagi State antar ade abang Components (Sibling Components)</h2>
            <InputBox massage={massage} setMasage={setMasage} />
            <DisplayBox massage={massage}/>
        </div>
    )
}