import { useState, useCallback, useMemo } from "react";
import {useNavigate} from "react-router-dom";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import Perkembangan from "../../../components/Perkembangan";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import Tombol10 from "../../../components/Tombol10";
import { useTable } from "react-table";
import fakeData from "./Nilai.json";
import "./NilaiMapel.css";

const NilaiMapel = () => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "Nama",
        accessor: "nama",
      },
      {
        Header: "NIP",
        accessor: "nip",
      },
      {
        Header: "Kelas",
        accessor: "kelas",
      },
      {
        Header: "Keterangan",
        accessor: "keterangan",
      },
      {
        Header: "Aksi",
        Cell: ({ row }) => {
          console.log(row)
          return (
            <div className="frame-group-data">
              <b className="icons8-edit-data-parent" onClick={bukaLihat}>
              <img className="icons8-edit-data" alt="" src="/icons8-info1.svg" />
                  <div className="ubah-data">Lihat</div>
                </b>
              <b className="icons8-trash-data-parent" onClick={""}>
              <img className="icons8-edit-data" alt="" src="/icons8trash.svg" />
                  <div className="ubah-data">Hapus</div>
                </b>
            </div>
          )
          
        }
      }
    ], []);
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isGrafikOpen, setGrafikOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isPOPUPTOMBOLHAPUSABSENSIOpen, setPOPUPTOMBOLHAPUSABSENSIOpen] = useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);
  const [isLihatOpen, setLihatOpen] = useState(false);

  const bukaLihat = useCallback(() => {
    setLihatOpen(true);
  }, [])

  const tutupLihat = useCallback(() => {
    setLihatOpen(false);
  }, [])

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openGrafik = useCallback(() => {
    setGrafikOpen(true);
  }, []);

  const closeGrafik = useCallback(() => {
    setGrafikOpen(false);
  }, []);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "EDIT ABSENSI" to the project
  }, []);

  const openPOPUPTOMBOLHAPUSABSENSI = useCallback(() => {
    setPOPUPTOMBOLHAPUSABSENSIOpen(true);
  }, []);

  const closePOPUPTOMBOLHAPUSABSENSI = useCallback(() => {
    setPOPUPTOMBOLHAPUSABSENSIOpen(false);
  }, []);

  const openTombol10 = useCallback(() => {
    setTombol10Open(true);
  }, []);

  const closeTombol10 = useCallback(() => {
    setTombol10Open(false);
  }, []);

  const onFrameContainer36Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer37Click = useCallback(() => {
    navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer39Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer40Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  return (
    <>
      <div className="absensi-nilaimapel">
        <div className="kotak-putih-nilaimapel">
          <div className="lingtar-nilaimapelsi-container-nilaimapel">
            <span>{`Lingtar - `}</span>
            <span className="absensi1-nilaimapel">Mapel A Kelas A</span>
          </div>
          <div className="tiga-tombol-nilaimapel">
            <div className="icons8-search-1-parent-nilaimapel">
              <img
                className="icons8-search-1-nilaimapel"
                alt=""
                src="/icons8search-1.svg"
              />
              <div className="pencarian-nilaimapel">Pencarian</div>
            </div>
            <div className="rectangle-parent-nilaimapel" onClick={openFrame}>
              <div className="frame-child-nilaimapel" />
              <div className="kelas-nilaimapel">Kelas</div>
              <img
                className="icon-arrow-ios-forward-nilaimapel"
                alt=""
                src="/-icon-arrow-ios-forward.svg"
              />
            </div>
            <div
              className="icon-alternate-calendar-parent-nilaimapel"
              onClick={openCalendar}
            >
              <img
                className="icon-alternate-calendar-nilaimapel"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="tanggal-nilaimapel">Tanggal</div>
            </div>
            <div
              className="icon-cog-parent-nilaimapel"
              onClick={openGrafik}
            >
              <img
                className="icon-alternate-calendar-nilaimapel"
                alt=""
                src="/-icon-cog.svg"
              />
              <div className="tanggal-nilaimapel">Grafik</div>
            </div>
          </div>
          <div className="ganti-halaman-nilaimapel">
            <img
              className="icon-arrow-ios-forward1-nilaimapel"
              alt=""
              src="/-icon-arrow-ios-forward1.svg"
            />
            <div className="wrapper-nilaimapel">
              <div className="pencarian-nilaimapel">1</div>
            </div>
            <img
              className="icon-arrow-ios-forward1-nilaimapel"
              alt=""
              src="/-icon-arrow-ios-forward2.svg"
            />
          </div>
          <div className="hi-admin-nilaimapel" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-nilaimapel" alt="" src="/vector.svg" />
            <div className="hi-admin1-nilaimapel">Hi, Admin</div>
          </div>
          <div className="tabel-absen-semua-sidebar-nilaimapel">
          <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
            </table>
          </div>
          <div className="tombol-tampilkan-nilaimapel">
            <div className="pencarian-nilaimapel">{`Tampilkan `}</div>
            <div className="rectangle-parent64-nilaimapel" onClick={openTombol10}>
              <div className="frame-item-nilaimapel" />
              <div className="div11-nilaimapel">10</div>
              <img
                className="icon-arrow-ios-forward-nilaimapel"
                alt=""
                src="/-icon-arrow-ios-forward3.svg"
              />
            </div>
            <div className="pencarian-nilaimapel">Data</div>
          </div>
          <div className="menampilkan-10-data-nilaimapel">Menampilkan 10 Data</div>
        </div>
        <div className="kotak-biru-nilaimapel">
          <div className="logo-lingtar-nilaimapel">
            <img className="asset-1-2-nilaimapel" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-nilaimapel"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
        
          <div className="frame-parent7-nilaimapel">
            <div
              className="house-solid-2-parent-nilaimapel"
              onClick={onFrameContainer36Click}
            >
              <img
                className="house-solid-2-icon-nilaimapel"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-nilaimapel"
              onClick={onFrameContainer37Click}
            >
              <img className="icon-users-nilaimapel" alt="" src="/-icon-users.svg" />
              <div className="beranda-nilaimapel">Pendataan</div>
            </div>
            <div className="house-solid-2-parent-nilaimapel">
              <img
                className="icon-edit-nilaimapel"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-nilaimapel">Absensi</div>
            </div>
            <div
            className="icon-alternate-calendar-group-nilaimapel"
            onClick={onFrameContainer39Click}
            >
              <img className="icon-edit-nilaimapel" alt="" src="/icon-edit-oren.svg" />
              <div className="penilaian-nilaimapel">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-nilaimapel"
              onClick={onFrameContainer40Click}
            >
              <img
                className="icon-edit-nilaimapel"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-nilaimapel">Pengumuman</div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isLihatOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={tutupLihat}>
          
          <Perkembangan onClose={tutupLihat}></Perkembangan>
          </PortalPopup>
      )}
      {isPOPUPHIADMINOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPHIADMIN}
        >
          <POPUPHIADMIN onClose={closePOPUPHIADMIN} />
        </PortalPopup>
      )}
      {isPOPUPTOMBOLHAPUSABSENSIOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSABSENSI}
        >
        </PortalPopup>
      )}
      {isTombol10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTombol10}
        >
          <Tombol10 onClose={closeTombol10} />
        </PortalPopup>
      )}
    </>
  );
};

export default NilaiMapel;
