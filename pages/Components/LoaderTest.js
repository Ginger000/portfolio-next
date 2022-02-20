import React from 'react'
import { skipPartiallyEmittedExpressions } from 'typescript'
import styles from './LoaderTest.module.css'

const LoaderTest = () => {
  return (
    // <div className={styles.test}>LoaderTest</div>
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            LOADING
            <span className={styles.dot1}>.</span>
            <span className={styles.dot2}>.</span>
            <span className={styles.dot3}>.</span>
        </div>
    </div>
  )
}

export default LoaderTest