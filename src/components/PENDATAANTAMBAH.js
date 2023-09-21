import { useCallback } from "react";
import "./PENDATAANTAMBAH.css";

const PENDATAANTAMBAH = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "TAMBAH KELAS" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "TAMBAH STAFF SEKOLAH" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "TAMBAH MURID" to the project
  }, []);

  return (
    <div className="pendataan-tambah">
      <div className="tambah-pilih-container">
        <span className="tambah-pilih-container1">
          <span>{`TAMBAH `}</span>
          <span className="pilih-kategori-data">- PILIH KATEGORI DATA</span>
        </span>
      </div>
      <div className="group-parent10">
        <div className="image-1-parent" onClick={onGroupContainerClick}>
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper">
            <div className="kelas-wrapper">
              <b className="kelas2">{`KELAS `}</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent" onClick={onGroupContainer1Click}>
          <img className="image-3-icon" alt="" src="/image-3@2x.png" />
          <div className="frame-wrapper">
            <div className="kelas-wrapper">
              <b className="staff-sekolah">STAFF SEKOLAH</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent" onClick={onGroupContainer2Click}>
          <img className="image-2-icon" alt="" src="/image-2@2x.png" />
          <div className="frame-wrapper">
            <div className="kelas-wrapper">
              <b className="kelas2">MURID</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PENDATAANTAMBAH;
