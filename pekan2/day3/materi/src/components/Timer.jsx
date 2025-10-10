import { useState,useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //Fungsi cleanup akan di jalan kan saat komponen di-unmount
    return () => {
      clearInterval(intervalid);
      console.log('Timer dibersihkan')
    };
  }, [] ); // array kosong hanya berjalan sekali saat maounting 
  
  return (
    <div>
        <h2>Timer: {count} detik</h2>
    </div>
  )
}

export default Timer
