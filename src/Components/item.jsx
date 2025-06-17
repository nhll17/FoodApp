import styles from "./item.module.css";
export default function Items({ item }) {
  return (
    <div>
      <div className={styles.itemcontainer}>
        <div className={styles.imagecon}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.details}>
          <div>{item.name}</div>
          <div>
            {" "}
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
