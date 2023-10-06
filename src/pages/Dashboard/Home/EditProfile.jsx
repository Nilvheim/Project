import { useState, useCallback } from "react";
import { Input } from "antd";
import Swal from "sweetalert2";
import UnggahFoto from "../../../components/UnggahFoto";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
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
  
  const onClickPendataan = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onClickAbsensi = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onClickPenilaian = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onClickPengumuman = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);
  
  return (
    <>
      <div className="edit-sekolah-profile">
        <div className="kotak-putih-profile" onSubmit={handleSubmit}>
          <div className="visi-sekolah-parent-profile">
            <div className="visi-sekolah-profile">
              <b className="gambar-sekolah-profile">Gambar Sekolah</b>
              <div className="visi-sekolah-child-profile" />
            </div>
            <img
              className="img-20230410-113752-1-icon-profile"
              alt=""
              src="img-20230410-113752-1@2x.png"
            />
            <div className="tkit-al-auliya-profile">TKIT Al Auliya</div>
            <div className="masuk-profile" onClick={openUnggahFoto}>
              <div className="gambar-sekolah-profile">Unggah Gambar</div>
              <img className="icon-button-profile" alt="" src="/undefined3.png" />
            </div>
          </div>
          <div className="informasi-sekolah-parent-profile">
            <div className="informasi-sekolah-profile">
              <b className="gambar-sekolah-profile">Informasi Sekolah</b>
              <div className="visi-sekolah-child-profile" />
            </div>
            <div className="nama-sekolah-parent-profile">
              <div className="nama-sekolah-profile">Nama Sekolah</div>
                <div className="frame-child-profile">
                <Input className="profile-border-profile"
                            type="text"
                            id="kepalaSekolah"
                            placeholder=""
                            bordered={false}
                            value={alamatSekolah}
                            onChange={handleAlamatSekolahChange}>
                        </Input>
                </div>
            </div>
            <div className="kode-sekolah-parent-profile">
              <div className="kode-sekolah-profile">Kode Sekolah</div>
                    <div className="frame-child-profile">
                        <Input className="profile-border-profile"
                            type="text"
                            id="kepalaSekolah"
                            placeholder=""
                            bordered={false}
                            value={kodeSekolah}
                            onChange={handleKodeSekolahChange}>
                        </Input>
              </div>
            </div>
            <div className="alamat-sekolah-parent-profile">
              <div className="alamat-sekolah-profile">Alamat Sekolah</div>
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
            <div className="masuk2-profile" onClick={handleSubmit}>
              <img className="icon-button-profile" alt="" src="icon-button.svg" />
              <div className="gambar-sekolah-profile" >Simpan</div>
                <img className="icon-button-profile" alt="" src="icon-button.svg" />
            </div>
          </div>
          <div className="hi-admin-profile" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-profile" alt="" src="/undefined7.png" />
            <div className="hi-admin1-profile">Hi, Admin</div>
          </div>
          <div className="vector-parent-profile">
            <img
              className="vector-icon1-profile"
              alt=""
              src="/undefined28.png"
              onClick={onBack}
            />
            <div className="lingtar-profil-container-profile">
              <span>{`Lingtar - `}</span>
              <span className="profil-sekolah-profile">Profil Sekolah</span>
            </div>
          </div>
        </div>
        <div className="kotak-biru-profile">
          <img
            className="icon-buka-tutup-sidebar-profile"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-profile" />
          <div className="frame-parent-profile">
            <div className="house-solid-2-parent-profile">
              <img
                className="house-solid-2-icon-profile"
                alt=""
                src="/housesolid-oren.svg"
              />
              <div className="beranda-profile" onClick={onBack}>Beranda</div>
            </div>
            <div className="icon-users-parent-profile" onClick={onClickPendataan}>
              <img className="icon-users-profile" alt="" src={`/-icon-users.svg`} />
              <div className="beranda-profile">Pendataan</div>
            </div>
            <div className="icon-users-parent-profile" onClick={onClickAbsensi}>
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-alternate-calendar.svg`}
              />
              <div className="beranda-profile">Absensi</div>
            </div>
            <div className="icon-edit-parent-profile" onClick={onClickPenilaian}>
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-edit.svg`}
              />
              <div className="penilaian-profile">Penilaian</div>
            </div>
            <div className="icon-bullhorn-parent-profile" onClick={onClickPengumuman}>
              <img
                className="icon-alternate-calendar-profile"
                alt=""
                src={`/-icon-bullhorn.svg`}
              />
              <div className="penilaian-profile">Pengumuman</div>
            </div>
          </div>
          <div className="logo-lingtar-profile">
            <img className="asset-1-3-profile" alt="" src="/asset-1-2@2x.png" />
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
