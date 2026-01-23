import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Badge from "@/components/Badge";

const skills = [
  "PHP",
  "JavaScript",
  "Laravel",
  "React.js",
  "Next.js (Basic)",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "RESTful APIs",
  "Git / GitHub",
  "GitHub Actions",
  "Vercel",
  "Postman",
  "PHPUnit",
  "Agile Scrum",
];

const experience = [
  {
    role: "Fullstack Web Developer (Internship)",
    company: "PT. Tiga Serangkai Pustaka Mandiri Group – Assalaam Hypermarket",
    period: "Sept 2024 – Jan 2025",
    points: [
      "Redesigned landing page to modern UI (Tailwind CSS), improving page engagement by ~25%.",
      "Built admin dashboard (Laravel, MySQL) to track transaction history, reducing manual reporting time by ~40%.",
      "Developed online member registration and dashboard system, enabling 100+ new users to access shopping history and loyalty points.",
      "Collaborated in a 2-person Agile team to deliver features on schedule and ensure code quality.",
    ],
  },
  {
    role: "Frontend Web Developer (Internship)",
    company: "Core Initiative Studio",
    period: "Feb 2024 – Mar 2024",
    points: [
      "Designed and implemented responsive web interfaces (React.js, Tailwind CSS).",
      "Optimized components and static assets, reducing load time by ~15%.",
      "Worked closely with designers to ensure consistent UI/UX across platforms.",
    ],
  },
  {
    role: "Fullstack Web Developer (Internship)",
    company: "PT Rakamin Kolektif Madani, Jakarta Selatan",
    period: "Aug 2023 – Feb 2024",
    points: [
      "Implemented full-stack features and maintained stable deployments.",
      "Strengthened backend data handling and integrity across services.",
      "Automated validation and routine jobs (React.js, PostgreSQL), reducing data-handling errors by ~30%.",
      "Participated in sprint reviews and code reviews, ensuring compliance with Agile practices.",
    ],
  },
];

const projects = [
  {
    name: "Teachme Course Tutoring Website",
    desc: "Automated reporting system (Laravel, MySQL, React.js) that reduced manual work by ~50%.",
    tags: ["Laravel", "React", "MySQL"],
  },
  {
    name: "Majorney AI Recommendation System (Thesis)",
    desc: "Content-based recommendation using binary vectors and cosine similarity.",
    tags: ["Machine Learning", "Recommender"],
  },
  {
    name: "Inventory Management Stock System",
    desc: "Inventory features (React.js, PostgreSQL, Postman) to minimize stock discrepancies and improve reporting.",
    tags: ["React", "PostgreSQL"],
  },
  {
    name: "Assalaam Hypermarket Website",
    desc: "Online member registration + dashboard with integrated loyalty program (Laravel, MySQL).",
    tags: ["Laravel", "MySQL"],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <Container>
        <Section id="about" eyebrow="PROFILE" title="About">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-sm leading-7 text-neutral-700 md:text-base">
                Fullstack Developer with hands-on experience in Laravel, React.js, and MySQL.
                Proven ability to deliver scalable web applications, automate workflows, and
                enhance system performance. Comfortable in Agile environments and team collaboration,
                building user-centered solutions.
              </p>

              <div className="mt-6 grid gap-3 rounded-3xl border hairline bg-white p-5">
                <div className="text-sm text-neutral-800">
                  <span className="font-semibold">Email:</span>{" "}
                  <a className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="mailto:surya.datago@gmail.com">
                    surya.datago@gmail.com
                  </a>
                </div>
                <div className="text-sm text-neutral-800">
                  <span className="font-semibold">Portfolio:</span>{" "}
                  <a className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="https://suryaaddii.vercel.app" target="_blank" rel="noreferrer">
                    suryaaddii-web-portofolio.vercel.app
                  </a>
                </div>
                <div className="text-sm text-neutral-800">
                  <span className="font-semibold">GitHub:</span>{" "}
                  <a className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="https://github.com/suryaaddii" target="_blank" rel="noreferrer">
                    github.com/suryaaddii
                  </a>
                </div>
                <div className="text-sm text-neutral-800">
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="https://linkedin.com/in/surya-adi-sn" target="_blank" rel="noreferrer">
                    linkedin.com/in/surya-adi-sn
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border hairline bg-white p-6">
              <p className="text-xs tracking-[0.35em] text-neutral-500">HIGHLIGHTS</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900/40" />
                  Increased landing-page engagement by ~25% after redesign.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900/40" />
                  Reduced manual reporting time by ~40% via admin dashboard.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900/40" />
                  Enabled 100+ new members register online + dashboard.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900/40" />
                  Improved frontend performance, load time ~15%.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="TOOLING" title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border hairline bg-white p-6">
            {/* <p className="text-sm text-neutral-700">
              Fokus utama kamu kuat di <span className="font-semibold">Laravel + React</span>,
              dan sekarang portfolio ini saya buat supaya kelihatan “modern”, “clean”, dan
              “berkarakter” dalam gaya b&w.
            </p> */}
          </div>
        </Section>

        <Section id="experience" eyebrow="CAREER" title="Experience">
          <div className="space-y-5">
            {experience.map((e) => (
              <div key={e.role + e.company} className="rounded-3xl border hairline bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                  <p className="text-xs text-neutral-500">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{e.company}</p>
                <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900/35" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="WORK" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.name} className="group rounded-3xl border hairline bg-white p-6 transition hover:bg-neutral-50">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <div className="h-8 w-8 rounded-2xl border hairline bg-white group-hover:bg-neutral-100" />
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} text={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="ACADEMIC" title="Education">
          <div className="rounded-3xl border hairline bg-white p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold tracking-tight">
                Tiga Serangkai University — B.Sc. Informatics Engineering
              </h3>
              <p className="text-xs text-neutral-500">2021 – 2025 • GPA 3.64/4.00</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Final project: Implementation of Content-Based Filtering in Study Program Recommendation System
              using Binary Vector Representation and Cosine Similarity.
            </p>
          </div>
        </Section>

        <Section id="certs" eyebrow="PROOF" title="Certifications">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Internship Program – PT Rakamin Kolektif Madani",
              "Machine Learning Certificate – Rapid Miner Altair Company",
              "Desktop Application Training Professional Level – Ebiz Education Enterprise",
              "SQL Fundamentals – SoloLearn (2022)",
            ].map((c) => (
              <div key={c} className="rounded-3xl border hairline bg-white p-5 text-sm text-neutral-700">
                {c}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="LET'S TALK" title="Contact">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border hairline bg-white p-6">
              <p className="text-sm leading-7 text-neutral-700">
                Kalau kamu mau, bagian contact ini bisa dikembangkan jadi form (emailjs / server action),
                tapi untuk versi clean ini kita bikin cepat diakses: email + social.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:surya.datago@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/suryaaddii"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/surya-adi-sn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-3xl border hairline bg-white p-6">
              <p className="text-xs tracking-[0.35em] text-neutral-500">DETAILS</p>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <p><span className="font-semibold">Location:</span> Surakarta, Indonesia</p>
                <p><span className="font-semibold">Email:</span> surya.datago@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +62 823-2841-0298</p>
              </div>
            </div>
          </div>
        </Section>

        <footer className="pb-14 pt-8">
          <div className="h-px w-full hairline border-t" />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Surya Adi</p>
            <p className="text-neutral-500">Built with Next.js + Tailwind • b&w minimal aesthetic</p>
          </div>
        </footer>
      </Container>
    </main>
  );
}
