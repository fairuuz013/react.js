import { useState, useEffect } from "react";

function WindowSizetracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    console.log("Event listener di tambahkan");

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.timeLog("Event listener dibersihkan");
    };
  }, []);

  return (
    <div>
      <h2>Ukuran jendala</h2>
      <p>Lebar: {size.width}</p>
      <p>Tinggi: {size.height}</p>
    </div>
  );
}

export default WindowSizetracker;
