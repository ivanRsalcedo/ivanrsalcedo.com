import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}
