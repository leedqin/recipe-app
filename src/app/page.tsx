'use client'

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import mockRecipes from "@/data/recipeMockData";
import { Recipe } from "@/types/RecipeType";
import Image from "next/image";
import { useState } from "react";
import RecipeCard from "./recipeCard";
import RecipeDetails from "./recipeDetails";
import RecipeFinder from "./recipeFinder";



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Input search change
  const handleSearchChange = (newQuery: any) => {
    if (newQuery.trim() === '') {
      setSearchResults([]);
      setSelectedRecipe(null);
    }
    setSearchQuery(newQuery);
  };

  
  // Filter the mockRecipes based on the search query
  const handleSearchSubmit = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setSelectedRecipe(null);
      return; 
    }

  
    const results = mockRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectRecipe = (recipeId: number) => {
    const recipe = mockRecipes.find((r) => r.id === recipeId);
    setSelectedRecipe(recipe);
  };
  return (
    <main>
      <ResizablePanelGroup
        direction="horizontal"
        style={{ height: '100vh', width: '100%', display: 'flex', overflow: 'hidden' }}
      >
        <ResizablePanel defaultSize={25} style={{ overflowY: 'auto' }}>
          <RecipeFinder
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
          {searchResults.map((recipe) => (
          <div key={recipe.id} className="p-4">
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              onSelect={() => handleSelectRecipe(recipe.id)} // Pass recipe.id instead of the recipe object
            />
          </div>
          ))}

        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} style={{ overflowY: 'auto' }}>
          {selectedRecipe ? (
          <div key={selectedRecipe.id} className="p-4">
            <RecipeDetails recipe={selectedRecipe} />
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <span>Select a recipe to view details</span>
            </div>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}

