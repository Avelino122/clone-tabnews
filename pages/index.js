import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="container">
        <header
          className="text-center py-5"
          style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
        >
          <h1 className="display-4">Thierry Avelino</h1>
          <p className="lead">
            DevOps e Administrador de Sistemas | Apaixonado por Tecnologia
          </p>
          <nav className="d-inline-block">
            <Link href="#sobre" className="btn btn-outline-light mx-2">
              Sobre Mim
            </Link>
            <Link href="#habilidades" className="btn btn-outline-light mx-2">
              Habilidades
            </Link>
            <Link href="#projetos" className="btn btn-outline-light mx-2">
              Projetos
            </Link>
          </nav>
        </header>

        <section
          id="sobre"
          className="my-5"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-primary">Sobre Mim</h2>
          <p>
            Olá! Sou Thierry Avelino, formado em Análise e Desenvolvimento de
            Sistemas pela UNIP e com um curso técnico em Redes de Computadores
            pela FIEB. Tenho sólidos conhecimentos de lógica e estou sempre
            buscando aprender e melhorar minhas habilidades.
          </p>
          <p>
            Como DevOps e Administrador de Sistemas, trabalho para trazer
            mudanças positivas e vejo os desafios de diferentes perspectivas.
            Estou comprometido em criar soluções que impactem positivamente a
            vida das pessoas.
          </p>
          <p>
            <strong>Email para contato:</strong>{" "}
            <a
              href="mailto:Thierry.daalio@gmail.com"
              style={{ color: "#1d3557" }}
            >
              Thierry.daalio@gmail.com
            </a>
          </p>
        </section>

        <section
          id="habilidades"
          className="my-5"
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-primary">Habilidades</h2>
          <ul className="list-group">
            <li className="list-group-item">
              AWS: EKS, ECS, ECR, CodeBuild, CodeCommit, CodePipeline, Lambda
            </li>
            <li className="list-group-item">Desenvolvimento em Python</li>
            <li className="list-group-item">SQL e JavaScript</li>
            <li className="list-group-item">
              Linux: ShellScript, Apache, Nginx
            </li>
            <li className="list-group-item">Terraform</li>
            <li className="list-group-item">Controle de versão com Git</li>
            <li className="list-group-item">Pipelines: CI/CD e Automação</li>
          </ul>
        </section>

        <section
          id="projetos"
          className="my-5"
          style={{
            backgroundColor: "#f1faee",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-primary">Projetos</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link
                href="https://github.com/Avelino122/clone-tabnews"
                className="text-decoration-none"
              >
                Projeto 1: Portfólio Pessoal
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="https://github.com/Avelino122/Terraform_Docker"
                className="text-decoration-none"
              >
                Projeto 2: Usando Terraform Para provisionar resource
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="https://github.com/Avelino122/linux-shell_script"
                className="text-decoration-none"
              >
                Projeto 3: Melhore seu terminal no linux com ZSH
              </Link>
            </li>
          </ul>
        </section>

        <footer
          className="text-center py-4"
          style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
        >
          <p>&copy; 2025 Thierry Avelino</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
