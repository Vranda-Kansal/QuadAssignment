import HomePage from "./components/HomePage";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="font-bold text-4xl text-yellow-600 bg-yellow-200 p-6 text-center border-b-2 border-amber-500 fixed w-screen top-0">
        All-Time Favorites Movies Revealed
      </div>
      <Outlet />
    </div>
  );
}

export default App;
