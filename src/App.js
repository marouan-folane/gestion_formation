import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { AnimatePresence } from "framer-motion"
import Login from "./pages/Login"
import UserLogin from "./pages/UserLogin"
import Dashboard from "./pages/Dashboard"
import Modules from "./pages/Modules"
import  Home from './pages/Home'
import Evaluations from "./pages/Evaluations"
import "./styles/globals.css"

// AnimatePresence requires the location from useLocation
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/evaluations" element={<Evaluations />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <AnimatedRoutes />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 