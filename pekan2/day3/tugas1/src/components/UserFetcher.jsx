import { useState, useEffect } from "react";

function UserFetcher() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Komponen di ambil atau di update");
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data user:", data);
        setUserData(data);
      })
      .catch((err) => console.error("Error ambil data:", err));
  }, [userId]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data user</h2>

      <div>
        <button onClick={() => setUserId((prev) => (prev > 1 ? prev - 1 : 1))}>
          Sebelumnya
        </button>
        <button onClick={() => setUserId((prev) => prev + 1)}>
          Berikutnya
        </button>
      </div>

      <p>ID sekarang: {userId}</p>

      {userData ? (
        <div>
          <p>
            <strong>Nama:</strong> {userData.name}
          </p>
          <p>
            <strong> Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Kota:</strong> {userData.address?.city}
          </p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default UserFetcher;
