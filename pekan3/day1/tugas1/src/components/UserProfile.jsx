// src/components/UserProfile.jsx
import useUserContext from "../hooks/useUserContext";

export default function UserProfile() {
  const { user, login, logout, updateProfile } = useUserContext();

  return (
    <div>
      <h3>User Profile</h3>
      {user.isLoggedIn ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
          <button
            onClick={() =>
              updateProfile({ name: "Ruz Update", email: "update@example.com" })
            }
          >
            Update Profile
          </button>
        </>
      ) : (
        <button onClick={() => login("Fairuuz Kun", "MaouuSamaRuuzSan@example.com")}>
          Login
        </button>
      )}
    </div>
  );
}
