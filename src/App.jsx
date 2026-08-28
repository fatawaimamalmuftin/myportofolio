import { useState } from "react";
import ImageModal from "./components/ImageModal";
import amI from './assets/profile.png'
import belimudah from './assets/belimudah.png'
import lksa from './assets/lksa.png'
import chatbot from './assets/chatbot.png'
import movie from './assets/movie.png'

function App() {
  const [menu, setMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "Go",
    "Gin",
    "PHP",
    "CodeIgniter 3",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Linux",
    "Docker",
  ];

  const projects = [
    {
      title: "BeliMudah",
      description:
        "An e-commerce web application that allows users to browse products, manage their cart and wishlist, place orders, and manage their profile through a clean and responsive interface.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Context API", "React Router"],
      image: belimudah,
      git: "https://github.com/fatawaimamalmuftin/koda-b8-react"
    },
    {
      title: "MovieCatalog",
      description:
        "A movie catalog website that allows users to explore movies and view movie information through a clean and responsive interface.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      image: movie,
      git: "https://github.com/fatawaimamalmuftin/MovieCatalogueApps"
    },
    {
      title: "AI News Summarizer",
      description:
        "A web application that summarizes news articles using AI and presents the results in a simple interface.",
      tech: ["PHP Native", "API", "JavaScript"],
      image: chatbot,
      git: "https://github.com/fatawaimamalmuftin?tab=repositories&q=ai"
    },
    {
      title: "LKSA Information System",
      description:
        "A web-based information system developed to manage LKSA data and activities.",
      tech: ["PHP", "CodeIgniter 3", "MySQL"],
      image: lksa,
      git: "https://github.com/fatawaimamalmuftin?tab=repositories&q=lksa"
    },
  ];

  const experiences = [
    {
      year: "2026",
      title: "Full Stack Development",
      place: "Koda Academy",
      description:
        "Learning frontend, backend, database, REST API and application deployment.",
    },
    {
      year: "2025",
      title: "S1 Sistem Informasi",
      place: "Universitas Batam",
      description:
        "Graduated from Information Systems and developed a web-based information system as a final project.",
    },
  ];

  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });

    setMenu(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0d0915] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-25 top-25 h-25 w-25 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute -right-25 top-100 h-87.5 w-87.5 rounded-full bg-violet-500/15 blur-[130px]" />

        <div className="absolute -bottom-25 left-[30%] h-87.5 w-87.5 rounded-full bg-fuchsia-500/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          {/* Logo */}
          <button
            onClick={() => goTo("home")}
            className="font-display text-xl font-semibold"
          >
            Fatawa Imam Al Muftin<span className="text-purple-400">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => goTo("home")}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </button>

            <button
              onClick={() => goTo("about")}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => goTo("skills")}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Skills
            </button>

            <button
              onClick={() => goTo("projects")}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={() => goTo("experience")}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Experience
            </button>
          </div>

          {/* Contact */}
          <button
            onClick={() => goTo("contact")}
            className="hidden rounded-full border border-purple-300/20 bg-purple-500/20 px-5 py-2 text-sm text-purple-100 transition hover:bg-purple-500/30 md:block"
          >
            Contact Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:hidden"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl border border-purple-400/30 bg-[#21182b] p-3 md:hidden">
            <button
              onClick={() => goTo("home")}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-purple-500/20"
            >
              Home
            </button>

            <button
              onClick={() => goTo("about")}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-purple-500/20"
            >
              About
            </button>

            <button
              onClick={() => goTo("skills")}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-purple-500/20"
            >
              Skills
            </button>

            <button
              onClick={() => goTo("projects")}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-purple-500/20"
            >
              Projects
            </button>

            <button
              onClick={() => goTo("experience")}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-purple-500/20"
            >
              Experience
            </button>

            <button
              onClick={() => goTo("contact")}
              className="mt-1 w-full rounded-xl bg-purple-500 px-4 py-3 text-left font-medium text-white hover:bg-purple-400"
            >
              Contact Me
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Hero Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300/60">
              Hello, I'm
            </p>

            <h1 className="font-display text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">
              Muftin
              <span className="block bg-linear-to-r from-purple-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                Full Stack
              </span>
              Developer.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              I build modern web applications with a focus on clean
              interfaces, reliable backend systems and meaningful user
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => goTo("projects")}
                className="rounded-full bg-purple-500 px-6 py-3 font-medium transition hover:-translate-y-1 hover:bg-purple-400"
              >
                View My Projects →
              </button>

              <button
                onClick={() => goTo("contact")}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/70 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                Let's Talk
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/30">
              <span>React</span>
              <span>•</span>
              <span>Go</span>
              <span>•</span>
              <span>PostgreSQL</span>
              <span>•</span>
              <span>Git</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[3rem] bg-purple-500/20 blur-3xl" />

            <div className="glass-strong relative rounded-[2.5rem] p-3">
              <div className="relative overflow-hidden rounded-4xl">
                <img
                  onClick={() => setSelectedImage(amI)}
                  src={amI}
                  alt="Fatawa"
                  className="h-120 w-full cursor-pointer object-cover transition duration-700 hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#120d1c] via-transparent to-purple-500/10" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                  <p className="text-sm text-white/40">Currently focusing on</p>

                  <p className="mt-1 font-display text-lg">
                    Full Stack Development
                  </p>
                </div>
              </div>
            </div>

            <div className="glass absolute -bottom-5 -left-5 hidden rounded-2xl px-5 py-4 sm:block">
              <p className="text-xs text-white/40">Based in</p>

              <p className="mt-1 text-sm">Jakarta, Indonesia 🇮🇩</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-purple-300/50">01</p>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              About Me
            </h2>

            <p className="mt-3 text-sm text-white/30">
              A little story behind the developer.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass rounded-4xl p-7 lg:col-span-2 sm:p-10">
              <p className="text-lg leading-8 text-white/70">
                I'm a{" "}
                <span className="text-purple-300">
                  System Information graduate
                </span>{" "}
                and a developer who enjoys turning ideas into functional web
                applications.
              </p>

              <p className="mt-5 leading-7 text-white/40">
                My journey started with web development and gradually expanded
                into backend development, databases, REST APIs and application
                deployment.
              </p>

              <p className="mt-5 leading-7 text-white/40">
                Right now, I'm focusing on becoming a better full stack
                developer by building real projects and continuously learning
                new things.
              </p>
            </div>

            <div className="glass rounded-4xl p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300/60">
                My Approach
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs text-purple-300/40">01</p>

                  <h3 className="mt-1">Keep it simple</h3>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    I prefer solutions that are easy to understand.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-purple-300/40">02</p>

                  <h3 className="mt-1">Keep learning</h3>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Every project is an opportunity to learn something new.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-purple-300/40">03</p>

                  <h3 className="mt-1">Build real things</h3>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    I learn best by building real applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-purple-300/50">02</p>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Tech Stack
            </h2>

            <p className="mt-3 text-sm text-white/30">
              Technologies and tools that I use.
            </p>
          </div>

          <div className="glass rounded-4xl p-7 sm:p-10">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/60 transition hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-purple-300/50">03</p>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-3 text-sm text-white/30">
              Some things I've built along the way.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass group overflow-hidden rounded-4xl transition duration-500 hover:border-purple-300/20"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Project Image */}
                  <div
                    className={`relative min-h-25 overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      onClick={() => setSelectedImage(project.image)}
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full cursor-pointer object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#15101e] via-transparent to-purple-500/10" />

                    <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
                      Featured Project
                    </div>
                  </div>

                  {/* Project Information */}
                  <div
                    className={`flex flex-col justify-center p-7 sm:p-10 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <p className="text-sm text-purple-300/60">
                      {project.tech.join(" • ")}
                    </p>

                    <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 leading-7 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-purple-300/10 bg-purple-500/10 px-3 py-2 text-xs text-purple-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                      <a
                        href= {project.git}
                        target="blank"
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
                      >
                        GitHub ↗
                      </a>

                      <a
                        href= "#"
                        className="rounded-full bg-purple-500/20 px-5 py-2.5 text-sm text-purple-200 transition hover:bg-purple-500/30"
                      >
                        Live Demo ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-purple-300/50">04</p>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Experience
            </h2>

            <p className="mt-3 text-sm text-white/30">
              The path that brought me here.
            </p>
          </div>

          <div className="glass rounded-4xl p-7 sm:p-10">
            <div className="space-y-10">
              {experiences.map((experience) => (
                <div
                  key={experience.year}
                  className="grid gap-5 sm:grid-cols-[80px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-500/10 text-sm text-purple-200">
                    {experience.year}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-sm text-purple-300/60">
                      {experience.place}
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-white/40">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Education */}
            <div className="glass h-fit rounded-4xl p-7 sm:p-9">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300/60">
                Education
              </p>

              <h3 className="mt-5 font-display text-3xl">
                Universitas Batam
              </h3>

              <p className="mt-2 text-white/40">
                S1 Sistem Informasi · 2021 — 2025
              </p>

              <div className="mt-6 inline-block rounded-full border border-purple-300/10 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                GPA 3.47 / 4.00
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-4xl p-7 sm:p-9">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300/60">
                Certifications
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/3 p-4 mt-5">
                <p>KODA Academy</p>

                <p className="mt-1 text-sm text-white/40">
                  FullStack Developer
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p>BNSP</p>

                  <p className="mt-1 text-sm text-white/40">
                   - Junior Web Programmer
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                   - Mobile Web with Flutter
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p>IBM / Hactiv8</p>

                  <p className="mt-1 text-sm text-white/40">
                    Software Development Training
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-14">
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[80px]" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300/60">
                Have a project in mind?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl sm:text-5xl">
                Let's build something{" "}
                <span className="text-purple-300">great</span> together.
              </h2>

              <p className="mx-auto mt-5 max-w-lg leading-7 text-white/40">
                I'm always open to interesting projects, collaborations and
                new opportunities.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fatawaimamalmuftin17@gmail.com&su=Hello%20Fatawa&body=Hi%20Fatawa,%20I%20would%20like%20to%20contact%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-500 px-6 py-3 font-medium transition hover:-translate-y-1 hover:bg-purple-400"
                >
                  Send Me an Email
                </a>

                <a
                  href="https://github.com/fatawaimamalmuftin"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/fatawaimamalmuftin/"
                  target="_blank"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/30 sm:flex-row">
            <p>© {new Date().getFullYear()} Fatawa. All rights reserved.</p>

            <button
              onClick={() => goTo("home")}
              className="transition hover:text-purple-300"
            >
              Back to top ↑
            </button>
          </footer>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        alt="Image Preview"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;