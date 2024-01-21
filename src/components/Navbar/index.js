import shopIcon from '../../assets/shopping-icon.svg';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navImg} src={shopIcon} alt="shop-icon" />
      <h1 className={styles.navTitle}>List Belanjaan</h1>
    </nav>
  );
}

export default Navbar
