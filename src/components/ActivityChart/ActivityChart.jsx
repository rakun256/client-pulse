import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
  } from 'recharts'
  import styles from './ActivityChart.module.css'
  
  export default function ActivityChart({ data }) {
    return (
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Günlük Aktivite</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="date" stroke="var(--color-subtext)" />
            <YAxis stroke="var(--color-subtext)" />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="var(--color-primary)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
  