import { useState } from 'react';
import "./UnggahFoto.css"
import { Button, message, Upload } from 'antd';

const UnggahFoto = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  
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
  return (
    <>
    <div className="pop-up-upload-gambar-sekolah">
        <b className="gambar-sekolah">Gambar Sekolah</b>
        <Upload {...props}>
        <Button className="vector-parent-unggah">
            <div className="layer-2-parent-unggah"> 
                    <div className="unggah-gambar-dengan-container">
                        <span className="unggah-gambar-dengan-container1">
                        <img className="layer-2-icon-unggah" alt="" src="/undefined34.png" />
                        <p className="unggah-gambar-dengan">{`Unggah Gambar dengan format .JPG atau .PNG `}</p>
                        <p className="unggah-gambar-dengan">(Maksimal 10 MB)</p>
                        </span>
                    </div>
            </div>
        </Button>
        </Upload>          
        <Button className="masuk-unggah"
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
              >
            {uploading ? 'Menyimpan' : 'Simpan'}
            <img className="component-1-icon-unggah" alt="" src="/undefined33.png" />
            <div className="masuk1-unggah"></div>
            <img className="icon-button-unggah" alt="" src="/undefined3.png" />
        </Button>
    </div>
    </>
  );
};
export default UnggahFoto;