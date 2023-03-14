import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./components/Work/Work";
import Play from "./components/Play/Play";
import { themeContext } from "./Context";
import { useContext } from "react";
import Education from "./components/Education/Education";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          background: darkMode ? "#232221" : "#fffbed",
          color: darkMode ? "#a28ecf" : "#7d6b9f",
        }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Intro
                style={{
                  background: darkMode ? "#232221" : "#fffbed",
                  color: darkMode ? "#a28ecf" : "#7d6b9f",
                }}
              />
            }
            style={{
              background: darkMode ? "#232221" : "#fffbed",
              color: darkMode ? "#a28ecf" : "#7d6b9f",
            }}
          ></Route>
          <Route
            path="/work"
            element={
              <Work
                style={{
                  background: darkMode ? "#232221" : "#fffbed",
                  color: darkMode ? "#a28ecf" : "#7d6b9f",
                }}
              />
            }
          ></Route>
          <Route
            path="/play"
            element={
              <Play
                style={{
                  background: darkMode ? "#232221" : "#fffbed",
                  color: darkMode ? "#a28ecf" : "#7d6b9f",
                }}
              />
            }
          ></Route>
          <Route
            path="/education"
            element={
              <Education
                style={{
                  background: darkMode ? "#232221" : "#fffbed",
                  color: darkMode ? "#a28ecf" : "#7d6b9f",
                }}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
