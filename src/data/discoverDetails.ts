import type { Localized } from "@/i18n/types";
import { discoverDakar, hotel } from "./guide";

export type DiscoverStep = {
  title: Localized;
  text: Localized;
};

export type DiscoverDetail = {
  id: string;
  title: Localized;
  subtitle: Localized;
  image: string;
  tag?: Localized;
  intro: Localized;
  duration: Localized;
  distance: Localized;
  bestTime: Localized;
  steps: DiscoverStep[];
  tips: Localized[];
  fromHotel: Localized;
};

const byId = Object.fromEntries(discoverDakar.map((item) => [item.id, item]));

function base(
  id: string,
  extra: Omit<DiscoverDetail, "id" | "title" | "subtitle" | "image" | "tag">,
): DiscoverDetail {
  const item = byId[id];
  return {
    id,
    title: item.title,
    subtitle: item.subtitle,
    image: item.image,
    tag: item.tag,
    ...extra,
  };
}

export const discoverDakarDetails: DiscoverDetail[] = [
  base("goree", {
    intro: {
      fr: "Site UNESCO et symbole de l’histoire atlantique. On y va pour les maisons colorées, la Maison des Esclaves et l’ambiance paisible de l’île.",
      en: "UNESCO site and symbol of Atlantic history. Go for the colorful houses, the House of Slaves and the island’s quiet atmosphere.",
    },
    duration: { fr: "Demi-journée (3–5 h)", en: "Half day (3–5 h)" },
    distance: { fr: "~45–60 min depuis l’hôtel", en: "~45–60 min from the hotel" },
    bestTime: { fr: "Matin (moins de monde)", en: "Morning (fewer crowds)" },
    steps: [
      {
        title: { fr: "1. Départ de l’hôtel", en: "1. Leave the hotel" },
        text: {
          fr: "Demandez un taxi / chauffeur à la réception jusqu’au port de Dakar (Gare maritime / embarcadère Gorée).",
          en: "Ask reception for a taxi / driver to Dakar port (maritime station / Gorée pier).",
        },
      },
      {
        title: { fr: "2. Traversée en bateau", en: "2. Boat crossing" },
        text: {
          fr: "Achetez le billet aller-retour sur place. La traversée dure environ 20–30 minutes.",
          en: "Buy a round-trip ticket on site. Crossing takes about 20–30 minutes.",
        },
      },
      {
        title: { fr: "3. Sur l’île", en: "3. On the island" },
        text: {
          fr: "Visitez la Maison des Esclaves, flânez dans les ruelles, faites des photos au bord de l’eau. Guides locaux disponibles à l’arrivée.",
          en: "Visit the House of Slaves, stroll the alleys, take photos by the water. Local guides available on arrival.",
        },
      },
      {
        title: { fr: "4. Retour", en: "4. Return" },
        text: {
          fr: "Reprenez le ferry, puis taxi jusqu’à Diamniadio. La réception peut organiser le trajet retour.",
          en: "Take the ferry back, then a taxi to Diamniadio. Reception can arrange the return ride.",
        },
      },
    ],
    tips: [
      {
        fr: "Prévoyez de l’eau, un chapeau et des espèces (XOF).",
        en: "Bring water, a hat and cash (XOF).",
      },
      {
        fr: "Respectez les lieux mémoriels — photos parfois limitées à l’intérieur.",
        en: "Respect memorial sites — photos may be limited indoors.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi/chauffeur → Port de Dakar → ferry Gorée.",
      en: "Reception → taxi/driver → Dakar port → Gorée ferry.",
    },
  }),
  base("renaissance", {
    intro: {
      fr: "Le Monument de la Renaissance africaine domine Ouakam. Vue panoramique sur Dakar et l’océan — idéal pour une photo signature.",
      en: "The African Renaissance Monument towers over Ouakam. Panoramic views over Dakar and the ocean — perfect for a signature photo.",
    },
    duration: { fr: "1 h 30 – 2 h 30", en: "1.5 – 2.5 hours" },
    distance: { fr: "~35–45 min depuis l’hôtel", en: "~35–45 min from the hotel" },
    bestTime: { fr: "Fin d’après-midi / sunset", en: "Late afternoon / sunset" },
    steps: [
      {
        title: { fr: "1. Trajet", en: "1. Ride" },
        text: {
          fr: "Taxi ou chauffeur via la réception jusqu’au Monument (colline de Ouakam).",
          en: "Taxi or driver via reception to the Monument (Ouakam hill).",
        },
      },
      {
        title: { fr: "2. Accès & billet", en: "2. Entry & ticket" },
        text: {
          fr: "Achetez le billet d’entrée sur place. Possibilité de monter dans le monument selon les horaires.",
          en: "Buy your entry ticket on site. You can go up inside depending on opening hours.",
        },
      },
      {
        title: { fr: "3. Vue & photos", en: "3. View & photos" },
        text: {
          fr: "Profitez du panorama, faites le tour de la place, puis redescendez pour des photos du monument en entier.",
          en: "Enjoy the panorama, walk around the plaza, then step back for full-monument photos.",
        },
      },
    ],
    tips: [
      {
        fr: "Chaussures confortables — il y a un peu de marche / marches.",
        en: "Comfortable shoes — some walking / steps.",
      },
      {
        fr: "Combinez facilement avec la Corniche le même jour.",
        en: "Easy to combine with the Corniche the same day.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi/chauffeur → Monument (Ouakam).",
      en: "Reception → taxi/driver → Monument (Ouakam).",
    },
  }),
  base("corniche", {
    intro: {
      fr: "La Corniche Ouest, c’est la balade signature de Dakar : océan, sport, sunset et ambiance locale.",
      en: "The West Corniche is Dakar’s signature stroll: ocean, sport, sunset and local vibes.",
    },
    duration: { fr: "1–3 h", en: "1–3 hours" },
    distance: { fr: "~35–50 min depuis l’hôtel", en: "~35–50 min from the hotel" },
    bestTime: { fr: "Sunset (17h–19h)", en: "Sunset (5–7pm)" },
    steps: [
      {
        title: { fr: "1. Se faire déposer", en: "1. Get dropped off" },
        text: {
          fr: "Taxi jusqu’à un point de la Corniche (ex. vers Ngor / Almadies / Mamelles selon votre envie).",
          en: "Taxi to a Corniche spot (e.g. toward Ngor / Almadies / Mamelles).",
        },
      },
      {
        title: { fr: "2. Marcher ou rouler", en: "2. Walk or ride" },
        text: {
          fr: "Promenez-vous à pied le long de l’océan. Parfois loue de vélos / trottinettes selon les zones.",
          en: "Walk along the ocean. Bike / scooter rentals sometimes available depending on the area.",
        },
      },
      {
        title: { fr: "3. Pause sunset", en: "3. Sunset stop" },
        text: {
          fr: "Choisissez un spot face à la mer pour le coucher de soleil, puis rappelez votre chauffeur ou prenez un taxi.",
          en: "Pick a seaside spot for sunset, then call your driver or grab a taxi.",
        },
      },
    ],
    tips: [
      {
        fr: "Idéal en fin de journée après le Monument ou les Almadies.",
        en: "Great late day after the Monument or Almadies.",
      },
      {
        fr: "Gardez un œil sur vos affaires dans les zones très fréquentées.",
        en: "Watch your belongings in busy areas.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi → Corniche Ouest · retour en taxi.",
      en: "Reception → taxi → West Corniche · taxi back.",
    },
  }),
  base("mosquee", {
    intro: {
      fr: "La Mosquée de la Divinité, face à l’Atlantique à Ouakam, est l’un des monuments les plus photographiés de Dakar.",
      en: "The Mosque of Divinity, facing the Atlantic in Ouakam, is one of Dakar’s most photographed landmarks.",
    },
    duration: { fr: "45 min – 1 h 30", en: "45 min – 1.5 hours" },
    distance: { fr: "~35–45 min depuis l’hôtel", en: "~35–45 min from the hotel" },
    bestTime: { fr: "Matin ou fin d’après-midi", en: "Morning or late afternoon" },
    steps: [
      {
        title: { fr: "1. Trajet", en: "1. Ride" },
        text: {
          fr: "Taxi / chauffeur jusqu’à Ouakam, Mosquée de la Divinité (près de la Corniche).",
          en: "Taxi / driver to Ouakam, Mosque of Divinity (near the Corniche).",
        },
      },
      {
        title: { fr: "2. Visite & photos", en: "2. Visit & photos" },
        text: {
          fr: "Admirez l’architecture depuis l’extérieur. Respectez les règles de tenue et les horaires de prière.",
          en: "Admire the architecture from outside. Respect dress codes and prayer times.",
        },
      },
      {
        title: { fr: "3. Combiner", en: "3. Combine" },
        text: {
          fr: "Enchaînez facilement avec le Monument de la Renaissance ou une balade Corniche.",
          en: "Easily combine with the Renaissance Monument or a Corniche walk.",
        },
      },
    ],
    tips: [
      {
        fr: "Tenue correcte recommandée près des lieux de culte.",
        en: "Modest dress recommended near places of worship.",
      },
      {
        fr: "Meilleure lumière photo en fin de journée.",
        en: "Best photo light late in the day.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi → Ouakam (Mosquée de la Divinité).",
      en: "Reception → taxi → Ouakam (Mosque of Divinity).",
    },
  }),
  base("plateau", {
    intro: {
      fr: "Le Plateau, c’est le cœur historique et administratif : architecture coloniale, Place de l’Indépendance, marchés et cafés.",
      en: "Plateau is the historic and administrative heart: colonial architecture, Independence Square, markets and cafés.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    distance: { fr: "~30–40 min (TER / taxi)", en: "~30–40 min (TER / taxi)" },
    bestTime: { fr: "Journée en semaine", en: "Weekday daytime" },
    steps: [
      {
        title: { fr: "1. Aller en ville", en: "1. Get downtown" },
        text: {
          fr: "Option TER (gare Diamniadio → Dakar) ou taxi / chauffeur jusqu’au Plateau. La réception indique l’option du jour.",
          en: "TER option (Diamniadio station → Dakar) or taxi / driver to Plateau. Reception can advise for the day.",
        },
      },
      {
        title: { fr: "2. Flâner", en: "2. Wander" },
        text: {
          fr: "Place de l’Indépendance, cathédrale, rues commerçantes, pause café. Marche facile au centre.",
          en: "Independence Square, cathedral, shopping streets, coffee stop. Easy walking downtown.",
        },
      },
      {
        title: { fr: "3. Shopping léger", en: "3. Light shopping" },
        text: {
          fr: "Marché Kermel (si ouvert) ou boutiques autour pour souvenirs et produits locaux.",
          en: "Kermel Market (if open) or nearby shops for souvenirs and local products.",
        },
      },
    ],
    tips: [
      {
        fr: "Gardez vos affaires près de vous dans les zones animées.",
        en: "Keep belongings close in busy areas.",
      },
      {
        fr: "Combinez avec un déjeuner sénégalais au centre.",
        en: "Combine with a Senegalese lunch downtown.",
      },
    ],
    fromHotel: {
      fr: "Réception → TER ou taxi → Plateau (Dakar centre).",
      en: "Reception → TER or taxi → Plateau (downtown Dakar).",
    },
  }),
  base("marches", {
    intro: {
      fr: "Pour l’artisanat et l’ambiance : Kermel, Soumbédioune (poissons & artisanat), ou shopping plus moderne à Sea Plaza.",
      en: "For crafts and atmosphere: Kermel, Soumbédioune (fish & crafts), or more modern shopping at Sea Plaza.",
    },
    duration: { fr: "2–4 h", en: "2–4 hours" },
    distance: { fr: "~35–50 min", en: "~35–50 min" },
    bestTime: { fr: "Matin", en: "Morning" },
    steps: [
      {
        title: { fr: "1. Choisir votre marché", en: "1. Pick your market" },
        text: {
          fr: "Kermel (centre) · Soumbédioune (artisanat / bord de mer) · Sea Plaza (mall). Demandez à la réception selon vos envies.",
          en: "Kermel (center) · Soumbédioune (crafts / seaside) · Sea Plaza (mall). Ask reception based on what you want.",
        },
      },
      {
        title: { fr: "2. Y aller", en: "2. Get there" },
        text: {
          fr: "Taxi / chauffeur depuis l’hôtel. Fixez le tarif ou utilisez un chauffeur hôtel.",
          en: "Taxi / driver from the hotel. Agree on the fare or use a hotel driver.",
        },
      },
      {
        title: { fr: "3. Acheter & négocier", en: "3. Buy & bargain" },
        text: {
          fr: "Dans les marchés traditionnels, la négociation fait partie du jeu — restez souriant et respectueux (Teranga).",
          en: "In traditional markets, bargaining is part of it — stay friendly and respectful (Teranga).",
        },
      },
    ],
    tips: [
      {
        fr: "Prévoyez des espèces en petits billets.",
        en: "Bring cash in small bills.",
      },
      {
        fr: "Comparez les prix avant d’acheter.",
        en: "Compare prices before buying.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi → marché choisi · retour en taxi.",
      en: "Reception → taxi → chosen market · taxi back.",
    },
  }),
  base("restos", {
    intro: {
      fr: "Pour goûter le Sénégal : thiéboudienne, yassa, mafé… Chez Loutcha (centre) ou les restos des Almadies pour poisson & ocean view.",
      en: "To taste Senegal: thiéboudienne, yassa, mafé… Chez Loutcha (downtown) or Almadies restaurants for fish & ocean views.",
    },
    duration: { fr: "2–3 h (repas + trajet)", en: "2–3 h (meal + travel)" },
    distance: { fr: "~35–50 min", en: "~35–50 min" },
    bestTime: { fr: "Déjeuner ou dîner", en: "Lunch or dinner" },
    steps: [
      {
        title: { fr: "1. Choisir l’ambiance", en: "1. Choose the vibe" },
        text: {
          fr: "Cuisine locale authentique en ville, ou géants fruits de mer / sunset aux Almadies. La réception a les bons plans du moment.",
          en: "Authentic local food downtown, or big seafood / sunset in Almadies. Reception has current tips.",
        },
      },
      {
        title: { fr: "2. Réserver le trajet", en: "2. Book the ride" },
        text: {
          fr: "Demandez un chauffeur aller-retour : pratique le soir et pour revenir à Diamniadio sans stress.",
          en: "Ask for a round-trip driver: easiest at night and for getting back to Diamniadio stress-free.",
        },
      },
      {
        title: { fr: "3. Commander", en: "3. Order" },
        text: {
          fr: "Essayez thiéboudienne, yassa poulet/poisson, pastels, bissap. Demandez le niveau de piment.",
          en: "Try thiéboudienne, chicken/fish yassa, pastels, bissap. Ask about spice level.",
        },
      },
    ],
    tips: [
      {
        fr: "Aux Almadies, réservez le weekend si possible.",
        en: "In Almadies, reserve on weekends if you can.",
      },
      {
        fr: "À l’hôtel : FP Social & Chic’Afrique pour rester sur place.",
        en: "At the hotel: FP Social & Chic’Afrique to stay on site.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi/chauffeur → resto · retour organisé.",
      en: "Reception → taxi/driver → restaurant · return arranged.",
    },
  }),
  base("plages", {
    intro: {
      fr: "Ngor, Voile d’Or, Monaco, Anse Bernard… plages pour se baigner, se poser, ou juste regarder l’Atlantique.",
      en: "Ngor, Voile d’Or, Monaco, Anse Bernard… beaches to swim, relax, or simply watch the Atlantic.",
    },
    duration: { fr: "Demi-journée", en: "Half day" },
    distance: { fr: "~40–55 min", en: "~40–55 min" },
    bestTime: { fr: "Matin / avant le rush", en: "Morning / before the rush" },
    steps: [
      {
        title: { fr: "1. Choisir la plage", en: "1. Pick a beach" },
        text: {
          fr: "Ngor (île & village) · Voile d’Or · Monaco · Anse Bernard. Demandez les conditions du jour à la réception.",
          en: "Ngor (island & village) · Voile d’Or · Monaco · Anse Bernard. Ask reception about today’s conditions.",
        },
      },
      {
        title: { fr: "2. Y aller", en: "2. Get there" },
        text: {
          fr: "Taxi / chauffeur. Pour Ngor île : petit bateau depuis la plage de Ngor (quelques minutes).",
          en: "Taxi / driver. For Ngor island: short boat from Ngor beach (a few minutes).",
        },
      },
      {
        title: { fr: "3. Sur place", en: "3. Once there" },
        text: {
          fr: "Baignade selon la mer, transat / resto de plage, sunset. Gardez vos affaires avec vous.",
          en: "Swim if the sea allows, beach lounge / restaurant, sunset. Keep belongings with you.",
        },
      },
    ],
    tips: [
      {
        fr: "Respectez les drapeaux / consignes de baignade.",
        en: "Respect flags / swimming advice.",
      },
      {
        fr: "Crème solaire + eau — le soleil tape fort.",
        en: "Sunscreen + water — the sun is strong.",
      },
    ],
    fromHotel: {
      fr: "Réception → taxi → plage choisie · retour en taxi.",
      en: "Reception → taxi → chosen beach · taxi back.",
    },
  }),
];

export function getDiscoverDetail(id: string): DiscoverDetail | undefined {
  return discoverDakarDetails.find((d) => d.id === id);
}

export const discoverHotelPhone = hotel.phone;
