import RecipeList from "../components/RecipeList";

function Pizza() {
  return (
    <div className="page">
      <h1>Pizza Recipes</h1>
      <RecipeList query="pizza" />
    </div>
  );
}

export default Pizza;