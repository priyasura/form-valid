import Validate from './Validate'
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.page}><h1>Signin Page</h1>
    <Validate></Validate>
    </div>
  )
}
