import { useState, useCallback } from "react";
import POPUPKELUAR from "./POPUPKELUAR";
import PortalPopup from "./PortalPopup";
import "./POPUPHIADMIN.css";
const POPUPHIADMIN = ({ onClose }) => {
  const [isPOPUPKELUAROpen, setPOPUPKELUAROpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "PROFIL ADMIN" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "AKTIVITAS BESAR" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "PENGATURAN BESAR" to the project
  }, []);

  const openPOPUPKELUAR = useCallback(() => {
    setPOPUPKELUAROpen(true);
  }, []);

  const closePOPUPKELUAR = useCallback(() => {
    setPOPUPKELUAROpen(false);
  }, []);

  return (
    <>
      <div className="pop-up-hi-admin">
        <div className="frame-parent-hi-admin1">
          <div className="frame-parent-hi-admin2">
            <div className="icon-user-parent" onClick={onFrameContainerClick}>
              <img className="icon-user" alt="" src="/-icon-user.svg" />
              <div className="profil">Profil</div>
            </div>
            <div className="icon-user-parent" onClick={onFrameContainer1Click}>
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <div className="profil">Aktivitas</div>
            </div>
            <div className="icon-user-parent" onClick={onFrameContainer2Click}>
              <img className="vector-icon2" alt="" src="/vector2.svg" />
              <div className="pengaturan">Pengaturan</div>
            </div>
          </div>
          <div className="frame-child1" />
          <div
            className="icon-park-outlinelogout-parent"
            onClick={openPOPUPKELUAR}
          >
            <img
              className="icon-park-outlinelogout"
              alt=""
              src="/iconparkoutlinelogout.svg"
            />
            <div className="pengaturan">Keluar</div>
          </div>
        </div>
      </div>
      {isPOPUPKELUAROpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPKELUAR}
        >
          <POPUPKELUAR onClose={closePOPUPKELUAR} />
        </PortalPopup>
      )}
    </>
  );
};

export default POPUPHIADMIN;
