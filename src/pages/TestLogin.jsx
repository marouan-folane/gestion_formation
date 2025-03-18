import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const roles = [
  { 
    id: "cdc", 
    label: "Responsable CDC", 
    description: "Proposez et coordonnez les plans de formation"
  },
  { 
    id: "animateur", 
    label: "Formateur Animateur", 
    description: "Animez des sessions et gérez les contenus"
  },
  { 
    id: "direction_regionale", 
    label: "Responsable DR (DRIF)", 
    description: "Publiez les sessions dans votre région"
  }
];

export default function TestLogin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Role Cards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map(role => (
          <Card key={role.id} className="cursor-pointer">
            <CardHeader>
              <CardTitle>{role.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{role.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 