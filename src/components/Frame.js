import "./Frame.css";

const Frame = () => {
  return (
    <div className="rectangle-root">
      <div className="frame-child2" />
      <div className="kelas3">Kelas</div>
      <img
        className="icon-arrow-ios-forward5"
        alt=""
        src="/-icon-arrow-ios-forward5.svg"
      />
      <div className="kelas-b-wrapper">
        <div className="kelas-b">Kelas B</div>
      </div>
      <div className="kelas-a-wrapper">
        <div className="kelas-a">Kelas A</div>
      </div>
      <div className="kelas-c-wrapper">
        <div className="kelas-a">Kelas C</div>
      </div>
      <div className="semua-wrapper">
        <div className="semua1">Semua</div>
      </div>
    </div>
  );
};

export default Frame;
