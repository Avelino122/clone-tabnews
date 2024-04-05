import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo à minha página de apresentação!
        </h1>

        <p className={styles.description}>
          Esta é uma página simples criada com React e Next.js
        </p>
      </main>
    </div>
  );
}
