import Navbar from "@/ui/dashboard/navbar";
import styles from "@/ui/dashboard/dashboardLayout.module.css";

const DashboardLayout = ({ children, cards, chart, order, platform }) => {
  return (
    <div>
      <main className={styles.container}>
        <Navbar />
        {children}
        <div className={styles.grid}>
          {chart}
          {cards}
          {order}
          {platform}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
