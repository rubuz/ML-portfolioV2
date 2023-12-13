import "./App.css";
import AboutCards from "./components/AboutCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";

function App() {
  return (
    <div className="font-work">
      <Navbar />
      {/* <TitleChanger /> */}
      <Hero />
      <AboutCards />
      <div className="w-full h-[600px] bg-purple-800">TEST</div>
    </div>
  );
}

export default App;
