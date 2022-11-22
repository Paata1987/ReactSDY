import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1> info component works!</h1>
      <h2> info component works!</h2>
      <button className="my-button">Click me in the info component!</button>
    </div>
  );
}
export default Info;
