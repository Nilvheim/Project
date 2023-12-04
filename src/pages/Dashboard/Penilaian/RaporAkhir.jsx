import { useState, useCallback, useMemo } from "react";
import Frame1 from "../../../components/Frame1";
import PortalPopup from "../../../components/PortalPopup";
import POPUPHIADMIN from "../../../components/POPUPHIADMIN";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { Space, Select, Input } from "antd";    
import nilaiRapot from "./Rapor.json"
import Frame from "../../../components/Frame";
import "./RaporAkhir.css";

const RaporAkhir = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isPOPUPHIADMINOpen, setPOPUPHIADMINOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

  const [pencarian, setPencarian] = useState()
  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }
 
  const pilihKelas = [
    { value: 1, label: "Semester 1" },
    { value: 2, label: "Semester 2" }
  ]

  const tampilData = [
    { value: "5", label: 5 },
    { value: "10", label: 10 },
    { value: "Semua", label: "Semua"}
  ]

  const navigate = useNavigate('');
  const data = useMemo(() => nilaiRapot, []);
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id"
      },
      {
        Header: "Nama",
        accessor: "nama"
      },
      {
        Header: "NIS",
        accessor: "nis",
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
              <b className="icons8-edit-data-parent" onClick={""}>
                <img className="icons8-edit-data" alt="" src="/icons8edit.svg" />
                <div className="ubah-data">Lihat</div>
              </b>
            </div>
          )
          
        }
      }
    ], []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onVectorIcon1Click = useCallback(() => {
    navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const openPOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(true);
  }, []);

  const closePOPUPHIADMIN = useCallback(() => {
    setPOPUPHIADMINOpen(false);
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    // Please sync "RAPOR SEMESTER 1 KELAS A" to the project
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    navigate('/Dashboard/Home')
  }, [navigate]);

  const onFrameContainer16Click = useCallback(() => {
   navigate('/Dashboard/Pendataan')
  }, [navigate]);

  const onFrameContainer17Click = useCallback(() => {
   navigate('/Dashboard/Absensi')
  }, [navigate]);

   const onFrameContainer18Click = useCallback(() => {
   navigate('/Dashboard/Penilaian')
  }, [navigate]);

  const onFrameContainer19Click = useCallback(() => {
   navigate('/Dashboard/Pengumuman')
  }, [navigate]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="rapor-akhir-kelas-a">
        <div className="kotak-putih-raporAkhir">
          <div className="ganti-halaman-raporAkhir">
            <img
              className="icon-arrow-ios-forward-raporAkhir"
              alt=""
              src="/-icon-arrow-ios-forward.svg"
            />
            <div className="wrapper-raporAkhir">
              <div className="div-raporAkhir">1</div>
            </div>
            <img
              className="icon-arrow-ios-forward-raporAkhir"
              alt=""
              src="/-icon-arrow-ios-forward1.svg"
            />
          </div>
          <div className="dua-tombol-raporAkhir">
            <div className="icons8-search-1-parent-raporAkhir">
              <div className="div-raporAkhir">
              <Input
                className="icons8-search-1-parent"
                placeholder="Cari Staff"
                  value={pencarian}
                  onChange={handlePencarian}>
                </Input>
              </div>
            </div>
            <div className="rectangle-parent-raporAkhir">
              <div className="semester-1-raporAkhir">
              <Space wrap>
              <Select
              className="pilihKelas-wrapper"
              options={pilihKelas}
              placeholder="Pilih kelas"
              onChange={(values) => console.log(values)}>
              
              </Select>
             </Space>
              </div>
            </div>
          </div>
          <div className="vector-parent-raporAkhir">
            <img
              className="vector-icon-raporAkhir"
              alt=""
              src="/undefined28.png"
              onClick={onVectorIcon1Click}
            />
            <div className="lingtar-rapot-container-raporAkhir">
              <span>{`Lingtar - `}</span>
              <span className="rapot-akhir-kelas-raporAkhir">Rapot Akhir Kelas A</span>
            </div>
          </div>
          <div className="hi-admin-raporAkhir" onClick={openPOPUPHIADMIN}>
            <img className="vector-icon1-raporAkhir" alt="" src="/vector.svg" />
            <div className="hi-admin1-raporAkhir">Hi, Admin</div>
          </div>
          <div className="tabel-absen-semua-sidebar-raporAkhir">
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
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          
          </div>
          <div className="menampilkan-10-data-raporAkhir"></div>
          <div className="tombol-tampilkan-raporAkhir">
            <div className="div-raporAkhir">{`Tampilkan `}</div>
            <Space wrap>
              <Select
                className=""
                options={tampilData}
                placeholder="Semua"
                onChange={(values) => console.log(values)} />
              </Space>
            <div className="div-raporAkhir">Data</div>
          </div>
        </div>
        <div className="kotak-biru-raporAkhir">
          <div className="logo-lingtar-raporAkhir">
            <img className="asset-1-3-raporAkhir" alt="" src="/asset-1-3@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar-raporAkhir"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child-raporAkhir" />
          <div className="frame-parent-raporAkhir">
            <div
              className="house-solid-2-parent-raporAkhir"
              onClick={onFrameContainer15Click}
            >
              <img
                className="house-solid-2-icon-raporAkhir"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="beranda-raporAkhir">Beranda</div>
            </div>
            <div
              className="house-solid-2-parent-raporAkhir"
              onClick={onFrameContainer16Click}
            >
              <img className="icon-users-raporAkhir" alt="" src="/-icon-users.svg" />
              <div className="beranda-raporAkhir">Pendataan</div>
            </div>
            <div
              className="house-solid-2-parent-raporAkhir"
              onClick={onFrameContainer17Click}
            >
              <img
                className="icon-alternate-calendar-raporAkhir"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="beranda-raporAkhir">Absensi</div>
            </div>
            <div className="icon-edit-parent-raporAkhir">
              <img
                className="icon-alternate-calendar-raporAkhir"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian-raporAkhir" onClick={onFrameContainer18Click}>Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent-raporAkhir"
              onClick={onFrameContainer19Click}
            >
              <img
                className="icon-alternate-calendar-raporAkhir"
                alt=""
                src="/-icon-bullhorn.svg"
              />
              <div className="penilaian-raporAkhir">Pengumuman</div>
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
          <Frame1 onClose={closeFrame} />
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
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default RaporAkhir;
