import { useState, useEffect } from "react";

function MultiEffectComponent(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // efek untuk count => ubah judul dokumen
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    //efek untuk name +> log ke konsol
    useEffect(() => {
        if (name) console.log(`Nama berubah menjadi: ${name}`)
    }, [name])

    return (
        <div style={{padding: "20px"}}>
            <h2>
                Mulltiple useEffect
                <p>Count: {count}</p>
                <button onClick={() => setCount (count + 1)}>Tambah</button>
                <br />
                <input type="text"
                placeholder="Ketik nama..." 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
            </h2>
        </div>
    )
}

export default MultiEffectComponent