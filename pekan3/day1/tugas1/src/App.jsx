// src/App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import ThemedCard from "./components/ThemedCard";
import ThemedText from "./components/ThemedText";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h2>Belajar React asik </h2>

                <Header />
                <ThemeButton />

                <ThemedCard>
                  <ThemedText text="Ohayo React wadaswadadwasewadasawedwad!" />
                </ThemedCard>

                <UserProfile />

                <h3> Shopping Cart</h3>
                <ProductList />
                <CartDisplay />
              </div>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
