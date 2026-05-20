import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ query }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://forkify-api.jonas.io/api/v2/recipes?search=${query}`
        );

        const data = await res.json();

        setRecipes(data.data.recipes);
      } catch (err) {
        setError("Error loading recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  if (loading) return <h2>Loading...Didn't USE AI</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeList;