import "./App.css";
import Navbar from "./Navbar";
import Forside from "./undersider/Forside";
import Skema from "./undersider/Skema";
import Beskeder from "./undersider/Beskeder";
import Opgaver from "./undersider/Opgaver";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//"bg-secondary text-slate-200 "

function App() {
  const [primaryColor, setPrimaryColor] = useState("#222F45");
  const [secondaryColor, setSecondaryColor] = useState("#093F71");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
            }
          >
            <Route
              index
              element={
                <Forside
                  setPrimaryColor={setPrimaryColor}
                  setSecondaryColor={setSecondaryColor}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              }
            />
            <Route path="skema" element={<Skema />} />
            <Route path="opgaver" element={<Opgaver />} />
            <Route path="beskeder" element={<Beskeder />} />
            <Route path="*">"404 Not Found"</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
