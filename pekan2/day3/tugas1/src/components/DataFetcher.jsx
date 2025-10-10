import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Mengambil data...");
    setLoading(true);

    const timer = setTimeout(() => {
      setData({ title: "Belajar useEffect", content: "Wo mana sprai gratis nya" });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      {loading ? <p>Loading data...</p> : (
        <div>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
