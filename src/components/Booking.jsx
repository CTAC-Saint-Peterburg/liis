import styles from "./styleComponents/Booking.module.css";
export const Booking = () => {
  return (
    <div className={styles.booking}>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputBlock}>
          <span>Локация:</span>
          <input type="text" placeholder="Москва" />
        </div>
        <div className={styles.inputBlock}>
          <span>Дата заселения:</span>
          <input type="date" />
        </div>
        <div className={styles.inputBlock}>
          <span>Количество дней:</span>
          <input type="text" placeholder="1" />
        </div>
      </div>
      <button className={styles.bookingSearchButton}>Найти</button>
    </div>
  );
};
