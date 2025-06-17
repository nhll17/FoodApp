import styles from "./ocont.module.css";
export default function Outercontainer({ children }) {
  return <div className={styles.parentcontainer}>{children}</div>;
}
