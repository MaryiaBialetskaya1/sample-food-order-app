import Dish from "./Dish";
import dishesData from "../../dishesData";

const Dishes = () => {
  return (
    <div>
      {dishesData.map((dish) => (
        <Dish dish={dish} />
      ))}
    </div>
  );
};

export default Dishes;
