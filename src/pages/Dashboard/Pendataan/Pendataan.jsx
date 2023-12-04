import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import fakeData from "../Mock.json";
import React from 'react';
import { Button, Dropdown, Space, Select, Input } from 'antd';
import { useTable } from "react-table";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import PENDATAANTAMBAH from "../../../components/PENDATAANTAMBAH";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import Swal from "sweetalert2";
import Tombol10 from "../../../components/Tombol10";
import "./Pendataan.css";

const PENDATAAN = () => {

  const tampilData = [
    { value: "5", label: 5 },
    { value: "10", label: 10 },
    { value: "Semua", label: "Semua"}
  ]

  const pilihKelas = [
    { value: "A", label: "Kelas A" },
    { value: "B", label: "Kelas B" },
    { value: "C", label: "Kelas C" },
    { value: "D", label: "Kelas D" }
  ]
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
  
    const tombolDelete = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-success'
      },
    })
  
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [pencarian,setPencarian] = useState('')
  const [isPENDATAANTAMBAHOpen, setPENDATAANTAMBAHOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);

  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }

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

  const openPOPUPTOMBOLHAPUSDATA = useCallback(() => {
    tombolDelete.fire({
      className: 'swalButton',
      title: 'Apakah anda yakin ingin menghapus data?',
      text: "Data yang terhapus,tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E21818',
      confirmButtonText: 'Hapus',
      cancelButtonColor: '#3EC70B',
      cancelButtonText: 'Batalkan',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        tombolDelete.fire(
          'Deleted!',
          'Data berhasil di hapus.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        tombolDelete.fire(
          'Cancelled',
          'Data masih aman :>',
          'error'
        )
      }
    })
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
            <div>
            <div className="icons8-search-1-parent-absen">
            <Input
                className="icons8-search-1-parent"
                placeholder="Cari Staff"
                  value={pencarian}
                  onChange={handlePencarian}>
                </Input>
            </div>
            </div>
            <div className="rectangle-parent-data">
              <Space wrap>
              <Select
                className="pilihKelas-wrapper"
                options={pilihKelas}
                placeholder="Pilih kelas"
                onChange={(values) => console.log(values)} />
              </Space>
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
            <Space wrap>
              <Select
                className=""
                options={tampilData}
                placeholder="Semua"
                onChange={(values) => console.log(values)} />
              </Space>
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
