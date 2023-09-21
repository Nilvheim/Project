import {useState,useMemo,useCallback} from "react";
import fakeData from "./Mock.json";
import { useTable } from "react-table";
import Frame from "../../components/Frame";
import PortalPopup from "../../components/PortalPopup";
import PENDATAANTAMBAH from "../../components/PENDATAANTAMBAH";
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import POPUPTOMBOLHAPUSDATA from "../../components/POPUPTOMBOLHAPUSDATA";
import Tombol10 from "../../components/Tombol10";
import "./Pendataan.css";


const PENDATAAN = () => {

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
        Header: "Jabatan",
        accessor: "jabatan",
      },
      {
        Header: "Aksi",
        Cell: ({value}) => (<button onClick={this.editRow({value})}>Edit</button>)
      }
    ],[]);

  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isPENDATAANTAMBAHOpen, setPENDATAANTAMBAHOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isPOPUPTOMBOLHAPUSDATAOpen, setPOPUPTOMBOLHAPUSDATAOpen] =  useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openPENDATAANTAMBAH = useCallback(() => {
    setPENDATAANTAMBAHOpen(true);
  }, []);

  const closePENDATAANTAMBAH = useCallback(() => {
    setPENDATAANTAMBAHOpen(false);
  }, []);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const closePOPUPTOMBOLHAPUSDATA = useCallback(() => {
    setPOPUPTOMBOLHAPUSDATAOpen(false);
  }, []);

  const openTombol10 = useCallback(() => {
    setTombol10Open(true);
  }, []);

  const closeTombol10 = useCallback(() => {
    setTombol10Open(false);
  }, []);

  const onFrameContainer35Click = useCallback(() => {
    // Please sync "BERANDA" to the project
  }, []);

  const onFrameContainer37Click = useCallback(() => {
    // Please sync "ABSENSI" to the project
  }, []);

  const onFrameContainer38Click = useCallback(() => {
    // Please sync "PENILAIAN" to the project
  }, []);

  const onFrameContainer39Click = useCallback(() => {
    // Please sync "PENGUMUMAN" to the project
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="pendataan-data">
        <div className="kotak-putih-pendataan">
          <div className="tiga-tombol">
            <div className="icons8-search-1-parent">
              <img
                className="icons8-search-1"
                alt=""
                src="/icons8search-1.svg"
              />
              <div className="div">Pencarian</div>
            </div>
            <div className="rectangle-parent" onClick={openFrame}>
              <div className="frame-child" />
              <div className="kelas">Kelas</div>
              <img
                className="icon-arrow-ios-forward2"
                alt=""
                src="/-icon-arrow-ios-forward2.svg"
              />
            </div>
            <div className="icon-plus-parent" onClick={openPENDATAANTAMBAH}>
              <img className="icon-plus" alt="" src="/-icon-plus.svg" />
              <div className="tambah">Tambah</div>
            </div>
          </div>
          <div className="hi-admin" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="hi-admin1">Hi, Admin</div>
          </div>
          <div className="tabel-data">
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
          <div className="tombol-tampilkan">
            <div className="div">{`Tampilkan `}</div>
            <div className="rectangle-parent64" onClick={openTombol10}>
              <div className="frame-item" />
              <div className="div12">10</div>
              <img
                className="icon-arrow-ios-forward2"
                alt=""
                src="/-icon-arrow-ios-forward3.svg"
              />
            </div>
            <div className="div">Data</div>
          </div>
          <div className="lingtar-pendataan-container">
            <span>{`Lingtar - `}</span>
            <span className="pendataan1">Pendataan</span>
          </div>
        </div>
        <div className="kotak-biru-data">
          <div className="logo-lingtar">
            <img className="asset-1-2" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-data-child" />
          <div className="frame-parent7">
            <div
              className="house-solid-2-parent-data"
              onClick={onFrameContainer35Click}
            >
              <img
                className="house-solid-2-icon-data"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda">Beranda</div>
            </div>
            <div className="icon-users-parent">
              <img className="icon-users" alt="" src="/-icon-users.svg" />
              <div className="beranda">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-data"
              onClick={onFrameContainer37Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda">Absensi</div>
            </div>
            <div className="icon-edit-parent" onClick={onFrameContainer38Click}>
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={onFrameContainer39Click}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian">Pengumuman</div>
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
      {isPENDATAANTAMBAHOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePENDATAANTAMBAH}
        >
          <PENDATAANTAMBAH onClose={closePENDATAANTAMBAH} />
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
      {isPOPUPTOMBOLHAPUSDATAOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPTOMBOLHAPUSDATA}
        >
          <POPUPTOMBOLHAPUSDATA onClose={closePOPUPTOMBOLHAPUSDATA} />
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

export default PENDATAAN;
