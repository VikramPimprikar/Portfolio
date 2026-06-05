import React, { useState, useEffect } from "react";
import socChatbotImage from "../assets/soc-chatbot.png.jpeg";
import clutteredImage from "../assets/cluttered.png";
import digiLockerImage from "../assets/digilocker.png";
import vikramPhoto from "../assets/vikram.jpeg";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ChevronDown,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Shield,
  Code,
  Brain,
  Database,
  Globe,
  Terminal,
  CheckCircle,
  User,
  Cpu,
  Lock,
  MessageSquare,
  FileText,
  Search,
  Layers,
  Zap,
  Award,
  TrendingUp,
  Users,
  Eye,
  Server,
  GitBranch,
  Key,
  AlertTriangle,
  Calendar,
  GraduationCap,
  Smartphone,
  Monitor,
} from "lucide-react";

type Page = "home" | "digilocker" | "banking" | "soc-rag";

// ─── Shared Components ──────────────────────────────────────────────────────

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-purple-600 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
    >
      {children}
    </h2>
  );
}

function ArrowConnector() {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-px h-6 bg-purple-300" />
      <ChevronDown className="w-4 h-4 text-purple-400 -mt-1" />
    </div>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────

function Nav({
  activePage,
  onNavigate,
}: {
  activePage: Page;
  onNavigate: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
       <button
  onClick={() => onNavigate("home")}
  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
>
  <img
    src={vikramPhoto}
    alt="Vikram Pimprikar"
    className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
  />

  <span className="text-xl font-bold text-purple-900 tracking-tight">
    Vikram<span className="text-purple-500">.</span>
  </span>
</button>
        <div className="flex items-center gap-4">
          {activePage !== "home" ? (
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-1.5 text-sm text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Portfolio
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a
                href="#about"
                className="hover:text-purple-700 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-700 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-purple-700 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-purple-700 transition-colors"
              >
                Contact
              </a>
            </div>
          )}
          <a
            href="mailto:vikrampimprikar@gmail.com"
            className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-violet-100" />
      <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">
              Open to Internships & Collaborations
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Vikram
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500">
              Pimprikar
            </span>
          </h1>
          <p className="text-lg text-purple-700 font-medium mb-4">
            Computer Engineering Student · Cybersecurity · Web
            Dev · AI
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
            Passionate about building secure, scalable, and
            intelligent software systems. Pursuing B.Tech at
            SPIT, Mumbai — solving real-world problems through
            cybersecurity, full-stack development, and
            generative AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-purple-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vikrampimprikar@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-700 to-violet-500 flex items-center justify-center shadow-2xl shadow-purple-200/60">
              <span className="text-white text-5xl font-bold tracking-tight">
                VP
              </span>
            </div>
            <div className="absolute -top-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-purple-100 flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-semibold text-gray-800">
                Cybersecurity
              </span>
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-purple-100 flex items-center gap-2">
              <Brain className="w-4 h-4 text-violet-600" />
              <span className="text-xs font-semibold text-gray-800">
                AI & RAG
              </span>
            </div>
            <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white rounded-2xl px-4 py-3 shadow-lg border border-purple-100 flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold text-gray-800">
                Web Dev
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-purple-600 transition-colors animate-bounce"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <SectionHeading>
              Bridging Security, Code & Intelligence
            </SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a Computer Engineering student at Sardar Patel
              Institute of Technology (SPIT), Mumbai, with a
              deep interest in the intersection of
              cybersecurity, web development, and AI.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My work spans from UX redesigns and full-stack
              banking systems to AI-powered SOC tools — each
              project driven by a commitment to building secure,
              scalable, and intelligent solutions for real-world
              problems.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "CGPA", value: "7.5/10" },
                { label: "Projects", value: "3+" },
                { label: "Internships", value: "2" },
                { label: "Graduation", value: "2027" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-purple-50 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-purple-700">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <p className="text-xs text-purple-600 font-medium mb-0.5">
                    2023 – 2027
                  </p>
                  <h3 className="font-bold text-gray-900">
                    B.Tech Computer Engineering
                  </h3>
                  <p className="text-sm text-gray-500">
                    Sardar Patel Institute of Technology, Mumbai
                  </p>
                  <p className="text-sm text-purple-600 font-semibold mt-1">
                    CGPA: 7.5 / 10
                  </p>
                </div>
              </div>
            </GlassCard>

            {[
              {
                org: "UpToSkills",
                role: "Web Development Intern",
                desc: "Built responsive admin dashboards, improved UI/UX, and created web interfaces using Bootstrap and JavaScript.",
                Icon: Globe,
                bg: "bg-blue-100",
                color: "text-blue-700",
              },
              {
                org: "EduNet Foundation",
                role: "Cybersecurity Intern",
                desc: "Network reconnaissance using Nmap, DDoS attack simulations, and penetration testing fundamentals.",
                Icon: Shield,
                bg: "bg-purple-100",
                color: "text-purple-700",
              },
            ].map((exp) => (
              <GlassCard key={exp.org} className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${exp.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <exp.Icon
                      className={`w-6 h-6 ${exp.color}`}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      {exp.org}
                    </p>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const categories = [
    {
      name: "Languages",
      Icon: Code,
      bg: "bg-purple-100",
      color: "text-purple-700",
      items: [
        "Java",
        "Python",
        "C",
        "C++",
        "JavaScript",
        "SQL",
      ],
    },
    {
      name: "Frontend",
      Icon: Monitor,
      bg: "bg-blue-100",
      color: "text-blue-700",
      items: ["HTML", "CSS", "Bootstrap", "React"],
    },
    {
      name: "Backend",
      Icon: Server,
      bg: "bg-indigo-100",
      color: "text-indigo-700",
      items: ["Node.js", "Express.js"],
    },
    {
      name: "Databases",
      Icon: Database,
      bg: "bg-violet-100",
      color: "text-violet-700",
      items: ["SQLite", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Cybersecurity",
      Icon: Shield,
      bg: "bg-red-100",
      color: "text-red-700",
      items: [
        "Nmap",
        "Network Security",
        "SOC Concepts",
        "Pen Testing",
      ],
    },
    {
      name: "AI & Data",
      Icon: Brain,
      bg: "bg-emerald-100",
      color: "text-emerald-700",
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Generative AI",
        "RAG",
      ],
    },
    {
      name: "Tools",
      Icon: Terminal,
      bg: "bg-gray-100",
      color: "text-gray-700",
      items: ["Git", "Linux", "Figma", "Excel"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Technical Skills</SectionLabel>
          <SectionHeading>My Technology Stack</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A multi-disciplinary skill set spanning full-stack
            development, cybersecurity, and AI/ML.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <GlassCard key={cat.name} className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-9 h-9 ${cat.bg} rounded-lg flex items-center justify-center`}
                >
                  <cat.Icon
                    className={`w-4 h-4 ${cat.color}`}
                  />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({
  onNavigate,
}: {
  onNavigate: (p: Page) => void;
}) {
  const projects: {
    id: Page;
    title: string;
    desc: string;
    tags: string[];
    gradient: string;
    Icon: React.ElementType;
  }[] = [
    {
      id: "digilocker",
      title: "DigiLocker UX/UI Redesign",
      desc: "A comprehensive UX case study redesigning India's national document locker for improved accessibility, modern UI patterns, and a streamlined user journey for 100M+ users.",
      tags: [
        "UX Research",
        "UI Design",
        "Figma",
        "Accessibility",
      ],
      gradient: "from-purple-700 to-violet-500",
      Icon: FileText,
    },
    {
      id: "banking",
      title: "Banking Management System",
      desc: "A full-stack banking application with account management, transaction tracking, KYC verification, and credit scoring built with React, Node.js, and JWT auth.",
      tags: ["React", "Node.js", "SQLite", "JWT Auth"],
      gradient: "from-indigo-700 to-blue-500",
      Icon: Database,
    },
    {
      id: "soc-rag",
      title: "SOC RAG Chatbot",
      desc: "An AI-powered Security Knowledge Assistant using Retrieval-Augmented Generation for SOC analysts to query playbooks, SOPs, and incident response documentation.",
      tags: ["RAG", "LLM", "Python", "Cybersecurity"],
      gradient: "from-slate-800 to-indigo-700",
      Icon: Shield,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Featured Projects</SectionLabel>
          <SectionHeading>Work That Matters</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Three projects spanning UX design, full-stack
            engineering, and AI — each a deep dive into
            real-world problem solving.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <GlassCard
              key={proj.id}
              className="overflow-hidden group hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`h-48 bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <proj.Icon className="w-32 h-32 text-white/10 absolute" />
                <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center z-10 backdrop-blur-sm border border-white/20">
                  <proj.Icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {proj.desc}
                </p>
                <button
                  onClick={() => onNavigate(proj.id)}
                  className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
                >
                  View Case Study{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionLabel>Contact</SectionLabel>
        <SectionHeading>
          Let's Build Something Together
        </SectionHeading>
        <p className="text-gray-500 mb-10 text-sm">
          Open to internship opportunities, collaborations, and
          project discussions. Feel free to reach out!
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "vikrampimprikar@gmail.com",
              href: "mailto:vikrampimprikar@gmail.com",
            },
            {
              Icon: Github,
              label: "GitHub",
              value: "github.com/vikramp",
              href: "#",
            },
            {
              Icon: Linkedin,
              label: "LinkedIn",
              value: "in/vikrampimprikar",
              href: "#",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex flex-col items-center p-6 border border-purple-100 rounded-2xl hover:bg-purple-50 hover:border-purple-300 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                <c.Icon className="w-5 h-5 text-purple-700" />
              </div>
              <p className="text-xs text-gray-400 mb-1">
                {c.label}
              </p>
              <p className="text-xs font-medium text-gray-700 text-center break-all">
                {c.value}
              </p>
            </a>
          ))}
        </div>
        <a
          href="mailto:vikrampimprikar@gmail.com"
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-purple-200"
        >
          Send a Message <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

function FooterSection({
  onNavigate,
}: {
  onNavigate: (p: Page) => void;
}) {
  return (
    <footer className="bg-gray-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-2xl font-bold mb-3">
              VP<span className="text-purple-400">.</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Engineering student building secure,
              scalable, and intelligent systems.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-4 text-xs text-gray-400 uppercase tracking-wider">
              Case Studies
            </p>
            <div className="space-y-2">
              {[
                {
                  label: "DigiLocker UX/UI",
                  page: "digilocker" as Page,
                },
                {
                  label: "Banking Management System",
                  page: "banking" as Page,
                },
                {
                  label: "SOC RAG Chatbot",
                  page: "soc-rag" as Page,
                },
              ].map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-4 text-xs text-gray-400 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-2">
          <p>© 2024 Vikram Pimprikar. All rights reserved.</p>
          <p>
            B.Tech Computer Engineering · SPIT Mumbai ·
            2023–2027
          </p>
        </div>
      </div>
    </footer>
  );
}

function HomePage({
  onNavigate,
}: {
  onNavigate: (p: Page) => void;
}) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onNavigate={onNavigate} />
      <ContactSection />
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}

// ─── Case Study Shared ───────────────────────────────────────────────────────

function CaseStudyHero({
  title,
  subtitle,
  tags,
  gradient,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  gradient: string;
}) {
  return (
    <section
      className={`pt-36 pb-20 bg-gradient-to-br ${gradient} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// ─── DigiLocker Case Study ───────────────────────────────────────────────────

function DigiLockerPage() {
  return (
    <div>
      <CaseStudyHero
        title="DigiLocker UX/UI Redesign"
        subtitle="Reimagining India's national digital document locker for 100M+ users with modern UX principles, accessibility compliance, and intuitive navigation patterns."
        tags={[
          "UX Research",
          "UI Design",
          "Figma",
          "Accessibility",
          "Mobile-First",
        ]}
        gradient="from-purple-800 to-violet-600"
      />

      {/* Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Timeline",
                value: "8 Weeks",
                Icon: Calendar,
              },
              {
                label: "Role",
                value: "UX/UI Designer",
                Icon: User,
              },
              {
                label: "Tools",
                value: "Figma, FigJam",
                Icon: FileText,
              },
              {
                label: "Reach",
                value: "100M+ Citizens",
                Icon: Users,
              },
            ].map((item) => (
              <GlassCard
                key={item.label}
                className="p-5 text-center"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.Icon className="w-5 h-5 text-purple-700" />
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Problem Statement</SectionLabel>
          <SectionHeading>
            Why DigiLocker Needed a Redesign
          </SectionHeading>
          <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-xl text-gray-700 italic leading-relaxed">
            "DigiLocker's existing interface suffers from poor
            discoverability, confusing navigation, and a lack of
            accessibility — creating friction for millions of
            citizens accessing critical government documents."
          </blockquote>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Complex Navigation",
                desc: "The IA was structured around technical issuer categories rather than how users actually think about their documents.",
              },
              {
                title: "Poor Accessibility",
                desc: "No screen reader support, insufficient contrast ratios, and no keyboard navigation — excluding users with disabilities.",
              },
              {
                title: "Outdated Visual System",
                desc: "UI dated from 2016 with inconsistent components, mismatched typography, and zero design system in place.",
              },
            ].map((p) => (
              <GlassCard key={p.title} className="p-5">
                <div className="w-2 h-8 bg-purple-500 rounded-full mb-3" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Design Goals */}
      <section id="goals" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Design Goals</SectionLabel>
          <SectionHeading>
            What We Set Out to Achieve
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-3 mt-8">
            {[
              "Redesign the information architecture for intuitive document discovery",
              "Achieve WCAG 2.1 AA accessibility compliance across all screens",
              "Reduce time-to-document-access by at least 40%",
              "Build a scalable design system with reusable, documented components",
              "Design mobile-first responsive screens for all critical flows",
              "Create a trustworthy visual identity aligned with government branding",
            ].map((goal) => (
              <div
                key={goal}
                className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl"
              >
                <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Research */}
      <section id="research" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>User Research</SectionLabel>
          <SectionHeading>
            Understanding Real Users
          </SectionHeading>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[
              {
                stat: "24",
                label: "Users Interviewed",
                color: "text-purple-700",
              },
              {
                stat: "87%",
                label: "Reported Nav Issues",
                color: "text-red-600",
              },
              {
                stat: "63%",
                label: "Mobile-Only Users",
                color: "text-blue-600",
              },
              {
                stat: "41%",
                label: "Used It Only Once",
                color: "text-orange-600",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <p
                  className={`text-4xl font-bold ${item.color} mb-2`}
                >
                  {item.stat}
                </p>
                <p className="text-xs text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-5">
            User Pain Points
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                Icon: Search,
                title: "Can't Find Documents",
                desc: "Users searched by document name but the system organized by issuer — a fundamental mental model mismatch.",
                severity: "Critical",
              },
              {
                Icon: Smartphone,
                title: "Broken Mobile Experience",
                desc: "The mobile web app had horizontal overflow, tiny tap targets, and a non-functional upload flow.",
                severity: "Critical",
              },
              {
                Icon: Eye,
                title: "Poor Visual Hierarchy",
                desc: "Primary actions like 'Upload' and 'Share' were visually de-emphasized compared to secondary navigation items.",
                severity: "High",
              },
              {
                Icon: AlertTriangle,
                title: "Trust & Verification Confusion",
                desc: "Users couldn't distinguish government-verified documents from self-uploaded ones, creating anxiety.",
                severity: "High",
              },
            ].map((p) => (
              <GlassCard key={p.title} className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <p.Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 text-sm">
                        {p.title}
                      </h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.severity === "Critical" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"}`}
                      >
                        {p.severity}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Persona */}
      <section id="persona" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>User Persona</SectionLabel>
          <SectionHeading>Meet Our Primary User</SectionHeading>
          <GlassCard className="p-8 mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-violet-300 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    AK
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Ananya Kumar
                </h3>
                <p className="text-sm text-gray-500">
                  Age 28 · College Graduate
                </p>
                <p className="text-sm text-purple-600 font-medium mt-1">
                  Junior Bank Employee, Pune
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {[
                    "Tech-comfortable",
                    "Mobile-first",
                    "Time-pressured",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-purple-600" />{" "}
                  Goals
                </h4>
                <ul className="space-y-2">
                  {[
                    "Quickly access Aadhaar & PAN for KYC",
                    "Share documents with employers digitally",
                    "Store academic certificates safely in one place",
                  ].map((g) => (
                    <li
                      key={g}
                      className="text-xs text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-0.5">
                        ▸
                      </span>{" "}
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-red-500" />{" "}
                  Frustrations
                </h4>
                <ul className="space-y-2">
                  {[
                    "Can't locate her insurance policy documents quickly",
                    "Upload silently fails on mobile without any error message",
                    "No way to tell which documents are officially verified",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-xs text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-red-400 mt-0.5">
                        ▸
                      </span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* User Journey Map */}
      <section id="journey" className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>User Journey Map</SectionLabel>
          <SectionHeading>
            Ananya's Document Access Journey
          </SectionHeading>
          <div className="overflow-x-auto mt-8">
            <table className="w-full min-w-[680px] border-collapse text-xs">
              <thead>
                <tr>
                  {[
                    "Stage",
                    "Login",
                    "Upload",
                    "Verification",
                    "Access",
                  ].map((h, i) => (
                    <th
                      key={h}
                      className={`p-3 text-left font-semibold border border-gray-200 ${i === 0 ? "bg-gray-100 text-gray-600" : "bg-purple-700 text-white"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    row: "Actions",
                    cells: [
                      "OTP login via mobile",
                      "Select type & upload file",
                      "Wait for issuer approval",
                      "Open & share document",
                    ],
                  },
                  {
                    row: "Thoughts",
                    cells: [
                      "'Why is OTP so slow?'",
                      "'Which category is this?'",
                      "'How long will this take?'",
                      "'Is this the right version?'",
                    ],
                  },
                  {
                    row: "Emotions",
                    cells: [
                      "😐 Neutral",
                      "😕 Confused",
                      "😟 Anxious",
                      "😌 Relieved",
                    ],
                  },
                  {
                    row: "Pain Points",
                    cells: [
                      "OTP timeout issues",
                      "Unclear document categories",
                      "No progress indicator",
                      "Multiple similar files, no sorting",
                    ],
                  },
                  {
                    row: "Opportunities",
                    cells: [
                      "Biometric / faster auth",
                      "Smart category suggestions",
                      "Real-time status updates",
                      "Version history & labels",
                    ],
                  },
                ].map((row) => (
                  <tr key={row.row}>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50 border border-gray-200">
                      {row.row}
                    </td>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className="p-3 text-gray-600 bg-white border border-gray-200"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section id="competitive" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Competitive Analysis</SectionLabel>
          <SectionHeading>
            How DigiLocker Compares
          </SectionHeading>
          <div className="overflow-x-auto mt-8">
            <table className="w-full min-w-[600px] border-collapse text-xs">
              <thead>
                <tr>
                  {[
                    "Feature",
                    "DigiLocker Before",
                    "Google Drive",
                    "Dropbox",
                    "DigiLocker Redesign",
                  ].map((h, i) => (
                    <th
                      key={h}
                      className={`p-3 text-left font-semibold border border-gray-200 ${i === 0 ? "bg-gray-50" : i === 4 ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Gov't Verified Docs",
                    scores: ["✓", "✗", "✗", "✓ Enhanced"],
                  },
                  {
                    feature: "Mobile Experience",
                    scores: [
                      "⚠ Poor",
                      "✓ Good",
                      "✓ Good",
                      "✓ Excellent",
                    ],
                  },
                  {
                    feature: "Accessibility (WCAG)",
                    scores: [
                      "✗ None",
                      "✓ Partial",
                      "✓ Partial",
                      "✓ AA Compliant",
                    ],
                  },
                  {
                    feature: "Document Sharing",
                    scores: [
                      "✓ Basic",
                      "✓ Full",
                      "✓ Full",
                      "✓ Enhanced",
                    ],
                  },
                  {
                    feature: "Onboarding Flow",
                    scores: [
                      "⚠ Confusing",
                      "✓ Clear",
                      "✓ Clear",
                      "✓ Redesigned",
                    ],
                  },
                  {
                    feature: "Design System",
                    scores: [
                      "✗ None",
                      "✓ Yes",
                      "✓ Yes",
                      "✓ Custom Built",
                    ],
                  },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50 border border-gray-200">
                      {row.feature}
                    </td>
                    {row.scores.map((score, i) => (
                      <td
                        key={i}
                        className={`p-3 border border-gray-200 ${i === 3 ? "bg-purple-50 text-purple-800 font-semibold" : "text-gray-600"}`}
                      >
                        {score}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section
        id="design-system"
        className="py-16 bg-purple-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Design System</SectionLabel>
          <SectionHeading>
            Colors, Typography & Components
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-5 text-sm">
                Color Palette
              </h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Primary Purple",
                    hex: "#6D28D9",
                    tw: "bg-purple-700",
                  },
                  {
                    name: "Violet Accent",
                    hex: "#7C3AED",
                    tw: "bg-violet-600",
                  },
                  {
                    name: "Lavender BG",
                    hex: "#EDE9FE",
                    tw: "bg-purple-100",
                    dark: true,
                  },
                  {
                    name: "Deep Navy",
                    hex: "#1E1B4B",
                    tw: "bg-indigo-950",
                  },
                  {
                    name: "Success Green",
                    hex: "#059669",
                    tw: "bg-emerald-600",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-12 h-10 ${c.tw} rounded-lg shadow-sm ${c.dark ? "border border-gray-200" : ""}`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {c.name}
                      </p>
                      <p className="text-xs text-gray-400 font-mono">
                        {c.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-5 text-sm">
                Typography Scale
              </h3>
              <div className="space-y-5">
                {[
                  {
                    name: "Display / H1",
                    size: "text-3xl",
                    weight: "font-bold",
                    sample: "Document Locker",
                  },
                  {
                    name: "Heading / H2",
                    size: "text-xl",
                    weight: "font-bold",
                    sample: "My Documents",
                  },
                  {
                    name: "Subheading / H3",
                    size: "text-base",
                    weight: "font-semibold",
                    sample: "Uploaded Today",
                  },
                  {
                    name: "Body",
                    size: "text-sm",
                    weight: "font-normal",
                    sample:
                      "Aadhaar Card · Verified · Updated 2 days ago",
                  },
                  {
                    name: "Caption",
                    size: "text-xs",
                    weight: "font-normal",
                    sample:
                      "Last accessed: 14 Nov 2024, 3:42 PM",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="border-b border-gray-100 pb-4"
                  >
                    <p className="text-xs text-gray-400 mb-1">
                      {t.name}
                    </p>
                    <p
                      className={`${t.size} ${t.weight} text-gray-900`}
                    >
                      {t.sample}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionLabel>Before vs After</SectionLabel>

    <SectionHeading>
      The Transformation
    </SectionHeading>

    <div className="grid md:grid-cols-2 gap-8 mt-10">

      {/* Before */}
      <GlassCard className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-red-500">
          🔴 Before — Original DigiLocker
        </h3>

        <img
          src={clutteredImage}
          alt="Original DigiLocker UI"
          className="w-full rounded-xl border"
        />

        <p className="mt-4 text-sm text-gray-600">
          Cluttered layout, weak visual hierarchy, inconsistent spacing,
          and difficult document navigation.
        </p>
      </GlassCard>

      {/* After */}
      <GlassCard className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-green-600">
          🟢 After — Redesigned DigiLocker
        </h3>

        <img
          src={digiLockerImage}
          alt="Redesigned DigiLocker UI"
          className="w-full rounded-xl border"
        />

        <p className="mt-4 text-sm text-gray-600">
          Improved information architecture, modern UI components,
          accessibility-focused design, and streamlined document management.
        </p>
      </GlassCard>

    </div>
  </div>
</section>

      {/* Challenges & Learnings */}
      <section id="challenges" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Challenges</SectionLabel>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Was Hard
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Stakeholder Constraints",
                    desc: "Government branding requirements limited radical visual changes — innovation had to happen within strict brand boundaries.",
                  },
                  {
                    title: "Accessibility vs Aesthetics",
                    desc: "Balancing WCAG compliance with visual appeal required extensive iteration on color choices and contrast ratios.",
                  },
                  {
                    title: "Designing for Scale",
                    desc: "Accounting for 100M+ users across literacy levels, device types, and connectivity meant dozens of edge cases.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {c.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Learnings</SectionLabel>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Takeaways
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Research Before Design",
                    desc: "User interviews revealed assumptions I held about navigation that turned out to be completely wrong for this audience.",
                  },
                  {
                    title: "Accessible First = Better for All",
                    desc: "Every accessibility improvement also improved usability for non-disabled users. Accessibility is simply good design.",
                  },
                  {
                    title: "Systems Thinking",
                    desc: "A design system isn't just a deliverable — it's the infrastructure that makes every other deliverable higher quality.",
                  },
                ].map((l) => (
                  <div
                    key={l.title}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {l.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {l.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Outcome */}
      <section
        id="outcome"
        className="py-20 bg-gradient-to-br from-purple-800 to-violet-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Final Outcome</SectionLabel>
          <SectionHeading light>
            Results That Speak
          </SectionHeading>
          <p className="text-white/75 mb-12 max-w-xl mx-auto text-sm">
            Usability testing with 12 participants validated
            significant improvements across all key metrics.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                stat: "42%",
                label: "Reduction in Time to Find Documents",
              },
              {
                stat: "WCAG AA",
                label: "Accessibility Compliance Achieved",
              },
              {
                stat: "4.6/5",
                label: "User Satisfaction Score",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7"
              >
                <p className="text-4xl font-bold text-white mb-2">
                  {item.stat}
                </p>
                <p className="text-white/65 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Banking Case Study ──────────────────────────────────────────────────────

function BankingPage() {
  const archSteps = [
    {
      Icon: Monitor,
      label: "Frontend",
      sublabel: "React + Bootstrap",
      color: "bg-blue-600",
    },
    {
      Icon: Server,
      label: "Backend API",
      sublabel: "Node.js + Express.js",
      color: "bg-green-600",
    },
    {
      Icon: Key,
      label: "Auth Middleware",
      sublabel: "JWT Token Validation",
      color: "bg-yellow-500",
    },
    {
      Icon: Database,
      label: "Database Layer",
      sublabel: "SQLite / PostgreSQL",
      color: "bg-purple-700",
    },
  ];

  return (
    <div>
      <CaseStudyHero
        title="Banking Management System"
        subtitle="A full-stack web application for managing bank accounts, transactions, KYC verification, and credit scoring — built with secure JWT authentication and a clean RESTful API."
        tags={[
          "React",
          "Node.js",
          "Express",
          "SQLite/PostgreSQL",
          "JWT",
          "Full-Stack",
        ]}
        gradient="from-indigo-800 to-blue-600"
      />

      {/* Tech Stack */}
      <section id="tech-overview" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              {
                layer: "Frontend",
                tech: "React + Bootstrap",
                Icon: Monitor,
                bg: "bg-blue-100",
                color: "text-blue-700",
              },
              {
                layer: "Backend",
                tech: "Node.js + Express",
                Icon: Server,
                bg: "bg-green-100",
                color: "text-green-700",
              },
              {
                layer: "Database",
                tech: "SQLite / PostgreSQL",
                Icon: Database,
                bg: "bg-purple-100",
                color: "text-purple-700",
              },
              {
                layer: "Auth",
                tech: "JWT Tokens",
                Icon: Key,
                bg: "bg-yellow-100",
                color: "text-yellow-700",
              },
              {
                layer: "Version Control",
                tech: "Git + GitHub",
                Icon: GitBranch,
                bg: "bg-gray-100",
                color: "text-gray-700",
              },
            ].map((item) => (
              <GlassCard
                key={item.layer}
                className="p-5 text-center"
              >
                <div
                  className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}
                >
                  <item.Icon
                    className={`w-5 h-5 ${item.color}`}
                  />
                </div>
                <p className="text-xs text-gray-400 mb-1">
                  {item.layer}
                </p>
                <p className="text-xs font-bold text-gray-800">
                  {item.tech}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Objectives */}
      <section id="problem" className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Problem Statement</SectionLabel>
              <SectionHeading>The Challenge</SectionHeading>
              <p className="text-gray-600 leading-relaxed text-sm">
                Traditional banking software is often
                monolithic, difficult to maintain, and lacks
                modern developer ergonomics. This project aimed
                to build a clean, RESTful banking system that
                demonstrates modern full-stack architecture —
                from secure authentication to real-time
                transaction processing and intelligent credit
                scoring.
              </p>
            </div>
            <div>
              <SectionLabel>Objectives</SectionLabel>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                What We Built
              </h3>
              <ul className="space-y-2">
                {[
                  "Secure JWT-based user registration and authentication",
                  "Multi-account creation, management, and balance tracking",
                  "Transaction history with filtering, sorting, and search",
                  "KYC document upload and admin verification workflow",
                  "Algorithmic credit score calculation engine",
                  "Admin panel for complete user and transaction oversight",
                ].map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Core Modules</SectionLabel>
          <SectionHeading>Key Features</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              {
                Icon: Key,
                title: "User Authentication",
                desc: "JWT register/login/logout with bcrypt password hashing and token refresh rotation.",
                bg: "bg-yellow-100",
                color: "text-yellow-700",
              },
              {
                Icon: Database,
                title: "Account Management",
                desc: "Create multiple account types (savings, current), view balances, and manage settings.",
                bg: "bg-blue-100",
                color: "text-blue-700",
              },
              {
                Icon: TrendingUp,
                title: "Transaction Processing",
                desc: "Deposit, withdrawal, and fund transfers with real-time balance updates and full history.",
                bg: "bg-green-100",
                color: "text-green-700",
              },
              {
                Icon: FileText,
                title: "KYC Module",
                desc: "Upload Aadhaar, PAN, and bank statements. Track verification status with admin approval workflow.",
                bg: "bg-purple-100",
                color: "text-purple-700",
              },
              {
                Icon: Award,
                title: "Credit Score Engine",
                desc: "Algorithmic credit scoring based on transaction frequency, balance patterns, and account age.",
                bg: "bg-orange-100",
                color: "text-orange-700",
              },
              {
                Icon: Shield,
                title: "Admin Panel",
                desc: "Monitor all users, transactions, and KYC submissions with advanced filtering and data export.",
                bg: "bg-red-100",
                color: "text-red-700",
              },
            ].map((f) => (
              <GlassCard key={f.title} className="p-5">
                <div
                  className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <f.Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  {f.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>System Architecture</SectionLabel>
              <SectionHeading>
                How It All Connects
              </SectionHeading>
              <p className="text-gray-600 text-sm leading-relaxed">
                A clean three-tier architecture with a React
                frontend, Node.js/Express REST API backend, and
                SQLite/PostgreSQL database — connected through
                JWT-verified middleware for every protected
                route.
              </p>
            </div>
            <div className="flex flex-col items-center">
              {archSteps.map((step, idx) => (
                <div key={step.label}>
                  <div
                    className={`w-72 p-4 ${step.color} text-white rounded-2xl flex items-center gap-4 shadow-md`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        {step.label}
                      </p>
                      <p className="text-xs text-white/75">
                        {step.sublabel}
                      </p>
                    </div>
                    <div className="ml-auto bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                  </div>
                  {idx < archSteps.length - 1 && (
                    <ArrowConnector />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auth Flow */}
      <section id="auth" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Authentication Flow</SectionLabel>
          <SectionHeading>JWT-Based Security</SectionHeading>
          <div className="mt-8 overflow-x-auto">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2 min-w-[600px] justify-center">
              {[
                {
                  label: "User Registers",
                  bg: "bg-blue-100 text-blue-700 border-blue-200",
                },
                "→",
                {
                  label: "Hash Password (bcrypt)",
                  bg: "bg-green-100 text-green-700 border-green-200",
                },
                "→",
                {
                  label: "Store in DB",
                  bg: "bg-purple-100 text-purple-700 border-purple-200",
                },
                "→",
                {
                  label: "Issue JWT Token",
                  bg: "bg-yellow-100 text-yellow-700 border-yellow-200",
                },
                "→",
                {
                  label: "Access Protected Routes",
                  bg: "bg-indigo-100 text-indigo-700 border-indigo-200",
                },
              ].map((step, i) =>
                typeof step === "string" ? (
                  <span
                    key={i}
                    className="text-gray-400 text-lg font-light"
                  >
                    →
                  </span>
                ) : (
                  <div
                    key={i}
                    className={`px-3 py-2.5 rounded-xl border ${step.bg} text-xs font-semibold text-center whitespace-nowrap`}
                  >
                    {step.label}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section id="dashboard" className="py-16 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>UI Screens</SectionLabel>
          <SectionHeading>Dashboard Interface</SectionHeading>
          <GlassCard className="mt-8 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <div className="flex-1 bg-white rounded-md h-6 ml-4 flex items-center px-3 border border-gray-200">
                <span className="text-xs text-gray-400">
                  localhost:3000/dashboard
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                {[
                  {
                    label: "Total Balance",
                    value: "₹1,24,500",
                    color: "bg-indigo-600",
                  },
                  {
                    label: "Transactions",
                    value: "247",
                    color: "bg-purple-600",
                  },
                  {
                    label: "Credit Score",
                    value: "742",
                    color: "bg-emerald-600",
                  },
                  {
                    label: "KYC Status",
                    value: "Verified",
                    color: "bg-blue-600",
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className={`${card.color} text-white rounded-xl p-4`}
                  >
                    <p className="text-xs text-white/70 mb-1">
                      {card.label}
                    </p>
                    <p className="text-xl font-bold">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-600 mb-3">
                    Recent Transactions
                  </p>
                  {[
                    {
                      desc: "Rent Payment",
                      amount: "−₹15,000",
                      credit: false,
                    },
                    {
                      desc: "Salary Credit",
                      amount: "+₹55,000",
                      credit: true,
                    },
                    {
                      desc: "UPI Transfer to Rahul",
                      amount: "−₹2,300",
                      credit: false,
                    },
                    {
                      desc: "Interest Credit",
                      amount: "+₹418",
                      credit: true,
                    },
                  ].map((tx) => (
                    <div
                      key={tx.desc}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-xs text-gray-700">
                        {tx.desc}
                      </span>
                      <span
                        className={`text-xs font-semibold ${tx.credit ? "text-emerald-600" : "text-red-500"}`}
                      >
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-600 mb-3">
                    Credit Score Breakdown
                  </p>
                  <div className="text-center py-4">
                    <p className="text-5xl font-bold text-indigo-600">
                      742
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Good Standing
                    </p>
                  </div>
                  <div className="space-y-2 mt-3">
                    {[
                      { label: "Payment History", pct: 90 },
                      { label: "Account Age", pct: 65 },
                      { label: "Transaction Freq.", pct: 78 },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">
                            {bar.label}
                          </span>
                          <span className="text-indigo-600 font-medium">
                            {bar.pct}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full">
                          <div
                            className="h-1.5 bg-indigo-500 rounded-full"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Security Features</SectionLabel>
          <SectionHeading>
            Built Secure from the Ground Up
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {
                Icon: Key,
                title: "JWT Authentication",
                desc: "Stateless token-based auth with expiry, refresh token rotation, and secure httpOnly cookie storage.",
              },
              {
                Icon: Lock,
                title: "Password Hashing",
                desc: "bcrypt with configurable salt rounds — passwords are never stored or transmitted in plain text.",
              },
              {
                Icon: Shield,
                title: "Route Guards",
                desc: "Middleware-level protection on all private API endpoints — unauthorized requests are rejected at the boundary.",
              },
              {
                Icon: AlertTriangle,
                title: "Input Validation",
                desc: "Server-side validation and sanitization on all inputs to prevent SQL injection, XSS, and parameter tampering.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 p-5 border border-indigo-100 rounded-2xl bg-indigo-50"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <s.Icon className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future & GitHub */}
      <section
        id="future"
        className="py-20 bg-gradient-to-br from-indigo-800 to-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Future Scope</SectionLabel>
              <h3 className="text-2xl font-bold mb-6">
                What's Next
              </h3>
              <ul className="space-y-3">
                {[
                  "UPI payment gateway integration",
                  "ML-based fraud detection module",
                  "Real-time notifications via WebSockets",
                  "Loan origination and EMI calculator",
                  "Mobile app with React Native",
                  "CI/CD pipeline with Docker deployment",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <SectionLabel>GitHub</SectionLabel>
              <h3 className="text-2xl font-bold mb-4">
                View the Code
              </h3>
              <p className="text-white/65 text-sm mb-6 leading-relaxed">
                Full source code, setup instructions, and API
                documentation available on GitHub.
              </p>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl transition-colors font-medium text-sm"
              >
                <Github className="w-5 h-5" />
                github.com/vikramp/banking-system
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SOC RAG Case Study ──────────────────────────────────────────────────────

function SOCRAGPage() {
  const pipelineSteps = [
    {
      Icon: FileText,
      label: "Documents",
      sublabel: "Playbooks, SOPs, Incident Docs",
      color: "bg-slate-600",
    },
    {
      Icon: Layers,
      label: "Chunking",
      sublabel: "Recursive character text splitting",
      color: "bg-indigo-600",
    },
    {
      Icon: Cpu,
      label: "Embeddings",
      sublabel: "all-MiniLM-L6-v2 vector encoding",
      color: "bg-violet-600",
    },
    {
      Icon: Database,
      label: "Vector Database",
      sublabel: "ChromaDB cosine similarity index",
      color: "bg-purple-700",
    },
    {
      Icon: Search,
      label: "Retriever",
      sublabel: "Top-5 chunks via MMR search",
      color: "bg-blue-600",
    },
    {
      Icon: Brain,
      label: "LLM",
      sublabel: "Gemini Pro / GPT-4 generation",
      color: "bg-emerald-600",
    },
    {
      Icon: MessageSquare,
      label: "Response",
      sublabel: "Grounded, source-cited answer",
      color: "bg-teal-600",
    },
  ];

  return (
    <div>
      <CaseStudyHero
        title="SOC RAG Chatbot"
        subtitle="An AI-powered Security Knowledge & Playbook Assistant using Retrieval-Augmented Generation — enabling SOC analysts to query playbooks, SOPs, and incident response documentation in natural language."
        tags={[
          "RAG",
          "Python",
          "LLM",
          "ChromaDB",
          "Cybersecurity",
          "Generative AI",
        ]}
        gradient="from-slate-900 to-indigo-800"
      />

      {/* Problem */}
      <section id="problem" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Problem Statement</SectionLabel>
          <SectionHeading>The SOC Knowledge Gap</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm">
            Security Operations Center (SOC) analysts are
            overwhelmed during active incidents, needing to
            rapidly reference playbooks, SOPs, and past incident
            reports. Traditional keyword search tools return
            entire documents — not specific, actionable answers
            — costing critical time.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                Icon: AlertTriangle,
                title: "Information Overload",
                desc: "Analysts manually search hundreds of pages of playbooks while managing an active incident in real time.",
                bg: "bg-red-100",
                color: "text-red-700",
              },
              {
                Icon: Eye,
                title: "Slow Response Time",
                desc: "Average of 12 minutes spent finding the right SOP — critical time lost during high-pressure incident response.",
                bg: "bg-orange-100",
                color: "text-orange-700",
              },
              {
                Icon: Users,
                title: "Knowledge Silos",
                desc: "Senior analyst expertise is locked in documents that junior analysts cannot effectively query or discover.",
                bg: "bg-yellow-100",
                color: "text-yellow-700",
              },
            ].map((p) => (
              <GlassCard key={p.title} className="p-5">
                <div
                  className={`w-10 h-10 ${p.bg} rounded-xl flex items-center justify-center mb-3`}
                >
                  <p.Icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why RAG */}
      <section id="why-rag" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why RAG?</SectionLabel>
          <SectionHeading>
            The Case for Retrieval-Augmented Generation
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="font-bold text-red-800 mb-4 text-sm">
                Without RAG — Plain LLM
              </h4>
              <ul className="space-y-2">
                {[
                  "Generic responses not grounded in your actual docs",
                  "Hallucinations about specific SOPs and procedures",
                  "No knowledge of your internal playbooks",
                  "Cannot reference proprietary or classified content",
                  "Requires retraining to update knowledge",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs text-red-700 flex items-start gap-2"
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      ✗
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <h4 className="font-bold text-emerald-800 mb-4 text-sm">
                With RAG
              </h4>
              <ul className="space-y-2">
                {[
                  "Answers grounded in your real playbooks with citations",
                  "References specific document sections and page numbers",
                  "Works with proprietary and internal knowledge bases",
                  "Updatable without retraining — just add new documents",
                  "Transparent reasoning with source attribution",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs text-emerald-700 flex items-start gap-2"
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      ✓
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Pipeline */}
      <section id="architecture" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>System Architecture</SectionLabel>
              <SectionHeading>The RAG Pipeline</SectionHeading>
              <p className="text-gray-600 text-sm leading-relaxed">
                A seven-stage pipeline transforms raw security
                documents into precise, grounded answers — from
                ingestion and chunking through embedding,
                retrieval, and LLM-powered response generation.
              </p>
            </div>
            <div className="flex flex-col items-center">
              {pipelineSteps.map((step, idx) => (
                <div key={step.label}>
                  <div
                    className={`w-72 p-4 ${step.color} text-white rounded-2xl flex items-center gap-3 shadow-md`}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm">
                        {step.label}
                      </p>
                      <p className="text-xs text-white/70 truncate">
                        {step.sublabel}
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-lg w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowConnector />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section id="technical" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Technical Implementation</SectionLabel>
          <SectionHeading>Under the Hood</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              {
                Icon: FileText,
                title: "Data Ingestion",
                desc: "PDF, DOCX, and markdown files loaded via LangChain loaders with metadata extraction for source attribution in every response.",
                bg: "bg-slate-100",
                color: "text-slate-700",
              },
              {
                Icon: Layers,
                title: "Chunking Strategy",
                desc: "Recursive character text splitter — 512-token chunks with 50-token overlap to preserve context across chunk boundaries.",
                bg: "bg-indigo-100",
                color: "text-indigo-700",
              },
              {
                Icon: Cpu,
                title: "Embeddings",
                desc: "sentence-transformers/all-MiniLM-L6-v2 for fast, semantically rich vector representations of every chunk.",
                bg: "bg-violet-100",
                color: "text-violet-700",
              },
              {
                Icon: Database,
                title: "Vector Database",
                desc: "ChromaDB for persistent local vector storage with cosine similarity search and metadata-based filtering.",
                bg: "bg-purple-100",
                color: "text-purple-700",
              },
              {
                Icon: Search,
                title: "Retrieval",
                desc: "Top-5 chunk retrieval using Maximal Marginal Relevance (MMR) to balance relevance with response diversity.",
                bg: "bg-blue-100",
                color: "text-blue-700",
              },
              {
                Icon: Brain,
                title: "LLM Integration",
                desc: "Gemini Pro / GPT-4 as generation backbone with system prompts constraining output strictly to retrieved context.",
                bg: "bg-emerald-100",
                color: "text-emerald-700",
              },
            ].map((item) => (
              <GlassCard key={item.title} className="p-5">
                <div
                  className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <item.Icon
                    className={`w-5 h-5 ${item.color}`}
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

{/* Chat Interface */}
<section id="interface" className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <SectionLabel>Chat Interface</SectionLabel>

    <SectionHeading>
      SOC Analyst Experience
    </SectionHeading>

    <GlassCard className="mt-8 overflow-hidden p-4">
      <img
        src={socChatbotImage}
        alt="SOC RAG Chatbot Screenshot"
        className="w-full rounded-xl"
      />
    </GlassCard>
  </div>
</section>

      {/* Results & Future */}
      <section id="results" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Results</SectionLabel>
              <SectionHeading>What We Achieved</SectionHeading>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { stat: "~3s", label: "Avg. Response Time" },
                  { stat: "92%", label: "Answer Accuracy" },
                  { stat: "247", label: "Documents Indexed" },
                  {
                    stat: "8×",
                    label: "Faster Than Manual Search",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
                  >
                    <p className="text-2xl font-bold text-indigo-700 mb-1">
                      {item.stat}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Future Scope</SectionLabel>
              <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-5">
                Roadmap
              </h3>
              <ul className="space-y-3">
                {[
                  "Real-time SIEM integration (Splunk, Elastic)",
                  "Multi-modal input — screenshots and log files",
                  "Automated incident report generation",
                  "Fine-tuned security domain LLM",
                  "Role-based access control for classified playbooks",
                  "MITRE ATT&CK framework mapping integration",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-gray-700"
                  >
                    <Zap className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section
        id="github"
        className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Open Source</SectionLabel>
          <SectionHeading light>
            Explore the Code
          </SectionHeading>
          <p className="text-white/65 mb-8 text-sm">
            Full implementation including ingestion pipeline,
            retrieval logic, and chat interface available on
            GitHub.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            github.com/vikramp/soc-rag-chatbot
            <ExternalLink className="w-4 h-4 ml-auto" />
          </a>
        </div>
      </section>
    </div>
  );
}

// ─── App Root ────────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setActivePage(page);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav activePage={activePage} onNavigate={navigate} />
      <main>
        {activePage === "home" && (
          <HomePage onNavigate={navigate} />
        )}
        {activePage === "digilocker" && <DigiLockerPage />}
        {activePage === "banking" && <BankingPage />}
        {activePage === "soc-rag" && <SOCRAGPage />}
      </main>
    </div>
  );
}