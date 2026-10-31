import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} ${styles.home}`}>
      <h1 className={styles.name}>ivan salcedo</h1>
    </header>
  );
}
