import { useState } from "react";
import "./Grafik.css";
import UserData from "../Absensi.json"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Grafik() {
const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.keterangan),
    datasets: [
    {
        label: "Users Gained",
        data: UserData.map((data) => data.jumlah),
        backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        },
        ],
    });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return (
        
    <div className="pop-up-grafik-absen">
        <div className="pieChart">
            <div style={{ width: 300 }}>
            <Pie chartData={userData} />
            </div>
        </div>
    </div>

    
  );
}

export default Grafik;
