import "./Frame.css";


const Frame = () => {
  return (
    <div className="rectangle-root-frame">
      <div className="frame-child2-frame" />
      <div className="kelas-atas-wrapper-frame">
      <div className="kelas3-frame">Kelas</div>
      <img
        className="icon-arrow-ios-forward5-frame"
        alt=""
        src="/-icon-arrow-ios-forward5.svg"
      />
      </div>
      
      <div className="kelas-b-wrapper-frame">
        <div className="kelas-b-frame">Kelas B</div>
      </div>
      <div className="kelas-a-wrapper-frame">
        <div className="kelas-a-frame">Kelas A</div>
      </div>
      <div className="kelas-c-wrapper-frame">
        <div className="kelas-a-frame">Kelas C</div>
      </div>
      <div className="semua-wrapper-frame">
        <div className="semua1-frame">Semua</div>
      </div>
    </div>
  );
};

export default Frame;
