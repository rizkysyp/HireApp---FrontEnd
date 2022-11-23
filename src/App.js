
import "./App.css";
//ridwhan
import LandingPage from "./pages/LandingPage/LandingPage";

//easy
import LoginPekerja from "./pages/auth/pekerja/login";
import RegisterPekerja from "./pages/auth/pekerja/register";
import RegisterPerekrut from "./pages/auth/perekrut/register";
import LoginPerekrut from "./pages/auth/perekrut/login";
import ResetPw from "./pages/auth/resetpw";
import ResetPw2 from "./pages/auth/resetpw2";
import LoginResetpwDone from "./pages/auth/loginResetpwDone";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/landingPage" />}
            replace="true"
          />
          <Route path="/landingPage" element={<LandingPage />} />

          <Route path="/loginPekerja" element={<LoginPekerja />} />
          <Route path="/registerPekerja" element={<RegisterPekerja />} />
          <Route path="/registerPerekrut" element={<RegisterPerekrut />} />
          <Route path="/loginPerekrut" element={<LoginPerekrut />} />
          <Route path="/resetPw" element={<ResetPw />} />
          <Route path="/resetPw2" element={<ResetPw2 />} />
          <Route path="/loginResetpwDone" element={<LoginResetpwDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
