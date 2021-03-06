import React, {useEffect} from 'react'
import styles from './Loader.module.css'
const Loader = ({setLoading}) => {
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
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

export default Loader