import { useState, useCallback } from "react";
import { Input } from "antd";
import Swal from "sweetalert2";
import UnggahFoto from "../../components/UnggahFoto";
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import PortalPopup from "../../components/PortalPopup";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {

    const [sekolah, setSekolah] = useState('');
    const [kodeSekolah, setKodeSekolah] = useState('');
    const [alamatSekolah, setAlamatSekolah] = useState('');
    const navigate = useNavigate();

    const onBack = () => {
        navigate("/Dashboard/Home")
    }

    const handleSekolahChange = (event) => {
        setSekolah(event.target.value);
    };

    const handleKodeSekolahChange = (event) => {
        setKodeSekolah(event.target.value);
    };

    const handleAlamatSekolahChange = (event) => {
        setAlamatSekolah(event.target.value);
    };

  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isUnggahFotoOpen, setUnggahFotoOpen] = useState(false);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const openUnggahFoto = useCallback(() => {
    setUnggahFotoOpen(true);
  }, [])

  const closeUnggahFoto = useCallback(() => {
    setUnggahFotoOpen(false);
  }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (sekolah === '' ||
            kodeSekolah === '' ||
            alamatSekolah === '') {
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
                navigate('/Dashboard/Home');
            });
    }
    }
  
  return (
    <>
      <div className="edit-profil-sekolah">
        <div className="kotak-putih-profile" onSubmit={handleSubmit}>
          <div className="visi-sekolah-parent">
            <div className="visi-sekolah">
              <b className="gambar-sekolah">Gambar Sekolah</b>
              <div className="visi-sekolah-child" />
            </div>
            <img
              className="img-20230410-113752-1-icon-profile"
              alt=""
              src="img-20230410-113752-1@2x.png"
            />
            <div className="tkit-al-auliyajpg">TKIT Al Auliya.JPG</div>
            <div className="masuk-profile" onClick={openUnggahFoto}>
              <div className="gambar-sekolah-profile">Unggah Gambar</div>
              <img className="icon-button-profile" alt="" src="/undefined3.png" />
            </div>
          </div>
          <div className="informasi-sekolah-parent">
            <div className="informasi-sekolah">
              <b className="gambar-sekolah">Informasi Sekolah</b>
              <div className="visi-sekolah-child" />
            </div>
            <div className="nama-sekolah-parent">
              <div className="nama-sekolah">Nama Sekolah</div>
                <div className="frame-child-profile">
                <Input className="profile-border"
                            type="text"
                            id="kepalaSekolah"
                            placeholder=""
                            bordered={false}
                            value={alamatSekolah}
                            onChange={handleAlamatSekolahChange}>
                        </Input>
                </div>
            </div>
            <div className="kode-sekolah-parent">
              <div className="kode-sekolah">Kode Sekolah</div>
                    <div className="frame-child-profile">
                        <Input className="profile-border"
                            type="text"
                            id="kepalaSekolah"
                            placeholder=""
                            bordered={false}
                            value={kodeSekolah}
                            onChange={handleKodeSekolahChange}>
                        </Input>
              </div>
            </div>
            <div className="alamat-sekolah-parent">
              <div className="alamat-sekolah">Alamat Sekolah</div>
                        <div className="frame-child-profile">
                        <Input className="profile-border"
                            type="text"
                            id="kepalaSekolah"
                            placeholder=""
                            bordered={false}
                            value={sekolah}
                            onChange={handleSekolahChange}>
                        </Input>
              </div>
            </div>
            <div className="masuk2-profile"  onClick={handleSubmit}>
              <img className="icon-button-profile" alt="" src="icon-button.svg" />
              <div className="gambar-sekolah" >Simpan</div>
                <img className="icon-button-profile" alt="" src="icon-button.svg" />
            </div>
          </div>
          <div className="hi-admin" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon" alt="" src="/undefined7.png" />
            <div className="hi-admin1">Hi, Admin</div>
          </div>
          <div className="vector-parent">
            <img
              className="vector-icon1"
              alt=""
              src="/undefined28.png"
              onClick={onBack}
            />
            <div className="lingtar-profil-container">
              <span>{`Lingtar - `}</span>
              <span className="profil-sekolah">Profil Sekolah</span>
            </div>
          </div>
        </div>
        <div className="kotak-biru-profile">
          <img
            className="icon-buka-tutup-sidebar-profile"
            alt=""
            src="icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-profile-child" />
          <div className="frame-parent-profile">
            <div className="house-solid-2-parent-profile">
              <img
                className="house-solid-2-icon-profile"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-profile">Beranda</div>
            </div>
            <div className="icon-users-profile-parent" onClick={""}>
              <img className="icon-users-profile" alt="" src={`/-icon-users.svg`} />
              <div className="beranda-profile">Pendataan</div>
            </div>
            <div className="icon-users-profile-parent" onClick={""}>
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-alternate-calendar.svg`}
              />
              <div className="beranda-profile">Absensi</div>
            </div>
            <div className="icon-edit-parent" onClick={""}>
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-edit.svg`}
              />
              <div className="penilaian">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={""}
            >
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-bullhorn.svg`}
              />
              <div className="penilaian">Pengumuman</div>
            </div>
          </div>
          <div className="logo-lingtar">
            <img className="asset-1-3" alt="" src="/asset-1-2@2x.png" />
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
       {isUnggahFotoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnggahFoto}
        >
          <UnggahFoto onClose={closeUnggahFoto} />
        </PortalPopup>
      )}
    </>
  );
};

export default EditProfile;
