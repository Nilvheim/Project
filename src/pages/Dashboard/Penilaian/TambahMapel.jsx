import { useState, useCallback } from "react";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import "./TambahMapel.css";
import { Input, Button, message, Select, Space } from 'antd';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TambahMapel = () => {
  const [namaMapel, setNamaMapel] = useState('');
  const [selectedKelas, setSelectedKelas] = useState('');
  
  const handleNamaMapelChange = (e) => {
    setNamaMapel(e.target.value);
  }
  
  const kelasOption = [
    { value: 'A', label: 'Kelas A' },
    { value: 'B', label: 'Kelas B' },
    { value: 'C', label: 'Kelas C' },
    { value: 'D', label: 'Kelas D' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    if (namaMapel === '' || kelasOption === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Mohon untuk mengisi semua kolom!'
      });
    } else { 
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Berhasil menambah Mapel!'
      });
    }
  }
    
    const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
    const navigate = useNavigate();



  const onVectorIconClick = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, []);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);
    
  const onFrameContainer10Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
}, [navigate]);

  return (
    <>
      <div className="tambah-mapel">
        <div className="kotak-putih-tambahmapel">
          <div className="vector-parent-tambahmapel">
            <img
              className="vector-icon-tambahmapel"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIconClick}
            />
            <div className="lingtar-tambah-container-tambahmapel">
              <span>{`Lingtar - `}</span>
              <span className="tambah-mapel1-tambahmapel">Tambah Mapel</span>
            </div>
          </div>
          <div className="informasi-utama-parent-tambahmapel">
            <div className="informasi-utama-tambahmapel">
              <div className="nama-mapel-parent-tambahmapel">
                <div className="nama-mapel-tambahmapel">Nama Mapel</div>
                <div className="frame-child-tambahmapel">
                  <Input
                    className="text-tambahStaff"
                    id="namaMapel"
                    placeholder=""
                    bordered={false}
                    value={namaMapel}
                    onChange={handleNamaMapelChange}/>
                </div>
              </div>
              <div className="nama-mapel-parent-tambahmapel">
                <div className="kelas-tambahmapel">Kelas</div>
                <div className="frame-child-tambahmapel">
                  <Space wrap>
                    <Select
                      className="dropdown-wrapper"
                      bordered={false}
                      options={kelasOption}
                    />
                  </Space>
                </div>
              </div>
            </div>
            <div className="informasi-tambahan-tambahmapel">
              <div className="gambar-mapel-tambahmapel">Gambar Mapel</div>
              <div className="rectangle-parent-tambahmapel">
                <div className="group-child-tambahmapel" />
                <div className="free-icon-1-1-parent-tambahmapel">
                  <img
                    className="free-icon-1-1-tambahmapel"
                    alt=""
                    src="/free-icon-1-1.svg"
                  />
                  <div className="maks-5-mb-tambahmapel">Maks 5 MB</div>
                  <img className="frame-inner-tambahmapel" alt="" src="/group-135.svg" />
                </div>
              </div>
            </div>
            <div className="icon-plus-parent-tambahmapel">
              <img className="icon-plus-tambahmapel" alt="" src="/-icon-plus.svg" />
              <div className="simpan-tambahmapel" onClick={handleSubmit}>Simpan</div>
            </div>
          </div>
          <div className="hi-admin-tambahmapel" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon1-tambahmapel" alt="" src="/undefined10.png" />
            <div className="hi-admin1-tambahmapel">Hi, Admin</div>
          </div>
          <img
            className="undraw-terms-re-6ak4-1-icon-tambahmapel"
            alt=""
            src="/undraw-terms-re-6ak4-1.svg"
          />
        </div>
        <div className="kotak-biru-tambahmapel">
          <div className="logo-lingtar-tambahmapel">
            <img className="asset-1-3-tambahmapel" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-tambahmapel"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-tambahmapel" />
          <div className="frame-parent-tambahmapel">
            <div
              className="house-solid-2-parent-tambahmapel"
              onClick={onFrameContainer6Click}
            >
              <img
                className="house-solid-2-icon-tambahmapel"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-tambahmapel">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-tambahmapel"
              onClick={onFrameContainer7Click}
            >
              <img className="icon-users-tambahmapel" alt="" src="/-icon-users.svg" />
              <div className="beranda-tambahmapel">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-tambahmapel"
              onClick={onFrameContainer8Click}
            >
              <img
                className="icon-alternate-calendar-tambahmapel"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-tambahmapel">Absensi</div>
            </div>
            <div className="icon-edit-parent-tambahmapel">
              <img
                className="icon-alternate-calendar-tambahmapel"
                alt=""
                src="/icon-edit-oren.svg"
              />
              <div className="penilaian-tambahmapel">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-tambahmapel"
              onClick={onFrameContainer10Click}
            >
              <img
                className="icon-alternate-calendar-tambahmapel"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-tambahmapel">Pengumuman</div>
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

export default TambahMapel;
