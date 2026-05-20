import RecipeList from "../components/RecipeList";

function Dessert() {
  return (
    <div className="page">
      <h1>Dessert Recipes</h1>
      <RecipeList query="dessert" />
    </div>
  );
}

export default Dessert;