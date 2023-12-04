import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Select, Space } from 'antd';
import Swal from "sweetalert2";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import "./UbahAbsensi.css";

const UbahAbsensi = () => {
  const [nama, setNama] = useState('');
  const [nis, setNis] = useState('');
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const navigate = useNavigate("");
  
  const pilihKelas = [
    { value: " A" },
    { value: " B" },
    { value: " C" },
    { value: "D" }
  ];
  
  const pilihAbsen = [
    { value:" Hadir" },
    { value:" Terlambat" },
    { value:" Izin" },
    { value: "Alpha" }
]

  const handleNama = (event) => {
    setNama(event.target.value);
  }

  const handleNis = (event) => {
    setNis(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nama === '' ||
      nis === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Mohon untuk mengisi semua kolom!'
      })
    } else {
      Swal.fire({
        
      })
    }

}
  const onVectorIconClick = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    navigate('/Dashboard/Beranda')
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer11Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  return (
    <>
      <div className="edit-absensi">
        <div className="kotak-putih-edit-absensi">
          <div className="vector-parent-edit-absensi">
            <img
              className="vector-icon-edit-absensi"
              alt=""
              src="/vector.svg"
              onClick={onVectorIconClick}
            />
            <div className="lingtar-ubah-container-edit-absensi">
              <span>{`Lingtar - `}</span>
              <span className="ubah-absensi-edit-absensi">Ubah Absensi</span>
            </div>
          </div>
          <div className="informasi-utama-parent-edit-absensi">
            <div className="informasi-utama-edit-absensi">
              <div className="nama-parent-edit-absensi">
                <div className="nama-edit-absensi">{`Nama `}</div>
                <div className="frame-child-edit-absensi">
                <Input className="text-tambahAdmin" 
                      type="text"
                      id="namaSekolah"
                      placeholder=""
                      bordered={false}
                      value={nama}
                      onChange={handleNama}
                    />
                </div>
              </div>
              <div className="nama-parent-edit-absensi">
                <div className="nis-edit-absensi">NIS</div>
                <div className="frame-child-edit-absensi">
                <Input className="text-tambahAdmin" 
                      type="text"
                      id="namaSekolah"
                      placeholder=""
                      bordered={false}
                      value={nis}
                      onChange={handleNis}
                    />
                </div>
              </div>
              <div className="nama-parent-edit-absensi">
                <div className="kelas-edit-absensi">Kelas</div>
                <div className="frame-child-edit-absensi">
                <Space wrap>
                      <Select className="dropdown-wrapper"
                      bordered={false}
                      options={pilihKelas}
                      placeholder=""
                      onChange={(values) => console.log(values )} />
                    </Space>
                </div>
              </div>
              <div className="nama-parent-edit-absensi">
                <div className="keterangan-absen-edit-absensi">Keterangan Absen</div>
                <div className="frame-child-edit-absensi">
                <Space wrap>
                      <Select className="dropdown-wrapper"
                      bordered={false}
                      options={pilihAbsen}
                      placeholder=""
                      onChange={(values) => console.log(values )} />
                    </Space>
                </div>
              </div>
            </div>
            <div className="icon-plus-parent-edit-absensi" onClick={handleSubmit}>
              <img className="icon-plus-edit-absensi" alt="" src="/-icon-plus.svg" />
              <div className="simpan-edit-absensi">Simpan</div>
            </div>
          </div>
          <div className="hi-admin-edit-absensi" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon1-edit-absensi" alt="" src="/vector1.svg" />
            <div className="hi-admin1-edit-absensi">Hi, Admin</div>
          </div>
          <img
            className="undraw-select-re-3kbd-1-icon-edit-absensi"
            alt=""
            src="/undraw-select-re-3kbd-1.svg"
          />
        </div>
        <div className="kotak-biru-edit-absensi">
          <div className="logo-lingtar-edit-absensi">
            <img className="asset-1-3-edit-absensi" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-edit-absensi"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-edit-absensi" />
          <div className="frame-parent-edit-absensi">
            <div
              className="house-solid-2-parent-edit-absensi"
              onClick={onFrameContainer7Click}
            >
              <img
                className="house-solid-2-icon-edit-absensi"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-edit-absensi">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-edit-absensi"
              onClick={onFrameContainer8Click}
            >
              <img className="icon-users-edit-absensi" alt="" src="/-icon-users.svg" />
              <div className="beranda-edit-absensi">Pendataan</div>
            </div>
            <div className="icon-alternate-calendar-parent-edit-absensi">
              <img
                className="icon-alternate-calendar-edit-absensi"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-edit-absensi">Absensi</div>
            </div>
            <div className="icon-edit-parent-edit-absensi" onClick={onFrameContainer10Click}>
              <img
                className="icon-alternate-calendar-edit-absensi"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-edit-absensi">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-edit-absensi"
              onClick={onFrameContainer11Click}
            >
              <img
                className="icon-alternate-calendar-edit-absensi"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-edit-absensi">Pengumuman</div>
            </div>
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

export default UbahAbsensi;
