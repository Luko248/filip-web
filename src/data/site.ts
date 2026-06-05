/**
 * Single source of truth for all artist content and links.
 * Edit values here — every component reads from this file.
 *
 * LINK STATUS:
 *   ✅ confirmed  — verified during research (Spotify, YouTube video, iHeart)
 *   ⚠️ best-guess — handle derived from the artist's known aliases; verify &
 *                   update the URL before going live.
 */

export const artist = {
  /** Current stage name */
  stageName: "ddbfilio",
  /** Real name */
  realName: "Filip Barborík",
  /** Short, punchy hero tagline */
  tagline: "Underground rap z Brna",
  /** Slightly longer subtitle for the hero */
  intro:
    "Umělec, který bere rap jako formu výtvarného umění. Underground od roku 2008 — od Filia, přes Dream Diven Boy, až k ddbfilio.",
  location: "Brno · Česká republika",
  genre: "Underground rap",
  activeSince: 2008,
  // Spotify artist id — drives the live embedded player.
  spotifyArtistId: "5dhpJJwRx4VF4bCiANlcKp",
};

/** The story of the three artistic identities. */
export const aliases = [
  {
    era: "2008 →",
    name: "Filio",
    note: "První umělecké jméno. Začátky na battle stagích a singly na YouTube kanálu TTTC.",
  },
  {
    era: "2022",
    name: "Dream Diven Boy",
    note: "Restart kariéry a vlastní tvorba — EP „Syndrom Explodující Hlavy“ se čtyřmi videoklipy.",
  },
  {
    era: "dnes",
    name: "ddbfilio",
    note: "Aktuální identita. Syrový, osobní underground rap propojený s vizuálním uměním.",
  },
];

/** Selected discography / key releases. */
export const releases = [
  {
    title: "Syndrom Explodující Hlavy",
    type: "EP",
    year: "2022",
    note: "Debutové EP se čtyřmi videoklipy. Singly „S Tebou Bez Tebe“ a „Až do bílýho rána“.",
  },
  {
    title: "Mezitím",
    type: "EP",
    year: "2022",
    note: "Společné EP s producentem DEYNELem.",
  },
  {
    title: "FNL ZONE · Freestyle Sessions",
    type: "Collabs",
    year: "2022 →",
    note: "Spolupráce s brněnskou crew FNL / Efenel a dalšími z místní scény.",
  },
];

/** What the artist is about — the about-section bullet points. */
export const facts = [
  { k: "Scéna", v: "Brno underground" },
  { k: "Aktivní od", v: "2008" },
  { k: "Žánr", v: "Rap / underground" },
  { k: "Crew", v: "FNL ZONE · Efenel" },
];

/**
 * Social & music links. `verified: true` = confirmed during research.
 * Update the `⚠️` URLs once the exact handles are confirmed.
 */
export const links = [
  {
    label: "Spotify",
    handle: "ddbfilio",
    url: "https://open.spotify.com/artist/5dhpJJwRx4VF4bCiANlcKp",
    kind: "music",
    verified: true,
    icon: "spotify",
  },
  {
    label: "YouTube",
    handle: "Dreamdivenboy",
    url: "https://www.youtube.com/watch?v=IS8kb-WKkMI",
    kind: "music",
    verified: true,
    icon: "youtube",
  },
  {
    label: "Apple Music",
    handle: "ddbfilio",
    url: "https://music.apple.com/search?term=dreamdivenboy",
    kind: "music",
    verified: false,
    icon: "apple",
  },
  {
    label: "Instagram",
    handle: "@ddbfilio",
    url: "https://www.instagram.com/ddbfilio/",
    kind: "social",
    verified: false,
    icon: "instagram",
  },
  {
    label: "TikTok",
    handle: "@ddbfilio",
    url: "https://www.tiktok.com/@ddbfilio",
    kind: "social",
    verified: false,
    icon: "tiktok",
  },
  {
    label: "SoundCloud",
    handle: "ddbfilio",
    url: "https://soundcloud.com/ddbfilio",
    kind: "music",
    verified: false,
    icon: "soundcloud",
  },
] as const;

export const nav = [
  { label: "Domů", href: "#home" },
  { label: "Příběh", href: "#story" },
  { label: "Hudba", href: "#music" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#connect" },
];
