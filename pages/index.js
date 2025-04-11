import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  User,
  Terminal,
  Server,
  Cpu,
  Cloud,
  Database,
  Code,
  GitBranch,
  BarChart,
  Settings,
} from "lucide-react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Dados para as seções
  const skillsData = [
    {
      icon: <Cloud size={24} />,
      title: "AWS",
      items: [
        "EKS",
        "ECS",
        "ECR",
        "CodeBuild",
        "CodeCommit",
        "CodePipeline",
        "Lambda",
      ],
    },
    {
      icon: <Code size={24} />,
      title: "Desenvolvimento",
      items: ["Python", "JavaScript", "SQL", "React", "Node.js"],
    },
    {
      icon: <Database size={24} />,
      title: "Banco de Dados",
      items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
    },
    {
      icon: <Server size={24} />,
      title: "Infraestrutura",
      items: ["Linux", "Apache", "Nginx", "Kubernetes"],
    },
    {
      icon: <Terminal size={24} />,
      title: "Automação",
      items: ["ShellScript", "Terraform", "Ansible", "CloudFormation"],
    },
    {
      icon: <GitBranch size={24} />,
      title: "Controle de Código",
      items: ["Git", "GitHub", "GitLab", "BitBucket"],
    },
    {
      icon: <BarChart size={24} />,
      title: "Monitoramento",
      items: ["CloudWatch", "Grafana", "Prometheus", "ELK Stack"],
    },
    {
      icon: <Settings size={24} />,
      title: "DevOps",
      items: ["CI/CD", "Jenkins", "Docker", "GitOps"],
    },
  ];

  const projetos = [
    {
      title: "Portfólio Pessoal",
      description:
        "Criação do meu portfólio profissional usando React e Tailwind CSS para mostrar meus projetos e habilidades.",
      icon: <Code size={24} />,
      tags: ["React", "TailwindCSS", "JavaScript"],
      repoUrl: "https://github.com/Avelino122/clone-tabnews",
      demoUrl: "https://thierrys.com.br",
    },
    {
      title: "Terraform para Docker",
      description:
        "Automação de infraestrutura usando Terraform para provisionar recursos Docker de forma eficiente e padronizada.",
      icon: <Cloud size={24} />,
      tags: ["Terraform", "Docker", "Infrastructure as Code"],
      repoUrl: "https://github.com/Avelino122/Terraform_Docker",
    },
    {
      title: "Terminal Linux com ZSH",
      description:
        "Melhorias para o terminal Linux usando ZSH, com configurações personalizadas para aumentar a produtividade.",
      icon: <Terminal size={24} />,
      tags: ["Linux", "ZSH", "Shell Script"],
      repoUrl: "https://github.com/Avelino122/linux-shell_script",
    },
    {
      title: "AWS Pipeline com Terraform",
      description:
        "Implementação de pipeline de CI/CD na AWS usando Terraform para automação de deploy.",
      icon: <Cloud size={24} />,
      tags: ["AWS", "Terraform", "CI/CD", "DevOps"],
      repoUrl: "https://github.com/Avelino122",
    },
  ];

  // Componente SkillCard
  const SkillCard = ({ icon, title, items }) => (
    <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="text-tech-blue mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-tech-blue">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-tech-red rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  // Componente ProjectCard
  const ProjectCard = ({
    title,
    description,
    icon,
    tags,
    repoUrl,
    demoUrl,
  }) => (
    <div className="project-card bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-3 text-tech-blue">{icon}</div>
            <h3 className="text-lg font-semibold text-tech-blue">{title}</h3>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-5">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-tech-blue hover:text-tech-lightBlue transition-colors"
          >
            <Github size={16} className="mr-1" />
            Repositório
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-tech-blue hover:text-tech-lightBlue transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Head>
        <title>Thierry Avelino - DevOps & Administrador de Sistemas</title>
        <meta
          name="description"
          content="Portfólio de Thierry Avelino - DevOps e Administrador de Sistemas especializado em AWS, Terraform e automatização de infraestrutura."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
          isScrolled
            ? "bg-tech-blue/95 shadow-md backdrop-blur-sm py-3"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-tech-offWhite font-bold text-xl">
              T.Avelino
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="nav-link"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="nav-link"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="nav-link"
            >
              Projetos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Avelino122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-offWhite hover:text-tech-red transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-offWhite hover:text-tech-red transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Thierry.daalio@gmail.com"
              className="text-tech-offWhite hover:text-tech-red transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-tech-offWhite z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu */}
          <div
            className={`fixed inset-0 bg-tech-blue/95 z-40 transform transition-transform duration-300 flex flex-col justify-center items-center md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col space-y-8 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-tech-offWhite text-2xl font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-tech-offWhite text-2xl font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-tech-offWhite text-2xl font-medium"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-tech-offWhite text-2xl font-medium"
              >
                Projetos
              </button>
            </div>

            <div className="flex items-center space-x-6 mt-12">
              <a
                href="https://github.com/Avelino122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-offWhite hover:text-tech-red transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-offWhite hover:text-tech-red transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:Thierry.daalio@gmail.com"
                className="text-tech-offWhite hover:text-tech-red transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {/* Grid background pattern */}
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMTJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJWNDBoMnY0em0wIDZoLTJWNDZoMnY0em0tNi0xMmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMlY1MmgydjR6bTAtMjRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMzZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgNDJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgNDhoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-tech-offWhite mb-4 opacity-0 animate-fade-in">
            Thierry Avelino
          </h1>
          <h2 className="text-xl md:text-2xl text-tech-skyBlue mb-8 opacity-0 animate-fade-in animate-delay-200">
            DevOps & Administrador de Sistemas
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-tech-offWhite/80 mb-10 opacity-0 animate-fade-in animate-delay-300">
            Transformando infraestrutura em código e automatizando processos
            para criar soluções tecnológicas eficientes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in animate-delay-400">
            <button
              onClick={() => scrollToSection("projetos")}
              className="px-6 py-3 bg-tech-red text-white rounded-full font-medium hover:bg-tech-red/90 transition-all"
            >
              Ver Projetos
            </button>
            <a
              href="mailto:Thierry.daalio@gmail.com"
              className="px-6 py-3 bg-transparent border border-tech-offWhite text-tech-offWhite rounded-full font-medium hover:bg-tech-offWhite/10 transition-all"
            >
              Contato
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("sobre")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-tech-offWhite opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-tech-blue to-tech-lightBlue p-1">
                  <div className="bg-white rounded-xl p-5">
                    <div className="flex items-center mb-4">
                      <User className="text-tech-blue mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-tech-blue">
                        Perfil Profissional
                      </h3>
                    </div>
                    <p className="mb-4">
                      Formado em{" "}
                      <span className="font-medium">
                        Análise e Desenvolvimento de Sistemas
                      </span>{" "}
                      pela UNIP e com curso técnico em{" "}
                      <span className="font-medium">Redes de Computadores</span>{" "}
                      pela FIEB.
                    </p>
                    <p>
                      Como DevOps e Administrador de Sistemas, trabalho para
                      trazer mudanças positivas e vejo os desafios de diferentes
                      perspectivas. Estou comprometido em criar soluções que
                      impactem positivamente a vida das pessoas.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 w-24 h-24 bg-tech-skyBlue rounded-full opacity-20 z-0"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-tech-red rounded-full opacity-20 z-0"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-tech-blue mb-6 relative inline-block">
                Sobre Mim
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-tech-red"></span>
              </h2>

              <p className="text-gray-700 mb-6">
                Olá! Sou{" "}
                <span className="font-semibold text-tech-blue">
                  Thierry Avelino
                </span>
                , especialista em DevOps e Administração de Sistemas. Tenho
                sólidos conhecimentos de lógica e estou sempre buscando aprender
                e melhorar minhas habilidades.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Terminal className="text-tech-blue mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-tech-blue">
                      Desenvolvimento
                    </h4>
                    <p className="text-sm text-gray-600">
                      Python, SQL, JavaScript
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Server className="text-tech-blue mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-tech-blue">
                      Infraestrutura
                    </h4>
                    <p className="text-sm text-gray-600">
                      AWS, Linux, Terraform
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Cpu className="text-tech-blue mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-tech-blue">Automação</h4>
                    <p className="text-sm text-gray-600">CI/CD, ShellScript</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-tech-blue mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-tech-blue">Contato</h4>
                    <a
                      href="mailto:Thierry.daalio@gmail.com"
                      className="text-sm text-tech-lightBlue hover:underline"
                    >
                      Thierry.daalio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tech-blue mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinando conhecimentos em infraestrutura, desenvolvimento e
              automação para construir soluções tecnológicas eficientes e
              escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                items={skill.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="section-padding gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tech-offWhite mb-4">
              Meus Projetos
            </h2>
            <p className="text-tech-offWhite/80 max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi, demonstrando minhas
              habilidades em diferentes tecnologias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projetos.map((projeto, index) => (
              <ProjectCard
                key={index}
                title={projeto.title}
                description={projeto.description}
                icon={projeto.icon}
                tags={projeto.tags}
                repoUrl={projeto.repoUrl}
                demoUrl={projeto.demoUrl}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Avelino122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-tech-blue/30 hover:bg-tech-blue/40 text-tech-offWhite rounded-full font-medium border border-tech-skyBlue/30 transition-all"
            >
              <Github size={20} className="mr-2" />
              Ver mais no GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-blue text-tech-offWhite py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Thierry Avelino</h3>
              <p className="text-tech-offWhite/70">
                DevOps & Administrador de Sistemas
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/Avelino122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tech-offWhite/70 hover:text-tech-red transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tech-offWhite/70 hover:text-tech-red transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:Thierry.daalio@gmail.com"
                  className="text-tech-offWhite/70 hover:text-tech-red transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="text-tech-offWhite/50 text-sm">
                &copy; {currentYear} Thierry Avelino. Todos os direitos
                reservados.
              </div>
            </div>
          </div>

          <div className="border-t border-tech-offWhite/10 mt-8 pt-8 text-center">
            <p className="text-tech-offWhite/50 text-sm">
              Construído com Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --tech-blue: #1d3557;
          --tech-light-blue: #457b9d;
          --tech-sky-blue: #a8dadc;
          --tech-off-white: #f1faee;
          --tech-red: #e63946;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Poppins", sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--tech-off-white);
          font-size: 16px;
          font-weight: 500;
          opacity: 0.8;
          transition: all 0.3s;
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--tech-red);
        }

        .section-padding {
          padding: 100px 0;
        }

        .gradient-bg {
          background: linear-gradient(to right, var(--tech-blue), #17293f);
        }

        .glass-card {
          background: rgba(255, 255, 255, 1);
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
        }

        .project-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .tech-tag {
          display: inline-block;
          background-color: rgba(168, 218, 220, 0.2);
          color: var(--tech-blue);
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 500;
          margin-right: 6px;
          margin-bottom: 6px;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
