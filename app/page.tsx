import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const skills = {
  "Frontend Development": [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ],
  "Backend Development": [
    "PHP",
    "Node.js",
    "Express.js",
    "Laravel",
    "REST API",
  ],
  Database: ["MySQL", "PostgreSQL", "Sequelize ORM"],
  "Tools & Workflow": ["Git", "GitHub", "Postman", "Vercel"],
};

const experience = [
  {
    role: "Software Developer",
    company: "PT. Elektrik Baterai Indonesia",
    period: "Nov 2025 – Present",
    points: [
      "Develop frontend leasing web application using Next.js with API integration from backend services.",
      "Implement dashboard and installment modules with dynamic data rendering.",
      "Contribute to backend development for Battery Energy Storage System (BESS) full system.",
      "Design and maintain RESTful APIs and relational database schemas.",
      "Implement authentication and role-based access control.",
      "Collaborate with engineers to ensure full system integration between frontend, backend, and operational systems.",
      "Optimize application performance and improve system scalability.",
    ],
  },
  {
    role: "Fullstack Web Developer (Internship)",
    company: "PT. Tiga Serangkai Pustaka Mandiri Group – Assalaam Hypermarket",
    period: "Sept 2024 – Jan 2025",
    points: [
      "Revised and improved company marketplace website to enhance UI/UX and performance.",
      "Developed admin dashboard for transaction monitoring and member management.",
      "Built online customer registration system integrated with marketplace platform.",
      "Implemented backend logic using Laravel and optimized database queries.",
      "Ensured responsive design across devices using Tailwind CSS.",
    ],
  },
  {
    role: "Frontend Web Developer (Internship)",
    company: "Core Initiative Studio",
    period: "Feb 2024 – Mar 2024",
    points: [
      "Built frontend applications with API integration using Next.js.",
      "Implemented server-side rendering and client-side rendering strategies.",
      "Improved component structure and reusability.",
      "Collaborated with backend developers to ensure proper API integration and error handling.",
    ],
  },
  {
    role: "Fullstack Web Developer (Internship)",
    company: "PT Rakamin Kolektif Madani, Jakarta Selatan",
    period: "Aug 2023 – Feb 2024",
    points: [
      "Completed comprehensive fullstack development training program.",
      "Developed final project: Inventory Management System using React and Express.js.",
      "Built RESTful APIs for product, stock, and transaction management.",
      "Implemented CRUD functionality and JWT-based authentication.",
      "Managed relational database using Sequelize ORM.",
    ],
  },
];

const projects = [
  {
    name: "Leasing Web Application",
    type: "Frontend System",
    desc: "Developed dashboard and installment management modules with API integration, dynamic routing, and protected pages.",
    tags: ["Next.js", "REST API", "Protected Route"],
    image: "/projects/leasing.png",
    github: "#",
    demo: "#",
  },
  {
    name: "Battery Energy Storage System Monitoring",
    type: "Backend System",
    desc: "Contributed to backend APIs, monitoring logic, operational data processing, and scalable database structure for BESS.",
    tags: ["Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/bess.png",
    github: "#",
    demo: "#",
  },
  {
    name: "Inventory Management System",
    type: "Fullstack App",
    desc: "Built inventory tracking, stock management, transaction records, RESTful API, and relational database schema.",
    tags: ["React.js", "Express.js", "PostgreSQL"],
    image: "/projects/inventory.jpg",
    github: "#",
    demo: "#",
  },
  {
    name: "Freelance & Client Projects",
    type: "Client Work",
    desc: "Delivered landing pages, tutoring website, branding assets, responsive layouts, deployment, and hosting setup.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/client.png",
    github: "#",
    demo: "#",
  },
  {
    name: "Study Program Recommendation System",
    type: "Final Project",
    desc: "Implemented Content-Based Filtering using Binary Vector Representation and Cosine Similarity algorithm.",
    tags: ["PHP", "Laravel", "Machine Learning"],
    image: "/projects/majorney.png",
    github: "#",
    demo: "#",
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
    title: "Google AI Essentials",
    image: "/certificates/googleai.png",
  },
  {
    title: "Internship Program – PT Rakamin Kolektif Madani",
    image: "/certificates/rakamin.png",
  },
  {
    title: "Machine Learning Certificate",
    image: "/certificates/ml.png",
  },
  {
    title: "Desktop Application Training Professional Level",
    image: "/certificates/dat.png",
  },
  {
    title: "SQL Fundamentals",
    image: "/certificates/sql.png",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <Container>
        <Section id="about" eyebrow="PROFILE" title="About">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-premium rounded-4xl p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
                About Me
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                Fullstack Developer focused on building clean, scalable, and
                maintainable web applications.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
                I have experience in frontend and backend development using
                React, Next.js, Node.js, Express.js, Laravel, and relational
                databases. I focus on REST API integration, authentication
                systems, database design, and building business applications
                that are reliable and easy to maintain.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="rounded-2xl border hairline bg-white/70 p-4 text-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                      {item.label}
                    </p>
                    <p className="mt-2 font-medium text-neutral-900">
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
                <div className="rounded-2xl border hairline bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Experience
                  </p>
                  <p className="mt-2 font-semibold text-neutral-950">
                    2+ Years
                  </p>
                </div>

                <div className="rounded-2xl border hairline bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Current Role
                  </p>
                  <p className="mt-2 font-semibold text-neutral-950">
                    Software Developer
                  </p>
                </div>

                <div className="rounded-2xl border hairline bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Company
                  </p>
                  <p className="mt-2 font-semibold text-neutral-950">
                    PT. Elektrik Baterai Indonesia
                  </p>
                </div>

                <div className="rounded-2xl border hairline bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Location
                  </p>
                  <p className="mt-2 font-semibold text-neutral-950">
                    Surakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

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
                    <span className="relative z-10 h-5 w-5 rounded-full border-[3px] border-neutral-50 bg-neutral-950" />

                    <p className="text-xs text-neutral-500">
                      {index === 0 ? "Now" : item.period.split("–")[0]}
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
                    {item.points.slice(0, 4).map((point) => (
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

        <Section id="projects" eyebrow="WORK" title="Featured Projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group card-premium overflow-hidden rounded-4xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden border-b hairline bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                </div>

                <div className="p-7">
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

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border hairline bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="ACADEMIC"
          title="Education & Certifications"
        >
          {/* Education */}
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
                  B.Sc. Informatics Engineering
                </p>
              </div>

              <div className="flex gap-2">
                <span className="rounded-full border hairline bg-white px-4 py-2 text-xs font-medium text-neutral-500">
                  2021 - 2025
                </span>

                <span className="rounded-full border hairline bg-white px-4 py-2 text-xs font-medium text-neutral-500">
                  GPA 3.64 / 4.00
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-7 text-neutral-700">
              Final project focused on Content-Based Filtering using Binary
              Vector Representation and Cosine Similarity for study program
              recommendation.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-10">
            <div className="mb-6 flex items-center justify-between">
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
                  className="
            group
            card-premium
            overflow-hidden
            rounded-3xl
            transition-all
            duration-300
            hover:-translate-y-1
          "
                >
                  <div className="relative h-36 bg-neutral-100">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                  </div>

                  <div className="flex h-28 flex-col justify-between p-5">
                    <h4 className="line-clamp-2 text-sm font-semibold text-neutral-950">
                      {cert.title}
                    </h4>

                    <button
                      className="
                        text-xs
                        font-medium
                        text-neutral-500
                        transition
                        hover:text-neutral-950
                      "
                    >
                      View Certificate →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="LET'S TALK" title="Contact">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="card-premium rounded-4xl p-7 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
                Open to discussing web development, API integration, backend
                systems, and software engineering opportunities.
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
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/surya-adi-sn"
                  target="_blank"
                  rel="noreferrer"
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
                <p>
                  <span className="font-semibold text-neutral-950">Email:</span>{" "}
                  surya.datago@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">Phone:</span>{" "}
                  +62 823-2841-0298
                </p>
              </div>
            </div>
          </div>
        </Section>

        <footer className="pb-20 pt-10">
          <div className="h-px w-full border-t hairline" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Surya Adi</p>
            <p>Software Developer | Next.js, React, TypeScript</p>
          </div>
        </footer>
      </Container>
    </main>
  );
}
