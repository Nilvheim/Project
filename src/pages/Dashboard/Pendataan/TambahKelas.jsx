import { useState, useCallback } from "react";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import { useNavigate } from "react-router-dom";
import PortalPopup from "../../../components/PortalPopup";
import { Input, Button, message, Upload } from 'antd';
import Swal from "sweetalert2";
import "./TambahKelas.css";

const TambahKelas = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [namaKelas, setNamaKelas] = useState('');
  const [informasi, setInformasi] = useState('');

  const handleKelasChange = (event) => {
    setNamaKelas(event.target.value);
  };

  const handleInformasiChange = (event) => {
    setInformasi(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (namaKelas === '' ||
      informasi === '') {
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
  
    const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('Berhasil Tersimpan.');
      })
      .catch(() => {
        message.error('Gagal Menyimpan.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);

  const onVectorIconClick = useCallback(() => {
    navigate('/Dashboard/Pendataan');
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    // Please sync "BERANDA" to the project
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    // Please sync "ABSENSI" to the project
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "PENILAIAN" to the project
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    // Please sync "PENGUMUMAN" to the project
  }, []);

  return (
    <>
      <div className="tambah-kelas-data-tambahkelas">
        <div className="kotak-putih-data-tambahkelas">
          <div className="vector-parent-data-tambahkelas">
            <img
              className="vector-icon-data-tambahkelas"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIconClick}
            />
            <div className="lingtar-tambah-container-data-tambahkelas">
              <span>{`Lingtar - `}</span>
              <span className="tambah-kelas1-data-tambahkelas">Tambah Kelas</span>
            </div>
          </div>
          <div className="informasi-utama-parent-data-tambahkelas">
            <div className="informasi-utama-data-tambahkelas">
              <div className="informasi-utama1-data-tambahkelas">Informasi Utama</div>
              <div className="informasi-utama-child-data-tambahkelas" />
            </div>
            <div className="nama-kelas-parent-data-tambahkelas">
              <div className="nama-kelas-data-tambahkelas">Nama Kelas</div>
              <div className="frame-child-data-tambahkelas">
                <Input className="text-tambahKelas"
                type="text"
                id="namaKelas"
                placeholder=""
                bordered={false}
                value={namaKelas}
                onChange={handleKelasChange}></Input>
              </div>
            </div>
            <div className="informasi-utama-data-tambahkelas">
              <div className="informasi-utama1-data-tambahkelas">Informasi Tambahan</div>
              <div className="informasi-utama-child-data-tambahkelas" />
            </div>
            <div className="nama-kelas-parent-data-tambahkelas">
              <div className="ruangan-data-tambahkelas">Ruangan</div>
              <div className="frame-child-data-tambahkelas">
              <Input className="text-tambahKelas"
                type="text"
                id="informasi"
                placeholder=""
                bordered={false}
                value={informasi}
                onChange={handleInformasiChange}></Input>
              </div>
            </div>
            <div className="icon-plus-parent-data-tambahkelas">
              <img className="icon-plus-data-tambahkelas" alt="" src="/-icon-plus.svg" />
              <div className="simpan-data-tambahkelas" onClick={handleSubmit}>Simpan</div>
            </div>
          </div>
          <div className="hi-admin-data-tambahkelas" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon1-data-tambahkelas" alt="" src="/vector1.svg" />
            <div className="hi-admin1-data-tambahkelas">Hi, Admin</div>
          </div>
          <div className="informasi-tambahan2-data-tambahkelas">
            <div className="foto-kelas-opsional-data-tambahkelas">Foto Kelas (Opsional)</div>
            <Upload {...props}>
            <div className="rectangle-parent-data-tambahkelas">
              <div className="group-child-data-tambahkelas" />
              <div className="free-icon-1-1-parent-data-tambahkelas">
                <img
                  className="free-icon-1-1-data-tambahkelas"
                  alt=""
                  src="/free-icon-1-1.svg"
                />
                <div className="maks-5-mb-data-tambahkelas">Maks 5 MB</div>
                <img className="frame-inner-data-tambahkelas" alt="" src="/group-135.svg" />
              </div>
            </div>
            </Upload>
          </div>
        </div>
        <div className="kotak-biru-data-tambahkelas">
          <div className="logo-lingtar-data-tambahkelas">
            <img className="asset-1-3-data-tambahkelas" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-data-tambahkelas"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-data-tambahkelas" />
          <div className="frame-parent-data-tambahkelas">
            <div
              className="house-solid-2-parent-data-tambahkelas"
              onClick={onFrameContainer6Click}
            >
              <img
                className="house-solid-2-icon-data-tambahkelas"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-data-tambahkelas">Beranda</div>
            </div>
            <div className="icon-users-parent-data-tambahkelas">
              <img className="icon-users-data-tambahkelas" alt="" src="/icon-users-oren.svg" />
              <div className="beranda-data-tambahkelas">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-data-tambahkelas"
              onClick={onFrameContainer8Click}
            >
              <img
                className="icon-alternate-calendar-data-tambahkelas"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-data-tambahkelas">Absensi</div>
            </div>
            <div className="icon-edit-parent-data-tambahkelas" onClick={onFrameContainer9Click}>
              <img
                className="icon-alternate-calendar-data-tambahkelas"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-data-tambahkelas">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-data-tambahkelas"
              onClick={onFrameContainer10Click}
            >
              <img
                className="icon-alternate-calendar-data-tambahkelas"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-data-tambahkelas">Pengumuman</div>
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

export default TambahKelas;
