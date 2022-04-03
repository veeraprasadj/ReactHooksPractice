import React from 'react'
import './styles/ExternalStyle.css'
import styles from './styles/ExternalStyle.module.css'

//inline syling
const headerInlineStyle = {
    color: 'red'
}

export default function StyleComponent() {
  return (
    <div >
        <h1 style={headerInlineStyle}>StyleComponent</h1>
        <h1 className='primary'>External style</h1>
        <h1 className={styles.success}>Module style</h1>
        </div>
  )
}
