import React from "react";
import { FaTH, FaUsers } from "react-icons/fa";

const Sidebar = () => {
    const menuItem = [
        {
            path: "/Dashboard/Home",
            name: "Beranda",
            icon: ""
        },
        {
            path: "/Dashboard/Pendataan",
            name: "Pendataan",
            icon: ""
        },
        {
            path: "/Dashboard/Absensi",
            name: "Absensi",
            icon: ""
        },
        {
            path: "/Dashboard/Penilaian",
            name: "Penilaian",
            icon: ""
        },
        {
            path: "/Dashboard/Pengumuman",
            name: "Pengumuman",
            icon: ""
        }
    ]

    return (
        <div>
            <h1>This is side bar</h1>
        </div>
    );
};

export default Sidebar;