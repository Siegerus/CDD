import { Link } from "react-router-dom"
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <Link to=".">Clock</Link>
        <Link to="drops">Drops</Link>
        <Link to="navmenu">Navmenu</Link>
    </nav>
  )
}

export default Nav