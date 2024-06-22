import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
