import React from 'react'
import styles from './header.module.css'
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>Aman</div>
      <button className={styles.btn}>Click Me</button>
    </div>
  )
}

export default Header
