import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Space, Select, Input } from 'antd';
import AdminData from "./Admin.json"
import { useTable } from "react-table";
import Frame from "../../components/Frame";
import PortalPopup from "../../components/PortalPopup";
import POPUPHIADMIN from "../../components/POPUPHIADMIN";
import Swal from "sweetalert2";
import Tombol10 from "../../components/Tombol10";
import "./PendataanPusat.css";

const PendataanPusat = () => {

const tampilData = [
    { value: "5", label: 5 },
    { value: "10", label: 10 },
    { value: "Semua", label: "Semua"}
  ]

  const data = useMemo(() => AdminData, []);
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "Nama Sekolah",
        accessor: "sekolah",
      },
      {
        Header: "Kode Sekolah",
        accessor: "kode",
      },
      {
        Header: "Admin",
        accessor: "admin",
      },
      {
        Header: "Kota",
        accessor: "kota",
      },
      {
        Header: "Aksi",
        Cell: ({ row }) => {
          console.log(row)
          return (
            <div className="frame-group-pendataanPusat">
              <b className="icons8-edit-data-parent-pendataanPusat" onClick={ubahStaffInformasi}>
              <img className="icons8-edit-data-pendataanPusat" alt="" src="/icons8edit.svg" />
                  <div className="ubah-data-pendataanPusat">Ubah</div>
                </b>
              <b className="icons8-trash-data-parent-pendataanPusat" onClick={openPOPUPTOMBOLHAPUSDATA}>
              <img className="icons8-edit-data-pendataanPusat" alt="" src="/icons8trash.svg" />
                  <div className="ubah-data-pendataanPusat">Hapus</div>
                </b>
            </div>
          )
          
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ], []);
  
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [pencarian,setPencarian] = useState('')
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);

  const tombolDelete = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-success'
    },
  })

  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openTambahAdmin = useCallback(() => {
    navigate('/Dashboard/TambahAdmin')
  }, [navigate]);

    const openHomePusatChange = useCallback(() => {
        navigate('/Dashboard/HomePusat')
    }, [navigate]);

    const openPendataanPusat = useCallback(() => {
        navigate("/Dashboard/PendataanPusat")
    }, [navigate])

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
  }, [tombolDelete]);

  const closeTombol10 = useCallback(() => {
    setTombol10Open(false);
  }, []);

  const ubahStaffInformasi = useCallback(() => {
    navigate('/Dashboard/UbahAdmin')
  }, [navigate]);

  const onFrameContainer35Click = useCallback(() => {
    navigate('/Dashboard/HomePusat')
  }, [navigate]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="pendataan-pendataanPusat">
        <div className="kotak-putih-pendataanPusat">
          <div className="tiga-tombol-pendataanPusat">
            <div>
            <div className="icons8-search-1-parent-absen-pendataanPusat">
            <Input
                className="icons8-search-1-parent-pendataanPusat"
                placeholder="Cari Staff"
                  value={pencarian}
                  onChange={handlePencarian}>
                </Input>
            </div>
            </div>
            <div className="icon-plus-parent-pendataanPusat" onClick={openTambahAdmin}>
              <img className="icon-plus-pendataanPusat" alt="" src="/-icon-plus.svg" />
              <div className="tambah-pendataanPusat">Tambah</div>
            </div>
          </div>
          <div className="hi-admin-pendataanPusat" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-pendataanPusat" alt="" src="/vector.svg" />
            <div className="hi-admin1-pendataanPusat">Hi, Admin</div>
          </div>
          <div className="tabel-pendataanPusat">
            <table className="table-pusat" {...getTableProps()}>
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
          <div className="tombol-tampilkan-pendataanPusat">
            <div className="div-pendataanPusat">{`Tampilkan `}</div>
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
            <span className="pendataan1-pendataanPusat">Pendataan</span>
          </div>
        </div>
        <div className="kotak-biru-pendataanPusat">
          <div className="logo-lingtar-pendataanPusat">
            <img className="asset-1-2-pendataanPusat" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-pendataanPusat"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-pendataanPusat-child" />
          <div className="frame-parent7-pendataanPusat">
            <div
              className="house-solid-2-parent-pendataanPusat"
              onClick={onFrameContainer35Click}
            >
              <img
                className="house-solid-2-icon-pendataanPusat"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda-pendataanPusat" onClick={openHomePusatChange}>Beranda</div>
            </div>
            <div className="icon-users-pendataanPusat-parent" onClick={openPendataanPusat}>
              <img className="icon-users-pendataanPusat" alt="" src="/-icon-users-oren.svg" />
              <div className="beranda-pendataanPusat">Pendataan</div>
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

export default PendataanPusat;
