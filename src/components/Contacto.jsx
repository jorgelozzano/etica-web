import React from 'react'
import styles from '../styles/contacto.module.css'

const Contacto = () => {
  return (
    <div className={styles['contact-wrapper']}>
      
        <form className={styles['contact-form']}>
        <h1>Contacto de quejas</h1>
            <input type="text" className={styles['subject']} name="" id="subject" placeholder='Subject'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <select name="" id="">
                <option value="">Adm</option>
                <option value="">vrf</option>
                <option value="">vrfn</option>
            </select>
            <input className={styles['acusado']} type="text" placeholder='Acusado' disabled={false} />
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto