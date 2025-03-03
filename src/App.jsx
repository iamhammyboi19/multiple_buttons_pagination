import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Explore from "./components/Explore";
import { useEffect } from "react";

function Redirect() {
  const navigate = useNavigate();
  useEffect(function () {
    navigate("/explore");
  }, []);
  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/explore"
            element={
              <>
                <Explore />
              </>
            }
          />
          <Route path="/" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
