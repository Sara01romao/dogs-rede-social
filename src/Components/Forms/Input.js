import React from 'react'
import styles from './Input.module.css';

export default function Input({label, type, name}) {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input className={styles.input} type={type} id={name} />
        <p className={styles.error}>Error</p>
        
    </div>
    
  )
}
