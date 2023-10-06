import { useState, useCallback } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import { Input, Button } from 'antd';
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import "./TambahMurid.css";

const TambahMurid = () => {
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
    // Please sync "BERANDA" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "ABSENSI" to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "PENILAIAN" to the project
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "PENGUMUMAN" to the project
  }, []);

  return (
    <>
      <div className="tambah-staff-sekolah-tambahmurid">
        <div className="kotak-putih-tambahmurid">
          <div className="hi-admin-tambahmurid" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-tambahmurid" alt="" src="/vector.svg" />
            <div className="hi-admin1-tambahmurid">Hi, Admin</div>
          </div>
          <div className="vector-parent-tambahmurid">
            <img
              className="vector-icon1-tambahmurid"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIcon1Click}
            />
            <div className="lingtar-tambah-container-tambahmurid">
              <span>{`Lingtar - `}</span>
              <span className="tambah-staff-sekolah1-tambahmurid">
                Tambah Murid Sekolah
              </span>
            </div>
          </div>
          <div className="frame-parent-tambahmurid">
            <div className="informasi-utama-parent-tambahmurid">
              <div className="informasi-utama-tambahmurid">
                <div className="informasi-utama1-tambahmurid">
                  <div className="informasi-utama2-tambahmurid">Informasi Utama</div>
                  <div className="informasi-utama-child-tambahmurid" />
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="nama-tambahmurid">Nama
                  </div>
                  <div className="frame-child-tambahmurid">
                  <Input className="text-tambahmurid"
                    type="text"
                    id="namaKelas"
                    placeholder=""
                    bordered={false}
                    value={namaStaff}
                    onChange={handleStaffChange}></Input>
                  </div>
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="nip-nis-tambahmurid">NIP / NIS</div>
                  <div className="frame-child-tambahmurid">
                  <Input className="text-tambahmurid"
                    type="text"
                    id="nip"
                    placeholder=""
                    bordered={false}
                    value={nip}
                    onChange={handleNipChange}></Input>
                  </div>
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="kelas-tambahmurid">Kelas
                  </div>
                  <div className="frame-child-tambahmurid">
                    <Dropdown className="frame-child-tambahmurid"
                      options={kelas}
                      placeholder="Pilih kelas"
                      onChange={(values) => console.log(values)} />
                  </div>
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="jabatan-tambahmurid">Jabatan</div>
                  <div className="frame-child-tambahmurid">
                  <Input className="text-tambahmurid"
                    type="text"
                    id="jabatan"
                    placeholder=""
                    bordered={false}
                    value={jabatan}
                    onChange={handleJabatanChange}></Input>
                  </div>
                </div>
              </div>
              <div className="informasi-tambahan-tambahmurid">
                <div className="informasi-utama1-tambahmurid">
                  <div className="informasi-utama2-tambahmurid">Informasi Tambahan</div>
                  <div className="informasi-utama-child-tambahmurid" />
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="email-lingtar-tambahmurid">Email Lingtar</div>
                  <div className="frame-child-tambahmurid">
                  <Input className="text-tambahmurid"
                    type="text"
                    id="email"
                    placeholder=""
                    bordered={false}
                    value={email}
                    onChange={handleEmailChange}></Input> 
                  </div>
                </div>
                <div className="nama-parent-tambahmurid">
                  <div className="password-lingtar-tambahmurid">Password Lingtar</div>
                  <div className="frame-child-tambahmurid">
                  <Input className="text-tambahmurid"
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
            <div className="icon-plus-parent-tambahmurid">
              <img className="icon-plus-tambahmurid" alt="" src="/-icon-plus.svg" />
              <div className="simpan-tambahmurid" onClick={handleSubmit}>Simpan</div>
            </div>
          </div>
        </div>
        <div className="kotak-biru-tambahmurid">
          <div className="logo-lingtar-tambahmurid">
            <img className="asset-1-3-tambahmurid" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-tambahmurid"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-tambahmurid" />
          <div className="frame-group-tambahmurid">
            <div
              className="house-solid-2-parent-tambahmurid"
              onClick={onFrameContainer10Click}
            >
              <img
                className="house-solid-2-icon-tambahmurid"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-tambahmurid">Beranda</div>
            </div>
            <div className="icon-users-parent-tambahmurid">
              <img className="icon-users-tambahmurid" alt="" src="/icon-users-oren.svg" />
              <div className="beranda-tambahmurid">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-tambahmurid"
              onClick={onFrameContainer12Click}
            >
              <img
                className="icon-alternate-calendar-tambahmurid"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-tambahmurid">Absensi</div>
            </div>
            <div className="icon-edit-parent-tambahmurid" onClick={onFrameContainer13Click}>
              <img
                className="icon-alternate-calendar-tambahmurid"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-tambahmurid">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-tambahmurid"
              onClick={onFrameContainer14Click}
            >
              <img
                className="icon-alternate-calendar-tambahmurid"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-tambahmurid">Pengumuman</div>
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

export default TambahMurid;
