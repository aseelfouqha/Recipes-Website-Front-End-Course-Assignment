import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={recipe.image_url} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.publisher}</p>
    </div>
  );
}

export default RecipeCard;