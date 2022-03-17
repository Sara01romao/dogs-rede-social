import React from 'react'
import styles from './Input.module.css';

export default function Input({label, type, name, value, onChange}) {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label} type={type} >{label}</label>
        <input className={styles.input} type={type} id={name} value={value} Onchange={onChange}/>
        <p className={styles.error}>Error</p>
        
    </div>
    
  )
}
