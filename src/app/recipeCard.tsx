
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface RecipeCardProps {
  title: string;
  description: string;
  onSelect: () => void; // This is expected to be a function
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, onSelect }) => {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onSelect}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
