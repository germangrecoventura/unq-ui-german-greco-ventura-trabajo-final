import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePlayerCPU from "./components/Game/GamePlayerCPU";
import GamePlayerPlayerFinal from "./components/Game/GamePlayerPlayerFinal";
import Home from "./components/Home/Home";
import { Routes,Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/one-player" element={<GamePlayerCPU />} />
            <Route path="/two-players" element={<GamePlayerPlayerFinal />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <Home></Home>
      <GamePlayerCPU /> */}
      {/* <GamePlayerPlayer /> */}
    </div>
  );
}

export default App;
