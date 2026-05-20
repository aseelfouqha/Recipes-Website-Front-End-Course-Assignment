import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Aseel Recipe Finder - Front-End Mentor I didn't USE AI :)</h1>

      <p>
        Browse delicious recipes from around the world.
      </p>

      <h2>Start Browsing Recipes</h2>

      <div className="home-categories">

        <div className="home-card">
          <h3>Pizza Recipes</h3>
          <p>Find the best pizza recipes.</p>
          <Link to="/pizza">
            <button>Explore</button>
          </Link>
        </div>

        <div className="home-card">
          <h3>Chicken Recipes</h3>
          <p>Delicious chicken meals ideas.</p>
          <Link to="/chicken">
            <button>Explore</button>
          </Link>
        </div>

        <div className="home-card">
          <h3>Dessert Recipes</h3>
          <p>Sweet and tasty desserts.</p>
          <Link to="/dessert">
            <button>Explore</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;