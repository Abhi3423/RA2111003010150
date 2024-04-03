import "./App.css";
import { Routes } from "./routes/Approute";
import Navbar from "./components/layouts/Navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;