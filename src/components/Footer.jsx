import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['first-col']}>
        <p>Centro de Enseñanza Técnica Industrial</p>
      </div>
      <div className={styles['second-col']}>
        <p>Desarrollado por Equipo 1 6P</p>
      </div>
      <div className={styles['third-col']}>
        <p>Ética Profesional</p>
      </div>
    </div>
  )
}

export default Footer