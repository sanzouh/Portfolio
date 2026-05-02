# Contexte Portfolio — Santa Herizo RAZAFINDRAKOTO

## Mission
Construire un portfolio personnel de développeur fullstack.
Stack : React + TypeScript + Tailwind CSS + shadcn/ui (codebase existante).
Inspiration visuelle : https://josephin-sylvere.vercel.app/

---

## Design System

Le projet utilise déjà shadcn/ui avec le thème existant dans `index.css`.
**Ne pas recréer de thème from scratch.**

Deux overrides à appliquer dans `.dark` :
```css
--primary: oklch(0.85 0.18 92);          /* jaune #f5c518 — accent principal */
--primary-foreground: oklch(0.1 0 0);    /* noir sur jaune */
```

Tout le reste (background, foreground, card, border, radius, Inter) reste tel quel.

### Règles visuelles
- **Thème actif : `.dark` uniquement** — le portfolio est toujours en dark mode, pas de toggle
- **Accent jaune** : titres hover, underline, badges actifs, bordures de cartes sélectionnées
- **Font** : Inter Variable déjà importée — pas besoin d'en ajouter
- **Labels de section** : style terminal `SYS://NOM_SECTION` en muted-foreground, petites caps, letter-spacing large
- **Animations** : sobres — fade-in au scroll, hover subtil. Pas d'excès.

---

## Identité

```ts
const owner = {
  name: "Santa Herizo RAZAFINDRAKOTO",
  title: "Développeur Fullstack",
  tagline: "Je conçois des systèmes backend robustes et des interfaces soignées, de la conception à la mise en production.",
  location: "Antananarivo, Madagascar",
  available: true,
  photo: "/assets/photo.jpg",
}
```

---

## Liens & Contact

```ts
const links = {
  github: "https://github.com/sanzouh",
  linkedin: "https://linkedin.com/in/santa-herizo",
  codersrank: "https://profile.codersrank.io/user/sanzouh",
  email: "santaherizo2.0@gmail.com",
  phone: "+261 34 41 140 66",
}
```

---

## Sections (dans l'ordre)

### 1. HERO — `SYS://HOME`
- Badge `● AVAILABLE FOR WORK`
- Photo de profil (cercle, style scan/cadre tech)
- Nom + titre en grand
- Tagline
- Icônes liens : GitHub, LinkedIn, CodersRank, Email

### 2. ABOUT — `SYS://ABOUT`
- Bio courte (3-4 paragraphes, voir texte ci-dessous)
- Ce que je cherche : stage 6 mois remote ou poste junior backend

**Texte bio :**
> Je suis un développeur fullstack avec plusieurs années de formation intensive couvrant l'intégralité du cycle de vie d'un projet, de la conception à la mise en production.
> Je travaille principalement avec Node.js, NestJS et React, en concevant des architectures backend propres et des interfaces soignées.
> J'ai également de l'expérience en DevOps : CI/CD, conteneurisation Docker, pipelines GitHub Actions.
> Mon objectif : devenir un ingénieur backend solide, capable de construire des systèmes performants et distribués.
> Je suis actuellement à la recherche d'un **stage 6 mois remote** ou d'un **poste junior backend**.

### 3. SERVICES — `SYS://SERVICES`
3 entrées :

| # | Tags | Titre | Description |
|---|------|-------|-------------|
| 01 | NODE · EXPRESS · NESTJS | Backend Development | Construction d'APIs robustes et scalables avec Node.js, Express et NestJS, sur bases relationnelles et NoSQL. |
| 02 | DOCKER · GITHUB ACTIONS | DevOps & CI/CD | Automatisation des déploiements et pipelines d'intégration continue via Docker et Jenkins. |
| 03 | REST · SQL · NOSQL | Database & API Design | Conception de schémas efficaces, APIs RESTful et optimisation des requêtes pour la performance. |

### 4. TECH STACK — `SYS://TECH`
Badges avec icônes (utiliser `simple-icons` ou logos SVG).

```ts
const stack = [
  "Node.js", "Express", "NestJS",
  "React", "Next.js", "TypeScript",
  "Docker", "GitHub Actions", "Jenkins",
  "PostgreSQL", "MySQL", "MongoDB", "Prisma",
  "Laravel", "Spring Boot",
  "Tailwind CSS", "shadcn/ui",
  "Jest", "Swagger",
]
```

### 5. PROJECTS — `SYS://PROJECTS`
Liste numérotée. Chaque projet a :
- Numéro + catégorie
- Nom + tags stack
- Description courte
- Bouton expand → **Technical Deep Dive** (bloc gris foncé, texte détaillé)
- Icône GitHub (si lien disponible)

```ts
const projects = [
  {
    id: "01",
    category: "BI · JAVA",
    name: "HR Reporting",
    tags: ["Java 21", "Swing", "H2 Database", "JFreeChart", "Apache POI"],
    github: null,
    live: null,
    shortDesc: "Système d'Information Décisionnel RH",
    deepDive: "Pipeline ETL multi-sources (CSV, Excel, SQLite) avec nettoyage, normalisation et chargement dans un Data Warehouse H2 en schéma étoile (5 dimensions, 12 KPI). Dashboard Swing interactif avec filtrage dynamique, graphiques JFreeChart et système d'insights automatiques.",
  },
  {
    id: "02",
    category: "FULLSTACK · DEVOPS",
    name: "BankAudit",
    tags: ["React", "Laravel", "Docker", "MySQL", "PHPUnit", "Swagger"],
    github: null,
    live: null,
    shortDesc: "Système de Gestion Bancaire avec Audit Automatisé",
    deepDive: "Triggers SQL (INSERT/UPDATE/DELETE) pour audit automatique. API REST sécurisée avec Sanctum et contrôle d'accès par rôle. Conteneurisation complète PHP-FPM + Nginx + MySQL + React. Tests PHPUnit et documentation OpenAPI/Swagger.",
  },
  {
    id: "03",
    category: "FINANCE · ALGO",
    name: "GenAlpha",
    tags: ["React", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "Vercel"],
    github: null,
    live: null,
    shortDesc: "Optimiseur de Portefeuille par Algorithme Génétique",
    deepDive: "Algorithme génétique complet (sélection, croisement, mutation, élitisme) pour optimisation bi-objectif rendement/risque selon Markowitz. Front de Pareto dynamique (O(n²)), visualisation temps réel, filtrage multicritère, comparaison vs S&P 500. CI/CD GitHub Actions + Vercel.",
  },
  {
    id: "04",
    category: "FULLSTACK · SCHEDULING",
    name: "ScheduleManager",
    tags: ["Node.js", "Express", "Prisma", "SQLite", "React 19", "Jest"],
    github: null,
    live: null,
    shortDesc: "Plateforme de Gestion d'Emplois du Temps Universitaire",
    deepDive: "API REST Node.js/Express avec Prisma ORM. Gestion des conflits horaires (professeur, salle, classe) via contraintes multi-entités. Interface React avec détection en temps réel des chevauchements. Tests unitaires Jest et migrations Prisma automatisées.",
  },
]
// Compléter les champs github/live avec les vraies URLs depuis https://github.com/sanzouh
```

### 6. EXPERIENCE — `SYS://XP`
Timeline verticale. 2 entrées :

```ts
const experiences = [
  {
    company: "Ministère des Mines",
    role: "Développeur Fullstack",
    period: "Sep 2024 – Déc 2024",
    description: "Application web de gestion des congés RH. Modélisation UML/Merise, implémentation fullstack, livraison en autonomie.",
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
  {
    company: "Gendarmerie Nationale Malagasy",
    role: "Développeur Logiciel",
    period: "Oct 2023 – Déc 2023",
    description: "Plateforme de messagerie sécurisée inter-unités avec API SMS temps réel. Déploiement Linux/Debian via GNS3.",
    stack: ["PHP (Jelix)", "MySQL", "JavaScript", "Linux Debian"],
  },
]
```

### 7. CONTACT — `SYS://CONTACT`
- Visuel minimaliste (comme le template : trait entre YOU et la photo)
- Email cliquable
- LinkedIn cliquable
- Texte : "Want to chat, collaborate or discuss a project? Reach out and I'll respond as quick as possible."

---

## Footer
```
© 2026 · Santa Herizo RAZAFINDRAKOTO
```
Icônes : GitHub, LinkedIn, CodersRank, Email

---

## CV à télécharger
```
Bouton "Download my Resume" (coin haut droit, fixe au scroll)
→ /public/assets/CV-Final-RAZAFINDRAKOTO-Santa-Herizo.pdf
```

---

## Notes pour Claude Code

1. **Dark mode forcé** : ajouter `class="dark"` sur le `<html>`, pas de toggle
2. **Sections dans l'ordre** : Home → About → Services → Tech → Projects → XP → Contact
3. **Labels SYS://** : petits, espacés, muted — servent de repères visuels entre sections
4. **Responsive** : mobile-first, le portfolio doit être clean sur mobile
5. **SEO** : balises Open Graph complètes (title, description, image)
6. **Déploiement** : Vercel — s'assurer que le build passe (`npm run build` sans erreur)
7. **GitHub repos** : si besoin d'enrichir les projets, l'API publique GitHub est `https://api.github.com/users/sanzouh/repos`
