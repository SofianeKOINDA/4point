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
  email: "fp.dssfp.info@fourpoints.com",
  reservationsEmail: "reservations.dakardiamniadio@fourpoints.com",
  diningUrl:
    "https://www.marriott.com/en-us/hotels/dssfp-four-points-dakar-diamniadio/dining/",
  bonvoyUrl: "https://www.joinmarriottbonvoy.com/emeaqr/s/fr/ch/dssfp",
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
    id: "hotel",
    title: { fr: "Four Points Dakar", en: "Four Points Dakar" },
    subtitle: {
      fr: "By Sheraton · Diamniadio",
      en: "By Sheraton · Diamniadio",
    },
    image: "/hotel/fp-facade.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "chicafrique",
    title: "Chic’Afrique",
    subtitle: {
      fr: "Barbecue · Happy Hour · DJ tous les soirs",
      en: "Barbecue · Happy Hour · DJ every night",
    },
    image: "/hotel/chic/chic-3.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "lobby",
    title: { fr: "Lobby & lounge", en: "Lobby & lounge" },
    subtitle: {
      fr: "Design urbain contemporain",
      en: "Contemporary urban design",
    },
    image: "/hotel/fp-lobby.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "rooms",
    title: { fr: "Chambres & Suites", en: "Rooms & Suites" },
    subtitle: {
      fr: "173 chambres modernes",
      en: "173 modern rooms",
    },
    image: "/hotel/fp-room.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "restaurant",
    title: "FP Social",
    subtitle: {
      fr: "Restaurant · 6h30 – 23h",
      en: "Restaurant · 6:30am – 11pm",
    },
    image: "/hotel/fp-restaurant-1.jpg",
    cta: { fr: "Découvrir", en: "Discover" },
  },
  {
    id: "pool",
    title: { fr: "Pool Life", en: "Pool Life" },
    subtitle: {
      fr: "Piscine extérieure",
      en: "Outdoor pool",
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
    image: "/hotel/restaurant.jpg",
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
    image: "/hotel/bar.jpg",
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
      fr: "Afro-contemporain · 12h–2h",
      en: "Afro-contemporary · 12pm–2am",
    },
    image: "/hotel/chic/chic-3.jpg",
    tag: "Lifestyle",
    detail: {
      fr: "Barbecue · Happy Hour · DJ tous les soirs",
      en: "Barbecue · Happy Hour · DJ every night",
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
    title: { fr: "Piscine & Spa", en: "Pool & Spa" },
    subtitle: {
      fr: "Piscine · sauna · bien-être",
      en: "Pool · sauna · wellness",
    },
    image: "/hotel/spa.jpg",
    tag: "Spa",
  },
  {
    id: "meeting",
    title: { fr: "Réunions", en: "Meetings" },
    subtitle: {
      fr: "El Hadj Omar Tall · Nelson Mandela",
      en: "El Hadj Omar Tall · Nelson Mandela",
    },
    image: "/hotel/meeting/omar-tall.jpg",
    tag: { fr: "Affaires", en: "Business" },
  },
  {
    id: "fitness",
    title: "Fitness",
    subtitle: {
      fr: "Salle de sport 24h",
      en: "24h fitness center",
    },
    image: "/hotel/fitness.jpg",
    tag: { fr: "Sport", en: "Sport" },
  },
];

export type DiningVenue = {
  id: string;
  name: string;
  tag: Localized;
  hours: string;
  image: string;
  /** Sous-titre court affiché sur la carte d'accueil (le texte complet vit sur /restau/[id]) */
  teaser: Localized;
  description: Localized;
  gallery?: string[];
  /** Horaires détaillés (ex. buffet déjeuner / dîner) */
  schedule?: { label: Localized; hours: string }[];
  /** Temps forts mis en avant (ex. Barbecue, Happy Hour, DJ) */
  highlights?: Localized[];
};

/** Restaurants & bars — horaires et présentations fournis par l'hôtel */
export const diningVenues: DiningVenue[] = [
  {
    id: "chic-afrique",
    name: "Chic’Afrique",
    tag: { fr: "Lounge", en: "Lounge" },
    hours: "12h – 2h",
    image: "/hotel/chic/chic-3.jpg",
    gallery: [
      "/hotel/chic/chic-1.jpg",
      "/hotel/chic/chic-2.jpg",
      "/hotel/chic/chic-4.jpg",
      "/hotel/chic/chic-5.jpg",
    ],
    teaser: {
      fr: "Barbecue · Happy Hour · DJ tous les soirs",
      en: "Barbecue · Happy Hour · DJ every night",
    },
    highlights: [
      { fr: "Barbecue", en: "Barbecue" },
      { fr: "Happy Hour", en: "Happy Hour" },
      { fr: "DJ tous les soirs", en: "DJ every night" },
    ],
    description: {
      fr: "Inspiré par la richesse de la culture africaine, Chic’Afrique est un lounge chaleureux et vibrant où l’on se retrouve pour se détendre, savourer de délicieux cocktails et déguster des spécialités africaines. Entre bonne musique, ambiance conviviale et soirées dansantes, c’est l’endroit idéal pour partager des moments mémorables.",
      en: "Inspired by the richness of African culture, Chic’Afrique is a warm and vibrant lounge where you come together to relax, enjoy delicious cocktails and savour African specialties. Between great music, a friendly atmosphere and dance nights, it’s the perfect place to share memorable moments.",
    },
  },
  {
    id: "fp-social",
    name: "FP Social",
    tag: { fr: "Restaurant", en: "Restaurant" },
    hours: "6h30 – 23h",
    image: "/hotel/fp-restaurant-1.jpg",
    gallery: ["/hotel/fp-restaurant-2.jpg"],
    schedule: [
      { label: { fr: "Buffet déjeuner", en: "Lunch buffet" }, hours: "12h30 – 15h30" },
      { label: { fr: "Buffet dîner", en: "Dinner buffet" }, hours: "19h – 22h30" },
    ],
    teaser: {
      fr: "Petit-déj · Déjeuner · Dîner — buffet ou à la carte",
      en: "Breakfast · Lunch · Dinner — buffet or à la carte",
    },
    description: {
      fr: "Découvrez le concept « FP Social Restaurant », au design urbain contemporain, pensé pour une expérience culinaire conviviale. Commencez votre journée par un délicieux petit-déjeuner buffet, profitez d’un déjeuner ou d’un dîner — sous forme de buffet ou à la carte — et savourez nos boissons signature, préparées spécialement pour vous.",
      en: "Discover the “FP Social Restaurant” concept, with its contemporary urban design, created for a convivial dining experience. Start your day with a delicious breakfast buffet, enjoy lunch or dinner — buffet or à la carte — and savour our signature drinks, crafted especially for you.",
    },
  },
  {
    id: "fp-social-bar",
    name: "FP Social Bar",
    tag: "Bar",
    hours: "6h30 – 23h",
    image: "/hotel/bar.jpg",
    teaser: {
      fr: "Cocktails · Best Brews · Sports",
      en: "Cocktails · Best Brews · Sports",
    },
    description: {
      fr: "Venez manger un morceau et savourer vos boissons au bar FP Social, à Diamniadio. C’est l’endroit idéal pour se détendre, échanger avec les autres, suivre vos sports favoris et découvrir « Best Brews », notre concept exclusif de boissons.",
      en: "Come grab a bite and enjoy your drinks at the FP Social Bar in Diamniadio. It’s the perfect spot to relax, connect with others, follow your favourite sports and discover “Best Brews”, our exclusive drinks concept.",
    },
  },
];

export function getDiningVenue(id: string): DiningVenue | undefined {
  return diningVenues.find((venue) => venue.id === id);
}

/** Navette JOJ Dakar 2026 — tous les sites olympiques (demande client) */
export const jojShuttle = {
  title: { fr: "Navette JOJ", en: "YOG Shuttle" } as Localized,
  note: {
    fr: "Navette vers tous les sites olympiques, toutes les heures.",
    en: "Shuttle to all Olympic venues, every hour.",
  } as Localized,
  hours: { fr: "6h – 22h", en: "6am – 10pm" } as Localized,
  price: { fr: "2 500 XOF / trajet", en: "2,500 XOF / trip" } as Localized,
};

/** Salles de réunion (noms et photos fournis par l'hôtel) */
export const meetingRooms = [
  { id: "omar-tall", name: "El Hadj Omar Tall Meeting Room", image: "/hotel/meeting/omar-tall.jpg" },
  { id: "nelson-mandela", name: "Nelson Mandela Meeting Room", image: "/hotel/meeting/nelson-mandela.jpg" },
];

/** Conseils santé (demande client) */
export const healthTips: Localized[] = [
  { fr: "Hydratez-vous", en: "Stay hydrated" },
  { fr: "Protégez-vous du soleil", en: "Stay sun protected" },
  { fr: "Attention à l’humidité et à la chaleur", en: "Beware of humidity and heat" },
];

/** Programme de la navette gratuite hôtel ⇄ aéroport (AIBD) */
export const shuttleSchedule = {
  note: {
    fr: "Navette gratuite entre l’hôtel et l’aéroport international Blaise Diagne (AIBD).",
    en: "Free shuttle between the hotel and Blaise Diagne International Airport (AIBD).",
  } as Localized,
  outbound: {
    label: { fr: "Hôtel → Aéroport", en: "Hotel → Airport" } as Localized,
    times: ["05h", "10h", "13h", "15h", "18h", "20h", "01h", "03h"],
  },
  inbound: {
    label: { fr: "Aéroport → Hôtel", en: "Airport → Hotel" } as Localized,
    times: ["06h", "09h", "11h", "14h", "19h", "21h", "02h", "04h"],
  },
  perks: [
    { fr: "Service gratuit", en: "Free service" },
    { fr: "Confortable", en: "Comfortable" },
    { fr: "Sûr et fiable", en: "Safe & reliable" },
  ] as Localized[],
};

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
    image: "/hotel/karting.jpg",
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
    image: "/hotel/fitness.jpg",
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
    image: "/hotel/dakar/lac-rose.jpg",
    tag: { fr: "Excursion", en: "Trip" },
  },
  {
    id: "bandia",
    title: {
      fr: "Réserve de Bandia",
      en: "Bandia Reserve",
    },
    subtitle: "Safari",
    image: "/hotel/dakar/bandia.jpg",
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
    image: "/hotel/dakar/saly.jpg",
    tag: { fr: "Côte", en: "Coast" },
  },
  {
    id: "somone",
    title: "Somone",
    subtitle: { fr: "Lagune", en: "Lagoon" },
    image: "/hotel/dakar/somone.jpg",
    tag: { fr: "Nature", en: "Nature" },
  },
  {
    id: "saint-louis",
    title: "Saint-Louis",
    subtitle: {
      fr: "Patrimoine & architecture",
      en: "Heritage & architecture",
    },
    image: "/hotel/dakar/saint-louis.jpg",
    tag: { fr: "Culture", en: "Culture" },
  },
  {
    id: "saloum",
    title: "Sine-Saloum",
    subtitle: {
      fr: "Nature & bolongs",
      en: "Nature & bolongs",
    },
    image: "/hotel/dakar/saloum.jpg",
    tag: { fr: "Nature", en: "Nature" },
  },
  {
    id: "casamance",
    title: "Casamance",
    subtitle: {
      fr: "Le poumon vert",
      en: "The green lung",
    },
    image: "/hotel/dakar/casamance.jpg",
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
      fr: "Badminton et finales de futsal",
      en: "Badminton and futsal finals",
    },
    time: { fr: "~8 min", en: "~8 min" },
    tip: {
      fr: "Juste derrière le Pôle Urbain Diamniadio",
      en: "Right behind Diamniadio Urban Pole",
    },
  },
  {
    id: "exhibition",
    title: {
      fr: "Dakar Exhibition Center",
      en: "Dakar Exhibition Center",
    },
    subtitle: {
      fr: "Centre des expositions",
      en: "Exhibition centre",
    },
    time: { fr: "~8 min", en: "~8 min" },
    tip: {
      fr: "Taxi / navette — demander à la réception",
      en: "Taxi / shuttle — ask at reception",
    },
  },
  {
    id: "equestre",
    title: {
      fr: "Centre Équestre",
      en: "Equestrian Centre",
    },
    subtitle: {
      fr: "Centre équestre de la Gendarmerie · saut d’obstacles",
      en: "Gendarmerie equestrian centre · show jumping",
    },
    time: { fr: "~5 min", en: "~5 min" },
    tip: {
      fr: "Équitation · taxi / navette",
      en: "Equestrian · taxi / shuttle",
    },
  },
  {
    id: "uam",
    title: {
      fr: "Université Amadou Mahtar Mbow",
      en: "Amadou Mahtar Mbow University",
    },
    subtitle: {
      fr: "Village olympique · UAM",
      en: "Olympic village · UAM",
    },
    time: { fr: "~8 min", en: "~8 min" },
    tip: {
      fr: "Taxi / navette — demander à la réception",
      en: "Taxi / shuttle — ask at reception",
    },
  },
  {
    id: "saly-beach",
    title: "Saly Beach West",
    subtitle: {
      fr: "Sports de plage et disciplines associées",
      en: "Beach sports and related disciplines",
    },
    time: { fr: "~45 min", en: "~45 min" },
    tip: {
      fr: "Chauffeur / taxi — à organiser avec la réception",
      en: "Driver / taxi — arrange with reception",
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
      fr: "Navette JOJ vers tous les sites olympiques toutes les heures, de 6h à 22h — 2 500 XOF par trajet. Navette aéroport gratuite.",
      en: "YOG shuttle to all Olympic venues every hour, 6am to 10pm — 2,500 XOF per trip. Free airport shuttle.",
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
      fr: "Au lobby de l’hôtel",
      en: "In the hotel lobby",
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
