import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RAPORAKHIR from "../../../components/RAPORAKHIR";
import PortalPopup from "../../../components/PortalPopup";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PILIHKELASMAPELA from "../../../components/PILIHKELASMAPELA";
import POPUPTOMBOLHAPUSMAPEL from "../../../components/POPUPTOMBOLHAPUSMAPEL"
import "./Penilaian.css"

const Penilaian = () => {
  const [isRAPORAKHIROpen, setRAPORAKHIROpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isPILIHKELASMAPELAOpen, setPILIHKELASMAPELAOpen] = useState(false);
  const [isPOPUPTOMBOLHAPUSMAPELOpen, setPOPUPTOMBOLHAPUSMAPELOpen] = useState(false);
  const [isPILIHKELASMAPELA1Open, setPILIHKELASMAPELA1Open] = useState(false);
  const [isPILIHKELASMAPELA2Open, setPILIHKELASMAPELA2Open] = useState(false);
  const [isPILIHKELASMAPELA3Open, setPILIHKELASMAPELA3Open] = useState(false);
  const [isPILIHKELASMAPELA4Open, setPILIHKELASMAPELA4Open] = useState(false);

  const navigate = useNavigate();

  const openRAPORAKHIR = useCallback(() => {
    setRAPORAKHIROpen(true);
  }, []);

  const closeRAPORAKHIR = useCallback(() => {
    setRAPORAKHIROpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate('/Dashboard/TambahMapel')
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const openPILIHKELASMAPELA = useCallback(() => {
    setPILIHKELASMAPELAOpen(true);
  }, []);

  const closePILIHKELASMAPELA = useCallback(() => {
    setPILIHKELASMAPELAOpen(false);
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "UBAH MAPEL" to the project
  }, []);

  const openPOPUPTOMBOLHAPUSMAPEL = useCallback(() => {
    setPOPUPTOMBOLHAPUSMAPELOpen(true);
  }, []);

  const closePOPUPTOMBOLHAPUSMAPEL = useCallback(() => {
    setPOPUPTOMBOLHAPUSMAPELOpen(false);
  }, []);

  const openPILIHKELASMAPELA1 = useCallback(() => {
    setPILIHKELASMAPELA1Open(true);
  }, []);

  const closePILIHKELASMAPELA1 = useCallback(() => {
    setPILIHKELASMAPELA1Open(false);
  }, []);

  const openPILIHKELASMAPELA2 = useCallback(() => {
    setPILIHKELASMAPELA2Open(true);
  }, []);

  const closePILIHKELASMAPELA2 = useCallback(() => {
    setPILIHKELASMAPELA2Open(false);
  }, []);

  const openPILIHKELASMAPELA3 = useCallback(() => {
    setPILIHKELASMAPELA3Open(true);
  }, []);

  const closePILIHKELASMAPELA3 = useCallback(() => {
    setPILIHKELASMAPELA3Open(false);
  }, []);

  const openPILIHKELASMAPELA4 = useCallback(() => {
    setPILIHKELASMAPELA4Open(true);
  }, []);

  const closePILIHKELASMAPELA4 = useCallback(() => {
    setPILIHKELASMAPELA4Open(false);
  }, []);

  const onFrameContainer29Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer30Click = useCallback(() => {
   navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer31Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer33Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  const datamapel = [
    {
      kelas: "Hello"
    },
    {
      kelas: "Hehehehe"
    }
  ];
  
  return (
    <>
      <div className="penilaian-nilai">
        <div className="kotak-putih-nilai">
          <div className="lingtar-penilaian-container-nilai">
            <span>{`Lingtar - `}</span>
            <span className="penilaian1">Penilaian</span>
          </div>
          <div className="frame-nilai-parent">
            <div className="icon-edit-parent-nilai" onClick={openRAPORAKHIR}>
              <img className="icon-edit-nilai" alt="" src="/-icon-edit.svg" />
              <div className="rapor-akhir-nilai">Rapor Akhir</div>
            </div>
            <div className="icon-edit-parent-nilai" onClick={onFrameContainer1Click}>
              <img className="icon-edit" alt="" src="/-icon-plus.svg" />
              <div className="rapor-akhir-nilai">Tambah Mata Pelajaran</div>
            </div>
          </div>
          <div className="hi-admin-nilai" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-nilai" alt="" src="/vector.svg" />
            <div className="hi-admin1-nilai">Hi, Admin</div>
          </div>
         
          <div className="mapel-a-parents" >
          {datamapel.map((mapel, i) => (
            <div className="mapel-a" key={i}>
                <div className="mapel-a-inner" onClick={openPILIHKELASMAPELA}>
                <div className="kreativitas-1-parent">
                  <img
                     className="kreativitas-1-icon"
                     alt=""
                     src="/kreativitas-1@2x.png"
                   />
                   <b className="mapel-b">{mapel.kelas}</b>
                 </div>
               </div>
               <div className="frame-group-nilai">
                 <div
                   className="icons8-edit-parent"
                   onClick={onFrameContainer5Click}
                 >
                   <img className="icons8-edit" alt="" src="/icons8edit.svg" />
                   <div className="ubah">Ubah</div>
                 </div>
                 <div
                   className="icons8-trash-parent"
                   onClick={openPOPUPTOMBOLHAPUSMAPEL}
                 >
                  <img className="icons8-edit" alt="" src="/icons8trash.svg" />
                  <div className="ubah">Hapus</div>
                </div>
              </div>
            </div>
                ))}
            </div>
        </div>
        <div className="kotak-biru-nilai">
          <div className="logo-lingtar">
            <img className="asset-1-2" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-nilai-child" />
          <div className="frame-parent4">
            <div
              className="house-solid-2-parent-nilai"
              onClick={onFrameContainer29Click}
            >
              <img
                className="house-solid-2-icon"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-nilai">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-nilai"
              onClick={onFrameContainer30Click}
            >
              <img className="icon-users" alt="" src="/-icon-users.svg" />
              <div className="beranda-nilai">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-nilai"
              onClick={onFrameContainer31Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-nilai">Absensi</div>
            </div>
            <div className="icon-edit-group">
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/icon-edit-oren.svg"
              />
              <div className="pengumuman">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={onFrameContainer33Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="pengumuman">Pengumuman</div>
            </div>
          </div>
        </div>
      </div>
      {isRAPORAKHIROpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRAPORAKHIR}
        >
          <RAPORAKHIR onClose={closeRAPORAKHIR} />
        </PortalPopup>
      )}
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPHIADMIN}
        >
          <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
        </PortalPopup>
      )}
      {isPILIHKELASMAPELAOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePILIHKELASMAPELA}
        >
          <PILIHKELASMAPELA onClose={closePILIHKELASMAPELA} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSMAPELOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSMAPEL}
        >
          <POPUPTOMBOLHAPUSMAPEL onClose={closePOPUPTOMBOLHAPUSMAPEL} />
        </PortalPopup>
      )}
      {isPILIHKELASMAPELA1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePILIHKELASMAPELA1}
        >
          <PILIHKELASMAPELA onClose={closePILIHKELASMAPELA1} />
        </PortalPopup>
      )}
      {isPILIHKELASMAPELA2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePILIHKELASMAPELA2}
        >
          <PILIHKELASMAPELA onClose={closePILIHKELASMAPELA2} />
        </PortalPopup>
      )}
      {isPILIHKELASMAPELA3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePILIHKELASMAPELA3}
        >
          <PILIHKELASMAPELA onClose={closePILIHKELASMAPELA3} />
        </PortalPopup>
      )}
      {isPILIHKELASMAPELA4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePILIHKELASMAPELA4}
        >
          <PILIHKELASMAPELA onClose={closePILIHKELASMAPELA4} />
        </PortalPopup>
      )}
    </>
  );
};

export default Penilaian;
