import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Input } from "antd";
import "./ResetPw.css";
import Swal from "sweetalert2";

const ResetPw = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const EyeClickTop = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const EyeClickBot = useCallback(() => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  }, []);


  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Password harus sama!'
      });

    } else if (password === '' && confirmPassword === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Password tidak boleh kosong  !'
      });

    }  else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Password berhasil di ubah',
        confirmButtonText: 'Lanjut',
        customClass: {
          confirmButton: 'custom-confirm-button-class'
        },

      }).then(() => {
        navigate('/Login');
      });
    }
  }


  return (
    <div className="lupa-pw-3">
      <form onSubmit={handleSubmit}>
      <div className="kotak-putih1">
        <div className="reset-kata-sandi">Reset Kata Sandi</div>
        <div className="kata-sandi">
          <img className="kata-sandi-child" alt="" src="vector-14.svg"></img>
            <div className="kata-sandi2">
              <Input className="sandi-border2"
                bordered={false}
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={handlePasswordChange}>
                </Input>
          </div>
          <img className="icon-lock1" alt="" src="icon-lock.svg" />
          <b className="icon-eyes1" alt="" onClick={EyeClickTop}>{showPassword ? <FaEyeSlash /> : <FaEye />}</b>
        </div>

        <div className="kata-sandi">
          <img className="kata-sandi-child" alt="" src="vector-14.svg"></img>
            <div className="kata-sandi2">
              <Input className="sandi-border2"
                bordered={false}
                type={showConfirmPassword ? 'text' : 'password'}
                id="confimPassword"
                placeholder="Konfirmasi Kata Sandi"
                value={confirmPassword}
                onChange={handleConfirmPassword}>
                </Input>
          </div>
          <img className="icon-lock1" alt="" src="icon-lock.svg"></img>
          <b className="icon-eyes1" alt="" onClick={EyeClickBot}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</b>
        </div>

        <div className="selanjutnya1">
          <img className="icon-button2" alt="" src="icon-button.svg"></img>
          <b className="masuk1" onClick={handleSubmit}>Selanjutnya</b>
          <img className="icon-button2" alt="" src="icon-button.svg"></img>
        </div>
      </div>
      <div className="kotak-oren1">
        <div className="undraw-forgot-password-re-hxwm-resetpw-parent">
          <img
            className="undraw-forgot-password-re-hxwm-icon-resetpw"
            alt=""
            src="/undraw-forgot-password-re-hxwm-2.svg"
          />
          <b className="lingtar">Lingtar</b>
        </div>
      </div>
      </form>
    </div>
  )
}

export default ResetPw