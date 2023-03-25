import exitImg from "../assets/logout.svg";
import styles from "./styleComponents/Header.module.css";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  let go = useNavigate();
  function exit(e) {
    e.preventDefault();
    localStorage.clear();
    go("/signin");
  }
  return (
    <div className={styles.header}>
      <h1>Simple Hotel Check</h1>
      <div className={styles.exitButton} onClick={(e) => exit(e)}>
        <span>Выйти</span>
        <img src={exitImg} alt="выйти" />
      </div>
    </div>
  );
};
