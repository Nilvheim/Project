import { useCallback } from "react";
import "./PILIHKELASMAPELA.css";
import { useNavigate } from "react-router-dom";

const PILIHKELASMAPELA = () => {

  const navigate = useNavigate();
  const onGroupContainerClick = useCallback(() => {
    navigate('/Dashboard/NilaiMapel')
  }, [navigate]);

  return (
    <div className="pilih-kelas-mapel-a-pilihkelas">
      <div className="mapel-a-container-pilihkelas">
        <span className="mapel-a-container1-pilihkelas">
          <span>MAPEL A</span>
          <span className="pilih-kelas-pilihkelas"> - PILIH KELAS</span>
        </span>
      </div>
      <div className="group-parent-pilihkelas">
        <div className="image-1-parent-pilihkelas" onClick={onGroupContainerClick}>
          <img className="image-1-icon-pilihkelas" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper-pilihkelas">
            <div className="kelas-a-wrapper-pilihkelas">
              <b className="kelas-a-pilihkelas">KELAS A</b>
            </div>
          </div>
        </div>
        <div className="image-1-group-pilihkelas">
          <img className="image-1-icon-pilihkelas" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper-pilihkelas">
            <div className="kelas-a-wrapper-pilihkelas">
              <b className="kelas-a-pilihkelas">KELAS B</b>
            </div>
          </div>
        </div>
        <div className="image-1-group-pilihkelas">
          <img className="image-1-icon-pilihkelas" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper-pilihkelas">
            <div className="kelas-a-wrapper-pilihkelas">
              <b className="kelas-a-pilihkelas">KELAS C</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PILIHKELASMAPELA;
