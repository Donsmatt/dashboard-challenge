import Image from "next/image";
import styles from "./order.module.css";

const orderData = [
  {
    id: Math.floor(Math.random() * 10),
    user: {
      img: "/user2.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Paid",
    isError: false,
  },
  {
    id: Math.floor(Math.random() * 10),
    user: {
      img: "/user3.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Refund",
    isError: true,
  },
  {
    id: Math.floor(Math.random() * 10),
    user: {
      img: "/user4.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Paid",
    isError: false,
  },
  {
    id: Math.floor(Math.random() * 10),
    user: {
      img: "/user5.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Refund",
    isError: true,
  },
  {
    id: Math.floor(Math.random() * 10),
    user: {
      img: "/user6.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Paid",
    isError: false,
  },
];

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Last Orders</h2>
        <div className={styles.expand}>See All</div>
      </div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <td>Name</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Status</td>
            <td>Invoice</td>
          </tr>
        </thead>
        <tbody className={styles.details}>
          {orderData.map((data) => (
            <tr key={data.id}>
              <td className={styles.user}>
                <Image
                  src={data.user.img}
                  className={styles.userImage}
                  alt=""
                  width={32}
                  height={32}
                />
                <span className={styles.username}>{data.user.name}</span>
              </td>
              <td className={styles.date}>{data.date}</td>
              <td className={styles.amount}>{data.amount}</td>
              <td
                className={`${styles.status} ${data.isError && styles.error}`}
              >
                {data.status}
              </td>
              <td className={styles.invoice}>
                <Image
                  src="/document-download.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span className={styles.invoiceText}>View</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
