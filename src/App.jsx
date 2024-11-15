import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./page/LoginPage/LoginPage";
import { Authprovider } from "./context/authContext";
import { NotFound } from "./page/NotFound/NotFound";
import { Home } from "./page/Home/Home";

function App() {
  return (
    <>
      <Authprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;
