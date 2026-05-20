import RecipeList from "../components/RecipeList";

function Chicken() {
  return (
    <div className="page">
      <h1>Chicken Recipes</h1>
      <RecipeList query="chicken" />
    </div>
  );
}

export default Chicken;