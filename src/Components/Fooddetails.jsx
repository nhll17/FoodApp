import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Items from "./item";
import Itemlist from "./itemlist";

export default function Fooddetails({ foodid }) {
  const [food, setfood] = useState("");
  const [loading, setloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "b983cef87efa41d3b52a70a78c7426ee";
  useEffect(() => {
    async function fetchdata() {
      const re = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await re.json();
      console.log(data);
      setfood(data);
      setloading(false);
    }
    fetchdata();
  }, [foodid]);
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.heading}>{food.title}</h1>
        <img className={styles.image} src={food.image} />
        <div className={styles.details}>
          <span>
            <strong>⏲️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "🥕Vegetarian" : "🍖NonVeg"} </strong>
          </span>
          <span>
            <strong>🧑🏻‍🤝‍👩🏻Serves {food.servings}</strong>
          </span>
        </div>
        <div className={styles.price}>
          <span>
            $ <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
       <div>
        <Itemlist food={food} loading={loading}/>
       </div>
        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {loading ? (
              <p>Loading..</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
