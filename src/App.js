import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Subscription from "./pages/Subscription";
import Pizza from "./pages/Pizza";
import Chicken from "./pages/Chicken";
import Dessert from "./pages/Dessert";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/chicken" element={<Chicken />} />
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}
export default App;