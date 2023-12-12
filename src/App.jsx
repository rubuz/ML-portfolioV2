import "./App.css";
import AboutCard from "./components/AboutCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";

function App() {
  return (
    <div className="font-work">
      <Navbar />
      {/* <TitleChanger /> */}
      <Hero />
      <AboutCard />
    </div>
  );
}

export default App;
