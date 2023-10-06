import "./POPUPTOMBOLHAPUSMAPEL.css";

const POPUPTOMBOLHAPUSMAPEL = () => {
  return (
    <div className="pop-up-tombol-hapus-mapel">
      <img
        className="pop-up-tombol-hapus-mapel-child"
        alt=""
        src="/group-95.svg"
      />
      <b className="batalkan">Hapus?</b>
      <div className="apakah-anda-yakin">
        Apakah anda yakin ingin menghapus?
      </div>
      <div className="frame-parent5">
        <div className="batalkan-wrapper">
          <div className="batalkan">Batalkan</div>
        </div>
        <div className="hapus-wrapper">
          <div className="batalkan">Hapus</div>
        </div>
      </div>
    </div>
  );
};

export default POPUPTOMBOLHAPUSMAPEL;
