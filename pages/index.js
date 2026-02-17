import { useState } from "react";

function Header() {
  return (
    <header className="header">
      <h2>MeuSite</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

function Card({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Descrição de teste.</p>
    </div>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main className="hero">
        <h1>Teste de Deploy 🚀</h1>
        <p>Next 13 + Pages Router</p>

        <button onClick={() => setCount(count + 1)}>Clique aqui</button>

        <p>Cliques: {count}</p>
      </main>

      <section className="cards">
        <Card title="Projeto 1" />
        <Card title="Projeto 2" />
        <Card title="Projeto 3" />
      </section>

      <footer className="footer">© 2026 - MeuSite</footer>
    </>
  );
}
