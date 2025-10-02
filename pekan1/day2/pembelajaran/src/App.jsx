import React from "react";
import ProfileCard from "./components/ProfileCard";
import DiscountPrice from "./components/DiscountPrice";
import LoginStatus from "./components/LoginStatus"; // ✅ benerin path
import FruitList from "./components/FruitList";

// ✅ foto diambil dari src/assets/images.jpeg
import myPhoto from "./assets/images.jpeg";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Tugas React JSX dasar</h1>

      {/* 1. ProfileCard */}
      <ProfileCard
        name="Fairuuz Zahran"
        photo={myPhoto} // ✅ pakai myPhoto, bukan string
        bio="Saya adalah seorang fullstack developer"
        skills={[
          "React",
          "Golang",
          "JavaScript",
          "Node.js",
          "Python",
          "PHP",
          "Ruby",
        ]}
      />

      {/* 2. DiscountPrice */}
      <DiscountPrice price={100000000} discount={20} />

      {/* 3. LoginStatus */}
      <LoginStatus isLoggedIn={true} messages={["Hai!", "Apa kabar?"]} />

      {/* 4. FruitList */}
      <FruitList fruits={["Apel", "Jeruk", "Mangga", "Pisang"]} />
    </div>
  );
}

export default App;
