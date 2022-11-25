import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contacts from "./components/Contacts";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="contacts"
            element={<Contacts />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
