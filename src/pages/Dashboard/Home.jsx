import { useState, useCallback, } from "react";
import { useNavigate } from "react-router-dom";
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import PortalPopup from "../../components/PortalPopup";
import "./Home.css";
const Home = () => {

  const navigate = useNavigate();
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);

  const onClickProfilSekolah = useCallback(() => {
    navigate('/Dashboard/EditProfile')
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onClickInventaris = useCallback(() => {
    navigate('/Dashboard/Inventaris')
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "INVENTARIS  SEKOLAH " to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "PENDATAAN" to the project
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "ABSENSI" to the project
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    // Please sync "PENILAIAN" to the project
  }, []);

  const onFrameContainer16Click = useCallback(() => {
    // Please sync "PENGUMUMAN" to the project
  }, []);

  return (
    <>
      <div className="beranda-home">
        <div className="kotak-putih3">
          <div className="selamat-datang-admin-container">
            <span>{`Selamat Datang Admin Sekolah - `}</span>
            <span className="tk-al-auliya">TK AL AULIYA</span>
          </div>
          <div
            className="img-20230410-113752-1-parent"
            onClick={onClickProfilSekolah}
          >
            <img
              className="img-20230410-113752-1-icon"
              alt=""
              src="/img-20230410-113752-1@2x.png"
            />
            <div className="frame-wrapper-home">
              <div className="tk-al-auliya-parent">
                <b className="tk-al-auliya1">TK AL AULIYA</b>
                <div className="div">69806370</div>
                <div className="jl-balikpapan-baru">
                  Jl. Balikpapan Baru - Balikpapan
                </div>
              </div>
            </div>
          </div>
          <div className="rekap-data-sekolah">
            <div className="frame-parent-data">
              <div className="girl-1-parent">
                <img className="girl-1-icon" alt="" src="/girl-1@2x.png" />
                <div className="parent">
                  <b className="b">65</b>
                  <div className="murid">Murid</div>
                </div>
              </div>
              <div className="girl-1-parent">
                <img className="girl-1-icon" alt="" src="/profile-1@2x.png" />
                <div className="parent">
                  <b className="b">7</b>
                  <div className="murid">Staff</div>
                </div>
              </div>
            </div>
            <div className="frame-parentHome">
              <div className="girl-1-parent">
                <img
                  className="girl-1-icon"
                  alt=""
                  src="/softwareengineer-1-1@2x.png"
                />
                <div className="parent">
                  <b className="b">5</b>
                  <div className="murid">Mapel</div>
                </div>
              </div>
              <div className="girl-1-parent">
                <img
                  className="girl-1-icon"
                  alt=""
                  src="/onlineclass-1@2x.png"
                />
                <div className="parent">
                  <b className="b">3</b>
                  <div className="murid">Kelas</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hi-admin" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <div className="hi-admin1">Hi, Admin</div>
          </div>
          <div
            className="img-20230410-113752-1-group"
            onClick={onClickInventaris}
          >
            <img
              className="img-20230410-113752-1-icon1"
              alt=""
              src="/img-20230410-113752-11@2x.png"
            />
            <b className="inventaris-sekolah">INVENTARIS SEKOLAH</b>
          </div>
        </div>
        <div className="kotak-biru">
          <div className="logo-lingtar">
            <img className="asset-1-2" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child" />
          <div className="frame-container">
            <div className="house-solid-2-parent-home">
              <img
                className="house-solid-2-icon-home"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="pendataan-home">Beranda</div>
            </div>
            <div
              className="icon-users-parent-home"
              onClick={onFrameContainer13Click}
            >
              <img className="icon-users-home" alt="" src="/-icon-users.svg" />
              <div className="pendataan-home">Pendataan</div>
            </div>
            <div
              className="icon-users-parent-home"
              onClick={onFrameContainer14Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="pendataan-home">Absensi</div>
            </div>
            <div className="icon-edit-parent" onClick={onFrameContainer15Click}>
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={onFrameContainer16Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian">Pengumuman</div>
            </div>
          </div>
        </div>
        <img className="margin-atas-icon" alt="" src="/margin-atas.svg" />
      </div>
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={20} right={20}
          onOutsideClick={closePOPUPHIADMIN}
        >
          <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
