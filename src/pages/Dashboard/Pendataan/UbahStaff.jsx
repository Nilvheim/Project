import { useState, useCallback } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import { Input, Button } from 'antd';
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import "./TambahStaff.css";

const UbahStaff = () => {
  const navigate = useNavigate('');
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [namaStaff, setNamaStaff] = useState('');
  const [nip, setNip] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const kelas = [
    { value: 'A', label: 'Kelas A' },
    { value: 'B', label: 'Kelas B' },
    { value: 'C', label: 'Kelas C' },
    { value: 'D', label: 'Kelas D' }
  ];

  const handleStaffChange = (event) => {
    setNamaStaff(event.target.value);
  };

  const handleNipChange = (event) => {
    setNip(event.target.value);
  };

  const handleJabatanChange = (event) => {
    setJabatan(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (namaStaff === '' ||
      nip === '' ||
      jabatan === '') {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Mohon untuk mengisi semua kolom!'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data berhasil di update',
        confirmButtonText: 'Lanjut',
        customClass: {
            confirmButton: 'custom-confirm-button-class'
        },

    }).then(() => {
        navigate('/Dashboard/Pendataan');
    });
        }
  }

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onVectorIcon1Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate('/Dashboard/Home')
}, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
   navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate('/Dashboard/Penguman')
}, [navigate]);

  return (
    <>
      <div className="tambah-staff-sekolah-tambahstaff">
        <div className="kotak-putih-tambahstaff">
          <div className="hi-admin-tambahstaff" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-tambahstaff" alt="" src="/vector.svg" />
            <div className="hi-admin1-tambahstaff">Hi, Admin</div>
          </div>
          <div className="vector-parent-tambahstaff">
            <img
              className="vector-icon1-tambahstaff"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIcon1Click}
            />
            <div className="lingtar-tambah-container-tambahstaff">
              <span>{`Lingtar - `}</span>
              <span className="tambah-staff-sekolah1-tambahstaff">
                Ubah Staff Sekolah
              </span>
            </div>
          </div>
          <div className="frame-parent-tambahstaff">
            <div className="informasi-utama-parent-tambahstaff">
              <div className="informasi-utama-tambahstaff">
                <div className="informasi-utama1-tambahstaff">
                  <div className="informasi-utama2-tambahstaff">Informasi Utama</div>
                  <div className="informasi-utama-child-tambahstaff" />
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="nama-tambahstaff">Nama
                  </div>
                  <div className="frame-child-tambahstaff">
                  <Input className="text-tambahStaff"
                    type="text"
                    id="namaKelas"
                    placeholder=""
                    bordered={false}
                    value={namaStaff}
                    onChange={handleStaffChange}></Input>
                  </div>
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="nip-nis-tambahstaff">NIP / NIS</div>
                  <div className="frame-child-tambahstaff">
                  <Input className="text-tambahStaff"
                    type="text"
                    id="nip"
                    placeholder=""
                    bordered={false}
                    value={nip}
                    onChange={handleNipChange}></Input>
                  </div>
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="kelas-tambahstaff">Kelas
                  </div>
                  <div className="frame-child-tambahstaff">
                    <Dropdown className="frame-child-tambahstaff"
                      options={kelas}
                      placeholder="Pilih kelas"
                      onChange={(values) => console.log(values)} />
                  </div>
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="jabatan-tambahstaff">Jabatan</div>
                  <div className="frame-child-tambahstaff">
                  <Input className="text-tambahStaff"
                    type="text"
                    id="jabatan"
                    placeholder=""
                    bordered={false}
                    value={jabatan}
                    onChange={handleJabatanChange}></Input>
                  </div>
                </div>
              </div>
              <div className="informasi-tambahan-tambahstaff">
                <div className="informasi-utama1-tambahstaff">
                  <div className="informasi-utama2-tambahstaff">Informasi Tambahan</div>
                  <div className="informasi-utama-child-tambahstaff" />
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="email-lingtar-tambahstaff">Email Lingtar</div>
                  <div className="frame-child-tambahstaff">
                  <Input className="text-tambahStaff"
                    type="text"
                    id="email"
                    placeholder=""
                    bordered={false}
                    value={email}
                    onChange={handleEmailChange}></Input> 
                  </div>
                </div>
                <div className="nama-parent-tambahstaff">
                  <div className="password-lingtar-tambahstaff">Password Lingtar</div>
                  <div className="frame-child-tambahstaff">
                  <Input className="text-tambahStaff"
                    type="text"
                    id="password"
                    placeholder=""
                    bordered={false}
                    value={password}
                    onChange={handlePasswordChange}></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-plus-parent-tambahstaff">
              <img className="icon-plus-tambahstaff" alt="" src="/-icon-plus.svg" />
              <div className="simpan-tambahstaff" onClick={handleSubmit}>Simpan</div>
            </div>
          </div>
        </div>
        <div className="kotak-biru-tambahstaff">
          <div className="logo-lingtar-tambahstaff">
            <img className="asset-1-3-tambahstaff" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-tambahstaff"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-tambahstaff" />
          <div className="frame-group-tambahstaff">
            <div
              className="house-solid-2-parent-tambahstaff"
              onClick={onFrameContainer10Click}
            >
              <img
                className="house-solid-2-icon-tambahstaff"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-tambahstaff">Beranda</div>
            </div>
            <div className="icon-users-parent-tambahstaff">
              <img className="icon-users-tambahstaff" alt="" src="/icon-users-oren.svg" />
              <div className="beranda-tambahstaff">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-tambahstaff"
              onClick={onFrameContainer12Click}
            >
              <img
                className="icon-alternate-calendar-tambahstaff"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-tambahstaff">Absensi</div>
            </div>
            <div className="icon-edit-parent-tambahstaff" onClick={onFrameContainer13Click}>
              <img
                className="icon-alternate-calendar-tambahstaff"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-tambahstaff">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-tambahstaff"
              onClick={onFrameContainer14Click}
            >
              <img
                className="icon-alternate-calendar-tambahstaff"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-tambahstaff">Pengumuman</div>
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

export default UbahStaff;
