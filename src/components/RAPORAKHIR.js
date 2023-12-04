import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RAPORAKHIR.css";

const RAPORAKHIR = () => {
  const navigate = useNavigate('');
  const onGroupContainerClick = useCallback(() => {
    navigate('/Dashboard/RaporAkhir')
  }, []);

  return (
    <div className="rapor-akhir1-rapot">
      <div className="rapor-akhir-container-rapot">
        <span className="rapor-akhir-container1-rapot">
          <span>RAPOR AKHIR</span>
          <span className="pilih-kelas1-rapot"> - PILIH KELAS</span>
        </span>
      </div>
      <div className="group-container-rapot">
        <div className="group-div-rapot" onClick={onGroupContainerClick}>
          <img className="image-1-icon3-rapot" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper3-rapot">
            <div className="kelas-a-container-rapot">
              <b className="kelas-a1-rapot">KELAS A</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent1-rapot">
          <img className="image-1-icon3-rapot" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper3-rapot">
            <div className="kelas-a-container-rapot">
              <b className="kelas-a1-rapot">KELAS B</b>
            </div>
          </div>
        </div>
        <div className="image-1-parent1-rapot">
          <img className="image-1-icon3-rapot" alt="" src="/image-1@2x.png" />
          <div className="frame-wrapper3-rapot">
            <div className="kelas-a-container-rapot">
              <b className="kelas-a1-rapot">KELAS C</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAPORAKHIR;
