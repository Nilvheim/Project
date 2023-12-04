import { useState, useCallback } from "react";
import PortalPopup from "../../../components/PortalPopup";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import { useNavigate } from "react-router-dom";
import "./AdminSet.css";

const AdminSet = () => {
  const [isPOPUPKATASANDIBARUOpen, setPOPUPKATASANDIBARUOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);

  const navigate = useNavigate('');

  const openPOPUPKATASANDIBARU = useCallback(() => {
    setPOPUPKATASANDIBARUOpen(true);
  }, []);

  const closePOPUPKATASANDIBARU = useCallback(() => {
    setPOPUPKATASANDIBARUOpen(false);
  }, []);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const kataSandi = useCallback(() => {
    navigate('/ResetPw')
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  return (
    <>
      <div className="pengaturan-besar-adminuser">
        <div className="kotak-putih-adminuser">
          <div className="group-parent-adminuser">
            <img className="frame-child-adminuser" alt="" src="/group-90.svg" />
            <div className="hubungi-admin-pusat-adminuser">Hubungi Admin Pusat?</div>
            <div className="pesan-parent-adminuser">
              <div className="pesan-adminuser">Pesan</div>
              <div className="frame-item-adminuser" />
            </div>
            <div className="balasan-akan-kami-adminuser">
              Balasan akan kami kirim ke email yang tersambung dengan akun admin
              yang bersangkutan
            </div>
            <div className="icon-plus-parent-adminuser">
              <img className="icon-plus-adminuser" alt="" src="/-icon-plus.svg" />
              <div className="kirim-adminuser">Kirim</div>
            </div>
          </div>
          <div className="group-container-adminuser">
            <img className="frame-child-adminuser" alt="" src="/group-901.svg" />
            <div className="ubah-kata-sandi-wrapper-adminuser">
              <div className="ubah-kata-sandi-adminuser">Ubah Kata Sandi?</div>
            </div>
            <div className="email-yang-tersambung-container-adminuser">
              <p className="email-yang-tersambung-adminuser">{`Email yang tersambung dengan akun `}</p>
              <p className="rhisty14gmailcom-adminuser">Rhisty14@gmail.com</p>
            </div>
            <div className="kami-akan-kirimkan-container-adminuser">
              <span>{`Kami akan kirimkan link ubah kata sandi ke email jika anda ingin menggantinya, klik tombol `}</span>
              <span className="lanjutkan-adminuser">{`Lanjutkan `}</span>
              <span>untuk memulai</span>
            </div>
            <div className="icon-plus-group-adminuser" onClick={kataSandi}>
              <img className="icon-plus-adminuser" alt="" src="/-icon-plus.svg" />
              <div className="kirim-adminuser">Lanjutkan</div>
            </div>
          </div>
          <div className="lingtar-pengaturan-container-adminuser">
            <span>{`Lingtar - `}</span>
            <span className="pengaturan-admin-adminuser">Pengaturan Admin</span>
          </div>
          <div className="hi-admin-adminuser" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-adminuser" alt="" src="/vector.svg" />
            <div className="hi-admin1-adminuser">Hi, Admin</div>
          </div>
        </div>
        <div className="kotak-biru-adminuser">
          <img
            className="icon-buka-tutup-sidebar-adminuser"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="frame-parent-adminuser">
            <div
              className="house-solid-2-parent-adminuser"
              onClick={onFrameContainer6Click}
            >
              <img
                className="house-solid-2-icon-adminuser"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-adminuser">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-adminuser"
              onClick={onFrameContainer7Click}
            >
              <img className="icon-users-adminuser" alt="" src="/-icon-users.svg" />
              <div className="beranda-adminuser">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-adminuser"
              onClick={onFrameContainer8Click}
            >
              <img
                className="icon-alternate-calendar-adminuser"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-adminuser">Absensi</div>
            </div>
            <div
              className="house-solid-2-parent-adminuser"
              onClick={onFrameContainer9Click}
            >
              <img
                className="icon-alternate-calendar-adminuser"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-adminuser">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-adminuser"
              onClick={onFrameContainer10Click}
            >
              <img
                className="icon-alternate-calendar-adminuser"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-adminuser">Pengumuman</div>
            </div>
          </div>
          <div className="logo-lingtar-adminuser">
            <img className="asset-1-3-adminuser" alt="" src="/asset-1-3@2x.png" />
          </div>
        </div>
      </div>
      {isPOPUPKATASANDIBARUOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPKATASANDIBARU}
        >

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
    </>
  );
};

export default AdminSet;
