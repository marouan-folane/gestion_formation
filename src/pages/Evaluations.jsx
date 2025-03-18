import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

// Sample evaluations data
const evaluationsData = [
  {
    id: 1,
    module: "Développement Web Frontend",
    formateur: "Emma Thompson",
    date: "Aujourd'hui",
    rating: 5,
    comment: "Excellent module avec des exercices pratiques très pertinents.",
    userType: "Formateur"
  },
  {
    id: 2,
    module: "Bases de Données SQL",
    formateur: "Michael Chen",
    date: "Hier",
    rating: 4,
    comment: "Bon contenu, mais pourrait inclure plus d'exercices pratiques.",
    userType: "Formateur"
  },
  {
    id: 3,
    module: "Marketing Digital",
    formateur: "Sophie Martin",
    date: "2 jours",
    rating: 5,
    comment: "Formation très complète, méthodologie efficace.",
    userType: "Participant"
  },
  {
    id: 4,
    module: "Réseaux informatiques",
    formateur: "Thomas Durand",
    date: "1 semaine",
    rating: 3,
    comment: "Contenu technique correct mais la pédagogie pourrait être améliorée.",
    userType: "Participant"
  },
  {
    id: 5,
    module: "Développement Web Frontend",
    formateur: "Julie Dubois",
    date: "1 semaine",
    rating: 4,
    comment: "Très bon module, j'aurais aimé plus de temps pour pratiquer.",
    userType: "Participant"
  }
]

export default function Evaluations() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedModule, setSelectedModule] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  
  // Filter evaluations based on search term, module and rating
  const filteredEvaluations = evaluationsData.filter(evaluation => {
    const matchesSearch = 
      evaluation.formateur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evaluation.comment.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesModule = 
      selectedModule === "all" || evaluation.module === selectedModule;
    
    const matchesRating = 
      ratingFilter === "all" || evaluation.rating.toString() === ratingFilter;
    
    return matchesSearch && matchesModule && matchesRating;
  });

  // Get unique module names for the filter
  const moduleOptions = [...new Set(evaluationsData.map(evaluation => evaluation.module))];

  return (
    <motion.div 
      className="p-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Évaluations</h1>
        <p className="text-muted-foreground">Retours des formateurs et participants sur vos modules</p>
      </div>

      {/* Search and Filter Section */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search" className="mb-2">Rechercher</Label>
              <Input 
                id="search" 
                placeholder="Rechercher par formateur ou commentaire..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Label htmlFor="module" className="mb-2">Module</Label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger id="module">
                  <SelectValue placeholder="Tous les modules" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les modules</SelectItem>
                  {moduleOptions.map(module => (
                    <SelectItem key={module} value={module}>{module}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-44">
              <Label htmlFor="rating" className="mb-2">Note</Label>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger id="rating">
                  <SelectValue placeholder="Toutes les notes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les notes</SelectItem>
                  <SelectItem value="5">5 étoiles</SelectItem>
                  <SelectItem value="4">4 étoiles</SelectItem>
                  <SelectItem value="3">3 étoiles</SelectItem>
                  <SelectItem value="2">2 étoiles</SelectItem>
                  <SelectItem value="1">1 étoile</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedModule("all")
                  setRatingFilter("all")
                }}
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Evaluations Reçues</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold">{evaluationsData.length}</div>
            <p className="text-xs text-muted-foreground">+24 cette semaine</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold">
              {(evaluationsData.reduce((sum, evaluation) => sum + evaluation.rating, 0) / evaluationsData.length).toFixed(1)}/5
            </div>
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
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
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Module le Mieux Noté</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-lg font-medium truncate">Marketing Digital</div>
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
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
          </CardContent>
        </Card>
      </div>

      {/* Evaluations List */}
      <div className="space-y-4">
        {filteredEvaluations.length > 0 ? (
          filteredEvaluations.map(evaluation => (
            <Card key={evaluation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium">{evaluation.formateur}</p>
                    <p className="text-xs text-muted-foreground">{evaluation.date}</p>
                  </div>
                  <div className="ml-auto text-xs bg-muted px-2 py-1 rounded">
                    {evaluation.userType}
                  </div>
                </div>
                
                <p className="text-sm mb-2">Module: {evaluation.module}</p>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill={star <= evaluation.rating ? "gold" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm">{evaluation.comment}</p>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">Répondre</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            Aucune évaluation ne correspond à vos critères de recherche.
          </div>
        )}
      </div>
    </motion.div>
  )
} 