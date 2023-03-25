import exitImg from "../assets/logout.svg";
import styles from "./styleComponents/Header.module.css";
export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Simple Hotel Check</h1>
      <div className={styles.exitButton}>
        <span>Выйти</span>
        <img src={exitImg} alt="выйти" />
      </div>
    </div>
  );
};
