import "./App.css";
import Navbar from "./Navbar";
import Forside from "./undersider/Forside";
import Skema from "./undersider/Skema";
import Beskeder from "./undersider/Beskeder";
import Opgaver from "./undersider/Opgaver";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signin from "./Signin";
import Karakterer from "./undersider/Karakter";
import Spørgeskema from "./undersider/Spørgeskema";
import Bøger from "./undersider/Bøger";
import Fravær from "./undersider/Fravær";

//"bg-secondary text-slate-200 "

function App() {
  const [primaryColor, setPrimaryColor] = useState("#222F45");
  const [secondaryColor, setSecondaryColor] = useState("#093F71");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Signin></Signin>} />
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
              path="forside"
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
            <Route path="fravær" element={<Fravær />} />
            <Route path="beskeder" element={<Beskeder />} />
            <Route path="karakterer" element={<Karakterer />} />
            <Route path="spørgeskema" element={<Spørgeskema />} />
            <Route path="bøger" element={<Bøger />} />
            <Route path="*">"404 Not Found"</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
