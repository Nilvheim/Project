import { useCallback, useState } from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6"
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import Swal from "sweetalert2";

const Login = () => {

  const mockUserData =[
    { id: 1, email: 'nilvheim@gmail.com', password: '12345' },
    { id: 2, email: 'bianca69@gmail.com', password: '67890'}
  ];
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onIconEyeClick = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const navigate = useNavigate();
  const onLupaKataSandiClick = useCallback(() => {
    navigate('/LupaPw');
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onDaftarClick = useCallback(() => {
    navigate('/Daftar');
  }, [navigate]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const user = mockUserData.find((user) => user.email === email && user.password === password);
    
    if (user) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Selamat anda berhasil masuk pada aplikasi Lingtar',
        confirmButtonText: 'Lanjut',
        customClass: {
          confirmButton: 'custom-confirm-button-class'
        },

      }).then(() => {
        navigate('/Dashboard/Home');
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Email dan Password tidak sesuai!'
      });
    }
  }


  return (
    
    <div className="login-1">
      <form onSubmit={handleSubmit}>
      <div className="kotak-putih">
        <div className="masuk">Masuk</div>
          <div className="alamat-email">
            <img className="alamat-email-child" alt="" src="vector-10.svg"></img>
          <div className="icon-envelope-parent">
              <img className="icon-envelope" alt="" src="icon-envelope.svg" />
            <div className="alamat-email1">
                <Input className="sandi-border"
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
        <div className="sandi">
          <div className="alamat-email">
            <img className="alamat-email-child" alt="" src="vector-10.svg"></img>
              <div className="icon-lock-parent">
                <img className="icon-lock" alt="" src="icon-lock.svg"></img>
              <div className="kata-sandi1">
                  <Input className="sandi-border"
                  bordered={false}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={handlePasswordChange} />
                </div>
              <b className="icon-eye" alt="" src="icon-eyes.svg" onClick={onIconEyeClick}>{showPassword ? <FaEyeSlash /> : <FaEye />}</b>
              </div>
          </div>
          <b className="lupa-kata-sandi" onClick={onLupaKataSandiClick}>Lupa Kata Sandi? </b>
        </div>
        <div className="masuk1">
          <img className="icon-button" alt="" src="icon-button.svg"></img>
          <b className="masuk2" type="submit" onClick={handleSubmit}>Masuk</b>
          <img className="icon-button" alt="" src="icon-button.svg"></img> 
        </div>
        <div className="belum-memiliki-akun">
          <img className="belum-memiliki-akun-child" alt="" src="vector-16.svg"></img>
          <div className="belum-memiliki-akun1">Belum Memiliki Akun?</div>
          <img className="belum-memiliki-akun-child" alt="" src="vector-17.svg"></img>
        </div>
        <div className="daftar">
          <img className="icon-button" alt="" src="icon-button.svg"></img>
          <b className="masuk3" onClick={onDaftarClick}>Daftar</b>
          <img className="icon-button" alt="" src="icon-button.svg"></img>
        </div>
      </div>
      </form>
      
      <div className="kotak-oren">
        <div className="undraw-mobile-login-re-9ntv-2-parent" onClick={onFrameContainer3Click}>
          <img className="undraw-mobile-login-re-9ntv-2-icon" alt="" src="undraw-mobile-login-re-9ntv-2.svg"></img>
          <b className="lingtar-klik-di-container">
            <p className="lingtar">Lingtar</p>
            <p className="klik-di-sini">Klik di sini untuk kembali</p>
          </b>
        </div>
      </div>
    </div>
);
};

export default Login;
