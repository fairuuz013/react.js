import { useState, useEffect } from "react";

function QuranAyahAbort() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAyah = async () => {
      try {
        const response = await fetch("https://api.alquran.cloud/v1/ayah/75:2", {
          signal,
        });
        if (!response.ok) throw new Error("Gagal mengambil data ayat!");
        const data = await response.json();
        setAyah(data.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAyah();

    return () => {
      controller.abort();
      console.log("✅ Fetch dibatalkan karena komponen di-unmount");
    };
  }, []);

  if (loading) return <p>Lagi memuat ayat...</p>;
  if (error) return <p>Terjadi kesalahan: {error.massage}</p>;

  return (
    <div>
      <h2>
        Surah {ayah.surah.englishName} ({ayah.surah.name})
      </h2>
      <p>
        <strong>Nomor Ayat:</strong> {ayah.numberInSurah}
      </p>
      <p>
        <strong>Teks Arab:</strong> {ayah.text}
      </p>

      <p>
        <strong>Nama Surah:</strong> {ayah.surah.englishNameTranslation}
      </p>
    </div>
  );
}

export default  QuranAyahAbort
