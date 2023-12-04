import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import "./Daftar.css";
import Swal from "sweetalert2";

const Daftar = () => {
    const [kepalaSekolah, setKepalaSekolah] = useState('');
    const [sekolah, setSekolah] = useState('');
    const [email, setEmail] = useState('');
    const [kodeSekolah, setKodeSekolah] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const onKembaliClick = useCallback(() => {
        navigate('/Login');
    }, [navigate]);
    
    const handleKepalaSekolahChange = (event) => {
        setKepalaSekolah(event.target.value);
    };
    
    const handleSekolahChange = (event) => {
        setSekolah(event.target.value);
    };
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleKodeSekolahChange = (event) => {
        setKodeSekolah(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const onCheck = (event) => {
        setIsChecked(event.target.value);
    };

    const onPassEye = useCallback(() => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }, []);

    const onConfirmPassEye = useCallback(() => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if (kepalaSekolah === '' ||
            sekolah === '' ||
            email === '' ||
            kodeSekolah === '' ||
            password === '' ||
            confirmPassword === '') {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Mohon untuk mengisi semua kolom'
            });
        } else if (!regex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Email tidak valid!'
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Password harus sama!'
            });
        } else if (!isChecked && !onCheck) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Mohon untuk menyetujui Syarat dan Ketentuan!'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Akun anda berhasil terdaftar',
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
        <div className="daftar-1">
            <div className="kotak-putih-daftar" onSubmit={handleSubmit}>
                <div className="daftar-admin">Daftar Admin</div>
                <div className="nama-kepala-sekolah">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    < div className="nama-kepala-sekolah1">
                    <Input className="daftar-border"
                            type="text"
                            id="kepalaSekolah"
                            placeholder="Nama Kepala Sekolah"
                            bordered={false}
                            value={kepalaSekolah}
                            onChange={handleKepalaSekolahChange}>
                        </Input>
                    </div>
                    <img className="icon-user-daftar" alt="" src="icon-user.svg" />
                </div>
                <div className="nama-kepala-sekolah">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    <div className="nama-sekolah1">
                        <Input className="daftar-border"
                            type="text"
                            id="sekolah"
                            placeholder="Nama Sekolah"
                            bordered={false}
                            value={sekolah}
                            onChange={handleSekolahChange}>
                        </Input>
                    </div>
                    <img className="vector-icon-daftar" alt="" src="vector.svg" />
                </div>
                <div className="nama-kepala-sekolah">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    <div className="alamat-email-daftar">
                    <Input className="daftar-border"
                            type="email"
                            id="email"
                            placeholder="Alamat Email"
                            bordered={false}
                            value={email}
                            onChange={handleEmailChange}>
                        </Input>
                    </div>
                    <img className="icon-envelope-daftar" alt="" src="icon-envelope.svg" />
                </div>
                <div className="nama-kepala-sekolah">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    <div className="kode-sekolah1">
                    <Input className="daftar-border"
                            type="text"
                            id="kodeSekolah"
                            placeholder="Kode Sekolah"
                            bordered={false}
                            value={kodeSekolah}
                            onChange={handleKodeSekolahChange}>
                        </Input>
                    </div>
                    <img className="icon-globe-daftar" alt="" src="icon-globe.svg" />
                </div>
                <div className="kata-sandi-daftar">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    <div className="kata-sandi1-daftar">
                    <Input className="daftar-border"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Password"
                            bordered={false}
                            value={password}
                            onChange={handlePasswordChange}>
                        </Input>
                    </div>
                    <img className="icon-lock-daftar" alt="" src="icon-lock.svg" />
                    <b className="icon-eye-daftar" alt="" onClick={onPassEye}>{showPassword ? <FaEyeSlash /> : <FaEye />}</b>
                </div>
                <div className="kata-sandi-daftar">
                    <img className="garis-daftar" alt="" src="vector-10.svg" />
                    <div className="konfirmasi-kata-sandi-daftar">
                    <Input className="daftar-border"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            placeholder="Konfirmasi password"
                            bordered={false}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}>
                        </Input>
                    </div>
                    <img className="icon-lock-daftar" alt="" src="icon-lock.svg" />
                    <b className="icon-eye-daftar" alt="" onClick={onConfirmPassEye}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</b>
                </div>
                <div className="kotak-setuju">
                    <div className="checkbox-daftar">Saya Menyetujui
                    <a> Syarat dan Ketentuan</a></div>
                    <Checkbox checked={isChecked} onChange={onCheck}></Checkbox>
                </div>
                <div className="daftar1">
                    <img className="icon-button" alt="" src="icon-button.svg" />
                    <b className="masuk-daftar" type="submit" onClick={handleSubmit}>Daftar</b>
                    <img className="icon-button" alt="" src="icon-button.svg" />
                </div>
            </div>
            <div className="kotak-biru-muda">
                <div className="undraw-mobile-login-re-9ntv-2-parent">
                    <img className="undraw-mobile-login-re-9ntv-2-icon" alt="" src="undraw-mobile-login-re-9ntv-2.svg" />
                    <b className="lingtar-klik-di-container">
                        <p className="lingtar">Lingtar</p>
                        <p onClick={onKembaliClick} className="klik-di-sini">Klik di sini untuk kembali</p>
                    </b>
                </div>
            </div>
        </div>

    );
};

export default Daftar;