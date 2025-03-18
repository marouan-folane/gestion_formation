import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

// Sample module data
const moduleData = [
  {
    id: 1,
    title: "Développement Web Frontend",
    description: "Formation complète sur HTML, CSS, JavaScript et React",
    category: "Développement",
    duration: "80h",
    formateurs: 8,
    centres: 6,
    rating: 4.8,
    status: "actif"
  },
  {
    id: 2,
    title: "Bases de Données SQL",
    description: "Conception, gestion et optimisation des bases de données relationnelles",
    category: "Développement",
    duration: "60h",
    formateurs: 6,
    centres: 4,
    rating: 4.5,
    status: "actif"
  },
  {
    id: 3,
    title: "Réseaux informatiques",
    description: "Fondamentaux des réseaux, protocoles et configuration",
    category: "Systèmes et Réseaux",
    duration: "70h",
    formateurs: 5,
    centres: 3,
    rating: 4.2,
    status: "en_developpement"
  },
  {
    id: 4,
    title: "Administration Windows Server",
    description: "Gestion et déploiement de solutions serveur Windows",
    category: "Systèmes et Réseaux",
    duration: "90h",
    formateurs: 4,
    centres: 5,
    rating: 4.4,
    status: "en_revision"
  },
  {
    id: 5,
    title: "Marketing Digital",
    description: "Stratégies marketing pour les plateformes numériques",
    category: "Business",
    duration: "50h",
    formateurs: 7,
    centres: 8,
    rating: 4.7,
    status: "actif"
  }
]

export default function Modules() {
  const [activeTab, setActiveTab] = useState("actifs")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  // Filter modules based on active tab, search term and category
  const filteredModules = moduleData.filter(module => {
    const matchesStatus = 
      (activeTab === "actifs" && module.status === "actif") ||
      (activeTab === "developpement" && module.status === "en_developpement") ||
      (activeTab === "revision" && module.status === "en_revision") ||
      activeTab === "tous";
    
    const matchesSearch = 
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "all" || module.category === selectedCategory;
    
    return matchesStatus && matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      className="p-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Modules de Formation</h1>
        <p className="text-muted-foreground">Gérez les modules de formation disponibles</p>
      </div>

      {/* Search and Filter Section */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search" className="mb-2">Rechercher</Label>
              <Input 
                id="search" 
                placeholder="Rechercher par titre ou description..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Label htmlFor="category" className="mb-2">Catégorie</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Toutes les catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="Développement">Développement</SelectItem>
                  <SelectItem value="Systèmes et Réseaux">Systèmes et Réseaux</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4 border-b">
        <button 
          className={`pb-2 text-sm font-medium ${activeTab === "tous" ? "border-b-2 border-primary" : ""}`}
          onClick={() => setActiveTab("tous")}
        >
          Tous
        </button>
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

      {/* Add New Module Button */}
      <div className="flex justify-end mb-4">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Nouveau Module
        </Button>
      </div>

      {/* Modules List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredModules.length > 0 ? (
          filteredModules.map(module => (
            <Card key={module.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{module.title}</CardTitle>
                  <div className="flex items-center">
                    <span className="text-sm mr-1">{module.rating}</span>
                    <svg 
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
                  </div>
                </div>
                <CardDescription>
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Catégorie:</span>
                    <p>{module.category}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Durée:</span>
                    <p>{module.duration}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Formateurs:</span>
                    <p>{module.formateurs}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Centres:</span>
                    <p>{module.centres}</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Éditer</Button>
                  <Button variant="outline" size="sm">Voir détails</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-muted-foreground">
            Aucun module ne correspond à vos critères de recherche.
          </div>
        )}
      </div>
    </motion.div>
  )
} 