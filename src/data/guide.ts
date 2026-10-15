import type { Localized } from "@/i18n/types";

export type GuideItem = {
  id: string;
  title: Localized;
  subtitle: Localized;
  image: string;
  tag?: Localized;
  detail?: Localized;
};

export type InfoRow = {
  label: Localized;
  value: Localized;
  href?: string;
};

export const hotel = {
  name: "Four Points",
  fullName: "Four Points by Sheraton Dakar Diamniadio",
  shortName: "Dakar Diamniadio",
  phone: "+221 33 924 86 00",
  phoneAlt: "+221 78 465 91 40",
  email: "fp.dssfp.info@fourpoints.com",
  address: "Pôle Urbain Diamniadio, Sortie 11 — derrière Dakar Arena",
  instagram: "@fourpointsbysheraton.dakar",
  instagramUrl: "https://www.instagram.com/fourpointsbysheraton.dakar/",
  facebook: "Four Points By Sheraton Dakar Diamniadio",
  facebookUrl: "https://www.facebook.com/",
  linkedin: "Four Points By Sheraton Dakar Diamniadio",
  linkedinUrl: "https://www.linkedin.com/",
};

export const featured = [
  {
    id: "ten",
    title: { fr: "Espace TEN", en: "TEN Space" },
    subtitle: {
      fr: "Trampoline · Escalade · Ninja",
      en: "Trampoline · Climbing · Ninja",
    },
    image: "/hotel/ten/escalade.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "afro",
    title: { fr: "Afro Chic Night", en: "Afro Chic Night" },
    subtitle: {
      fr: "Chic’Afrique — samedi soir",
      en: "Chic’Afrique — Saturday night",
    },
    image: "/hotel/lounge.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "pool",
    title: { fr: "Pool Life", en: "Pool Life" },
    subtitle: {
      fr: "Piscine extérieure · bien-être",
      en: "Outdoor pool · wellness",
    },
    image: "/hotel/pool.jpg",
    cta: { fr: "Y aller", en: "Go" },
  },
];

export const hotelLife: GuideItem[] = [
  {
    id: "fp-social",
    title: "FP Social",
    subtitle: {
      fr: "Petit-déj · Déjeuner · Dîner",
      en: "Breakfast · Lunch · Dinner",
    },
    image: "/hotel/lobby.jpg",
    tag: { fr: "Restaurant", en: "Restaurant" },
    detail: {
      fr: "Buffet / à la carte · Cuisine locale & internationale",
      en: "Buffet / à la carte · Local & international cuisine",
    },
  },
  {
    id: "bar",
    title: "FP Social Bar",
    subtitle: {
      fr: "Cocktails · Drinks · Snacks",
      en: "Cocktails · Drinks · Snacks",
    },
    image: "/hotel/lounge.jpg",
    tag: "Bar",
    detail: {
      fr: "Best Brews, craft beers · Sports",
      en: "Best Brews, craft beers · Sports",
    },
  },
  {
    id: "chicafrique",
    title: "Chic’Afrique",
    subtitle: {
      fr: "Afro-contemporain · 12h–00h",
      en: "Afro-contemporary · 12pm–12am",
    },
    image: "/hotel/lounge.jpg",
    tag: "Lifestyle",
    detail: {
      fr: "Cuisine / cocktails · Ambiance · Afro Chic Night (samedi)",
      en: "Food / cocktails · Atmosphere · Afro Chic Night (Saturday)",
    },
  },
  {
    id: "roomservice",
    title: "Room Service",
    subtitle: {
      fr: "Menu & petit-déj en chambre",
      en: "In-room menu & breakfast",
    },
    image: "/hotel/room.jpg",
    tag: { fr: "Conciergerie", en: "Concierge" },
  },
  {
    id: "rooms",
    title: { fr: "Chambres & Suites", en: "Rooms & Suites" },
    subtitle: {
      fr: "173 chambres modernes",
      en: "173 modern rooms",
    },
    image: "/hotel/room.jpg",
    tag: "Stay",
  },
  {
    id: "wellness",
    title: { fr: "Piscine & Bien-être", en: "Pool & Wellness" },
    subtitle: {
      fr: "Piscine · sauna · recovery",
      en: "Pool · sauna · recovery",
    },
    image: "/hotel/sauna.jpg",
    tag: "Wellness",
  },
  {
    id: "meeting",
    title: { fr: "Réunions", en: "Meetings" },
    subtitle: {
      fr: "Salles modulables & équipées",
      en: "Flexible equipped rooms",
    },
    image: "/hotel/meeting.jpg",
    tag: { fr: "Affaires", en: "Business" },
  },
  {
    id: "fitness",
    title: "Fitness",
    subtitle: {
      fr: "Salle de sport 24h",
      en: "24h fitness center",
    },
    image: "/hotel/tg-sport.jpg",
    tag: { fr: "Sport", en: "Sport" },
  },
];

export const tenActivities = [
  {
    id: "trampoline",
    title: { fr: "Trampoline", en: "Trampoline" },
    subtitle: {
      fr: "Zone trampoline indoor",
      en: "Indoor trampoline zone",
    },
    image: "/hotel/ten/trampoline.jpg",
  },
  {
    id: "escalade",
    title: { fr: "Escalade", en: "Climbing" },
    subtitle: {
      fr: "Murs d’escalade & structures",
      en: "Climbing walls & structures",
    },
    image: "/hotel/ten/escalade.jpg",
  },
  {
    id: "ninja",
    title: { fr: "Ninja", en: "Ninja" },
    subtitle: {
      fr: "Parcours ninja & défis",
      en: "Ninja course & challenges",
    },
    image: "/hotel/ten/ninja.jpg",
  },
];

export const activities: GuideItem[] = [
  {
    id: "ten",
    title: { fr: "Espace TEN", en: "TEN Space" },
    subtitle: {
      fr: "Trampoline · Escalade · Ninja",
      en: "Trampoline · Climbing · Ninja",
    },
    image: "/hotel/ten/escalade.jpg",
    tag: { fr: "15 000 FCFA", en: "15,000 FCFA" },
    detail: {
      fr: "Mar–Dim 10h–20h · Réservation à la réception",
      en: "Tue–Sun 10am–8pm · Book at reception",
    },
  },
  {
    id: "karting",
    title: "Karting",
    subtitle: {
      fr: "10 000 FCFA / 10 min · dès 11 ans",
      en: "10,000 FCFA / 10 min · from age 11",
    },
    image: "/hotel/activities/karting.jpg",
    tag: { fr: "Mar–Dim 9h–19h30", en: "Tue–Sun 9am–7:30pm" },
    detail: {
      fr: "Réservation à la réception",
      en: "Book at reception",
    },
  },
  {
    id: "foot",
    title: { fr: "Terrains The Ground", en: "The Ground pitches" },
    subtitle: {
      fr: "Football · Diamniadio Sports City",
      en: "Football · Diamniadio Sports City",
    },
    image: "/hotel/ten/ground-foot.jpg",
    tag: { fr: "Complexe", en: "Complex" },
  },
  {
    id: "fitness",
    title: "Fitness",
    subtitle: {
      fr: "Salle de sport de l’hôtel",
      en: "Hotel fitness center",
    },
    image: "/hotel/tg-sport.jpg",
    tag: { fr: "Sur place", en: "On site" },
  },
];

export const discoverDakar: GuideItem[] = [
  {
    id: "goree",
    title: { fr: "Île de Gorée", en: "Gorée Island" },
    subtitle: {
      fr: "Patrimoine & histoire",
      en: "Heritage & history",
    },
    image: "/hotel/dakar/goree.jpg",
    tag: { fr: "Incontournable", en: "Must-see" },
  },
  {
    id: "renaissance",
    title: {
      fr: "Monument de la Renaissance",
      en: "African Renaissance Monument",
    },
    subtitle: { fr: "Vue panoramique", en: "Panoramic view" },
    image: "/hotel/monument.jpg",
    tag: "Dakar",
  },
  {
    id: "corniche",
    title: "Corniche",
    subtitle: {
      fr: "Balades & sunset",
      en: "Walks & sunset",
    },
    image: "/hotel/dakar/corniche.jpg",
    tag: "Sunset",
  },
  {
    id: "mosquee",
    title: {
      fr: "Mosquée de la Divinité",
      en: "Mosque of Divinity",
    },
    subtitle: {
      fr: "Lieu emblématique",
      en: "Iconic landmark",
    },
    image: "/hotel/dakar/mosquee.jpg",
    tag: "Dakar",
  },
  {
    id: "plateau",
    title: "Plateau",
    subtitle: {
      fr: "Centre-ville historique",
      en: "Historic downtown",
    },
    image: "/hotel/dakar/plateau.jpg",
    tag: { fr: "Ville", en: "City" },
  },
  {
    id: "marches",
    title: {
      fr: "Marchés & shopping",
      en: "Markets & shopping",
    },
    subtitle: {
      fr: "Kermel · Soumbédioune · Sea Plaza",
      en: "Kermel · Soumbédioune · Sea Plaza",
    },
    image: "/hotel/dakar/marche.jpg",
    tag: { fr: "Artisanat", en: "Crafts" },
  },
  {
    id: "restos",
    title: {
      fr: "Restos sénégalais",
      en: "Senegalese restaurants",
    },
    subtitle: {
      fr: "Chez Loutcha · Pointe des Almadies",
      en: "Chez Loutcha · Pointe des Almadies",
    },
    image: "/hotel/dakar/almadies.jpg",
    tag: "Food",
  },
  {
    id: "plages",
    title: { fr: "Plages", en: "Beaches" },
    subtitle: {
      fr: "Ngor · Voile d’Or · Monaco · Anse Bernard",
      en: "Ngor · Voile d’Or · Monaco · Anse Bernard",
    },
    image: "/hotel/dakar/plage.jpg",
    tag: { fr: "Plage", en: "Beach" },
  },
];

export const discoverSenegal: GuideItem[] = [
  {
    id: "lac-rose",
    title: "Lac Rose",
    subtitle: {
      fr: "Excursion signature",
      en: "Signature excursion",
    },
    image: "/hotel/tg-hero.jpg",
    tag: { fr: "Excursion", en: "Trip" },
  },
  {
    id: "bandia",
    title: {
      fr: "Réserve de Bandia",
      en: "Bandia Reserve",
    },
    subtitle: "Safari",
    image: "/hotel/ten/ground-foot.jpg",
    tag: { fr: "Nature", en: "Nature" },
  },
  {
    id: "saly",
    title: {
      fr: "Saly / Petite Côte",
      en: "Saly / Petite Côte",
    },
    subtitle: {
      fr: "Plages & détente",
      en: "Beaches & relaxation",
    },
    image: "/hotel/pool.jpg",
    tag: { fr: "Côte", en: "Coast" },
  },
  {
    id: "somone",
    title: "Somone",
    subtitle: { fr: "Lagune", en: "Lagoon" },
    image: "/hotel/tg-spa.jpg",
    tag: { fr: "Nature", en: "Nature" },
  },
  {
    id: "saint-louis",
    title: "Saint-Louis",
    subtitle: {
      fr: "Patrimoine & architecture",
      en: "Heritage & architecture",
    },
    image: "/hotel/tg-outdoor.jpg",
    tag: { fr: "Culture", en: "Culture" },
  },
  {
    id: "saloum",
    title: "Sine-Saloum",
    subtitle: {
      fr: "Nature & bolongs",
      en: "Nature & bolongs",
    },
    image: "/hotel/tg-facility.jpg",
    tag: { fr: "Nature", en: "Nature" },
  },
  {
    id: "casamance",
    title: "Casamance",
    subtitle: {
      fr: "Le poumon vert",
      en: "The green lung",
    },
    image: "/hotel/tg-particuliers.jpg",
    tag: { fr: "Sud", en: "South" },
  },
];

export const wolof = [
  { key: "hello" as const, wo: "Salam Aleikum" },
  { key: "thanks" as const, wo: "Jërëjëf" },
  { key: "howAreYou" as const, wo: "Nanga def ?" },
];

export const food = [
  "Thiéboudienne",
  "Yassa",
  "Mafé",
  "Pastels",
  "Bissap",
  "Bouye",
  "Attaya",
];

export const transportDestinations = [
  {
    id: "aibd",
    title: { fr: "Aéroport AIBD", en: "AIBD Airport" },
    subtitle: {
      fr: "Blaise Diagne International",
      en: "Blaise Diagne International",
    },
    time: { fr: "~20 min", en: "~20 min" },
    tip: {
      fr: "Taxi / chauffeur ou navette hôtel — demander à la réception",
      en: "Taxi / driver or hotel shuttle — ask at reception",
    },
  },
  {
    id: "wade",
    title: {
      fr: "Stade Abdoulaye Wade",
      en: "Abdoulaye Wade Stadium",
    },
    subtitle: {
      fr: "Stade Olympique de Diamniadio",
      en: "Olympic Stadium of Diamniadio",
    },
    time: { fr: "~10 min", en: "~10 min" },
    tip: {
      fr: "Idéal pour Dakar 2026 · taxi / navette",
      en: "Ideal for Dakar 2026 · taxi / shuttle",
    },
  },
  {
    id: "arena",
    title: "Dakar Arena",
    subtitle: {
      fr: "Événements & spectacles",
      en: "Events & shows",
    },
    time: { fr: "~8 min", en: "~8 min" },
    tip: {
      fr: "Juste derrière le Pôle Urbain Diamniadio",
      en: "Right behind Diamniadio Urban Pole",
    },
  },
  {
    id: "centre",
    title: {
      fr: "Dakar Centre",
      en: "Dakar City Center",
    },
    subtitle: {
      fr: "Plateau & centre-ville",
      en: "Plateau & downtown",
    },
    time: { fr: "~30 min", en: "~30 min" },
    tip: {
      fr: "TER, taxi ou chauffeur privé",
      en: "TER, taxi or private driver",
    },
  },
];

export const transportModes = [
  {
    id: "ter",
    title: "TER",
    subtitle: {
      fr: "Train Express Régional",
      en: "Regional Express Train",
    },
    detail: {
      fr: "Relie Diamniadio à Dakar centre. Demandez les horaires et la gare la plus proche à la réception.",
      en: "Links Diamniadio to downtown Dakar. Ask reception for schedules and the nearest station.",
    },
  },
  {
    id: "shuttle",
    title: { fr: "Navette hôtel", en: "Hotel shuttle" },
    subtitle: "Hotel Shuttle",
    detail: {
      fr: "Navette hôtel si disponible — réservation à la réception selon les horaires du jour.",
      en: "Hotel shuttle if available — book at reception according to daily schedules.",
    },
  },
  {
    id: "taxi",
    title: { fr: "Taxi / Chauffeur", en: "Taxi / Driver" },
    subtitle: {
      fr: "Sur demande",
      en: "On request",
    },
    detail: {
      fr: "Organisation via la réception pour AIBD, stade, Arena, Dakar centre et excursions.",
      en: "Arranged via reception for AIBD, stadium, Arena, city center and trips.",
    },
  },
];

export const emergencies: InfoRow[] = [
  { label: { fr: "Police", en: "Police" }, value: "17", href: "tel:17" },
  {
    label: { fr: "Ambulance / SAMU", en: "Ambulance / SAMU" },
    value: "15",
    href: "tel:15",
  },
  {
    label: { fr: "Pompiers", en: "Fire department" },
    value: "18",
    href: "tel:18",
  },
  {
    label: { fr: "Réception hôtel", en: "Hotel reception" },
    value: hotel.phone,
    href: `tel:${hotel.phone.replace(/\s/g, "")}`,
  },
  {
    label: { fr: "Sécurité hôtel", en: "Hotel security" },
    value: hotel.phone,
    href: `tel:${hotel.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Lost & Found",
    value: { fr: "Via réception", en: "Via reception" },
    href: `tel:${hotel.phone.replace(/\s/g, "")}`,
  },
];

export const practical: InfoRow[] = [
  { label: { fr: "Devise", en: "Currency" }, value: "FCFA" },
  { label: { fr: "Fuseau", en: "Time zone" }, value: "GMT" },
  {
    label: { fr: "ATM / Banque", en: "ATM / Bank" },
    value: {
      fr: "1er étage de l’hôtel",
      en: "1st floor of the hotel",
    },
  },
  {
    label: { fr: "Bureau de change", en: "Currency exchange" },
    value: {
      fr: "Demander à la réception",
      en: "Ask at reception",
    },
  },
  {
    label: { fr: "Pharmacie", en: "Pharmacy" },
    value: {
      fr: "Adresse via réception / Google Maps",
      en: "Address via reception / Google Maps",
    },
  },
  {
    label: { fr: "Clinique / Hôpital", en: "Clinic / Hospital" },
    value: {
      fr: "Adresse via réception / Google Maps",
      en: "Address via reception / Google Maps",
    },
  },
  {
    label: { fr: "Supermarché", en: "Supermarket" },
    value: "Auchan Diamniadio · Sébikotane · Rufisque",
  },
  {
    label: { fr: "Prises / Voltage", en: "Plugs / Voltage" },
    value: {
      fr: "Adaptateur à la réception",
      en: "Adapter at reception",
    },
  },
  {
    label: "Laundry",
    value: {
      fr: "Service pressing — réception",
      en: "Laundry service — reception",
    },
  },
  {
    label: "Wi‑Fi",
    value: {
      fr: "Demander le code à la réception",
      en: "Ask reception for the code",
    },
  },
];

export const athletes: Localized[] = [
  {
    fr: "Early breakfast",
    en: "Early breakfast",
  },
  {
    fr: "Packed breakfast / meals (si prévu)",
    en: "Packed breakfast / meals (if planned)",
  },
  "Laundry",
  "Recovery / wellness",
  {
    fr: "Ice requests (si disponible)",
    en: "Ice requests (if available)",
  },
  "Fitness",
  {
    fr: "Physiotherapy / infos médicales (si prévu)",
    en: "Physiotherapy / medical info (if planned)",
  },
  "Team meeting rooms",
  "Equipment storage",
  "Transport departure board",
  "Competition schedule",
  "Prayer information",
  "Dietary requirements",
  "Delegation contacts / liaison desk",
];

export const quickActions = [
  {
    id: "urgence",
    label: { fr: "Urgence", en: "Emergency" },
    href: "/infos#urgence",
    accent: "#e10600",
  },
  {
    id: "reception",
    label: { fr: "Réception", en: "Reception" },
    href: `tel:${hotel.phone.replace(/\s/g, "")}`,
    accent: "#3a7190",
  },
  {
    id: "transport",
    label: { fr: "Transport", en: "Transport" },
    href: "/transport",
    accent: "#3a7190",
  },
  {
    id: "map",
    label: { fr: "Plan", en: "Map" },
    href: "/map",
    accent: "#131415",
  },
];
