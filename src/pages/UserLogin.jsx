import React, { useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export default function UserLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  
  // Get the selected role from URL parameters
  const searchParams = new URLSearchParams(location.search)
  const role = searchParams.get("role") || ""

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call for authentication
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Navigate to dashboard with role and user info
      navigate(`/dashboard?role=${role}`)
    } catch (error) {
      console.error("Login error:", error)
      alert("Erreur d'authentification. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  // Create a role label map to display the selected role
  const roleLabels = {
    "cdc": "Responsable CDC",
    "animateur": "Formateur Animateur",
    "direction_regionale": "Responsable DR (DRIF)",
    "direction": "Directeur d'Institution",
    "participant": "Formateur Participant",
    "admin": "Responsable Formation"
  }

  return (
    <motion.div 
      className="flex min-h-screen flex-col items-center justify-center bg-background p-4"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Link to="/login" className="absolute top-4 left-4 flex items-center text-primary hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Retour à la sélection du rôle
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
          <CardDescription className="text-center">
            Connectez-vous en tant que {roleLabels[role] || "Utilisateur"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <Link to="#" className="text-sm text-primary hover:underline">
                  Mot de passe oublié?
                </Link>
              </div>
              <Input 
                id="password" 
                name="password"
                type="password" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-center text-sm text-muted-foreground">
            Vous n'avez pas de compte?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Créer un compte
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
} 