import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PortalPopup from "../../../components/PortalPopup";
import { Input } from 'antd';
import Swal from "sweetalert2";
import "./BuatPengumuman.css";

const UbahPengumuman = () => {
  const { TextArea } = Input;
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [isi, setIsi] = useState('');
  const navigate = useNavigate();

  const handleJudul = (e) => {
        setJudul(e.target.value);
  };
  const handleDeskripsi = (e) => {
        setDeskripsi(e.target.value);
  };
  const handleIsi = (e) => {
        setIsi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (judul === '' ||
    deskripsi === '' ||
    isi === '') {
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

  const onVectorIconClick = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

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

  const onFrameContainer9Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  return (
    <>
      <div className="buat-pengumuman">
        <div className="kotak-putih-buat-pengumuman">
          <div className="vector-parent-buat-pengumuman">
            <img
              className="vector-icon-buat-pengumuman"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIconClick}
            />
            <div className="lingtar-buat-container-buat-pengumuman">
              <span>{`Lingtar - `}</span>
              <span className="buat-pengumuman1-buat-pengumuman">Ubah Pengumuman</span>
            </div>
          </div>
          <div className="frame-parent-buat-pengumuman">
            <div className="judul-pengumuman-parent-buat-pengumuman">
              <div className="judul-pengumuman-buat-pengumuman">Judul Pengumuman</div>
              <div className="frame-child-buat-pengumuman">
                <Input className="text-buatPengumuman"
                  type="text"
                  id="judul"
                  placeholder=""
                  bordered={false}
                  value={judul}
                onChange={handleJudul} />
              </div>
            </div>
            <div className="judul-pengumuman-parent-buat-pengumuman">
              <div className="deskripsi-pengumuman-buat-pengumuman">Deskripsi Pengumuman</div>
              <div className="frame-child-buat-pengumuman">
              <Input className="text-buatPengumuman"
                  type="text"
                  id="deksripsi"
                  placeholder=""
                  bordered={false}
                  value={deskripsi}
                onChange={handleDeskripsi} />
              </div>
            </div>
            <div className="judul-pengumuman-parent-buat-pengumuman">
              <div className="isi-pengumuman-buat-pengumuman">Isi Pengumuman</div>
              <div className="frame-inner-buat-pengumuman">
                <TextArea
                  className="text-buatPengumuman"
                  showCount
                  maxLength={200}
                  style={{
                    height: 205,
                    resize: 'none'
                  }}
                  bordered={false}
                  onChange={handleIsi}
                />
              </div>
            </div>
            <div className="icon-plus-parent-buat-pengumuman">
              <img className="icon-plus-buat-pengumuman" alt="" src="/-icon-plus.svg" />
              <div className="simpan-buat-pengumuman" onClick={handleSubmit}>Simpan</div>
            </div>
          </div>
          <div className="hi-admin-buat-pengumuman" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon1-buat-pengumuman" alt="" src="/undefined26.png" />
            <div className="hi-admin1-buat-pengumuman">Hi, Admin</div>
          </div>
          <img
            className="undraw-happy-news-re-tsbd-1-icon-buat-pengumuman"
            alt=""
            src="/undraw-happy-news-re-tsbd-1.svg"
          />
        </div>
        <div className="kotak-biru-buat-pengumuman">
          <div className="logo-lingtar-buat-pengumuman">
            <img className="asset-1-3-buat-pengumuman" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-buat-pengumuman"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-buat-pengumuman" />
          <div className="frame-group-buat-pengumuman">
            <div
              className="house-solid-2-parent-buat-pengumuman"
              onClick={onFrameContainer6Click}
            >
              <img
                className="house-solid-2-icon-buat-pengumuman"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-buat-pengumuman">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-buat-pengumuman"
              onClick={onFrameContainer7Click}
            >
              <img className="icon-users-buat-pengumuman" alt="" src="/-icon-users.svg" />
              <div className="beranda-buat-pengumuman">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-buat-pengumuman"
              onClick={onFrameContainer8Click}
            >
              <img
                className="icon-alternate-calendar-buat-pengumuman"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-buat-pengumuman">Absensi</div>
            </div>
            <div className="icon-edit-parent-buat-pengumuman" onClick={onFrameContainer9Click}>
              <img
                className="icon-alternate-calendar-buat-pengumuman"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-buat-pengumuman">Penilaian</div>
            </div>
            <div className="icon-bullhorn-parent-buat-pengumuman">
              <img
                className="icon-alternate-calendar-buat-pengumuman"
                alt=""
                src="/icon-bullhorn-oren.svg"
              />
              <div className="penilaian-buat-pengumuman">Pengumuman</div>
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

export default UbahPengumuman;
