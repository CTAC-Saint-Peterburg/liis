import { Routes, Route } from "react-router-dom";

import { LogIn } from "./components/LogIn";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<LogIn />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
