import styles from "./progress.module.css"

const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Book Bazaar
      </h3>
      <div>
        ProgressBar
      </div>
      <div className={styles.values}>
        <p className={styles.value}>$2,500,000</p>
        <p className={styles.value}>+15%</p>
      </div>
    </div>
  )
}

export default ProgressBar