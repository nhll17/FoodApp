import Fooditem from "./fooditem";

export default function Foodlist({ fooddata,setfoodid}) {
  return (
    <div>
      {fooddata.map((food) => (
        <Fooditem key={food.id} setfoodid={setfoodid} food={food} />
      ))}
    </div>
  );
}
