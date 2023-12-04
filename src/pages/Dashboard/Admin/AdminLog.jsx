import { useState, useCallback } from "react";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import "./AdminLog.css";

const AdminLog = () => {
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer16Click = useCallback(() => {
    // Please sync "BERANDA" to the project
  }, []);

  const onFrameContainer17Click = useCallback(() => {
    // Please sync "PENDATAAN" to the project
  }, []);

  const onFrameContainer18Click = useCallback(() => {
    // Please sync "ABSENSI" to the project
  }, []);

  const onFrameContainer19Click = useCallback(() => {
    // Please sync "PENILAIAN" to the project
  }, []);

  const onFrameContainer20Click = useCallback(() => {
    // Please sync "PENGUMUMAN" to the project
  }, []);

  return (
    <>
      <div className="aktivitas-besar-adminlog">
        <div className="kotak-putih-adminlog">
          <div className="frame-parent-adminlog">
            <div className="rectangle-parent-adminlog">
              <div className="frame-child-adminlog" />
              <div className="mei-2023-adminlog">24 Mei 2023</div>
            </div>
            <div className="ellipse-parent-adminlog">
              <div className="frame-item-adminlog" />
              <div className="frame-wrapper-adminlog">
                <div className="wita-parent-adminlog">
                  <div className="wita-adminlog">17.15 WITA</div>
                  <div className="mengubah-tampilan-halaman-container-adminlog">
                    <span className="mengubah-tampilan-halaman-container1-adminlog">
                      <span>{`Mengubah tampilan halaman `}</span>
                      <span className="profil-admin-adminlog">profil admin</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="mei-2023">23 Mei 2023</div>
            </div>
            <div className="ellipse-parent">
              <div className="frame-item" />
              <div className="frame-wrapper">
                <div className="wita-parent">
                  <div className="wita">12.15 WITA</div>
                  <div className="mengubah-tampilan-halaman-container">
                    <span className="mengubah-tampilan-halaman-container1">
                      <span>{`Mengubah tampilan halaman `}</span>
                      <span className="profil-admin">profil admin</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent-adminlog">
              <div className="frame-child-adminlog" />
              <div className="mei-2023-adminlog">22 Mei 2023</div>
            </div>
            <div className="ellipse-parent-adminlog">
              <div className="frame-item-adminlog" />
              <div className="frame-wrapper-adminlog">
                <div className="wita-container-adminlog">
                  <div className="wita-adminlog">23.30 WITA</div>
                  <div className="membuat-pop-up-container-adminlog">
                    <span className="mengubah-tampilan-halaman-container1-adminlog">
                      <span>{`Membuat pop up tombol pada halaman `}</span>
                      <span className="profil-admin-adminlog">profil sekolah</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ellipse-parent-adminlog">
              <div className="frame-item-adminlog" />
              <div className="frame-wrapper-adminlog">
                <div className="wita-parent1-adminlog">
                  <div className="wita-adminlog">15.57 WITA</div>
                  <div className="membuat-pop-up-container-adminlog">
                    <span className="mengubah-tampilan-halaman-container1-adminlog">
                      <span>{`Membuat perubahan besar pada halaman `}</span>
                      <span className="profil-admin-adminlog">absensi</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="undraw-file-searching-re-3evy-icon-adminlog"
            alt=""
            src="/undraw-file-searching-re-3evy-1.svg"
          />
          <div className="lingtar-aktifitas-container-adminlog">
            <span>{`Lingtar - `}</span>
            <span className="profil-admin-adminlog">Aktifitas Admin</span>
          </div>
          <div className="hi-admin-adminlog" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-adminlog" alt="" src="/vector.svg" />
            <div className="hi-admin1-adminlog">Hi, Admin</div>
          </div>
        </div>
        <div className="kotak-biru-adminlog">
          <img
            className="icon-buka-tutup-sidebar-adminlog"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="frame-group-adminlog">
            <div
              className="house-solid-2-parent-adminlog"
              onClick={onFrameContainer16Click}
            >
              <img
                className="house-solid-2-icon-adminlog"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-adminlog">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-adminlog"
              onClick={onFrameContainer17Click}
            >
              <img className="icon-users-adminlog" alt="" src="/-icon-users.svg" />
              <div className="beranda-adminlog">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-adminlog"
              onClick={onFrameContainer18Click}
            >
              <img
                className="icon-alternate-calendar-adminlog"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-adminlog">Absensi</div>
            </div>
            <div
              className="house-solid-2-parent-adminlog"
              onClick={onFrameContainer19Click}
            >
              <img
                className="icon-alternate-calendar-adminlog"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-adminlog">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-adminlog"
              onClick={onFrameContainer20Click}
            >
              <img
                className="icon-alternate-calendar-adminlog"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-adminlog">Pengumuman</div>
            </div>
          </div>
          <div className="logo-lingtar-adminlog">
            <img className="asset-1-3-adminlog" alt="" src="/asset-1-3@2x.png" />
          </div>
        </div>
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

export default AdminLog;
