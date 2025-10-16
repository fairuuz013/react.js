import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // Ambil data dari localStorage pas pertama kali hook dipanggil
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return initialValue;
    }
  });

  // Setiap kali value berubah, update ke localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
