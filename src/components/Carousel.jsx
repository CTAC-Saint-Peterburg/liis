import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import styles from "./styleComponents/Carousel.module.css";
export const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <img src={img1} className={styles.carouselUnit}></img>
      <img src={img2} className={styles.carouselUnit}></img>
      <img src={img3} className={styles.carouselUnit}></img>
      <img src={img4} className={styles.carouselUnit}></img>
    </div>
  );
};
