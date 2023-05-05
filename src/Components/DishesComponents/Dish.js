const Dish = ({ dish }) => {
  return (
    <div>
      <img src={`${dish.img}.jpg`} alt="dish" />
      <h2>{dish.name}</h2>
      <h2>${dish.price}</h2>
      {/* TO FIX  */}
      <button>How many portions</button>
      <button>Add to cart</button>
    </div>
  );
};

export default Dish;
