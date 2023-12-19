import { useState, useCallback } from "react";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { Input, Select, Space } from 'antd';
import "./../../../global.css"

const UbahAdmin = () => {
    const navigate = useNavigate('');
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [namaSekolah, setNamaSekolah] = useState('');
  const [kodeSekolah, setKodeSekolah] = useState('');
  const [namaKota, setKotaSekolah] = useState('');
  const [emailAdmin, setEmailAdmin] = useState('');
  const [email2Admin, setEmail2Admin] = useState('');

    const jumlahAdmin = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
  ]
  
  const handleNamaSekolah = (event) => {
    setNamaSekolah(event.target.value);
  }

  const handleKodeSekolah = (event) => {
    setKodeSekolah(event.target.value);
  }

  const handleKotaSekolah = (event) => {
    setKotaSekolah(event.target.value);
  }

  const handleEmailAdmin = (event) => {
    setEmailAdmin(event.target.value);
  }

  const handleEmailAdmin2 = (event) => {
    setEmail2Admin(event.target.value);
  }

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onVectorIcon1Click = useCallback(() => {
   navigate('/Dashboard/PendataanPusat')
  }, [navigate]);

  const backToHome = useCallback(() => {
    navigate('/Dashboard/HomePusat')
  }, [navigate]);
    
  const backToPendataan = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  return (
    <>
      <div className="tambah-sekolah">
        <div className="kotak-putih-tambah-sekolah">
          <div className="hi-admin-tambah-sekolah" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-tambah-sekolah" alt="" src="/vector.svg" />
            <div className="hi-admin1-tambah-sekolah">Hi, Admin</div>
          </div>
          <div className="vector-parent-tambah-sekolah">
            <img
              className="vector-icon1-tambah-sekolah"
              alt=""
              src="/vector1.svg"
              onClick={onVectorIcon1Click}
            />
            <div className="lingtar-tambah-container-tambah-sekolah">
              <span>{`Lingtar - `}</span>
              <span className="tambah-sekolah1-tambah-sekolah">Tambah Sekolah</span>
            </div>
          </div>
          <div className="frame-parent-tambah-sekolah">
            <div className="informasi-utama-parent-tambah-sekolah">
              <div className="informasi-utama-tambah-sekolah">
                <div className="informasi-utama1-tambah-sekolah">
                  <div className="informasi-utama2-tambah-sekolah">Informasi Utama</div>
                  <div className="informasi-utama-child-tambah-sekolah" />
                </div>
                <div className="nama-sekolah-parent-tambah-sekolah">
                  <div className="nama-sekolah-tambah-sekolah">{`Nama Sekolah `}</div>
                  <div className="frame-child-tambah-sekolah">
                    <Input className="text-tambahAdmin" 
                      type="text"
                      id="namaSekolah"
                      placeholder=""
                      bordered={false}
                      value={namaSekolah}
                      onChange={handleNamaSekolah}
                    />
                  </div>
                </div>
                <div className="nama-sekolah-parent-tambah-sekolah">
                  <div className="kode-sekolah-tambah-sekolah">Kode Sekolah</div>
                  <div className="frame-child-tambah-sekolah">
                  <Input className="text-tambahAdmin" 
                      type="text"
                      id="kodeSekolah"
                      placeholder=""
                      bordered={false}
                      value={kodeSekolah}
                      onChange={handleKodeSekolah}
                    />
                  </div>
                </div>
                <div className="nama-sekolah-parent">
                  <div className="jumlah-admin-tambah-sekolah">Jumlah Admin</div>
                  <div className="frame-child-tambah-sekolah">
                    <Space wrap>
                      <Select className="dropdown-wrapper"
                      bordered={false}
                      options={jumlahAdmin}
                      placeholder=""
                      onChange={(values) => console.log(values )} />
                    </Space>
                  </div>
                </div>
                <div className="nama-sekolah-parent-tambah-sekolah">
                  <div className="kota-tambah-sekolah">Kota</div>
                    <div className="frame-child-tambah-sekolah">
                    <Input className="text-tambahAdmin" 
                      type="text"
                      id="namaSekolah"
                      placeholder=""
                      bordered={false}
                      value={namaKota}
                      onChange={handleKotaSekolah}
                    />
                  </div>
                </div>
              </div>
              <div className="informasi-tambahan-tambah-sekolah">
                <div className="informasi-utama1-tambah-sekolah">
                  <div className="informasi-utama2-tambah-sekolah">Informasi Tambahan</div>
                  <div className="informasi-utama-child-tambah-sekolah" />
                </div>
                <div className="nama-sekolah-parent-tambah-sekolah">
                  <div className="email-admin-1-tambah-sekolah">Email Admin 1</div>
                  <div className="frame-child-tambah-sekolah">
                  <Input className="text-tambahAdmin" 
                      type="text"
                      id="email"
                      placeholder=""
                      bordered={false}
                      value={emailAdmin}
                      onChange={handleEmailAdmin}
                    />
                  </div>
                </div>
                <div className="nama-sekolah-parent-tambah-sekolah">
                  <div className="nama-sekolah-tambah-sekolah">Email Admin 2</div>
                  <div className="frame-child-tambah-sekolah">
                  <Input className="text-tambahAdmin" 
                      type="text"
                      id="namaSekolah"
                      placeholder=""
                      bordered={false}
                      value={email2Admin}
                      onChange={handleEmailAdmin2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-plus-parent-tambah-sekolah">
              <img className="icon-plus-tambah-sekolah" alt="" src="/-icon-plus.svg" />
              <div className="simpan-tambah-sekolah">Simpan</div>
            </div>
          </div>
        </div>
        <div className="kotak-biru-tambah-sekolah">
          <div className="logo-lingtar-tambah-sekolah">
            <div className="logo-lingtar1-tambah-sekolah">
              <img className="asset-1-2-tambah-sekolah" alt="" src="/asset-1-2@2x.png" />
            </div>
          </div>
          <img
            className="icon-buka-tutup-sidebar-tambah-sekolah"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-tambah-sekolah" />
          <div className="frame-group-tambah-sekolah">
            <div
              className="house-solid-2-parent-tambah-sekolah"
              onClick={backToHome}
            >
              <img
                className="house-solid-2-icon-tambah-sekolah"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-tambah-sekolah">Beranda</div>
            </div>
            <div className="icon-users-parent-tambah-sekolah">
            <img className="icon-users-tambah-sekolah" alt="" src="/-icon-users.svg" onClick={backToPendataan} />
              <div className="beranda-tambah-sekolah">Pendataan</div>
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

export default UbahAdmin;
