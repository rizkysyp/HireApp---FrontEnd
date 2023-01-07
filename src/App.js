import "./App.css";
//ridwhan
import LandingPage from "./pages/LandingPage/LandingPage";
import EditProfilePekerja from "./pages/EditProfile/editProfilePekerja";
import EditProfilePerekrut from "./pages/EditProfilePerekrut/EditProfilePerekrut";
import ProfilePerekrut from "./pages/ProfilePerekrut/ProfilePerekrut";
import ProfilePekerja from "./pages/ProfilePekerja/ProfilePekerja";
import ProfileHire from "./pages/ProfileHire";
import EditExperiences from "./pages/EditExperiences";
import EditPortofolio from "./pages/EditPortofolio";

//easy
import LoginPekerja from "./pages/auth/pekerja/login";
import RegisterPekerja from "./pages/auth/pekerja/register";
import RegisterPerekrut from "./pages/auth/perekrut/register";
import LoginPerekrut from "./pages/auth/perekrut/login";
import ResetPw from "./pages/auth/resetpw";
import ResetPw2 from "./pages/auth/resetpw2";
import LoginResetpwDone from "./pages/auth/loginResetpwDone";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import Homev1 from "./pages/Home/homev1";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Hire from "./pages/Hire/hire";
import Chat from "./pages/Chat/Chat";
import Verif from "./pages/auth/verifAccount";

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      return <Outlet />;
    } else {
      Swal.fire("Warning", "Please login first", "error");
      return <Navigate to="/loginPekerja" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <Link to="/homev1">home</Link>
        </nav>  */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/landingPage" />}
            replace="true"
          />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/editProfile" element={<PrivateRoute />}>
            <Route index element={<EditProfilePekerja />} />
          </Route>
          <Route path="/editProfilePerekrut" element={<PrivateRoute />}>
            <Route index element={<EditProfilePerekrut />} />
          </Route>
          <Route path="/profilePerekrut" element={<PrivateRoute />}>
            <Route index element={<ProfilePerekrut />} />
          </Route>
          <Route path="/profilePekerja" element={<PrivateRoute />}>
            <Route index element={<ProfilePekerja />} />
          </Route>
          <Route path="/homev1" element={<PrivateRoute />}>
            <Route index element={<Homev1 />} />
          </Route>
          {/* <Route
            path="/editProfilePerekrut"
            element={<EditProfilePerekrut />}
          /> */}
          <Route path="/edit-experiences/:id" element={<PrivateRoute />}>
            <Route index element={<EditExperiences />} />
          </Route>
          <Route path="/edit-portofolio/:id" element={<PrivateRoute />}>
            <Route index element={<EditPortofolio />} />
          </Route>
          <Route path="/profile-hire/:id" element={<PrivateRoute />}>
            <Route index element={<ProfileHire />} />
          </Route>
          <Route path="/loginPekerja" element={<LoginPekerja />} />
          <Route path="/registerPekerja" element={<RegisterPekerja />} />
          <Route path="/registerPerekrut" element={<RegisterPerekrut />} />
          <Route path="/loginPerekrut" element={<LoginPerekrut />} />
          <Route path="/resetPw" element={<ResetPw />} />
          <Route path="/resetPw2" element={<ResetPw2 />} />
          <Route path="/loginResetpwDone" element={<LoginResetpwDone />} />
          <Route path="/hire/:id" element={<Hire />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/verif" element={<Verif />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
