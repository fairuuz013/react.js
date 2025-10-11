import { useState, useEffect } from "react";
import axios from "axios";

function QuranSurahList() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAyah = async () => {
      try {
        const response = await axios.get(
          "https://api.alquran.cloud/v1/ayah/92:2"
        );
        setAyah(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAyah();
  }, []);

  if (loading) return <p>Lagi memuat ayat...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h2>Ayat Nomor {ayah.number}</h2>
      <p>
        <strong>Surah:</strong> {ayah.surah.englishNameTranslation} (
        {ayah.surah.name} - Surat nomor {ayah.surah.number})
      </p>
      <p>
        <strong>Arab:</strong> {ayah.text}
      </p>
    </div>
  );
}
export default QuranSurahList;


// ini nomer 2 dan 3 bang devvvv
