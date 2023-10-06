import { useState, useCallback, } from "react";
import { useNavigate } from "react-router-dom";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
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

  const onFrameContainer13Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer15Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer16Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  return (
    <>
      <div className="beranda-home">
        <div className="kotak-putih3-home">
          <div className="selamat-datang-admin-container-home">
            <span>{`Selamat Datang Admin Sekolah - `}</span>
            <span className="tk-al-auliya-home">TK AL AULIYA</span>
          </div>
          <div
            className="img-20230410-113752-1-parent-home"
            onClick={onClickProfilSekolah}
          >
            <img
              className="img-20230410-113752-1-icon-home"
              alt=""
              src="/img-20230410-113752-1@2x.png"
            />
            <div className="frame-wrapper-home">
              <div className="tk-al-auliya-parent-home">
                <b className="tk-al-auliya1-home">TK AL AULIYA</b>
                <div className="div-home">69806370</div>
                <div className="jl-balikpapan-baru-home">
                  Jl. Balikpapan Baru - Balikpapan
                </div>
              </div>
            </div>
          </div>
          <div className="rekap-data-sekolah-home">
            <div className="frame-parent-data-home">
              <div className="girl-1-parent-home">
                <img className="girl-1-icon-home" alt="" src="/girl-1@2x.png" />
                <div className="parent-home">
                  <b className="b-home">65</b>
                  <div className="murid-home">Murid</div>
                </div>
              </div>
              <div className="girl-1-parent-home">
                <img className="girl-1-icon-home" alt="" src="/profile-1@2x.png" />
                <div className="parent-home">
                  <b className="b-home">7</b>
                  <div className="murid-home">Staff</div>
                </div>
              </div>
            </div>
            <div className="frame-parentHome-home">
              <div className="girl-1-parent-home">
                <img
                  className="girl-1-icon-home"
                  alt=""
                  src="/softwareengineer-1-1@2x.png"
                />
                <div className="parent-home">
                  <b className="b-home">5</b>
                  <div className="murid-home">Mapel</div>
                </div>
              </div>
              <div className="girl-1-parent-home">
                <img
                  className="girl-1-icon-home"
                  alt=""
                  src="/onlineclass-1@2x.png"
                />
                <div className="parent-home">
                  <b className="b-home">3</b>
                  <div className="murid-home">Kelas</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hi-admin-home" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon3-home" alt="" src="/vector.svg" />
            <div className="hi-admin1-home">Hi, Admin</div>
          </div>
          <div
            className="img-20230410-113752-1-group-home"
            onClick={onClickInventaris}
          >
            <img
              className="img-20230410-113752-1-icon1-home"
              alt=""
              src="/img-20230410-113752-11@2x.png"
            />
            <b className="inventaris-sekolah-home">INVENTARIS SEKOLAH</b>
          </div>
        </div>
        <div className="kotak-biru-home">
          <div className="logo-lingtar-home">
            <img className="asset-1-2-home" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-home"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-home" />
          <div className="frame-container-home">
            <div className="house-solid-2-parent-home">
              <img
                className="house-solid-2-icon-home"
                alt=""
                src="/housesolid-oren.svg"
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
                className="icon-alternate-calendar-home"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="pendataan-home">Absensi</div>
            </div>
            <div className="icon-edit-parent-home" onClick={onFrameContainer15Click}>
              <img
                className="icon-alternate-calendar-home"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-home">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-home"
              onClick={onFrameContainer16Click}
            >
              <img
                className="icon-alternate-calendar-home"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-home">Pengumuman</div>
            </div>
          </div>
        </div>
        <img className="margin-atas-icon-home" alt="" src="/margin-atas.svg" />
      </div>
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
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
