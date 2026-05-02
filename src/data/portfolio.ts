export const owner = {
  name: "Santa Herizo RAZAFINDRAKOTO",
  firstName: "Santa Herizo",
  lastName: "RAZAFINDRAKOTO",
  title: "Développeur Fullstack",
  tagline:
    "Je conçois des systèmes backend robustes et des interfaces soignées, de la conception à la mise en production.",
  location: "Antananarivo, Madagascar",
  available: true,
  photo: "/sanzouh_short-rem-bg.png",
} as const

export const links = {
  github: "https://github.com/sanzouh",
  linkedin: "https://linkedin.com/in/santa-herizo",
  codersrank: "https://profile.codersrank.io/user/sanzouh",
  email: "santaherizo2.0@gmail.com",
  phone: "+261 34 41 140 66",
  cv: "/CV-Final-RAZAFINDRAKOTO-Santa-Herizo.pdf",
  formspree: "mqenavoe",
} as const

export const about = {
  bio: [
    "Je suis un développeur fullstack avec plusieurs années de formation intensive couvrant l'intégralité du cycle de vie d'un projet, de la conception à la mise en production.",
    "Je travaille principalement avec Node.js, NestJS et React, en concevant des architectures backend propres et des interfaces soignées.",
    "J'ai également de l'expérience en DevOps : CI/CD, conteneurisation Docker, pipelines GitHub Actions.",
    "Mon objectif : devenir un ingénieur backend solide, capable de construire des systèmes performants et distribués.",
  ],
  seeking:
    "Je suis actuellement à la recherche d'un stage 6 mois remote ou d'un poste junior backend.",
} as const

export const services = [
  {
    number: "01",
    tags: ["NODE", "EXPRESS", "NESTJS"],
    title: "Backend Development",
    description:
      "Construction d'APIs robustes et scalables avec Node.js, Express et NestJS, sur bases relationnelles et NoSQL.",
  },
  {
    number: "02",
    tags: ["DOCKER", "GITHUB ACTIONS"],
    title: "DevOps & CI/CD",
    description:
      "Automatisation des déploiements et pipelines d'intégration continue via Docker et Jenkins.",
  },
  {
    number: "03",
    tags: ["REST", "SQL", "NOSQL"],
    title: "Database & API Design",
    description:
      "Conception de schémas efficaces, APIs RESTful et optimisation des requêtes pour la performance.",
  },
] as const

export const stack = [
  "Node.js",
  "Express",
  "NestJS",
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Laravel",
  "Spring Boot",
  "Tailwind CSS",
  "shadcn/ui",
  "Jest",
  "Swagger",
] as const

export const stackCategories = [
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "Laravel", "Spring Boot"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  { label: "DevOps", items: ["Docker", "GitHub Actions", "Jenkins"] },
  { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"] },
  { label: "Tooling", items: ["Jest", "Swagger"] },
] as const

export type Project = {
  id: string
  category: string
  name: string
  tags: string[]
  github: string | null
  live: string | null
  screenshot: string | null
  shortDesc: string
  deepDive: string
}

export const projects: Project[] = [
  {
    id: "01",
    category: "BI · JAVA",
    name: "HR Reporting",
    tags: ["Java 21", "Swing", "H2 Database", "JFreeChart", "Apache POI"],
    github: "https://github.com/sanzouh/hr-reporting",
    live: null,
    screenshot: "projects_screenshots/hr-reporting-pic-1.png",
    shortDesc: "Système d'Information Décisionnel RH",
    deepDive:
      "Pipeline ETL multi-sources (CSV, Excel, SQLite) avec nettoyage, normalisation et chargement dans un Data Warehouse H2 en schéma étoile (5 dimensions, 12 KPI). Dashboard Swing interactif avec filtrage dynamique, graphiques JFreeChart et système d'insights automatiques.",
  },
  {
    id: "02",
    category: "FULLSTACK · DEVOPS",
    name: "BankAudit",
    tags: ["React", "Laravel", "Docker", "MySQL", "PHPUnit", "Swagger"],
    github: "https://github.com/sanzouh/banking-app",
    live: null,
    screenshot: null,
    shortDesc: "Système de Gestion Bancaire avec Audit Automatisé",
    deepDive:
      "Triggers SQL (INSERT/UPDATE/DELETE) pour audit automatique. API REST sécurisée avec Sanctum et contrôle d'accès par rôle. Conteneurisation complète PHP-FPM + Nginx + MySQL + React. Tests PHPUnit et documentation OpenAPI/Swagger.",
  },
  {
    id: "03",
    category: "FINANCE · ALGO",
    name: "GenAlpha",
    tags: ["React", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "Vercel"],
    github: "https://github.com/sanzouh/GenAlpha-CICD",
    live: "https://genalpha-cicd.vercel.app/",
    screenshot: "projects_screenshots/genalpha-cicd-pic-1.png",
    shortDesc: "Optimiseur de Portefeuille par Algorithme Génétique",
    deepDive:
      "Algorithme génétique complet (sélection, croisement, mutation, élitisme) pour optimisation bi-objectif rendement/risque selon Markowitz. Front de Pareto dynamique (O(n²)), visualisation temps réel, filtrage multicritère, comparaison vs S&P 500. CI/CD GitHub Actions + Vercel.",
  },
  {
    id: "04",
    category: "FULLSTACK · SCHEDULING",
    name: "ScheduleManager",
    tags: ["Node.js", "Express", "Prisma", "SQLite", "React 19", "Jest"],
    github: "https://github.com/sanzouh/ScheduleManager",
    live: null,
    screenshot: "projects_screenshots/eni-schedule-manager-pic-1.png",
    shortDesc: "Plateforme de Gestion d'Emplois du Temps Universitaire",
    deepDive:
      "API REST Node.js/Express avec Prisma ORM. Gestion des conflits horaires (professeur, salle, classe) via contraintes multi-entités. Interface React avec détection en temps réel des chevauchements. Tests unitaires Jest et migrations Prisma automatisées.",
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: "Ministère des Mines",
    role: "Développeur Fullstack",
    period: "Sep 2024 – Déc 2024",
    description:
      "Application web de gestion des congés RH. Modélisation UML/Merise, implémentation fullstack, livraison en autonomie.",
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
  {
    company: "Gendarmerie Nationale Malagasy",
    role: "Développeur Logiciel",
    period: "Oct 2023 – Déc 2023",
    description:
      "Plateforme de messagerie sécurisée inter-unités avec API SMS temps réel. Déploiement Linux/Debian via GNS3.",
    stack: ["PHP (Jelix)", "MySQL", "JavaScript", "Linux Debian"],
  },
]
