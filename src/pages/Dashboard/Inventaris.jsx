import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import UnggahInformasi from '../../components/UbahInformasi';
import UnggahFoto from '../../components/UnggahFoto';
import UnggahVideo from '../../components/UnggahVideo';
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import PortalPopup from "../../components/PortalPopup";
import './Inventaris.css';
const Inventaris = () => {

const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
const [isUnggahFotoOpen, setUnggahFotoOpen] = useState(false);
const [isUnggahVideoOpen, setUnggahVideoOpen] = useState(false);
const [isUnggahInformasiOpen, setUnggahInformasiOpen] = useState(false);
const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate])

  const openUnggahInformasi = useCallback(() => {
    setUnggahInformasiOpen(true);
  }, [])
  
  const closeUnggahInformasi = useCallback(() => {
    setUnggahInformasiOpen(false);
  }, [])

const openUnggahFoto = useCallback(() => {
    setUnggahFotoOpen(true);
  }, [])

  const closeUnggahFoto = useCallback(() => {
    setUnggahFotoOpen(false);
  }, [])

  const openUnggahVideo = useCallback(() => {
    setUnggahVideoOpen(true);
  }, [])

  const closeUnggahVideo = useCallback(() => {
    setUnggahVideoOpen(false);
  }, [])
  
    const openPOPUPHIADMIN = useCallback(() => {
      setPOPUPHIADMINOpen(true);
  }, []);
    
    const closePOPUPHIADMIN = useCallback(() => {
      setPOPUPHIADMINOpen(false);
  }, []);
    
    const onVectorIcon1Click = useCallback(() => {
    // Add your code here
  }, []);
    
    const onFrameContainer5Click = useCallback(() => {
    // Add your code here
  }, []);
    
    const onFrameContainer6Click = useCallback(() => {
// Add your code here
}, []);
    
    const onFrameContainer7Click = useCallback(() => {
// Add your code here
}, []);
    
    const onFrameContainer8Click = useCallback(() => {
// Add your code here
}, []);
    
    return (
        <>
<div className="inventaris-sekolah-inventaris">
    <div className="kotak-putih-inventaris">
        <div className="hi-admin" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-inventaris" alt="" src="Vector.png" />
            <div className="hi-admin1">Hi, Admin</div>
        </div>
        <div className="vector-inventaris-parent">
            <img className="vector-icon1-inventaris" alt="" src="undefined28.png" onClick={onBackClick} />
            <div className="lingtar-inventaris-container">
                <span>{`Lingtar - `}</span>
                <span className="inventaris-sekolah1">Inventaris Sekolah</span>
            </div>
        </div>
        <div className="frame-parent-inventaris">
            <div className="visi-sekolah-parent-inventaris">
                <div className="visi-sekolah-inventaris">
                    <b className="video-sekolah">Video Sekolah</b>
                    <div className="visi-sekolah-child-inventaris" />
                </div>
                <div className="y2metacom-profil-tkit-al-au" />
                <div className="masuk-inventaris" onClick={openUnggahVideo}>
                    {/* <img className="layer-2-icon" alt="" src="public/undefined34.png" /> */}
                    <div className="video-sekolah">Unggah Video</div>
                </div>
            </div>
    <div className="informasi-sekolah-inventaris-parent">
        <div className="informasi-sekolah-inventaris">
            <b className="video-sekolah">Informasi Sekolah</b>
            <div className="visi-sekolah-child-inventaris" />
        </div>
    <div className="rectangle-parent-inven">
        <div className="group-child-inven" />
            <div className="tkit-al-auliya-container">
                <p className="tkit-al-auliya">{`TKIT Al Auliya 1 Balikpapan merupakan sekolah tk islam `}</p>
                <p className="tkit-al-auliya">{`terpadu dibawah naungan yayasan Pendidikan An Nahl `}</p>
                <p className="tkit-al-auliya">{`Balikpapan. TKIT Al Auliya di tunjang dengan berbagai `}</p>
                <p className="tkit-al-auliya">{`fasilitas yang lengkap serta para guru yang sudah `}</p>
                <p className="tkit-al-auliya">berpengalaman dibidangnya.</p>
            </div>
    </div>
    <div className="masuk-inventaris" onClick={openUnggahInformasi}>
        {/* <img className="icons8-edit-1" alt="" src="icons8-edit 1.png" /> */}
        <div className="video-sekolah">Ubah Informasi</div>
    </div>
    </div>

    <div className="visi-sekolah-group-inventaris">
        <div className="visi-sekolah">
            <b className="video-sekolah">Fasilitas Sekolah</b>
            <div className="visi-sekolah-child-inventaris" />
        </div>
    <div className="group-parent-inventaris">
        <div className="ruang-kelas-full-ac-parent">
            <div className="ruang-kelas-full">Ruang Kelas Full AC</div>
            <img className="dsc06040-fileminimizer-1-icon" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="halaman-parkir-luas-parent">
            <div className="halaman-parkir-luas">Halaman Parkir Luas</div>
            <img className="dsc06040-fileminimizer-1-icon" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="perpustakaan-parent">
            <div className="perpustakaan">Perpustakaan</div>
            <img className="dsc06040-fileminimizer-1-icon" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="taman-bermain-parent">
            <div className="taman-bermain">Taman Bermain</div>
            <img className="dsc05712-fileminimizer-1-icon" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
        <div className="antar-jemput-parent">
            <div className="antar-jemput">Antar Jemput</div>
            <img className="dsc05712-fileminimizer-1-icon" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
        <div className="makan-siang-parent">
            <div className="makan-siang">Makan Siang</div>
            <img className="dsc05712-fileminimizer-1-icon" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
    </div>
    <div className="masuk-inventaris" onClick={openUnggahFoto}>
        {/* <img className="layer-2-icon" alt="" src="Layer 2.png" /> */}
            <div className="video-sekolah">Unggah Gambar</div>
            
                </div>
            </div>
        </div>
    </div>
        
    <div className="kotak-biru-inventaris">
          <div className="logo-lingtar-inventaris">
            <img className="asset-1-2" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-inventaris"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-inventaris-child" />
          <div className="frame-container">
            <div className="house-solid-2-inventaris-parent">
              <img
                className="house-solid-2-icon-inventaris"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="pendataan-inventaris">Beranda</div>
            </div>
            <div
              className="icon-users-inventaris-parent"
              onClick={""}
            >
              <img className="icon-users-inventaris" alt="" src="/-icon-users.svg" />
              <div className="pendataan-inventaris">Pendataan</div>
            </div>
            <div
              className="icon-users-inventaris-parent"
              onClick={"onFrameContainer14Click"}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="pendataan-inventaris">Absensi</div>
            </div>
            <div className="icon-edit-parent" onClick={"onFrameContainer15Click"}>
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={"onFrameContainer16Click"}
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
</div>
    
    {isPOPUPHIADMINOpen && (
    <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closePOPUPHIADMIN}>

        <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
    </PortalPopup>
    )}

        {isUnggahFotoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnggahFoto}
        >
          <UnggahFoto onClose={closeUnggahFoto} />
        </PortalPopup>
        )}
        
        {isUnggahVideoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnggahVideo}
        >
          <UnggahVideo onClose={closeUnggahVideo} />
        </PortalPopup>
        )}
        
        {isUnggahInformasiOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnggahInformasi}
        >
          <UnggahInformasi onClose={closeUnggahInformasi} />
        </PortalPopup>
      )}
</>
    );
};

export default Inventaris; 