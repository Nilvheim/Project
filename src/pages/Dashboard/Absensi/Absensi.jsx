import { useState, useCallback, useMemo } from "react";
import {useNavigate} from "react-router-dom";
import Frame from "../../../components/Frame";
import Swal from "sweetalert2"
import PortalPopup from "../../../components/PortalPopup";
import { DatePicker } from 'antd';
import { Space, Select, Input } from 'antd';
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import Tombol10 from "../../../components/Tombol10";
import { useTable } from "react-table";
import fakeData from "../Absensi.json";
import Grafik from "../../../components/Grafik";
import "./Absensi.css";



const ABSENSI = () => {
  const pilihKelas = [
    { value: "A", label: "Kelas A" },
    { value: "B", label: "Kelas B" },
    { value: "C", label: "Kelas C" },
    { value: "D", label: "Kelas D" }
  ]

  const tampilData = [
    { value: "5", label: 5 },
    { value: "10", label: 10 },
    { value: "Semua", label: "Semua"}
  ]


  const Calendar = () => {
  }
  const [pencarian, setPencarian] = useState()
  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }
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
              <b className="icons8-edit-data-parent" onClick={onUbahButton}>
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
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isGrafikOpen, setGrafikOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isPOPUPTOMBOLHAPUSABSENSIOpen, setPOPUPTOMBOLHAPUSABSENSIOpen] = useState(false);
  const [isTombol10Open, setTombol10Open] = useState(false);

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
    
  const tombolDelete = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-success'
    },
  })

  const toGrafik = useCallback(() => {
    navigate('/Dashboard/GrafikAbsensi')
  }, [navigate]);

  const onUbahButton = useCallback(() => {
    navigate('/Dashboard/UbahAbsensi')
  }, [navigate]);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
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

  const closePOPUPTOMBOLHAPUSABSENSI = useCallback(() => {
    setPOPUPTOMBOLHAPUSABSENSIOpen(false);
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
      <div className="absensi-absensi">
        <div className="kotak-putih-absensi">
          <div className="lingtar-absensi-container-absensi">
            <span>{`Lingtar - `}</span>
            <span className="absensi1-absensi">Absensi</span>
          </div>
          <div className="tiga-tombol-absensi">
            <div className="icons8-search-1-parent-absensi">
            <Input
                className="icons8-search-1-parent"
                placeholder="Cari Staff"
                  value={pencarian}
                  onChange={handlePencarian}>
                </Input>
            </div>
            <div className="rectangle-parent-absensi">
              <Space wrap>
              <Select
              className="pilihKelas-wrapper"
              options={pilihKelas}
              placeholder="Pilih kelas"
              onChange={(values) => console.log(values)}>
              </Select>
             </Space>
            </div>
            <div className="Calendar">
              <DatePicker placement={Calendar} />
            </div>

            <div className="icon-cog-parent-absensi" onClick={toGrafik}>
              <img
                className="icon-alternate-calendar-absensi"
                alt=""
                src="/-icon-cog.svg"
              />
              <div className="tanggal-absensi">
              </div>
            </div>
            
          </div>
          <div className="hi-admin-absensi" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon-absensi" alt="" src="/vector.svg" />
            <div className="hi-admin1-absensi">Hi, Admin</div>
          </div>
          <div className="tabel-absen-semua-sidebar-absensi">
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
          <div className="tombol-tampilkan-absensi">
            <div className="pencarian-absensi">{`Tampilkan `}</div>
              <Space wrap>
              <Select
                className=""
                options={tampilData}
                placeholder="Semua"
                onChange={(values) => console.log(values)} />
              </Space>
            <div className="pencarian-absensi">Data</div>
          </div>
        </div>
        <div className="kotak-biru-absensi">
          <div className="logo-lingtar-absensi">
            <img className="asset-1-2-absensi" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-absensi"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-absensi" />
          <div className="frame-parent7-absensi">
            <div
              className="house-solid-2-parent-absensi"
              onClick={onFrameContainer36Click}
            >
              <img
                className="house-solid-2-icon-absensi"
                alt=""
                src="/housesolid-putih.svg"
              />
              <div className="beranda">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-absensi"
              onClick={onFrameContainer37Click}
            >
              <img className="icon-users-absensi" alt="" src="/-icon-users.svg" />
              <div className="beranda-absensi">Pendataan</div>
            </div>
            <div className="icon-alternate-calendar-group-absensi">
              <img
                className="icon-edit-absensi"
                alt=""
                src="/icon-calendar-oren.svg"
              />
              <div className="beranda-absensi">Absensi</div>
            </div>
            <div
              className="icon-edit-parent-absensi"
              onClick={onFrameContainer39Click}
            >
              <img className="icon-edit-absensi" alt="" src="/-icon-edit.svg" />
              <div className="penilaian-absensi">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-absensi"
              onClick={onFrameContainer40Click}
            >
              <img
                className="icon-edit-absensi"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-absensi">Pengumuman</div>
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
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >

        <Calendar onClose={closeFrame} />
        </PortalPopup>
      )}
      {isGrafikOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGrafik}
        >
          <Grafik onClose={closeGrafik} />
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

export default ABSENSI;
