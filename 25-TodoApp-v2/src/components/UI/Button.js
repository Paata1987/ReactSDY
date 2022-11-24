import { useState } from "react";
import styles from "./Button.module.css";

function Button({ onClick, children, title, disable = false }) {
  // const { onClick, children, title, disable = false } = useState();
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disable}
    >
      {children}
    </button>
  );
}
export default Button;
