import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/landingPage"/>} replace="true"/>
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
