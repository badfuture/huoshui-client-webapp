import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/PageNotFound.scss'

const PageNotFound = () => (
  <div className={styles.notFound}>
    <h1>404</h1>
    <h2>页面被吞了!</h2>
    <p>
      <Link to="/">回到主页</Link>
    </p>
  </div>
)

export default PageNotFound
