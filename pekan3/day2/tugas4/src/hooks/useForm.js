import { useState } from "react";

export default function useForm(initialValues = {}) {
  const [values, setValue] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setValue(initialValues);
  };
  return { values, handleChange, resetForm };
}
