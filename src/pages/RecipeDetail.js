import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://forkify-api.jonas.io/api/v2/recipes/${id}`
        );

        const data = await res.json();

        setRecipe(data.data.recipe);
      } catch (err) {
        setError("Failed to load recipe 😢");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="page recipe-detail">
      <h1>{recipe.title}</h1>

      <img src={recipe.image_url} alt={recipe.title} />

      <p><strong>Publisher:</strong> {recipe.publisher}</p>

      <a href={recipe.source_url} target="_blank" rel="noreferrer">
        View Full Recipe
      </a>
    </div>
  );
}

export default RecipeDetail;