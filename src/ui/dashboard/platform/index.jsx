import styles from "./platform.module.css"
import ProgressBar from "./progress"

const Platform = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Platform</h2>
        <div className={styles.expand}>See All</div>
      </div>
      <div className={styles.body}>
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
    </div>
  )
}

export default Platform