// GANTI FILE INI DENGAN:
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useAppContext } from "./context/AppContext";

export default function App() {
  const { user } = useAppContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                About
              </Link>
            </div>
            <div className="text-sm text-gray-600 bg-white/50 px-4 py-2 rounded-full border border-gray-200">
              Welcome, <span className="font-semibold text-blue-600">{user}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}