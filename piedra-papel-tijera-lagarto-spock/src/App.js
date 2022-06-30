import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePlayerCPU from "./components/Game/GamePlayerCPU";
import GamePlayerPlayer from "./components/Game/GamePlayerPlayer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <GamePlayerCPU />
      {/* <GamePlayerPlayer /> */}
    </div>
  );
}

export default App;
