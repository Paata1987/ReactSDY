import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contacts from "./components/Contacts";
import MainLayOut from "./layOuts/MainLayOut";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayOut />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="home"
              element={<Home />}
            />
            <Route
              path="courses"
              element={<Courses />}
            />
            <Route
              path="courses/:courseSlug"
              element={<SingleCourse />}
            />

            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="contacts"
              element={<Contacts />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
