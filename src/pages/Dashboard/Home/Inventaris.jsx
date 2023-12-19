import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import UnggahInformasi from '../../../components/UbahInformasi';
import UnggahFoto from '../../../components/UnggahFoto';
import UnggahVideo from '../../../components/UnggahVideo';
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import './Inventaris.css';
const Inventaris = () => {

const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
const [isUnggahFotoOpen, setUnggahFotoOpen] = useState(false);
const [isUnggahVideoOpen, setUnggahVideoOpen] = useState(false);
const [isUnggahInformasiOpen, setUnggahInformasiOpen] = useState(false);
const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

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
    
  const onPendataanClick = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onAbsensiClick = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onPenilaianClick = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onPengumumanClick = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

    return (
        <>
<div className="inventaris-sekolah-inventaris">
    <div className="kotak-putih-inventaris">
        <div className="hi-admin-inventaris" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-inventaris" alt="" src="/vector.svg" />
            <div className="hi-admin1-inventaris">Hi, Admin</div>
        </div>
        <div className="vector-parent-inventaris"  onClick={onBackClick}>
            <img className="vector-icon1-inventaris" alt="" src="/undefined28.png"/>
            <div className="lingtar-container-inventaris">
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
                <div className="y2metacom-profil-tkit-al-au-inventaris" />
                <div className="masuk-inventaris" onClick={openUnggahVideo}>
                    {/* <img className="layer-2-icon" alt="" src="public/undefined34.png" /> */}
                    <div className="video-sekolah-inventaris">Unggah Video</div>
                </div>
            </div>
    <div className="informasi-sekolah-parent-inventaris">
        <div className="informasi-sekolah-inventaris">
            <b className="video-sekolah-inventaris">Informasi Sekolah</b>
            <div className="visi-sekolah-child-inventaris" />
        </div>
    <div className="rectangle-parent-inventaris">
        <div className="group-child-inventaris" />
            <div className="tkit-al-auliya-container-inventaris">
                <p className="tkit-al-auliya">{`TKIT Al Auliya 1 Balikpapan merupakan sekolah tk islam `}</p>
                <p className="tkit-al-auliya">{`terpadu dibawah naungan yayasan Pendidikan An Nahl `}</p>
                <p className="tkit-al-auliya">{`Balikpapan. TKIT Al Auliya di tunjang dengan berbagai `}</p>
                <p className="tkit-al-auliya">{`fasilitas yang lengkap serta para guru yang sudah `}</p>
                <p className="tkit-al-auliya">berpengalaman dibidangnya.</p>
            </div>
    </div>
    <div className="masuk-inventaris" onClick={openUnggahInformasi}>
        {/* <img className="icons8-edit-1" alt="" src="icons8-edit 1.png" /> */}
        <div className="video-sekolah-inventaris">Ubah Informasi</div>
    </div>
    </div>

    <div className="visi-sekolah-group-inventaris">
        <div className="visi-sekolah-inventaris">
            <b className="video-sekolah-inventaris">Fasilitas Sekolah</b>
            <div className="visi-sekolah-child-inventaris" />
        </div>
    <div className="group-parent-inventaris">
        <div className="ruang-kelas-full-ac-parent-inventaris">
            <div className="ruang-kelas-full-inventaris">Ruang Kelas Full AC</div>
            <img className="dsc06040-fileminimizer-1-icon-inventaris" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="halaman-parkir-luas-parent-inventaris">
            <div className="halaman-parkir-luas-inventaris">Halaman Parkir Luas</div>
            <img className="dsc06040-fileminimizer-1-icon-inventaris" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="perpustakaan-parent-inventaris">
            <div className="perpustakaan-inventaris">Perpustakaan</div>
            <img className="dsc06040-fileminimizer-1-icon-inventaris" alt="" src="DSC06040-FILEminimizer 1.png" />
        </div>
        <div className="taman-bermain-parent-inventaris">
            <div className="taman-bermain-inventaris">Taman Bermain</div>
            <img className="dsc05712-fileminimizer-1-icon-inventaris" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
        <div className="antar-jemput-parent-inventaris">
            <div className="antar-jemput-inventaris">Antar Jemput</div>
            <img className="dsc05712-fileminimizer-1-icon-inventaris" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
        <div className="makan-siang-parent-inventaris">
            <div className="makan-siang-inventaris">Makan Siang</div>
            <img className="dsc05712-fileminimizer-1-icon-inventaris" alt="" src="DSC05712-FILEminimizer 1.png" />
        </div>
    </div>
    <div className="masuk-inventaris" onClick={openUnggahFoto}>
        {/* <img className="layer-2-icon" alt="" src="Layer 2.png" /> */}
            <div className="video-sekolah-inventaris">Unggah Gambar</div>
            
                </div>
            </div>
        </div>
    </div>
        
    <div className="kotak-biru-inventaris">
          <div className="logo-lingtar-inventaris">
            <img className="asset-1-2-inventaris" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-inventaris"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-inventaris" />
          <div className="frame-container-inventaris">
            <div className="house-solid-2-parent-inventaris">
              <img
                className="house-solid-2-icon-inventaris"
                alt=""
                src="/housesolid-oren.svg"
              />
              <div className="pendataan-inventaris" onClick={onBackClick}>Beranda</div>
            </div>
            <div className="icon-users-parent-inventaris" onClick={onPendataanClick}>
              <img className="icon-users-inventaris" alt="" src="/-icon-users.svg" />
              <div className="pendataan-inventaris">Pendataan</div>
            </div>
            <div className="icon-users-parent-inventaris" onClick={onAbsensiClick}>
              <img
                className="icon-alternate-calendar-inventaris"
                alt=""
                  src="/-icon-alternate-calendar.svg"
              />
              <div className="pendataan-inventaris">Absensi</div>
            </div>
            <div className="icon-edit-parent-inventaris" onClick={onPenilaianClick}>
              <img
                className="icon-alternate-calendar-inventaris"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-inventaris" >Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-inventaris"
              onClick={onPengumumanClick}
            >
              <img
                className="icon-alternate-calendar-inventaris"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-inventaris">Pengumuman</div>
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