import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Aseel Recipe Finder</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/subscription">Policy</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/chicken">Chicken</Link>
        <Link to="/dessert">Dessert</Link>
      </div>
    </div>
  );
}

export default Navbar;