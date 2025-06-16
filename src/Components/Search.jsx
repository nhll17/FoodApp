import { useEffect, useState } from "react";
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b983cef87efa41d3b52a70a78c7426ee";

export default function Search({setfooddata}) {
  const [query, setquery] = useState("pizza");
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfooddata(data.results);
    }

    fetchfood();
  }, [query]);

  return (
    <div className={styles.inputcontainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
