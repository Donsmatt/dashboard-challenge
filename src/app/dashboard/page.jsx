import Chart from "@/ui/dashboard/chart";
import Order from "@/ui/dashboard/order";
import Card from "@/ui/dashboard/card";
import Platform from "@/ui/dashboard/platform";
import styles from "@/ui/dashboard/dashboard.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Chart />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.cards}>
          <Card />
          <Card />
        </div>
        <div className={styles.cards}>
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <Order />
      </div>
      <div>
        <Platform />
      </div>
    </div>
  );
};

export default DashboardPage;
