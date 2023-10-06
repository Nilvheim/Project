import React from "react";

const Sidebar = () => {
    const menuItem = [
        {
            path: "/Dashboard/Home",
            name: "",
            icon: ""
        },
        {
            path: "/Dashboard/Pendataan",
            name: "",
            icon: ""
        },
        {
            path: "/Dashboard/Absensi",
            name: "",
            icon: ""
        },
        {
            path: "/Dashboard/Penilaian",
            name: "",
            icon: ""
        },
        {
            path: "/Dashboard/Pengumuman",
            name: "",
            icon: ""
        }
    ]

    return (
        <div>
             <div className="kotak-biru">
          <div className="logo-lingtar">
            <img className="asset-1-2" alt="" src="/asset-1-2@2x.png" />
          </div>
          <img
            className="icon-buka-tutup-sidebar"
            alt=""
            src="/icon-buka-tutup-sidebar.svg"
          />
          <div className="kotak-biru-child" />
          <div className="frame-container">
            <div className="house-solid-2-parent-home">
              <img
                className="house-solid-2-icon-home"
                alt=""
                src="/housesolid-2.svg"
              />
              <div className="pendataan-home">Beranda</div>
            </div>
            <div
              className="icon-users-parent-home"
              onClick={""}
            >
              <img className="icon-users-home" alt="" src="/-icon-users.svg" />
              <div className="pendataan-home">Pendataan</div>
            </div>
            <div
              className="icon-users-parent-home"
              onClick={""}
            >
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-alternate-calendar.svg"
              />
              <div className="pendataan-home">Absensi</div>
            </div>
            <div className="icon-edit-parent" onClick={""}>
              <img
                className="icon-alternate-calendar"
                alt=""
                src="/-icon-edit.svg"
              />
              <div className="penilaian">Penilaian</div>
            </div>
            <div
              className="icon-bullhorn-parent"
              onClick={""}
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
    );
};

export default Sidebar;