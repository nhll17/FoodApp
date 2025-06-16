import Fooditem from "./fooditem";

export default function Foodlist({ fooddata }) {
  return (
    <div>
      {fooddata.map((food) => (
        <Fooditem key={food.id} food={food} />
      ))}
    </div>
  );
}
