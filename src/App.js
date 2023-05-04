import "./App.css";
import Cart from "./Components/Cart/Cart";
import Dishes from "./Components/DishesComponents/Dishes";
import FoodCategories from "./Components/Filter/FoodCategories";

function App() {
  return (
    <div className="App">
      <FoodCategories />
      <Cart />
      <Dishes />
    </div>
  );
}

export default App;
