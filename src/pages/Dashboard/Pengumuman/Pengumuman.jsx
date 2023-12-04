import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame1 from "../../../components/Frame1";
import Swal from "sweetalert2";
import { DatePicker, Space, Select } from 'antd';
import PortalPopup from "../../../components/PortalPopup";
import Frame from "../../../components/Frame";
import Calendar from "../../../components/Calendar";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import PopupHapusPengumuman from "../../../components/PopupHapusPengumuman";
import "./Pengumuman.css";

const Pengumuman = () => {
    const [isFrameOpen, setFrameOpen] = useState(false);
    const [isFrame1Open, setFrame1Open] = useState(false);
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const navigate = useNavigate();
  
  const pilihKelas = [
    { value: "A", label: "Kelas A" },
    { value: "B", label: "Kelas B" },
    { value: "C", label: "Kelas C" },
    { value: "D", label: "Kelas D" }
  ]

  const pilihAdmin = [
    { value: "Heri", label: "Heri" },
    { value: "Hera", label: "Hera" },
    { value: "Hades", label: "Hades"}
  ]

  const pengumumanKelas = [
    { kelas: "Semua", judul: "Pengumuman Libur Sekolah", tanggal: "15-21 Juni 2023", isi: "Sekolah libur karna sekolah meledak,terima gaji" },
    { kelas: "A", judul: "Pengumuman Sekolah Meledak", tanggal: "22-30 Juni 2023", isi: " akwoakwoakwoakwoakwokawoakwokaowkaowkao" },
    { kelas: "C", judul: "Pengumuman Ahihihihi", tanggal: "15-21 Juni 2023", isi: "Sekolah libur karna sekolah meledak,terima gaji" },
    { kelas: "D", judul: "Pengumuman HAYUKKK", tanggal: "15-21 Juni 2023", isi: "Sekolah libur karna sekolah meledak,terima gaji" },
  ]

  const openPOPUPTOMBOLHAPUSDATA = useCallback(() => {
    tombolDelete.fire({
      className: 'swalButton',
      title: 'Apakah anda yakin ingin menghapus Pengumuman?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E21818',
      confirmButtonText: 'Hapus',
      cancelButtonColor: '#3EC70B',
      cancelButtonText: 'Batalkan',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        tombolDelete.fire(
          'Deleted!',
          'Data berhasil di hapus.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        tombolDelete.fire(
          'Cancelled',
          'Data batal di hapus :)',
          'error'
        )
      }
    })
  }, []);
    
  const tombolDelete = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-success'
    },
  })

  const [isPOPUPTOMBOLHAPUSPENGUMUMOpen, setPOPUPTOMBOLHAPUSPENGUMUMOpen] =
    useState(false);
  const [isPOPUPTOMBOLHAPUSPENGUMUM1Open, setPOPUPTOMBOLHAPUSPENGUMUM1Open] =
    useState(false);
  const [isPOPUPTOMBOLHAPUSPENGUMUM2Open, setPOPUPTOMBOLHAPUSPENGUMUM2Open] =
    useState(false);
  const [isPOPUPTOMBOLHAPUSPENGUMUM3Open, setPOPUPTOMBOLHAPUSPENGUMUM3Open] =
    useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate('/Dashboard/BuatPengumuman')
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onIcons8Edit1Click = useCallback(() => {
    navigate('/Dashboard/UbahPengumuman')
  }, [navigate]);

  const openPOPUPTOMBOLHAPUSPENGUMUM = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUMOpen(true);
  }, []);

  const closePOPUPTOMBOLHAPUSPENGUMUM = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUMOpen(false);
  }, []);

  const onIcons8Edit11Click = useCallback(() => {
    // Please sync "UBAH PENGUMUMAN" to the project
  }, []);

  const openPOPUPTOMBOLHAPUSPENGUMUM1 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM1Open(true);
  }, []);

  const closePOPUPTOMBOLHAPUSPENGUMUM1 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM1Open(false);
  }, []);

  const onIcons8Edit12Click = useCallback(() => {
    // Please sync "UBAH PENGUMUMAN" to the project
  }, []);

  const openPOPUPTOMBOLHAPUSPENGUMUM2 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM2Open(true);
  }, []);

  const closePOPUPTOMBOLHAPUSPENGUMUM2 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM2Open(false);
  }, []);

  const onIcons8Edit13Click = useCallback(() => {
    // Please sync "UBAH PENGUMUMAN" to the project
  }, []);

  const openPOPUPTOMBOLHAPUSPENGUMUM3 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM3Open(true);
  }, []);

  const closePOPUPTOMBOLHAPUSPENGUMUM3 = useCallback(() => {
    setPOPUPTOMBOLHAPUSPENGUMUM3Open(false);
  }, []);

  const onFrameContainer19Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer20Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer21Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  return (
    <>
      <div className="pengumuman-pengumuman">
        <div className="kotak-putih-pengumuman">
          <div className="tiga-tombol-pengumuman">
            <div className="rectangle-parent-pengumuman" >
              <Space wrap>
                <Select classname="pilihKelas-wrapper"
                  option={pilihKelas}
                  placeholder='Pilih Kelas'
                onChange={(values) => console.log(values)}></Select>
              </Space>
            </div>
            <div className="rectangle-parent-pengumuman">
            <Space wrap>
                <Select classname="pilihKelas-wrapper"
                  option={pilihAdmin}
                  placeholder='Pembuat'
                onChange={(values) => console.log(values)}></Select>
              </Space>
            </div>
            <div className="Calendar">
              <DatePicker placement={Calendar} />
            </div>
            <div
              className="icon-bullhorn-parent-pengumuman"
              onClick={onFrameContainer3Click}
            >
              <img className="icon-bullhorn-pengumuman" alt="" src="/-icon-bullhorn.svg" />
              <div className="tanggal-pengumuman">Buat Pengumuman</div>
            </div>
          </div>
          <div className="hi-admin-pengumuman" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-pengumuman" alt="" src="/vector.svg" />
            <div className="hi-admin1-pengumuman">Hi, Admin</div>
          </div>
          <div className="lingtar-pengumuman-container-pengumuman">
            <span>{`Lingtar - `}</span>
            <span className="pengumuman1-pengumuman">Pengumuman</span>
          </div>
          <div className="frame-parent-pengumuman">
            {pengumumanKelas.map((pengumuman, p) => (
              <div className="pengumuman-kelas-a-parent-pengumuman" key={p}>
              <div className="pengumuman-kelas-a-pengumuman">
                <div className="pengumuman-kelas-a-inner-pengumuman">
                  <div className="kelas-parent-pengumuman">
                    <div className="kelas1-pengumuman">
                      <span className="kelas-txt-pengumuman">
                          <span>Kelas</span>
                        <span className="span-pengumuman">{` `}</span>
                      </span>
                    </div>
                    <b className="semua-pengumuman">{pengumuman.kelas}</b>
                  </div>
                </div>
                <div className="group-parent-pengumuman">
                  <div className="group-container-pengumuman">
                    <div className="nt-3-wrapper-pengumuman">
                      <div className="group-container-pengumuman">
                        <div className="nt-3-child-pengumuman" />
                        <div className="diberitahukan-kepada-wali-container-pengumuman">
                          <p className="diberitahukan-kepada-wali-pengumuman">
                            {pengumuman.isi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="undraw-happy-news-re-tsbd-1-icon-pengumuman"
                    alt=""
                    src="/undraw-happy-news-re-tsbd-1.svg"
                  />
                  <b className="pengumuman-libur-sekolah-pengumuman">
                    {pengumuman.judul}
                  </b>
                  <div className="tanggal-15-21-juni-pengumuman">
                    Tanggal 15-21 Juni 2023
                  </div>
                  <div className="senin-14-juni-pengumuman-pengumuman">
                    Senin, 14 Juni 2023 - 19:00
                  </div>
                  <div className="icons8-edit-1-parent-pengumuman">
                    <img
                      className="icons8-edit-1-pengumuman"
                      alt=""
                      src="/icons8edit-1.svg"
                      onClick={onIcons8Edit1Click}
                    />
                    <img
                      className="vector-icon2-pengumuman"
                      alt=""
                      src="/icon-trash.svg"
                      onClick={openPOPUPTOMBOLHAPUSDATA}
                    />
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="kotak-biru-pengumuman">
          <div className="logo-lingtar-pengumuman">
            <img className="asset-1-2-pengumuman" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-pengumuman"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-pengumuman" />
          <div className="frame-group-pengumuman">
            <div
              className="house-solid-2-parent-pengumuman"
              onClick={onFrameContainer19Click}
            >
              <img
                className="house-solid-2-icon-pengumuman"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-pengumuman">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-pengumuman"
              onClick={onFrameContainer20Click}
            >
              <img className="icon-users-pengumuman" alt="" src="/-icon-users.svg" />
              <div className="beranda-pengumuman">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-pengumuman"
              onClick={onFrameContainer21Click}
            >
              <img
                className="icon-edit-pengumuman"
                alt=""
                src="/-icon-alternate-calendar1.svg"
              />
              <div className="beranda-pengumuman">Absensi</div>
            </div>
            <div className="icon-edit-parent-pengumuman" onClick={onFrameContainer22Click}>
              <img className="icon-edit-pengumuman" alt="" src="/-icon-edit.svg" />
              <div className="penilaian-pengumuman">Penilaian</div>
            </div>
            <div className="icon-bullhorn-group-pengumuman">
              <img className="icon-edit-pengumuman" alt="" src="/icon-bullhorn-oren.svg" />
              <div className="penilaian-pengumuman">Pengumuman</div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame1 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPHIADMIN}
        >
          <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSPENGUMUMOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSPENGUMUM}
        >
          <PopupHapusPengumuman onClose={closePOPUPTOMBOLHAPUSPENGUMUM} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSPENGUMUM1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSPENGUMUM1}
        >
          <PopupHapusPengumuman onClose={closePOPUPTOMBOLHAPUSPENGUMUM1} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSPENGUMUM2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSPENGUMUM2}
        >
          <PopupHapusPengumuman onClose={closePOPUPTOMBOLHAPUSPENGUMUM2} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSPENGUMUM3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSPENGUMUM3}
        >
          <PopupHapusPengumuman onClose={closePOPUPTOMBOLHAPUSPENGUMUM3} />
        </PortalPopup>
      )}
    </>
  );
};

export default Pengumuman;
