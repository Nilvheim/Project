import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PENDATAANTAMBAH.css";


const PENDATAANTAMBAH = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate('/Dashboard/TambahKelas')
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate('/Dashboard/TambahStaff')
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate('/Dashboard/TambahMurid')
  }, [navigate]);

  return (
    <div className="pendataan-tambah">
      <div className="tambah-pilih-container">
        <span className="tambah-pilih-container1">
          <span>{`TAMBAH `}</span>
          <span className="pilih-kategori-data">- PILIH KATEGORI DATA</span>
        </span>
      </div>
      <div className="group-parent10-tambahdata">
        <div className="image-1-parent-tambahdata" onClick={onGroupContainerClick}>
          <img className="image-1-icon-tambahdata" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper-tambahdata">
            <div className="kelas-wrapper-tambahdata">
              <b className="kelas2-tambahdata">{`KELAS `}</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent-tambahdata" onClick={onGroupContainer1Click}>
          <img className="image-3-icon-tambahdata" alt="" src="/image-3@2x.png" />
          <div className="frame-wrapper-tambahdata">
            <div className="kelas-wrapper-tambahdata">
              <b className="staff-sekolah-tambahdata">STAFF SEKOLAH</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent-tambahdata" onClick={onGroupContainer2Click}>
          <img className="image-2-icon-tambahdata" alt="" src="/image-2@2x.png" />
          <div className="frame-wrapper-tambahdata">
            <div className="kelas-wrapper-tambahdata">
              <b className="kelas2-tambahdata">MURID</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PENDATAANTAMBAH;
