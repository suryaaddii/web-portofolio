import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const skills = {
  "Backend Development": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "PHP",
    "Laravel",
  ],
  "Frontend Development": [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],
  "Database & ORM": ["PostgreSQL", "MySQL", "SQL", "Sequelize ORM"],
  "IoT & System Integration": [
    "MQTT",
    "IoT",
    "System Integration",
    "Real-Time Data Processing",
  ],
  "Software Engineering": [
    "Authentication",
    "Role-Based Access Control",
    "Software Testing",
    "Debugging",
  ],
  "Tools & Workflow": ["Git", "GitHub", "Postman", "Vercel"],
};

const experience = [
  {
    role: "Software Developer",
    company: "PT. Elektrik Baterai Indonesia",
    period: "Nov 2025 – Present",
    points: [
      "Built the Battery Energy Storage System (BESS) backend from scratch using Node.js, Express.js, PostgreSQL, and Sequelize.",
      "Implemented bidirectional MQTT communication between software and physical BESS devices for real-time telemetry and system integration.",
      "Developed modular backend services, RESTful APIs, relational database schemas, authentication, and role-based access control.",
      "Implemented automated power outage preparation workflows, scheduled processes, data aggregation, and retention mechanisms.",
      "Enhanced the existing BESS monitoring application using Next.js and TypeScript.",
      "Developed power outage preparation, battery readiness monitoring, and system configuration features.",
      "Developed a centralized Super Admin Dashboard for managing users, devices, batteries, inverters, and application configurations.",
      "Built the Three Wheel Leasing frontend from scratch using Next.js, including dashboard and installment management modules.",
      "Collaborated within a two-developer team, performing hardware integration, software testing, debugging, and production maintenance.",
    ],
  },
  {
    role: "Fullstack Web Developer (Internship)",
    company: "PT. Tiga Serangkai Pustaka Mandiri Group – Assalaam Hypermarket",
    period: "Sep 2024 – Jan 2025",
    points: [
      "Enhanced the Assalaam Hypermarket marketplace application using Laravel, PHP, MySQL, and Tailwind CSS.",
      "Developed administrative dashboards for transaction monitoring and customer management.",
      "Implemented online customer registration, backend business logic, and database queries.",
      "Redesigned the marketplace landing page and improved responsive interfaces across desktop and mobile devices.",
    ],
  },
  {
    role: "Frontend Web Developer (Internship)",
    company: "Core Initiative Studio",
    period: "Feb 2024 – Mar 2024",
    points: [
      "Developed frontend web applications using Next.js and Tailwind CSS.",
      "Integrated RESTful APIs for dynamic data rendering.",
      "Implemented server-side rendering (SSR) and client-side rendering (CSR).",
      "Developed reusable UI components to improve code maintainability.",
      "Collaborated with backend developers to ensure proper API integration and error handling.",
    ],
  },
  {
    role: "Fullstack Web Development Program",
    company: "PT Rakamin Kolektif Madani, Jakarta Selatan",
    period: "Aug 2023 – Feb 2024",
    points: [
      "Developed fullstack web applications using React.js, Node.js, and Express.js.",
      "Designed and implemented RESTful APIs and CRUD functionalities.",
      "Implemented user authentication and authorization using JSON Web Token (JWT).",
      "Managed relational databases using MySQL and Sequelize ORM.",
      "Applied fullstack development concepts through practical, project-based learning.",
    ],
  },
];

type Project = {
  name: string;
  type: string;
  desc: string;
  tags: string[];
  image: string | null;
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    name: "Battery Energy Storage System (BESS)",
    type: "Professional Project · Fullstack & IoT",
    desc: "Built the backend from scratch and enhanced the monitoring application for Battery Energy Storage Systems. Implemented bidirectional MQTT communication, real-time telemetry processing, RESTful APIs, automated power outage preparation, and battery readiness monitoring.",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "MQTT",
      "Next.js",
      "TypeScript",
    ],
    image: "/projects/bess.png",
    github: null,
    demo: null,
  },
  {
    name: "Super Admin Dashboard",
    type: "Professional Project · Admin System",
    desc: "Developed a centralized administrative dashboard for managing users, devices, batteries, inverters, and application configurations through integrated backend services.",
    tags: ["Next.js", "TypeScript", "RESTful APIs", "Tailwind CSS"],
    image: null,
    github: null,
    demo: null,
  },
  {
    name: "Three Wheel Leasing",
    type: "Professional Project · Frontend",
    desc: "Built the frontend application from scratch for leasing operations, including administrative dashboards, installment management, API integration, dynamic data rendering, and protected routes.",
    tags: ["Next.js", "TypeScript", "RESTful APIs", "Tailwind CSS"],
    image: "/projects/leasing.png",
    github: null,
    demo: null,
  },
  {
    name: "Inventory Management System",
    type: "Personal Project · Fullstack",
    desc: "Developed a fullstack inventory management application with product tracking, stock management, transaction records, RESTful APIs, and relational database integration.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    image: null,
    github: null,
    demo: null,
  },
  {
    name: "Study Program Recommendation System",
    type: "Academic Project · Recommendation System",
    desc: "Developed a study program recommendation system using Content-Based Filtering with Binary Vector Representation and Cosine Similarity to match user preferences with relevant study programs.",
    tags: ["PHP", "Laravel", "Content-Based Filtering", "Cosine Similarity"],
    image: "/projects/majorney.png",
    github: null,
    demo: null,
  },
  {
    name: "Freelance & Client Projects",
    type: "Freelance Project · Web Development",
    desc: "Developed responsive websites and landing pages for client needs, including tutoring websites, user interface development, deployment, and hosting configuration.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/projects/client.png",
    github: null,
    demo: null,
  },
];

const contacts = [
  {
    label: "Email",
    value: "surya.datago@gmail.com",
    href: "mailto:surya.datago@gmail.com",
  },
  {
    label: "Portfolio",
    value: "suryaaddii.vercel.app",
    href: "https://suryaaddii.vercel.app",
  },
  {
    label: "GitHub",
    value: "github.com/suryaaddii",
    href: "https://github.com/suryaaddii",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/surya-adi-sn",
    href: "https://linkedin.com/in/surya-adi-sn",
  },
];

const certifications = [
  {
    title: "MSIB Full Stack Web Development Intensive Bootcamp",
    issuer: "Rakamin Academy",
    image: "/certificates/rakamin.png",
  },
  {
    title: "SQL",
    issuer: "Sololearn",
    image: "/certificates/sql.png",
  },
  {
    title: "Machine Learning Professional Certification",
    issuer: "Altair RapidMiner",
    image: "/certificates/ml.png",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    image: "/certificates/googleai.png",
  },
  {
    title: "Desktop Application Training Professional Level",
    issuer: null,
    image: "/certificates/dat.png",
  },
];

const quickFacts = [
  {
    label: "Experience",
    value: "1+ Year of Professional Experience",
  },
  {
    label: "Current Role",
    value: "Software Developer",
  },
  {
    label: "Company",
    value: "PT. Elektrik Baterai Indonesia",
  },
  {
    label: "Location",
    value: "Surakarta, Indonesia",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <Container>
        {/* ==================== ABOUT ==================== */}

        <Section id="about" eyebrow="PROFILE" title="About">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-premium rounded-4xl p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
                About Me
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                Fullstack Software Developer focused on backend development, web
                applications, and IoT system integration.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
                I am a Fullstack Software Developer with professional experience
                in developing and maintaining production web applications,
                particularly in backend engineering and IoT system integration.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
                My experience includes building backend systems from scratch,
                developing RESTful APIs, designing relational databases,
                implementing MQTT communication, and developing monitoring and
                business management applications using Node.js, Express.js,
                Next.js, TypeScript, and PostgreSQL.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="min-w-0 rounded-2xl border hairline bg-white/70 p-4 text-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                      {item.label}
                    </p>

                    <p className="mt-2 break-all font-medium text-neutral-900">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-premium rounded-4xl p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
                Quick Facts
              </p>

              <div className="mt-6 space-y-5">
                {quickFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border hairline bg-white/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                      {item.label}
                    </p>

                    <p className="mt-2 font-semibold text-neutral-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ==================== TECH STACK ==================== */}

        <Section id="skills" eyebrow="TOOLING" title="Tech Stack">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, list]) => (
              <div
                key={category}
                className="card-premium rounded-3xl p-5 transition duration-300 hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-neutral-950">
                  {category}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <Badge key={skill} text={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ==================== EXPERIENCE ==================== */}

        <Section id="experience" eyebrow="CAREER" title="Experience">
          <div className="relative space-y-5">
            <div className="absolute left-2.5 top-4 hidden h-[calc(100%-2rem)] w-px bg-neutral-200 md:block" />

            {experience.map((item, index) => (
              <div
                key={item.role + item.company}
                className="relative grid gap-4 md:grid-cols-[80px_1fr]"
              >
                <div className="hidden md:block">
                  <div className="sticky top-28 flex items-center gap-3">
                    <span className="relative z-10 h-5 w-5 shrink-0 rounded-full border-[3px] border-neutral-50 bg-neutral-950" />

                    <p className="text-xs text-neutral-500">
                      {index === 0 ? "Now" : item.period.split("–")[0].trim()}
                    </p>
                  </div>
                </div>

                <div className="card-premium rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-neutral-600">
                        {item.company}
                      </p>
                    </div>

                    <p className="rounded-full border hairline bg-white px-4 py-2 text-xs font-medium text-neutral-500">
                      {item.period}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950/40" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ==================== FEATURED PROJECTS ==================== */}

        <Section id="projects" eyebrow="WORK" title="Featured Projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group card-premium flex h-full flex-col overflow-hidden rounded-4xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 shrink-0 overflow-hidden border-b hairline bg-neutral-100">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-linear-to-br from-neutral-100 to-neutral-200 px-6 text-center">
                      <span className="text-4xl font-semibold tracking-tight text-neutral-400">
                        {"</>"}
                      </span>

                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                        Project Showcase
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-700">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} text={tag} />
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border hairline bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {!project.github && !project.demo && (
                      <span className="inline-flex items-center gap-2 rounded-full border hairline bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-500">
                        {project.type.startsWith("Professional")
                          ? "Professional Project"
                          : "Project Showcase"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ==================== EDUCATION ==================== */}

        <Section
          id="education"
          eyebrow="ACADEMIC"
          title="Education & Certifications"
        >
          <div className="card-premium rounded-4xl p-7 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
                  Education
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                  Tiga Serangkai University
                </h3>

                <p className="mt-1 text-sm text-neutral-600">
                  Bachelor&apos;s Degree in Informatics Engineering
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border hairline bg-white px-4 py-2 text-xs font-medium text-neutral-500">
                  2021 – 2025
                </span>

                <span className="rounded-full border hairline bg-white px-4 py-2 text-xs font-medium text-neutral-500">
                  GPA 3.64 / 4.00
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-7 text-neutral-700">
              Completed a final project focused on developing a study program
              recommendation system using Content-Based Filtering with Binary
              Vector Representation and Cosine Similarity to match user
              preferences with relevant study programs.
            </p>
          </div>

          {/* ==================== CERTIFICATIONS ==================== */}

          <div id="certs" className="mt-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight">
                Certifications
              </h3>

              <p className="text-sm text-neutral-500">
                {certifications.length} Certificates
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="group card-premium flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title}`}
                    className="relative block h-40 overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-contain p-2 transition duration-500 group-hover:scale-105"
                    />
                  </a>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-sm font-semibold leading-6 text-neutral-950">
                      {cert.title}
                    </h4>

                    {cert.issuer && (
                      <p className="mt-1 text-xs text-neutral-500">
                        {cert.issuer}
                      </p>
                    )}

                    <div className="mt-auto pt-5">
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 transition hover:text-neutral-950"
                      >
                        View Certificate
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ==================== CONTACT ==================== */}

        <Section id="contact" eyebrow="LET'S TALK" title="Contact">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="card-premium rounded-4xl p-7 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
                Open to connecting with software engineers, technology
                professionals, and teams interested in backend development,
                fullstack applications, IoT, and system integration.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
                Feel free to reach out for professional discussions,
                collaboration, or software engineering opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:surya.datago@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/15 transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/suryaaddii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/surya-adi-sn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="card-premium rounded-4xl p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
                Details
              </p>

              <div className="mt-6 space-y-4 text-sm text-neutral-700">
                <p>
                  <span className="font-semibold text-neutral-950">
                    Location:
                  </span>{" "}
                  Surakarta, Indonesia
                </p>

                <p className="break-all">
                  <span className="font-semibold text-neutral-950">Email:</span>{" "}
                  <a
                    href="mailto:surya.datago@gmail.com"
                    className="transition hover:text-neutral-950 hover:underline"
                  >
                    surya.datago@gmail.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-neutral-950">Phone:</span>{" "}
                  <a
                    href="tel:+6282328410298"
                    className="transition hover:text-neutral-950 hover:underline"
                  >
                    +62 823-2841-0298
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ==================== FOOTER ==================== */}

        <footer className="pb-20 pt-10">
          <div className="h-px w-full border-t hairline" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Surya Adi</p>

            <p>Fullstack Software Developer · Backend & IoT</p>
          </div>
        </footer>
      </Container>
    </main>
  );
}
