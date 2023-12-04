import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import PortalPopup from "../../components/PortalPopup";
import "./HomePusat.css";

const HomePusat = () => {
    const dataSekolah = [
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" },
        { nama: "TK AL AULIYA", nomor: "69806370", alamat: "Jl. Balikpapan Baru - Balikpapan" }
    ]

  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const navigate = useNavigate('')

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const openHomePusat = useCallback(() => {
    navigate('/Dashboard/HomePusat')
  }, [navigate]);

  const openPendataanPusat = useCallback(() => {
    navigate('/Dashboard/PendataanPusat')
  }, [navigate])
  
  return (
    <>
      <div className="beranda-pusat">
        <dwiv className="kotak-putih-beranda-pusat">
          <div className="selamat-datang-admin-container-beranda-pusat">
            <span>{`Selamat Datang Admin Pusat - `}</span>
            <span className="lingtar-beranda-pusat">LINGTAR</span>
          </div>
          {dataSekolah.map((sekolah, s) => (
          <div className="list-sekolah-beranda-pusat" key={s}>
            <div className="img-20230410-113752-1-parent-beranda-pusat">
              <img
                className="img-20230410-113752-1-icon-beranda-pusat"
                alt=""
                src="/img-20230410-113752-1@2x.png"
              />
              <div className="frame-wrapper-beranda-pusat">
                <div className="tk-al-auliya-parent-beranda-pusat">
                    <b className="tk-al-auliya-beranda-pusat">{sekolah.nama}</b>
                    <div className="div-beranda-pusat">{sekolah.nomor}</div>
                    <div className="jl-balikpapan-baru-beranda-pusat">{sekolah.alamat}</div>
                    </div>
                </div>
            </div>
          </div>
        ))}
          <div className="hi-admin-beranda-pusat" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-beranda-pusat" alt="" src="/vector.svg" />
            <div className="hi-admin1-beranda-pusat">Hi, Admin</div>
          </div>
          <div className="frame-parent-beranda-pusat">
            <div className="frame-group-beranda-pusat">
              <div className="girl-1-parent-beranda-pusat">
                <img className="girl-1-icon-beranda-pusat" alt="" src="/girl-1@2x.png" />
                <div className="parent-beranda-pusat">
                  <b className="b-beranda-pusat">800</b>
                  <div className="user-beranda-pusat">User</div>
                </div>
              </div>
              <div className="girl-1-parent-beranda-pusat">
                <img className="girl-1-icon-beranda-pusat" alt="" src="/profile-1@2x.png" />
                <div className="parent-beranda-pusat">
                  <b className="b-beranda-pusat">100</b>
                  <div className="user-beranda-pusat">Admin</div>
                </div>
              </div>
            </div>
            <div className="frame-group-beranda-pusat">
              <div className="girl-1-parent-beranda-pusat">
                <img
                  className="girl-1-icon-beranda-pusat"
                  alt=""
                  src="/softwareengineer-1-1@2x.png"
                />
                <div className="parent-beranda-pusat">
                  <b className="b-beranda-pusat">50</b>
                  <div className="user-beranda-pusat">Sekolah</div>
                </div>
              </div>
              <div className="girl-1-parent-beranda-pusat">
                <img
                  className="girl-1-icon-beranda-pusat"
                  alt=""
                  src="/onlineclass-1@2x.png"
                />
                <div className="parent-beranda-pusat">
                  <b className="b-beranda-pusat">1</b>
                  <div className="user-beranda-pusat">Kota</div>
                </div>
              </div>
            </div>
          </div>
          <img className="image-8-icon-beranda-pusat" alt="" src="/image-8@2x.png" />
        </dwiv>
        <div className="kotak-biru-beranda-pusat">
          <div className="logo-lingtar-beranda-pusat">
            <div className="logo-lingtar1-beranda-pusat">
              <img className="asset-1-2-beranda-pusat" alt="" src="/asset-1-2@2x.png" />
            </div>
          </div>
          <img
            className="icon-buka-tutup-sidebar-beranda-pusat"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-beranda-pusat" />
          <div className="frame-parent2-beranda-pusat">
            <div className="frame-group-beranda-pusat">
              <img
                className="house-solid-2-icon-beranda-pusat"
                alt=""
                src="/housesolid-oren.svg"
              />
              <div className="beranda-beranda-pusat" onClick={openHomePusat}>Beranda</div>
            </div>
            <div
              className="icon-users-parent-beranda-pusat"
              onClick={openPendataanPusat}
            >
              <img className="icon-users-beranda-pusat" alt="" src="/-icon-users.svg" />
              <div className="beranda-beranda-pusat">Pendataan</div>
            </div>
          </div>
        </div>
        <img className="margin-atas-icon-beranda-pusat" alt="" src="/margin-atas.svg" />
      </div>
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPHIADMIN}
        >
          <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePusat;
