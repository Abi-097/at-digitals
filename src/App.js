import "./App.css";
import Body from "./Components/Body/Index";
import Foot from "./Components/Footer/Index";
import Hero from "./Components/Hero/Index";
import NavigationBar from "./Components/Navbar/Index";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Body />
      <Foot />
    </div>
  );
}

export default App;
