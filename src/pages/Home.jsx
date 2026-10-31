import styles from './Home.module.css';
import { nav } from '../content/nav.js';

export default function Home() {
  return (
    <section className="content">
      <ul className={styles.nav}>
        {nav.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
}
