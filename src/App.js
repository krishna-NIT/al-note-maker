import Home from "./components/Home";
import Records from "./components/Records";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="row g-2">
      <Sidenav />
      <Records />
      <Home/>
    </div>
  );
}

export default App;
