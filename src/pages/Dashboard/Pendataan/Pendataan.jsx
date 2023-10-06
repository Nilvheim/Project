import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import fakeData from "../Mock.json";
import React from 'react';
import TambahKelas from "./TambahKelas";
import { Button, Dropdown, Space } from 'antd';
import { useTable } from "react-table";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import PENDATAANTAMBAH from "../../../components/PENDATAANTAMBAH";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import POPUPTOMBOLHAPUSDATA from "../../../components/POPUPTOMBOLHAPUSDATA";
import Tombol10 from "../../../components/Tombol10";
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
        Cell: ({ row }) => {
          console.log(row)
          return (
            <div className="frame-group-data">
              <b className="icons8-edit-data-parent" onClick={ubahStaffInformasi}>
              <img className="icons8-edit-data" alt="" src="/icons8edit.svg" />
                  <div className="ubah-data">Ubah</div>
                </b>
              <b className="icons8-trash-data-parent" onClick={openPOPUPTOMBOLHAPUSDATA}>
              <img className="icons8-edit-data" alt="" src="/icons8trash.svg" />
                  <div className="ubah-data">Hapus</div>
                </b>
            </div>
          )
          
        }
      }
    ], []);
  
  const navigate = useNavigate();
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

  const openPOPUPTOMBOLHAPUSDATA = useCallback(() => {
    setPOPUPTOMBOLHAPUSDATAOpen(true);
  }, []);

  const openTombol10 = useCallback(() => {
    setTombol10Open(true);
  }, []);

  const closeTombol10 = useCallback(() => {
    setTombol10Open(false);
  }, []);

  const ubahStaffInformasi = useCallback(() => {
    navigate('/Dashboard/UbahStaff')
  }, [navigate]);

  const onFrameContainer35Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer37Click = useCallback(() => {
    navigate('/Dashboard/Absensi')
  }, []);

  const onFrameContainer38Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer39Click = useCallback(() => {
    navigate('/Dashboard/Pengumuman')
  }, [navigate]);

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
              <div className="div-data">Pencarian</div>
            </div>
            <div className="rectangle-parent-data" onClick={openFrame}>
              <div className="frame-child-data" />
              <b className="kelas-data">Kelas</b>
              <img
                className="icon-arrow-ios-forward2-data"
                alt=""
                src="/-icon-arrow-ios-forward2.svg"
              />
            </div>
            <div className="icon-plus-parent-data" onClick={openPENDATAANTAMBAH}>
              <img className="icon-plus-data" alt="" src="/-icon-plus.svg" />
              <div className="tambah-data">Tambah</div>
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
                src="/housesolid-putih.svg"
              />
              <div className="beranda">Beranda</div>
            </div>
            <div className="icon-users-data-parent">
              <img className="icon-users-data" alt="" src="/-icon-users-oren.svg" />
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
              <div className="penilaian-data">Penilaian</div>
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
              <div className="penilaian-data">Pengumuman</div>
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

console.log(PENDATAAN.row);
export default PENDATAAN;
