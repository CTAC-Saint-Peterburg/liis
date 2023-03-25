import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { LogIn } from "./components/LogIn";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
