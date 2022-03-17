import React from 'react'
import styles from './Input.module.css';

export default function Input({label, type, name, value, onChange, error, onBlur}) {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label} type={type} >{label}</label>
        <input className={styles.input} type={type} id={name} value={value} onChange={onChange} onBlur={onBlur}/>
        {error && <p className={styles.error}>{error}</p>}
        
    </div>
    
  )
}
