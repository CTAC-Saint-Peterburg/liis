import styles from "./styleComponents/LogIn.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const go = useNavigate();
  function handlerSetPassword(input) {
    setPassword(input.replace(/[^a-zA-Z\d]/gi, ""));
  }
  function submitData(e) {
    e.preventDefault();
    if (login && password) {
      localStorage.setItem("login", "true");
      go("/");
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.wrapperImg}>
        <div className={styles.backImage}></div>
      </div>

      <div className={styles.formWrapper}>
        <form onSubmit={submitData}>
          <h2>Simple Hotel Check</h2>
          <div className={styles.formWrapperDiv}>
            <label>Логин:</label>
            <input
              type="email"
              name="login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className={styles.formWrapperDiv}>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              name="password"
              minLength={8}
              onChange={(e) => handlerSetPassword(e.target.value)}
            />
          </div>

          <input
            className={styles.formWrapperButton}
            type="submit"
            value="Войти"
          />
        </form>
      </div>
    </div>
  );
};
