import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import { Input } from "antd";
import Swal from "sweetalert2";
import "./AdminPage.css";

const AdminPage = () => {
  const { TextArea } = Input;
  const navigate = useNavigate('');
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [nama, setNama] = useState('');
  const [kontak, setKontak] = useState('');
  const [bio, setBio] = useState('');

  const handleNamaChange = (e) => {
    setNama(e.target.value);
  }

  const handleKontakChange = (e) => {
    setKontak(e.target.value);
  }

  const handleBioChange = (e) => {
    setBio(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama === '' ||
      kontak === '' ||
      bio === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Mohon untuk mengisi semua kolom!'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Pengumuman Berhasil dibuat',
        confirmButtonText: 'Lanjut',
        customClass: {
          confirmButton: 'custom-confirm-button-class'
        },
  
      }).then(() => {
        navigate('/Dashboard/Pengumuman');
      });
    }
  }

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer7Click = useCallback(() => {
   navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer11Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  return (
    <>
      <div className="profil-admin">
        <div className="kotak-putih-admin">
          <div className="ubah-profil-parent-admin">
            <div className="ubah-profil-admin">Ubah Profil</div>
            <div className="nama-parent-admin">
              <div className="nama-admin">Nama</div>
              <div className="frame-child-admin">
                <Input
                  className="text-buatPengumuman"
                  id="nama"
                  placeholder=""
                  bordered={false}
                  value={nama}
                  onChange={handleNamaChange}/>
              </div>
            </div>
            <div className="nama-parent-admin">
              <div className="kontak-admin">Kontak</div>
              <div className="frame-child-admin">
              <Input
                  className="text-buatPengumuman"
                  id="kontak"
                  placeholder=""
                  bordered={false}
                  value={kontak}
                  onChange={handleKontakChange}/>
              </div>
            </div>
            <div className="nama-parent-admin">
              <div className="bio-admin">Bio</div>
              <div className="frame-inner-admin">
                <TextArea
                  className="text-buatPengumumanAdmin"
                  showCount
                  maxLength={200}
                  style={{
                    height: 110,
                    resize: 'none'
                  }}
                  bordered={false}
                  onChange={handleBioChange}
                />
              </div>
            </div>
            <div className="icon-plus-parent-admin" type="submit" onclick={handleSubmit}>
              <img className="icon-plus-admin" alt="" src="/-icon-plus.svg" />
              <div className="simpan-admin">Simpan</div>
            </div>
          </div>
          <div className="lingtar-profil-container-admin">
            <span>{`Lingtar - `}</span>
            <span className="profil-admin1-admin">Profil Admin</span>
          </div>
          <div className="hi-admin-admin" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-admin" alt="" src="/vector.svg" />
            <div className="hi-admin1-admin">Hi, Admin</div>
          </div>
          <div className="group-parent-admin">
            <img className="group-icon-admin" alt="" src="/group-46.svg" />
            <div className="risty-nur-faadhilah-admin-se-parent-admin">
              <div className="risty-nur-faadhilah-container-admin">
                <span className="risty-nur-faadhilah-admin">{`Risty Nur Faadhilah `}</span>
                <span>/ Admin Sekolah</span>
              </div>
              <div className="vector-parent-admin">
                <img className="vector-icon1-admin" alt="" src="/vector1.svg" />
                <div className="rhisty14gmailcom-admin">Rhisty14@gmail.com</div>
              </div>
            </div>
            <div className="risty-nur-faadhilah1-admin">
              Risty Nur Faadhilah adalah seorang wanita muda pejuang karir yang
              mendapat kesempatan untuk menjadi admin sekolah yang berperan
              penting dalam kelancaran kegiatan belajar di TK AL AULIYA
            </div>
          </div>
        </div>
        <div className="kotak-biru-admin">
          <div className="frame-parent-admin">
            <div
              className="house-solid-2-parent-admin"
              onClick={onFrameContainer7Click}
            >
              <img
                className="house-solid-2-icon-admin"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-admin">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-admin"
              onClick={onFrameContainer8Click}
            >
              <img className="icon-users-admin" alt="" src="/-icon-users.svg" />
              <div className="beranda">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-admin"
              onClick={onFrameContainer9Click}
            >
              <img
                className="icon-alternate-calendar-admin"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-admin">Absensi</div>
            </div>
            <div
              className="house-solid-2-parent-admin"
              onClick={onFrameContainer10Click}
            >
              <img
                className="icon-alternate-calendar-admin"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-admin">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-admin"
              onClick={onFrameContainer11Click}
            >
              <img
                className="icon-alternate-calendar-admin"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-admin">Pengumuman</div>
            </div>
          </div>
          <div className="logo-lingtar-admin">
            <img className="asset-1-3-admin" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-admin"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
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

export default AdminPage;
