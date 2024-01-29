import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconBox}>
            <Image src="/box-tick.png" alt="" width={24} height={24} />
          </div>
          <Image src="/group-1.svg" alt="" width={104} height={32} className={styles.chart} />
        </div>
        <div className={styles.head}>
          <h3>Total Order</h3>
          <p>350</p>
        </div>
        <div className={styles.body}>
          <div className={`${styles.badge} ${styles.green}`}>
            <div className={styles.badgeImg}>
              <Image src="/rate1.svg" alt="" width={9} height={5} />
            </div>
            <span className={styles.badgeText}>23,5%</span>
          </div>
          <span className={styles.bodyText}>vs. previous month</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
