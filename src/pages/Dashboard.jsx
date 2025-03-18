import React, { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"

// Page transition variants
const pageVariants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const role = searchParams.get("role") || "user"
  const [activeTab, setActiveTab] = useState("actifs")
  const [filterState, setFilterState] = useState({
    centre: "all",
    formation: "all",
    formateur: "all"
  })

  const handleLogout = () => {
    navigate("/login")
  }

  const handleFilterChange = (filterType, value) => {
    setFilterState(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  // Admin Dashboard
  const renderAdminDashboard = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestion des Utilisateurs</h2>
        <Button>Ajouter un utilisateur</Button>
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Total Utilisateurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,254</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Nouvelles Inscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">42</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Formateurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">23</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="bg-card rounded-lg p-4 border">
        <h3 className="text-xl font-semibold mb-4">Liste des utilisateurs récents</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-2">Nom</th>
                <th className="p-2">Email</th>
                <th className="p-2">Rôle</th>
                <th className="p-2">Statut</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t"
              >
                <td className="p-2">Ahmed Alami</td>
                <td className="p-2">ahmed.alami@ofppt.ma</td>
                <td className="p-2">Formateur</td>
                <td className="p-2">Actif</td>
                <td className="p-2">
                  <Button variant="outline" size="sm">Voir</Button>
                </td>
              </motion.tr>
              <motion.tr 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="border-t"
              >
                <td className="p-2">Fatima Zahra</td>
                <td className="p-2">fatima.z@ofppt.ma</td>
                <td className="p-2">Stagiaire</td>
                <td className="p-2">Actif</td>
                <td className="p-2">
                  <Button variant="outline" size="sm">Voir</Button>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )

  // Direction Régionale Dashboard
  const renderDirectionRegionaleDashboard = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestion des Centres de Formation</h2>
        <Button>Ajouter un centre</Button>
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Centres de Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Formations Actives</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">48</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Stagiaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2,154</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="bg-card rounded-lg p-4 border">
        <h3 className="text-xl font-semibold mb-4">Performance par Centre</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Centre de Formation Casablanca</span>
              <span>92%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Progress value={92} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Centre de Formation Rabat</span>
              <span>87%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Progress value={87} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Centre de Formation Tanger</span>
              <span>78%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Progress value={78} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  // CDC Dashboard
  const renderCDCDashboard = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold">CDC Dashboard</h2>
        <p className="text-muted-foreground">Développement et amélioration des modules de formation</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Modules Actifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">28</span>
                <span className="ml-2 text-xs text-green-500">+3 nouveaux modules ce mois-ci</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Formateurs Associés</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">42</span>
                <span className="ml-2 text-xs text-green-500">+5 nouvelles collaborations</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Evaluations Reçues</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">156</span>
                <span className="ml-2 text-xs text-green-500">+24 cette semaine</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction Moyenne</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">4.7/5</span>
                <span className="ml-2 text-xs text-green-500">+0.2 par rapport au trimestre précédent</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      {/* Modules and Evaluations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modules de Formation */}
        <motion.div variants={itemVariants} className="bg-card rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-2">Modules de Formation</h3>
          <p className="text-sm text-muted-foreground mb-4">Aperçu des modules développés par votre centre</p>
          
          <div className="flex space-x-2 mb-4 border-b">
            <button 
              className={`pb-2 text-sm font-medium ${activeTab === "actifs" ? "border-b-2 border-primary" : ""}`}
              onClick={() => setActiveTab("actifs")}
            >
              Actifs
            </button>
            <button 
              className={`pb-2 text-sm font-medium ${activeTab === "developpement" ? "border-b-2 border-primary" : ""}`}
              onClick={() => setActiveTab("developpement")}
            >
              En Développement
            </button>
            <button 
              className={`pb-2 text-sm font-medium ${activeTab === "revision" ? "border-b-2 border-primary" : ""}`}
              onClick={() => setActiveTab("revision")}
            >
              En Révision
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-background p-4 rounded border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Développement Web Frontend</h4>
                  <p className="text-xs text-muted-foreground mt-1">8 formateurs dans 6 centres</p>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill={index < 4 ? "gold" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                  <span className="text-xs ml-1">4.8/5</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-4 rounded border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Bases de Données SQL</h4>
                  <p className="text-xs text-muted-foreground mt-1">6 formateurs dans 4 centres</p>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill={index < 4 ? "gold" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                  <span className="text-xs ml-1">4.5/5</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Evaluations Récentes */}
        <motion.div variants={itemVariants} className="bg-card rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-2">Évaluations Récentes</h3>
          <p className="text-sm text-muted-foreground mb-4">Retours des formateurs et participants sur vos modules</p>
          
          <div className="space-y-4">
            <div className="p-4 border rounded bg-background">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Emma Thompson</p>
                  <p className="text-xs text-muted-foreground">Aujourd'hui</p>
                </div>
                <div className="ml-auto text-xs bg-muted px-2 py-1 rounded">Formateur</div>
              </div>
              <p className="text-sm mb-2">Module: Développement Web Frontend</p>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="gold" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm">Excellent module avec des exercices pratiques très pertinents.</p>
            </div>
            
            <div className="p-4 border rounded bg-background">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Hier</p>
                </div>
                <div className="ml-auto text-xs bg-muted px-2 py-1 rounded">Formateur</div>
              </div>
              <p className="text-sm mb-2">Module: Bases de Données SQL</p>
              <div className="flex mb-1">
                {[1, 2, 3, 4].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="gold" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="text-sm">Bon contenu, mais pourrait inclure plus d'exercices pratiques.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  // Animateur Dashboard
  const renderAnimateurDashboard = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes Formations</h2>
        <Button>Ajouter un module</Button>
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Formations Actives</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Stagiaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">86</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Évaluations à faire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="bg-card rounded-lg p-4 border">
        <h3 className="text-xl font-semibold mb-4">Progression des Formations</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Développement Web Frontend</span>
              <span>68%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Progress value={68} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>JavaScript Avancé</span>
              <span>42%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Progress value={42} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Bases de Données</span>
              <span>85%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Progress value={85} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  // User Dashboard
  const renderUserDashboard = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mon Parcours de Formation</h2>
        <Button>Voir toutes les formations</Button>
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Formations en cours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Formations terminées</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="bg-card rounded-lg p-4 border">
        <h3 className="text-xl font-semibold mb-4">Progression de mes formations</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Développement Web</span>
              <span>75%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Progress value={75} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Design UI/UX</span>
              <span>45%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Progress value={45} />
            </motion.div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Gestion de Projet</span>
              <span>20%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Progress value={20} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return renderAdminDashboard()
      case "direction_regionale":
        return renderDirectionRegionaleDashboard()
      case "cdc":
        return renderCDCDashboard()
      case "animateur":
        return renderAnimateurDashboard()
      default:
        return renderUserDashboard()
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r p-4 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">TrainPro</h2>
          <p className="text-sm text-muted-foreground">Cdc Dashboard</p>
        </div>
        
        <nav className="space-y-1">
          <Link to="/dashboard" className="flex items-center gap-2 p-2 bg-primary/10 text-primary rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            Dashboard
          </Link>
          <Link to="#" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Profile
          </Link>
          <Link to="/modules" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Modules
          </Link>
          <Link to="/evaluations" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Evaluations
          </Link>
          <Link to="#" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Messages
          </Link>
          <Link to="#" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            Settings
          </Link>
        </nav>
        
        <div className="mt-auto">
          <button 
            className="flex items-center gap-2 p-2 w-full hover:bg-muted rounded-md"
            onClick={handleLogout}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="ml-64 p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Bienvenue, User Name</h1>
            <p className="text-sm text-muted-foreground">Voici votre tableau de bord</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs flex items-center justify-center rounded-full">3</span>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </div>
        
        {/* Filter bar */}
        <div className="flex space-x-2 mb-6">
          <div className="relative">
            <Select 
              value={filterState.centre}
              onValueChange={(val) => handleFilterChange("centre", val)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Centre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les centres</SelectItem>
                <SelectItem value="casa">Casablanca</SelectItem>
                <SelectItem value="rabat">Rabat</SelectItem>
                <SelectItem value="tanger">Tanger</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative">
            <Select 
              value={filterState.formation}
              onValueChange={(val) => handleFilterChange("formation", val)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Formation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les formations</SelectItem>
                <SelectItem value="dev">Développement</SelectItem>
                <SelectItem value="reseaux">Réseaux</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative">
            <Select 
              value={filterState.formateur}
              onValueChange={(val) => handleFilterChange("formateur", val)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Formateur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les formateurs</SelectItem>
                <SelectItem value="emma">Emma Thompson</SelectItem>
                <SelectItem value="michael">Michael Chen</SelectItem>
                <SelectItem value="julie">Julie Dubois</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {renderDashboard()}
      </motion.main>
    </motion.div>
  )
} 