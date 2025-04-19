import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/dashboard" className={styles.link}>← Go back to Dashboard</Link>
    </div>
  )
}
