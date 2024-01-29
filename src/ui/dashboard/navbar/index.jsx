import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Dashboard</div>
        <div className={styles.search}>
          <Image src="/search-icon.svg" alt="" width={18} height={18} />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.calendar}>
          <div className={styles.date}>
            <Image
              src="/solar_calendar-linear.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>November 15, 2023</span>
          </div>
        </div>
        <div className={styles.rounded}>
          <Image src="/solar_bell-outline.svg" alt="" width={20} height={20} />
        </div>
        <div className={styles.profile}>
          <div className={styles.user}>
            <Image src="/user1.png" alt="" width={38} height={38} />
            <div className={styles.details}>
              <span className={styles.username}>Justin Bergson</span>
              <span className={styles.email}>justin@gmail.com</span>
            </div>
          </div>
          <Image src="/arrow-down.svg" alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
