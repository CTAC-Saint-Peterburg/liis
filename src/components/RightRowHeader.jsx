import vector from "../assets/VectorRight.svg";
import styles from "./styleComponents/RightRowHeader.module.css";
export const RightRowHeader = () => {
  return (
    <div className={styles.rightRowHeader}>
      <h1>Отели</h1>
      <img src={vector} alt=">" />
      <h1>Москва</h1>
      <h3>07 июля 2020</h3>
    </div>
  );
};
