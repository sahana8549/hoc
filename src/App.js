import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div className="App">
      <h1>Higher-Order Components </h1>
      <div className="container">
        <ClickCounter />
        <HoverCounter />
      </div>
    </div>
  );
}

export default App;
