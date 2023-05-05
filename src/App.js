import "./App.css";
import Cart from "./Components/Cart/Cart";
import Dishes from "./Components/DishesComponents/Dishes";
import FoodCategories from "./Components/Filter/FoodCategories";

function App() {
  return (
    <div className="App">
      <div className="block">
        <FoodCategories />
        <Cart />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
