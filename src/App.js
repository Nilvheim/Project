import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useEffect } from "react";
import LupaPw from "./pages/LupaPw";
import ResetPw from "./pages/ResetPw";
import Daftar from "./pages/Daftar";
import Home from "./pages/Dashboard/Home/Home";
import EditProfile from "./pages/Dashboard/Home/EditProfile";
import Inventaris from "./pages/Dashboard/Home/Inventaris";
import Pendataan from "./pages/Dashboard/Pendataan/Pendataan";
import TambahKelas from "./pages/Dashboard/Pendataan/TambahKelas";
import TambahStaff from "./pages/Dashboard/Pendataan/TambahStaff";
import TambahMurid from "./pages/Dashboard/Pendataan/TambahMurid";
import UbahStaff from "./pages/Dashboard/Pendataan/UbahStaff";
import Absensi from "./pages/Dashboard/Absensi/Absensi";
import NilaiMapel from "./pages/Dashboard/Penilaian/NilaiMapel";
import Penilaian from "./pages/Dashboard/Penilaian/Penilaian";
import TambahMapel from "./pages/Dashboard/Penilaian/TambahMapel";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="LupaPw" element={<LupaPw />} />
      <Route path="ResetPw" element={<ResetPw />} />
      <Route path="Dashboard/Home" element={<Home />} />
      <Route path="Dashboard/EditProfile" element={<EditProfile />} />
      <Route path="Dashboard/Inventaris" element={<Inventaris />} />
      <Route path="Dashboard/Pendataan" element={<Pendataan />} />
      <Route path="Dashboard/TambahKelas" element={<TambahKelas />} />
      <Route path="Dashboard/TambahStaff" element={<TambahStaff />} />
      <Route path="Dashboard/TambahMurid" element={<TambahMurid />} />
      <Route path="Dashboard/UbahStaff" element={<UbahStaff />} />
      <Route path="Dashboard/Absensi" element={<Absensi />} />
      <Route path="Dashboard/Penilaian" element={<Penilaian />} />
      <Route path="Dashboard/NilaiMapel" element={<NilaiMapel />} />
      <Route path="Dashboard/TambahMapel" element={<TambahMapel />} />
      <Route path="Daftar" element={<Daftar />} />
    </Routes>
  );
}
export default App;
