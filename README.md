# Four Points · Guest Guide

Guide digital pour les clients du **Four Points by Sheraton Dakar Diamniadio**.
Une web app mobile-first, bilingue (FR / EN), qui remplace le livret papier de
la chambre : tout ce qu'un client veut savoir — l'hôtel, les activités, le
transport, les urgences et les bons plans de Dakar — tient dans une page qui
s'ouvre d'un simple lien ou QR code, sans rien installer.

---

## En quoi ça consiste

L'app est pensée comme un « livret de chambre » moderne : conçue pour le
téléphone, lisible d'une main, avec une barre de navigation flottante en bas et
un gros bouton **Plan** toujours accessible. Le design reprend les couleurs et
les typographies de la plaquette de l'hôtel (rouge Four Points, teal, polices
proches de Trade Gothic / Clarendon).

Un client scanne un QR code → la page s'ouvre dans son navigateur → il bascule
entre français et anglais en un tap. Aucun compte, aucune installation.

## Les écrans

| Écran | Rôle |
|-------|------|
| **Accueil** (`/`) | Carrousel mis en avant, accès rapides (urgence, réception, transport, plan), urgences, vie à l'hôtel, le complexe, transport et un aperçu « Discover Dakar ». |
| **Discover** (`/discover`) | Découverte de Dakar et du Sénégal : lieux, cuisine sénégalaise, Teranga, quelques mots de wolof. Chaque lieu a une fiche détaillée (`/discover/[id]`). |
| **TEN** (`/ten`) | L'espace loisirs : Trampoline · Escalade · Ninja — horaires et tarifs. |
| **Transport** (`/transport`) | Destinations (aéroport, Dakar centre…), temps de trajet et modes de transport. |
| **Infos** (`/infos`) | Urgences, services pratiques, infos athlètes & délégations (Dakar 2026), réseaux sociaux de l'hôtel. |
| **Plan** (`/map`) | Carte interactive (Leaflet) centrée sur l'hôtel, avec les lieux par catégorie : hôtel, activités, alentours, transport. |

## Comment c'est construit

- **Next.js 16** (App Router) + **React 19** — chaque écran est une route sous `src/app/`.
- **TypeScript** partout.
- **Tailwind CSS 4** pour le style ; les couleurs et polices de la marque sont
  définies dans `src/app/globals.css`.
- **Leaflet** pour la carte interactive.
- **Bilingue FR / EN** maison : un petit système i18n dans `src/i18n/`. Tous les
  textes de l'interface sont dans `messages.ts`, et les contenus (titres, lieux…)
  sont stockés sous la forme `{ fr, en }` — le sélecteur de langue choisit la
  bonne version à l'affichage.

### Où vivent les contenus

Tout le contenu éditorial est séparé du code, dans `src/data/` — c'est là qu'on
modifie les textes sans toucher aux composants :

- `guide.ts` — infos de l'hôtel, carrousels, urgences, activités, transport, Discover, cuisine, wolof…
- `places.ts` — les lieux de la carte (coordonnées GPS, catégorie, photo).
- `discoverDetails.ts` — le contenu des fiches détaillées « Discover ».

Les images sont dans `public/` (`public/hotel/`, `public/brand/`…).

### Structure du projet

```
src/
├─ app/            # les écrans (une route = un dossier)
│  ├─ page.tsx     # accueil
│  ├─ discover/    # découverte + fiches [id]
│  ├─ ten/ transport/ infos/ map/
│  ├─ layout.tsx   # coque globale : polices, langue, barre de nav
│  └─ globals.css  # couleurs & styles de la marque
├─ components/     # UI réutilisable (carrousels, nav, icônes, carte)
├─ data/           # 👈 le contenu éditable (textes, lieux)
└─ i18n/           # système de traduction FR / EN
public/            # images et logos
```

## Lancer le projet en local

Prérequis : **Node.js 18+**.

```bash
npm install     # installe les dépendances
npm run dev     # lance le serveur de développement
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000). La page se
recharge automatiquement à chaque modification.

### Autres commandes

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # vérifie le code (ESLint)
```

## Déploiement

L'app est une application Next.js standard : elle se déploie telle quelle sur
**Vercel** (recommandé), ou tout hébergeur supportant Node. Le lien final est
destiné à être transformé en **QR code** affiché dans les chambres et les
espaces de l'hôtel.
