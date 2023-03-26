import { useEffect, useState } from "react";
import stars from "../assets/stars.png";
import favFalse from "../assets/favFalse.svg";
import favTrue from "../assets/favTrue.svg";
import styles from "./styleComponents/Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import imgSelect from "../assets/select.svg";
import { remove, sort } from "../store/favourites/favouritesSlice";
export const Favourites = ({ favs }) => {
  const dispath = useDispatch();
  const [priceFilter, setPriceFilter] = useState(false);
  function handleSort() {
    dispath(sort(priceFilter));
    setPriceFilter(!priceFilter);
  }

  return (
    <div className={styles.favourites}>
      <h2>Избранное</h2>
      <div className={styles.filters}>
        <div className={styles.rating}>
          <span>Рейтинг</span>
          <img src={imgSelect} alt="" />
        </div>
        <div className={styles.prices} onClick={() => handleSort()}>
          <span>Цена</span>
          <img src={imgSelect} alt="" />
        </div>
      </div>
      <div className={styles.favouritesUnits}>
        {favs.map((x) => {
          return (
            <div className={styles.hotel} key={x.id}>
              <div className={styles.hotelContent}>
                <h3>{x.name}</h3>
                <div className={styles.hotelContentText}>
                  <p>{`${new Date().getDate()} марта 2023`}</p>
                  <span>-</span>
                  <p>1 день</p>
                </div>
                <img className={styles.hotelStars} src={stars} alt="stars" />
              </div>
              <div className={styles.hotelPriceWrapper}>
                <img
                  src={x.favIcon ? favTrue : favFalse}
                  alt="fav"
                  onClick={() => {
                    dispath(remove(x.id));
                  }}
                />
                <div className={styles.hotelPrice}>
                  <p>Price:</p>
                  <span>{Math.floor(x.price)} ₽</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
