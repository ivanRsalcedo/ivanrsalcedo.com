import { nav } from '../content/nav.js';

export default function Home() {
  return (
    <section>
      <ul>
        {nav.map((nav) => (
          <li key={nav.id}>{nav.label}</li>
        ))}
      </ul>
    </section>
  );
}
