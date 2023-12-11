import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";

function App() {
  return (
    <div className="font-work">
      <Navbar />
      <TitleChanger />
      <Hero />
    </div>
  );
}

export default App;
