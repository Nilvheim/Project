import { React} from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
    
const onChange = (e) => {
console.log('Change:', e.target.value);
};

const UnggahInformasi = () => {

return (
    <>
    <div className="pop-up-upload-gambar-sekolah">
        <b className="gambar-sekolah">Ubah Informasi</b>
            <TextArea maxLength={100} onChange={onchange} style={{ height: 400, resize: 'none' }} className="vector-parent-unggah">
            <div className="layer-2-parent-unggah"> 
                    <div className="unggah-gambar-dengan-container">
                        <span className="unggah-gambar-dengan-container1">
                        </span>
                    </div>
            </div>
        </TextArea>     
        <div className="masuk-unggah" >
            <img className="component-1-icon-unggah" alt="" src="/undefined33.png" />
            <div className="masuk1-unggah">Simpan</div>
            <img className="icon-button-unggah" alt="" src="/undefined3.png" />
        </div>
    </div>
    </>
  );
};
export default UnggahInformasi;