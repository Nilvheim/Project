import React, { useState } from "react";
import { useCallback } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { Input} from "antd";
import Swal from "sweetalert2";

const LandingPage = () => {

  const { TextArea } = Input;
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [isi, setIsi] = useState('');

  const handleNama = (e) => {
    setNama(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleIsi = (e) => {
    setIsi(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (nama === '' ||
        email === '' ||
        isi === '') {
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
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Terima kasih atas feedback nya 😁'
    });
    }
  }

  const navigate = useNavigate();
  const onMulaiClick = useCallback(() => {
    navigate('Login');
  }, [navigate]);


  const onHalamanUtamaTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component49Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTentangKamiTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tENTANGKAMIOREN']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLayananTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='lAYANANORENContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTimTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onKontakTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='kONTAKORENContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="landing-page-panjang">
      <div className="halaman-utama-oren-parent">
        <div className="halaman-utama-oren">
          <img
            className="pawcw1-324-1-icon"
            alt=""
            src="/353560pawcw1324-1.jpg"/>
          <div className="mulai" onClick={onMulaiClick}>
            <img className="icon-button" alt="" src="/icon-button.svg" />
              <b className="button">Mulai</b>
            <img className="icon-button" alt="" src="/icon-button.svg" />
          </div>
          <div className="aplikasi-yang-dapat">
            Aplikasi yang dapat memudahkan orang tua dalam memantau kegiatan
            anak
          </div>
          <div className="component-49" data-scroll-to="component49Container">
            <div className="component-49-inner">
              <img className="frame-landing-child" alt="" src="/group-37.svg" />
            </div>
            <div className="component-49-child">
              <img className="frame-landing-child" alt="" src="/icon-button.svg" />
            </div>
          </div>
          <div className="pantau-kegiatan-anak">
            Pantau kegiatan anak selama di sekolah dan ketahui perkembangannya
            setiap hari
          </div>
        </div>
        <div className="tentang-kami-oren" data-scroll-to="tENTANGKAMIOREN">
          <div className="tulisan-aplikasi-lingtar">
            <img
              className="undraw-my-location-re-r52x-2-icon"
              alt=""
              src="/undraw-my-location-re-r52x-2.svg"
            />
            <div className="aplikasi-lingkungan-pintar-li-parent">
              <b className="aplikasi-lingkungan-pintar">
                Aplikasi Lingkungan Pintar (LINGTAR)
              </b>
              <div className="aplikasi-lingtar-merupakan">
                Aplikasi lingtar merupakan aplikasi yang dapat melakukan
                monitoring segala kegiatan anak selama disekolah dan mengetahui
                perkembangan anak
              </div>
              <div className="kirim">
                <img className="icon-button" alt="" src="/icon-button.svg" />
                <b className="button">Unduh</b>
                <img className="icon-button" alt="" src="/icon-button.svg" />
              </div>
            </div>
          </div>
          <div className="kotak-laporan-harian-parent">
            <div className="kotak-laporan-harian">
              <img
                className="kotak-laporan-harian-child"
                alt=""
                src="/group-72.svg"
              />
              <b className="laporan-harian">Laporan Harian</b>
              <div className="ketahui-perkembangan-kegiatan">
                Ketahui perkembangan kegiatan anak hari ini
              </div>
            </div>
            <div className="kotak-presensi-digital">
              <img
                className="kotak-laporan-harian-child"
                alt=""
                src="/group-721.svg"
              />
              <b className="laporan-harian">Presensi Digital</b>
              <div className="ketahui-perkembangan-kegiatan">
                Presensi Kegiatan anak secara digital
              </div>
            </div>
            <div className="kotak-presensi-digital">
              <img
                className="kotak-laporan-harian-child"
                alt=""
                src="/group-722.svg"
              />
              <b className="laporan-harian">List Tugas</b>
              <div className="ketahui-perkembangan-kegiatan">
                List tugas yang dikerjakan anak selama di sekolah
              </div>
            </div>
            <div className="kotak-laporan-harian">
              <img
                className="kotak-laporan-harian-child"
                alt=""
                src="/group-723.svg"
              />
              <b className="laporan-harian">Pengumuman</b>
              <div className="ketahui-perkembangan-kegiatan">
                Pengumuman dari sekolah tentang sekolah
              </div>
            </div>
          </div>
          <div className="fitur-fitur">Fitur - Fitur yang menarik</div>
        </div>
        <div className="layanan-oren" data-scroll-to="lAYANANORENContainer">
          <div className="frame-landing-parent">
            <div className="akses-yang-mudah-parent">
              <div className="akses-yang-mudah">
                <div className="frame-group-landing">
                  <div className="akses-yang-mudah-group">
                    <div className="akses-yang-mudah1">Akses yang Mudah</div>
                    <div className="aplikasi-mudah-di">
                      Aplikasi mudah di akses kapanpun dan dimanapun
                    </div>
                  </div>
                  <img className="frame-inner-landing" alt="" src="/group-724.svg" />
                </div>
              </div>
              <div className="monitoring-dimana-saja">
                <div className="frame-group-landing">
                  <div className="monitoring-dimana-saja-parent">
                    <div className="akses-yang-mudah1">
                      Monitoring Dimana Saja
                    </div>
                    <div className="aplikasi-dapat-digunakan">
                      Aplikasi dapat digunakan untuk memonitoring kegiatan anak
                      dari mana saja
                    </div>
                  </div>
                  <img className="frame-inner-landing" alt="" src="/group-725.svg" />
                </div>
              </div>
            </div>
            <img
              className="desain-tanpa-judul-2-1"
              alt=""
              src="/desain-tanpa-judul-2-1@2x.png"
            />
            <div className="mudah-digunakan-parent">
              <div className="akses-yang-mudah">
                <div className="group-parent-landing">
                  <img className="frame-inner-landing" alt="" src="/group-726.svg" />
                  <div className="mudah-digunakan-group">
                    <div className="akses-yang-mudah1">Mudah Digunakan</div>
                    <div className="aplikasi-mudah-di">
                      Aplikasi yang mudah digunakan untuk segala kalangan
                    </div>
                  </div>
                </div>
              </div>
              <div className="sistem-rekap">
                <div className="group-parent-landing">
                  <img className="frame-inner-landing" alt="" src="/group-727.svg" />
                  <div className="mudah-digunakan-group">
                    <div className="akses-yang-mudah1">Sistem Rekap</div>
                    <div className="aplikasi-mudah-di">
                      Aplikasi memungkinkan untuk melakukan rekap laporan harian
                      dengan lebih mudah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keuntungan-menggunakan-aplikas">
            Keuntungan menggunakan aplikasi lingtar
          </div>
        </div>
      <div className="tim-oren"> {/* Tim Lingtar */}
          <img
            className="pawcw1-324-1-icon"
            alt=""
            src="/353560pawcw1324-11.svg"
          />
          <div className="frame-div-landing" data-scroll-to="frameContainer">
            <div className="rectangle-parent-landing">
              <div className="group-child-landing" />
              <div className="group-item-landing" />
              <div className="group-inner-landing" />
              <div className="mdifacebook-parent">
                <img className="frame-landing-child" alt="" src="/mdifacebook.svg" />
                <img
                  className="frame-landing-child"
                  alt=""
                  src="/riinstagramfill.svg"
                />
              <img className="frame-landing-child" alt="" src="/vector.svg" />
              </div>
              <div className="istia-budi-st-mm-parent">
                <b className="istia-budi-st">Istia Budi, S.T., MM</b>
                <i className="project-manager">Project Manager</i>
              </div>
              {/* <div className="rectangle-div" /> 
              <div className="group-child1" /> */}
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <div className="component-51"> {/* Muhammad Fadhil */}
              <div className="rectangle-parent-landing">
                <div className="group-child2-landing" />
                <div className="rectangle-container">
                  <div className="group-child3" />
                  <div className="group-div-landing">
                    <div className="group-child4" />
                    <div className="frame-parent1-landing">
                    <div className="muhammad-fadhil-parent">
                      <b className="muhammad-fadhil">Muhammad Fadhil</b>
                      <i className="back-end">Back - End Developer</i>
                    </div>
                    <div className="mdifacebook-group">
                      <img className="frame-landing-child" alt="" src="mdifacebook1.svg" />
                      <img className="frame-landing-child" alt="" src="riinstagramfill1.svg" />
                      <img className="frame-landing-child" alt="" src="vector1.svg" />
                    </div>
                </div>
              </div>
              {/* <div className="group-child5" />
              <div className="group-child6" /> */}
              </div>
                <div className="group-child7" />
                <div className="group-child8" />
                <div className="group-child9" />
                <div className="group-child10" />
                <img className="group-child11" alt="" src="group-61@2x.png" />
              </div>
              <div className="rectangle-parent-landing">
                <div className="group-child12" />
                <div className="group-item-landing" />
                <div className="rectangle-parent2-landing">
                  <div className="group-child14" />
                  <div className="frame-parent2-landing">
                    <div className="christina-wulandari-parent">
                      <b className="muhammad-fadhil">Christina Wulandari</b>
                      <i className="back-end">Business Analyst</i>
                    </div>
                    <div className="mdifacebook-group">
                      <img className="frame-landing-child" alt="" src="mdifacebook2.svg"></img>
                      <img className="frame-landing-child" alt="" src="riinstagramfill2.svg"></img>
                      <img className="frame-landing-child" alt="" src="vector2.svg"></img>
                    </div>
                  </div>
                </div>
                <img className="group-child17" alt="" src="group-60@2x.png"></img>
              </div>
              <div className="rectangle-parent-landing">
                <div className="group-child2-landing" />
                <div className="rectangle-container">
                  <div className="group-child3" />
                  <div className="group-div-landing">
                    <div className="group-child4" />
                    <div className="frame-parent3-landing">
                      <div className="muhammad-fadhil-parent">
                        <b className="muhammad-fadhil-parent">Gilang Mukharom</b>
                        <i className="back-end">Front - End Developer</i>
                      </div>
                      <div className="mdifacebook-group">
                      <img
                          className="frame-landing-child" alt="" src="/mdifacebook3.svg"></img>
                        <img className="frame-landing-child" alt="" src="/riinstagramfill3.svg"></img>
                        <img className="frame-landing-child" alt="" src="/vector3.svg"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-child7" />
                <div className="group-child8" />
                <div className="group-child9" />
                <div className="group-child10" />
                <img className="group-child11" alt="" src="/group-611@2x.png"></img>

              </div>
            </div>  
          </div>
          <div className="tim-lingtar">TIM LINGTAR</div>
      </div>
            
        <div className="kontak-oren" data-scroll-to="kONTAKORENContainer">
          <div className="kontak-oren-child" />
          <div className="kebjikan-ikuti-unduh">
            <div className="kebijakan">
              <b className="kebijakan1">Kebijakan</b>
              <div className="syarat-dan-ketentuan">Syarat dan Ketentuan</div>
              <div className="kebijakan-lingtar">Kebijakan Lingtar</div>
            </div>
            <div className="medsos">
              <b className="ikuti-kami">Ikuti Kami</b>
              <div className="mdifacebook-parent5">
                <img
                  className="mdifacebook-icon7"
                  alt=""
                  src="/mdifacebook4.svg"
                />
                <img
                  className="mdifacebook-icon7"
                  alt=""
                  src="/riinstagramfill4.svg"
                />
                <img className="vector-icon7" alt="" src="/vector4.svg" />
                <img className="vector-icon8" alt="" src="/vector5.svg" />
              </div>
            </div>
            <div className="medsos">
              <b className="unduh-aplikasi1">Unduh Aplikasi</b>
              <img className="vector-icon9" alt="" src="/vector6.svg" />
            </div>
          </div>
          <div className="asset-1-3-parent">
            <img className="asset-1-3" alt="" src="/asset-1-3@2x.png" />
            <div className="alamat">
              <div className="icon-lokasi-parent">
                <img className="icon-lokasi" alt="" src="/icon-lokasi.svg" />
                <div className="garis-lokasi" />
              </div>
              <div className="komplek-ruko-jl">
                Komplek Ruko, Jl. Borneo Paradiso No.3, Sepinggan, Balikpapan
                Selatan, Balikpapan City, East Kalimantan 76116 Media Kreasi
                Abadi
              </div>
            </div>
          </div>
          <div className="frame-parent7-landing">
            <div className="frame-parent8-landing">
              <div className="group-parent1-landing">
                <img className="frame-inner-landing" alt="" src="/group-728.svg" />
                <div className="muhammad-fadhil">Phone : +62 85751853600</div>
              </div>
              <div className="group-parent2-landing">
                <img className="frame-inner-landing" alt="" src="/group-73.svg" />
                <div className="muhammad-fadhil">Email : Lingtar@gmail.com</div>
              </div>
            </div>
            <div className="kotak-pesan">
              <div className="rectangle-parent14">
                <div className="group-child54" />
                <div className="masukkan-nama">
                  <Input
                    className="text-nama"
                    id="nama"
                    value={nama}
                    bordered={false}
                    placeholder="Masukan Nama"
                    onChange={handleNama}/>
                </div>
              </div>
              <div className="rectangle-parent14">
                <div className="group-child54" />
                <div className="masukkan-email">
                <Input
                    className="text-nama"
                    id="email"
                    value={email}
                    bordered={false}
                    placeholder="Masukan Email"
                    onChange={handleEmail}/>
                </div>
              </div>
              <div className="rectangle-parent16">
                <div className="group-child56" />
                  <TextArea
                  className="text-buatPengumuman-landing"
                  showCount
                  maxLength={200}
                  style={{
                    height: 155,
                    width: 550,
                    resize: 'none'
                  }}
                  placeholder="Isi Pesan"
                  bordered={false}
                  onChange={handleIsi}
                />
              </div>
              <div className="kirim" onClick={handleSubmit}>
                <img className="icon-button" alt="" src="/icon-button.svg" />
                <b className="button">Kirim</b>
                <img className="icon-button" alt="" src="/icon-button.svg" />
              </div>
            </div>
          </div>
          <div className="hubungi-kami">Hubungi Kami</div>
          <div className="copyright-by">
            Copyright By | Lingtar (Lingkungan Pintar)
          </div>
        </div>
      </div>
      <div className="header">
        <img className="header-icon" alt="" src="/header.svg" />
        <div className="logo-lingtar-landing">
          <img className="asset-1-31" alt="" src="/asset-1-31@2x.png" />
        </div>
        <div className="menu">
          <div className="halaman-utama" onClick={onHalamanUtamaTextClick}>
            Halaman Utama
          </div>
          <div className="tentang-kami" onClick={onTentangKamiTextClick}>
            Tentang Kami
          </div>
          <div className="tentang-kami" onClick={onLayananTextClick}>
            Layanan
          </div>
          <div className="tentang-kami" onClick={onTimTextClick}>
            Tim
          </div>
          <div className="tentang-kami" onClick={onKontakTextClick}>
            Kontak
          </div>
        </div>
      </div>
      </div>
  );
};

export default LandingPage;
