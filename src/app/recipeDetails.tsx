import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Recipe } from "@/types/RecipeType";

interface RecipeDetailsProps {
    recipe: Recipe;
  }
  
  const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
    return (
      <Card className="w-full lg:w-3/4 xl:w-1/2 mx-auto">
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ingredients</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="h-2 w-2 mt-1.5 rounded-full bg-sky-500" />
                <p className="flex-1 text-sm">{ingredient}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Instructions</h3>
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="mb-2 flex items-start space-x-2">
                <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-sky-500" />
                <p className="flex-1 text-sm">{instruction}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default RecipeDetails;