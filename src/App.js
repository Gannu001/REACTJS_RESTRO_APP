import "./App.css";
import Home from "./Components/Home";
import ShopByCategory from "./Components/ShopByCategory";

function App() {
  const categories = ["fruits and vegetables", "bakery", "meat and seafood", "beverage", "biscuit and snacks"];

  return (
    <div className="App">
      <Home/>
      <ShopByCategory/>
    </div>
  );
}

export default App;
