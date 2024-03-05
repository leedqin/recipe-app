import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


interface RecipeFinderProps {
  searchQuery: string;
  onSearchChange: (newQuery: string) => void;
  onSearchSubmit: () => void;
}

const RecipeFinder: React.FC<RecipeFinderProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="flex flex-col items-center p-6 w-full">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Search for your recipes
      </h1>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
          type="text"
          placeholder="What do you want to cook?"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1"
        />
        <Button type="button" onClick={onSearchSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default RecipeFinder;