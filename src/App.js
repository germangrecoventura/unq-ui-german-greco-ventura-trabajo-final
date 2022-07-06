import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePlayerCPU from "./components/Game/GamePlayerCPU";
import GamePlayerPlayer from "./components/Game/GamePlayerPlayer";
import Home from "./components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one-player" element={<GamePlayerCPU />} />
          <Route path="/two-players" element={<GamePlayerPlayer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;