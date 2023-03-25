import styles from "./pagesStyles/MainPage.module.css";
import { Header } from "../components/Header";
import { Booking } from "../components/Booking";
import { Favourites } from "../components/Favourites";
import { RightRowHeader } from "../components/RightRowHeader";
import { Carousel } from "../components/Carousel";
import { Hotel } from "../components/Hotel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  let go = useNavigate();
  useEffect(() => {
    if (localStorage.length === 0) {
      go("/signin");
    }
  }, []);
  let url = useSelector((state) => state.urlforfetch.url);
  const getFavs = useSelector((state) => state.favourites.data);
  const [incomeData, setIncomeData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setIncomeData(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }
  }, [incomeData]);
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.leftRow}>
          <Booking />
          <Favourites favs={getFavs} />
        </div>
        <div className={styles.rightRow}>
          <RightRowHeader />
          <Carousel />
          <div className={styles.hotelsWrapper}>
            <div className={styles.hotelsHeader}>
              <h4>Добавлено в Избранное:</h4>
              <span>{getFavs.length}</span>
              <p>отеля</p>
            </div>

            <div className={styles.hotelWrapper}>
              {isLoading
                ? "Loading..."
                : incomeData.map((hotel) => (
                    <Hotel
                      key={hotel.hotelId}
                      name={hotel.hotelName}
                      price={hotel.priceAvg}
                      id={hotel.hotelId}
                      favs={getFavs}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
