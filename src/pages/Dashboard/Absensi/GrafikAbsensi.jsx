import { useState, useCallback, useMemo } from "react";
import {useNavigate} from "react-router-dom";
import Frame from "../../../components/Frame";
import Swal from "sweetalert2"
import PortalPopup from "../../../components/PortalPopup";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import Tombol10 from "../../../components/Tombol10";
import { useTable } from "react-table";
import fakeData from "../Absensi.json";
import Grafik from "../../../components/Grafik";
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import ApexChart from "../../../components/Grafik";
import "./GrafikAbsensi.css";

const GrafikAbsensi = () => {
  
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isGrafikOpen, setGrafikOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isPOPUPTOMBOLHAPUSABSENSIOpen, setPOPUPTOMBOLHAPUSABSENSIOpen] = useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);

  const onBackClick = useCallback(() => {
    navigate("/Dashboard/Absensi");
  }, [navigate])

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const closeGrafik = useCallback(() => {
    setGrafikOpen(false);
  }, []);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const closePOPUPTOMBOLHAPUSABSENSI = useCallback(() => {
    setPOPUPTOMBOLHAPUSABSENSIOpen(false);
  }, []);

  const closeTombol10 = useCallback(() => {
    setTombol10Open(false);
  }, []);

  const onFrameContainer36Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer37Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer39Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer40Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  return (
    <>
      <div className="absensi-absen">
        <div className="kotak-putih-absen">
          <div className="lingtar-absensi-container-absen">
            <img className="vector-icon-edit-absensi" alt="" src="/undefined28.png" onClick={onBackClick}/>
            <span>{`  Lingtar - `}</span>
            <span className="absensi1-absen">Absensi</span>
          </div>
          <div className="hi-admin-absen" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-absen" alt="" src="/vector.svg" />
            <div className="hi-admin1-absen">Hi, Admin</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="grafikChart">
              <ApexChart />
            </div>
        </div>
        </div>
        <div className="kotak-biru-absen">
          <div className="logo-lingtar-absen">
            <img className="asset-1-2-absen" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-absen"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-absen" />
          <div className="frame-parent7-absen">
            <div
              className="house-solid-2-parent-absen"
              onClick={onFrameContainer36Click}
            >
              <img
                className="house-solid-2-icon-absen"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-absen"
              onClick={onFrameContainer37Click}
            >
              <img className="icon-users-absen" alt="" src="/-icon-users.svg" />
              <div className="beranda-absen">Pendataan</div>
            </div>
            <div className="icon-alternate-calendar-group-absen">
              <img
                className="icon-edit-absen"
                alt=""
                src="/icon-calendar-oren.svg"
              />
              <div className="beranda-absen">Absensi</div>
            </div>
            <div
              className="icon-edit-parent-absen"
              onClick={onFrameContainer39Click}
            >
              <img className="icon-edit-absen" alt="" src="/-icon-edit.svg" />
              <div className="penilaian-absen">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-absen"
              onClick={onFrameContainer40Click}
            >
              <img
                className="icon-edit-absen"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-absen">Pengumuman</div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isGrafikOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGrafik}
        >
          <Grafik onClose={closeGrafik} />
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
      {isPOPUPTOMBOLHAPUSABSENSIOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSABSENSI}
        >
        </PortalPopup>
      )}
      {isTombol10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTombol10}
        >
          <Tombol10 onClose={closeTombol10} />
        </PortalPopup>
      )}
    </>
  );
};

export default GrafikAbsensi;
