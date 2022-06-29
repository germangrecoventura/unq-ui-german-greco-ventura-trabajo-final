import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePlayerCPU from "./components/Game/GamePlayerCPU";
import GamePlayerPlayer from "./components/Game/GamePlayerPlayer";

function App() {
  return (
    <div className="App">
      <GamePlayerCPU />
      <GamePlayerPlayer />
    </div>
  );
}

export default App;
