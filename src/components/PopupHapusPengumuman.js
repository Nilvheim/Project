import "./PopupHapusPengumuman.css";

const PopupHapusPengumuman = () => {
  return (
    <div className="pop-up-tombol-hapus-pengumuman">
      <img
        className="pop-up-tombol-hapus-pengumuman-child"
        alt=""
        src="/group-95.svg"
      />
      <b className="hapus-pengumuman">Hapus?</b>
      <div className="apakah-anda-yakin-pengumuman">
        Apakah anda yakin ingin menghapus?
      </div>
      <div className="frame-container-pengumuman">
        <div className="batalkan-wrapper-pengumuman">
          <div className="hapus-pengumuman">Batalkan</div>
        </div>
        <div className="hapus-wrapper-pengumuman">
          <div className="hapus-pengumuman">Hapus</div>
        </div>
      </div>
    </div>
  );
};

export default PopupHapusPengumuman;
