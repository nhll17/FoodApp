import styles from "./fooditem.module.css";
export default function Fooditem({ food ,setfoodid}) {
  function handleid(){
    setfoodid(food.id)
    console.log(food.id);
    
  }
  return (
    <div className={styles.itemcontainer}>
      <img className={styles.image} src={food.image} />
      <p className={styles.text}>{food.title}</p>
      <div className={styles.buttoncontainer}>
        <button onClick={()=>handleid()}   className={styles.button}>View Recipe</button>
      </div>
    </div>
  );
}
