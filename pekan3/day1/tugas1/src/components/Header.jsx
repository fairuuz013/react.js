// src/components/Header.jsx
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { notifications, setNotifications } = useContext(NotificationContext);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  const addNotif = () => setNotifications((n) => n + 1);
  const clearNotif = () => setNotifications(0);

  return (
    <div>
      <h3>Header</h3>
      <p>Bahasa: {language}</p>
      <button onClick={toggleLanguage}>Ganti Bahasa</button>

      <p>Notifikasi: {notifications}</p>
      <button onClick={addNotif}>Tambah Notif</button>
      <button onClick={clearNotif}>Clear</button>
    </div>
  );
}

