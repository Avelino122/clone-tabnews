import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    console.log("Enviando:", { nome, email });
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo à minha página de apresentação!
        </h1>

        <p className={styles.description}>
          Esta é uma página simples criada com React e Next.js
        </p>

        {/* Formulário para nome e e-mail */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}
