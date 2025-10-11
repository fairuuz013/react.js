import { useState, useEffect } from "react";

function QuranFilteredAyah() {
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAyahs = async () => {
      try {
        const response = await fetch("https://api.alquran.cloud/v1/surah/75");
        if (!response.ok) throw new Error("Gagal mengambil data surah!");
        const data = await response.json();

        // 🔹 Hanya tampilkan ayat genap
        const filtered = data.data.ayahs.filter((a) => a.numberInSurah % 2 === 0);
        setAyahs(filtered);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAyahs();
  }, []);

  if (loading) return <p>Sedang memuat daftar ayat...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h2>Daftar Ayat Genap dari Surah {ayahs[0]?.surah?.englishName}</h2>
      <ul>
        {ayahs.map((ayah) => (
          <li key={ayah.number}>
            <strong>Ayat {ayah.numberInSurah}:</strong> {ayah.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuranFilteredAyah;
