export type PlaceCategory = "hotel" | "activites" | "alentours" | "transport";

export type Place = {
  id: string;
  name: string;
  subtitle: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  image: string;
  distance?: string;
  hours?: string;
  tip?: string;
};

/** Centre = Four Points by Sheraton Dakar Diamniadio */
export const HOTEL_CENTER = {
  lat: 14.737758,
  lng: -17.218251,
};

export const places: Place[] = [
  {
    id: "hotel",
    name: "Four Points",
    subtitle: "Réception · chambres · lobby",
    category: "hotel",
    lat: 14.737758,
    lng: -17.218251,
    image: "/hotel/exterior.jpg",
    distance: "Vous êtes ici",
    tip: "Pôle Urbain Diamniadio, Sortie 11",
  },
  {
    id: "pool",
    name: "Piscine",
    subtitle: "Piscine extérieure & sunbeds",
    category: "hotel",
    lat: 14.73742,
    lng: -17.21855,
    image: "/hotel/pool.jpg",
    distance: "Dans l’hôtel",
  },
  {
    id: "restaurant",
    name: "FP Social",
    subtitle: "Restaurant & petit-déjeuner",
    category: "hotel",
    lat: 14.73795,
    lng: -17.2181,
    image: "/hotel/restaurant.jpg",
    distance: "Rez-de-chaussée",
    hours: "Petit-déj · Déj · Dîner",
  },
  {
    id: "bar",
    name: "FP Social Bar",
    subtitle: "Cocktails · sports · snacks",
    category: "hotel",
    lat: 14.73788,
    lng: -17.21795,
    image: "/hotel/bar.jpg",
    distance: "Dans l’hôtel",
  },
  {
    id: "chicafrique",
    name: "Chic’Afrique",
    subtitle: "Afro-contemporain · 12h–2h",
    category: "hotel",
    lat: 14.73765,
    lng: -17.2182,
    image: "/hotel/chic/chic-3.jpg",
    distance: "Dans l’hôtel",
    tip: "Barbecue · Happy Hour · DJ tous les soirs",
  },
  {
    id: "wellness",
    name: "Spa",
    subtitle: "Sauna & bien-être",
    category: "hotel",
    lat: 14.73755,
    lng: -17.2187,
    image: "/hotel/spa.jpg",
    distance: "Dans l’hôtel",
  },
  {
    id: "meeting",
    name: "Salles de réunion",
    subtitle: "El Hadj Omar Tall · Nelson Mandela",
    category: "hotel",
    lat: 14.73805,
    lng: -17.21835,
    image: "/hotel/meeting/omar-tall.jpg",
    distance: "Dans l’hôtel",
  },
  {
    id: "ten",
    name: "Espace TEN",
    subtitle: "Trampoline · Escalade · Ninja",
    category: "activites",
    lat: 14.73855,
    lng: -17.2169,
    image: "/hotel/ten/escalade.jpg",
    distance: "~3 min à pied",
    hours: "Mar–Dim 10h–20h",
    tip: "15 000 FCFA · Trampoline, escalade & ninja",
  },
  {
    id: "karting",
    name: "Karting",
    subtitle: "Circuit The Ground",
    category: "activites",
    lat: 14.7391,
    lng: -17.2174,
    image: "/hotel/karting.jpg",
    distance: "~5 min à pied",
    hours: "Mar–Dim 9h–19h30",
    tip: "10 000 FCFA / 10 min · dès 11 ans",
  },
  {
    id: "fitness",
    name: "Fitness",
    subtitle: "Salle de sport",
    category: "activites",
    lat: 14.7377,
    lng: -17.2177,
    image: "/hotel/fitness.jpg",
    distance: "Sur place",
  },
  {
    id: "foot",
    name: "Terrains The Ground",
    subtitle: "Football · Sports City",
    category: "activites",
    lat: 14.7388,
    lng: -17.2162,
    image: "/hotel/ten/ground-foot.jpg",
    distance: "~5 min à pied",
  },
  {
    id: "arena",
    name: "Dakar Arena",
    subtitle: "Événements & spectacles",
    category: "transport",
    lat: 14.7318,
    lng: -17.2055,
    image: "/hotel/tg-complex.jpg",
    distance: "~8 min",
  },
  {
    id: "wade",
    name: "Stade Abdoulaye Wade",
    subtitle: "Stade Olympique Diamniadio",
    category: "transport",
    lat: 14.7465,
    lng: -17.1988,
    image: "/hotel/tg-hero.jpg",
    distance: "~10 min",
  },
  {
    id: "aibd",
    name: "Aéroport AIBD",
    subtitle: "Blaise Diagne International",
    category: "transport",
    lat: 14.6703,
    lng: -17.0731,
    image: "/hotel/tg-complex.jpg",
    distance: "~20 min",
    tip: "Navette / taxi à la réception",
  },
  {
    id: "centre",
    name: "Dakar Centre",
    subtitle: "Plateau",
    category: "transport",
    lat: 14.6708,
    lng: -17.4381,
    image: "/hotel/tg-outdoor.jpg",
    distance: "~30 min",
    tip: "TER · taxi · chauffeur",
  },
  {
    id: "goree",
    name: "Île de Gorée",
    subtitle: "Patrimoine UNESCO",
    category: "alentours",
    lat: 14.6667,
    lng: -17.3986,
    image: "/hotel/dakar/goree.jpg",
    distance: "Excursion journée",
  },
  {
    id: "renaissance",
    name: "Monument de la Renaissance",
    subtitle: "Vue panoramique",
    category: "alentours",
    lat: 14.7222,
    lng: -17.4947,
    image: "/hotel/monument.jpg",
    distance: "Excursion",
  },
];

export const categoryMeta: Record<
  PlaceCategory | "all",
  { label: string; color: string }
> = {
  all: { label: "Tout", color: "#131415" },
  hotel: { label: "Hôtel", color: "#3a7190" },
  activites: { label: "Activités", color: "#e10600" },
  transport: { label: "Transport", color: "#3a7190" },
  alentours: { label: "Alentours", color: "#2c5a73" },
};
