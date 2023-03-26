import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../store/urlforfetch/urlforfetchSlice";
import styles from "./styleComponents/Booking.module.css";
export const Booking = () => {
  const [inputDate, setInputDate] = useState("");
  const dispath = useDispatch();
  return (
    <div className={styles.booking}>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputBlock}>
          <span>Локация:</span>
          <input type="text" placeholder="Москва" />
        </div>
        <div className={styles.inputBlock}>
          <span>Дата заселения:</span>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
        </div>
        <div className={styles.inputBlock}>
          <span>Количество дней:</span>
          <input type="text" placeholder="1" />
        </div>
      </div>
      <button
        className={styles.bookingSearchButton}
        onClick={() =>
          dispath(
            change(
              `http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=${inputDate}&checkOut=${inputDate}&limit=10`
            )
          )
        }
      >
        Найти
      </button>
    </div>
  );
};
