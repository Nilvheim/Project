import "./POPUPKELUAR.css";
const POPUPKELUAR = ({ onClose }) => {
  return (
    <div className="pop-up-keluar">
      <img className="pop-up-keluar-child" alt="" src="/group-79.svg" />
      <div className="perhatian-parent">
        <div className="perhatian">Perhatian!!</div>
        <div className="apakah-anda-yakin">Apakah anda yakin ingin keluar?</div>
      </div>
      <div className="ya-parent">
        <div className="ya">
          <img className="icon-button" alt="" src="/margin-atas.svg" />
          <b className="masuk">YA</b>
          <img className="icon-button" alt="" src="/margin-atas.svg" />
        </div>
        <div className="tidak">
          <img className="icon-button" alt="" src="/margin-atas.svg" />
          <b className="masuk">TIDAK</b>
          <img className="icon-button" alt="" src="/margin-atas.svg" />
        </div>
      </div>
    </div>
  );
};

export default POPUPKELUAR;
