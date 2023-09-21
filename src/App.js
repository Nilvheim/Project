import { Routes, Route, useNavigationType, useLocation, } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useEffect } from "react";
import LupaPw from "./pages/LupaPw";
import ResetPw from "./pages/ResetPw";
import Home from "./pages/Dashboard/Home";
import EditProfile from "./pages/Dashboard/EditProfile";
import Inventaris from "./pages/Dashboard/Inventaris"
import Daftar from "./pages/Daftar";
import Sidebar from "./components/Sidebar";
import Pendataan from "./pages/Dashboard/Pendataan";

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
      <Route path="Dashboard/Pendataan" element={<Pendataan /> } />
      <Route path="Daftar" element={<Daftar />} />
  
    </Routes> 
  );
}
export default App;
