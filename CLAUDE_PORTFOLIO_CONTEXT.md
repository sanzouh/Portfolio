# Contexte Portfolio — Santa Herizo RAZAFINDRAKOTO

## Mission

Construire un portfolio personnel de développeur fullstack, dark theme, typé tech/hacker.
Inspiration visuelle : https://josephin-sylvere.vercel.app/
Stack : Next.js + TypeScript + Tailwind CSS + shadcn/ui

---

## Identité

```ts
const owner = {
	name: "Santa Herizo RAZAFINDRAKOTO",
	title: "Développeur Fullstack",
	tagline:
		"Je conçois des systèmes backend robustes et des interfaces soignées, de la conception à la mise en production.",
	location: "Antananarivo, Madagascar",
	available: true, // badge "AVAILABLE FOR WORK"
	photo: "/assets/photo.jpg", // à placer dans /public/assets/
};
```

---

## Liens & Contact

```ts
const links = {
	github: "https://github.com/sanzouh",
	linkedin: "https://linkedin.com/in/santa-herizo",
	codersrank: "https://profile.codersrank.io/user/sanzouh/",
	email: "santaherizo2.0@gmail.com",
	phone: "+261 34 41 140 66",
};
```

---

## Tech Stack (badges section)

```ts
const stack = [
	// Frontend
	"React",
	"Next.js",
	"TypeScript",
	"Vite",
	"Tailwind CSS",
	"shadcn/ui",
	"Mantine UI",
	"Figma",
	// Backend
	"Node.js",
	"Express",
	"NestJS",
	"Fastify",
	"Laravel",
	"Spring Boot",
	// Bases de données
	"PostgreSQL",
	"MySQL",
	"MongoDB",
	"Prisma",
	"Supabase",
	// DevOps
	"Docker",
	"GitHub Actions",
	"Jenkins",
	"Git",
	// Autres
	"Java",
	"PHP",
	"Jest",
	"Swagger / OpenAPI",
];
```

---

## Services proposés

```ts
const services = [
	{
		number: "01",
		tags: ["NODE", "EXPRESS", "NESTJS"],
		icon: "server",
		title: "Backend Development",
		description:
			"Construction d'APIs robustes et scalables avec Node.js, Express et NestJS, sur bases relationnelles et NoSQL.",
	},
	{
		number: "02",
		tags: ["DOCKER", "GITHUB ACTIONS", "JENKINS"],
		icon: "git-branch",
		title: "DevOps & CI/CD",
		description:
			"Automatisation des déploiements et pipelines d'intégration continue via Docker et Jenkins.",
	},
	{
		number: "03",
		tags: ["REST", "SQL", "NOSQL"],
		icon: "database",
		title: "Database & API Design",
		description:
			"Conception de schémas de bases de données efficaces, APIs RESTful et optimisation des requêtes.",
	},
	{
		number: "04",
		tags: ["REACT", "NEXT.JS", "TAILWIND"],
		icon: "layout",
		title: "Frontend Development",
		description:
			"Interfaces modernes et réactives avec React et Next.js, design system cohérent et expérience utilisateur soignée.",
	},
];
```

---

## Projets

```ts
const projects = [
	{
		id: "01",
		type: "BI · JAVA",
		name: "HR Reporting",
		tags: ["Java 21", "Swing", "H2 Database", "JFreeChart", "Apache POI"],
		status: "done",
		github: null,
		live: null,
		shortDesc: "Système d'Information Décisionnel RH",
		deepDive: `Pipeline ETL multi-sources (CSV, Excel, SQLite) avec nettoyage, normalisation et chargement dans un Data Warehouse H2 en schéma étoile (5 dimensions, 12 KPI). Dashboard Swing interactif avec filtrage dynamique, graphiques JFreeChart et système d'insights automatiques (risques, opportunités, recommandations).`,
	},
	{
		id: "02",
		type: "FULLSTACK · DEVOPS",
		name: "BankAudit",
		tags: ["React", "Laravel", "Docker", "MySQL", "PHPUnit", "Swagger"],
		status: "done",
		github: null,
		live: null,
		shortDesc: "Système de Gestion Bancaire avec Audit Automatisé",
		deepDive: `Triggers SQL (INSERT/UPDATE/DELETE) pour audit automatique. API REST sécurisée avec authentification Sanctum et contrôle d'accès par rôle. Conteneurisation complète (PHP-FPM, Nginx, MySQL, React) et suite de tests PHPUnit. Documentation OpenAPI/Swagger.`,
	},
	{
		id: "03",
		type: "FINANCE · ALGO",
		name: "GenAlpha",
		tags: [
			"React",
			"TypeScript",
			"Tailwind CSS v4",
			"shadcn/ui",
			"Vite",
			"Vercel",
		],
		status: "done",
		github: null,
		live: null,
		shortDesc: "Optimiseur de Portefeuille par Algorithme Génétique",
		deepDive: `Algorithme génétique complet (sélection, croisement uniforme, mutation, élitisme) pour l'optimisation bi-objectif rendement/risque selon Markowitz. Calcul dynamique du front de Pareto (O(n²)), visualisation temps réel, filtrage multicritère et comparaison vs S&P 500. Déploiement continu via GitHub Actions et Vercel.`,
	},
	{
		id: "04",
		type: "FULLSTACK · SCHEDULING",
		name: "ScheduleManager",
		tags: ["Node.js", "Express", "Prisma", "SQLite", "React 19", "Jest"],
		status: "done",
		github: null,
		live: null,
		shortDesc: "Plateforme de Gestion d'Emplois du Temps Universitaire",
		deepDive: `API REST Node.js/Express avec Prisma ORM, gestion des conflits horaires (professeur, salle, classe) via contraintes multi-entités. Interface React avec détection et prévention en temps réel des chevauchements. Tests unitaires Jest.`,
	},
	// Ajouter d'autres projets GitHub ici (récupérables via l'API GitHub : https://github.com/sanzouh)
];
```

---

## Expériences

```ts
const experiences = [
	{
		company: "Ministère des Mines",
		logo: null, // logo optionnel
		role: "Développeur Fullstack",
		period: "Sep 2024 – Déc 2024",
		location: "Antananarivo, Madagascar",
		description:
			"Conception et développement d'une application web de gestion des congés RH. Modélisation UML/Merise, implémentation fullstack, déploiement et livraison en autonomie.",
		stack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "HTML/CSS"],
	},
	{
		company: "Gendarmerie Nationale Malagasy",
		logo: null,
		role: "Développeur Logiciel",
		period: "Oct 2023 – Déc 2023",
		location: "Antananarivo, Madagascar",
		description:
			"Plateforme de messagerie sécurisée inter-unités avec API SMS en temps réel. Déploiement sur infrastructure Linux (Debian) via virtualisation GNS3.",
		stack: ["PHP (Jelix)", "MySQL", "JavaScript", "GNS3", "Linux Debian"],
	},
];
```

---

## Formation

```ts
const education = [
	{
		degree: "Master II en Informatique",
		specialty: "Génie Logiciel & Bases de Données",
		school: "École Nationale d'Informatique (ENI) — Fianarantsoa",
		period: "Fév 2026 – En cours",
		level: "Niveau 7 CEC",
	},
	{
		degree: "Licence en Informatique Professionnelle",
		specialty: "Génie Logiciel & Bases de Données",
		school: "École Nationale d'Informatique (ENI) — Fianarantsoa",
		period: "Jan 2023 – Nov 2023",
		level: "Niveau 6 CEC",
	},
	{
		degree: "Baccalauréat — Série D",
		specialty: null,
		school: "Collège Sacré-Cœur Tsianaloka (CSCT) — Tuléar",
		period: "2019",
		level: null,
	},
];
```

---

## Compétences transversales

```ts
const softSkills = [
	"Autonomie & prise d'initiatives — capable de mener un projet de bout en bout",
	"Rigueur technique — SOLID, clean code, documentation (Swagger/OpenAPI), tests",
	"Adaptabilité — ESN, freelance, administration publique",
	"Communication claire — analyse des besoins, UML/Merise, restitution client",
	"Veille continue — stack mise à jour régulièrement",
];
```

---

## Langues

```ts
const languages = [
	{ lang: "Français", level: "Bilingue", cert: "DALF C2" },
	{
		lang: "Anglais",
		level: "B2",
		cert: "Communication écrite et orale, documentation technique",
	},
	{ lang: "Malagasy", level: "Langue maternelle", cert: null },
];
```

---

## Design System (inspiration)

```ts
const design = {
	theme: "dark",
	background: "#0a0a0a", // ou noir pur
	accent: "#f5c518", // jaune/doré — comme josephin-sylvere.vercel.app
	text: {
		primary: "#ffffff",
		secondary: "#888888",
		muted: "#444444",
	},
	font: {
		heading:
			"/* Police bold, condensée, très lisible — ex: Space Grotesk, Syne, ou similaire */",
		body: "/* Police propre, technique — ex: Inter, DM Sans */",
		mono: "/* ex: JetBrains Mono pour les tags tech */",
	},
	sections: [
		"Hero — nom, titre, badge dispo, liens sociaux",
		"About — bio courte + ce que je cherche",
		"Services — 3-4 cartes services",
		"Tech Stack — badges technos avec icônes",
		"Projects — liste numérotée avec expand technique deep dive",
		"Experience — timeline ou liste",
		"Contact — email + LinkedIn",
	],
	ux: {
		scrollIndicator: true,
		sectionLabels: "style SYS://ABOUT, SYS://PROJECTS (inspiré du template)",
		projectExpand: "clic pour afficher le technical deep dive",
		downloadCVButton: true,
	},
};
```

---

## CV à télécharger

```
Placer les deux CVs dans /public/assets/ :
- CV-Final-RAZAFINDRAKOTO-Santa-Herizo.pdf
- CV_europass_Santa_RAZAFINDRAKOTO.pdf

Bouton "Download my Resume" → téléchargement direct du PDF principal.
```

---

## Notes importantes pour Claude Code

1. **GitHub API** : récupère les repos publics de https://github.com/sanzouh pour enrichir la section projets si utile.
2. **Responsive** : mobile-first, le portfolio doit être parfait sur mobile.
3. **Performance** : Next.js App Router, images optimisées, fonts via next/font.
4. **Accessibilité** : attributs alt, aria-labels, contraste suffisant malgré le dark theme.
5. **Animations** : sobres et fluides (Framer Motion ou CSS transitions) — pas d'excès.
6. **SEO** : metadata Open Graph complète (pour partage LinkedIn notamment).
7. **Déploiement cible** : Vercel (fichier vercel.json si nécessaire).
