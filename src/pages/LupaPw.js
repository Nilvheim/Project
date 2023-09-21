import { useCallback, useState } from "react";
import "./LupaPw.css";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import Swal from "sweetalert2";


const LupaPw = () => {

  const mockUserData = [
    { id: 1, email: 'nilvheim@gmail.com' },
    {id: 2, email: 'bianca69@gmail.com'}
  ]

    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

    const navigate = useNavigate();
    const onFrameContainerClick = useCallback(() => {
      navigate("/Login");
    }, [navigate]);
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = mockUserData.find((user) => user.email === email);

    if (user) {
      navigate('/ResetPw');
    } else if (email === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Email tidak boleh Kosong!!!'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Email tidak terdaftar pada Sistem'
      });
    }
  }  
  
    return (
        <div className="lupa-pw-1">
          <div className="kotak-oren-lupapw">
            <div
              className="undraw-forgot-password-re-hxwm-parent"
              onClick={onFrameContainerClick}
            >
              <img
                className="undraw-forgot-password-re-hxwm-icon"
                alt=""
                src="/undraw-forgot-password-re-hxwm-2.svg"
              />
              <b className="lingtar-klik-di-container-lupapw">
                <p className="lingtar-lupapw">Lingtar</p>
                <p className="klik-di-sini">Klik di sini untuk kembali</p>
              </b>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="kotak-putih2">
            <div className="lupa-kata-sandi2">Lupa Kata Sandi?</div>
            <div className="masukkan-alamat-email-lupapw">
              Masukkan alamat email Anda untuk Mendapatkan link verifikasi untuk
              melakukan Reset Password.
            </div>
            <div className="alamat-email">
              <img className="alamat-email-lupapw-child" alt="" src="vector-10.svg" />
              <div className="icon-envelope-parent">
                <img className="icon-envelope" alt="" src="icon-envelope.svg" />
              <div className="alamat-email1-lupapw">
              <Input className="sandi-border-lupapw"
                bordered={false}
                type="email"
                id="email"
                placeholder="Alamat Email"
                value={email}
                onChange={handleEmailChange}>
              </Input>
                </div>
              </div>
            </div>
            <div className="selanjutnya">
              <img className="icon-button" alt="" src="icon-button.svg" />
              <b className="selanjutnya1" onClick={handleSubmit}>Selanjutnya</b>
              <img className="icon-button" alt="" src="icon-button.svg" />
            </div>
          </div>
          </form>
        </div>
      );
};

export default LupaPw;