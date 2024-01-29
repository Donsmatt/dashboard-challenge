"use client";

import styles from "./chart.module.css";
import Image from "next/image"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 7000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 3000 },
  { month: "Apr", value: 28000 },
  { month: "May", value: 9000 },
  { month: "Jun", value: 45000 },
  { month: "Jul", value: 9000 },
  { month: "Aug", value: 21000 },
  { month: "Sep", value: 32000 },
  { month: "Oct", value: 5000 },
  { month: "Nov", value: 30000 },
  { month: "Dec", value: 25000 },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sales Trends</h2>
        <div className={styles.expand}>
          <span>Sort by:</span>
          <div className={styles.selectContainer}>
            <button className={styles.button}>
              Weekly
            </button>
            <Image src="/arrow-down.svg" alt="" width={20} height={20} />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={150} height={40} data={data}>
          <YAxis />
          <XAxis dataKey="month" />
          <CartesianGrid />
          <Tooltip />
          <Bar type="monotone" dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div>
//         <p>{label}</p>
//         <p>
//           Value:
//           <span>${payload.labe}</span>
//         </p>
//       </div>
//     );
//   }
// };

export default Chart;
