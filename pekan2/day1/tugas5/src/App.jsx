import React, { useState } from "react";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      return 'Email harus mengandung karakter "@"';
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password minimal 6 karakter";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmailError = validateEmail(email);
    const newPasswordError = validatePassword(password);

    // update state error
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);

    if (!newEmailError && !newPasswordError) {
      alert("Formulir berhasil disubmit!");
      console.log({ email, password });
    } else {
      alert("Mohon perbaiki kesalahan dalam formulir.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir dengan Validasi Coy</h2>

      <div>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {emailError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{emailError}</p>
        )}
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {passwordError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{passwordError}</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default ValidationForm;
