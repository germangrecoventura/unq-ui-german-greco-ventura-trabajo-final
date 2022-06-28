import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePlayerCPU from "./components/GamePlayerCPU";
import GamePlayerPlayer from "./components/GamePlayerPlayer";

function App() {
  return (
    <div className="App">
      <GamePlayerCPU/>
      <GamePlayerPlayer/>
    </div>
  );
}

export default App;
