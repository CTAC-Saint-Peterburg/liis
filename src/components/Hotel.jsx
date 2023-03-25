import { useEffect, useState } from "react";
import houseIcon from "../assets/houseIcon.svg";
import stars from "../assets/stars.png";
import favFalse from "../assets/favFalse.svg";
import favTrue from "../assets/favTrue.svg";
import styles from "./styleComponents/Hotel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/favourites/favouritesSlice";
export const Hotel = ({ name, price, id, favs }) => {
  const dispath = useDispatch();
  const [heart, setHeart] = useState(false);
  function interFavourites(name, price, id) {
    if (heart === false) {
      dispath(add({ name: name, price: price, id: id, favIcon: true }));
    } else if (heart === true) {
      dispath(remove(id));
    }
    setHeart(!heart);
  }
  useEffect(() => {
    if (!favs.some((x) => x.id === id)) {
      setHeart(false);
    }
  }, [favs]);
  return (
    <div className={styles.hotel}>
      <div className={styles.hotelImage}>
        <img src={houseIcon} alt="house" />
      </div>
      <div className={styles.hotelContent}>
        <h3>{name}</h3>
        <div className={styles.hotelContentText}>
          <p>7 июля 2020</p>
          <span>-</span>
          <p>1 день</p>
        </div>
        <img className={styles.hotelStars} src={stars} alt="stars" />
      </div>
      <div className={styles.hotelPriceWrapper}>
        <img
          src={heart ? favTrue : favFalse}
          alt="fav"
          onClick={() => interFavourites(name, price, id)}
        />
        <div className={styles.hotelPrice}>
          <p>Price:</p>
          <span>{Math.floor(price)} ₽</span>
        </div>
      </div>
    </div>
  );
};
