export const site = {
  meta: {
    title: "Saját Studio | Professzionális weboldalak és digitális rendszerek",
    description:
      "Letisztult landing page-ek, weboldalak és digitális folyamatok vállalkozóknak, akik komolyan veszik az első benyomást.",
  },
  brand: {
    name: "Saját Studio",
    role: "Weboldal, tartalom, digitális folyamat",
    initials: "SS",
  },
  nav: [
    { label: "Szolgáltatások", href: "#services" },
    { label: "Bizalom", href: "#trust" },
    { label: "Folyamat", href: "#about" },
    { label: "Kapcsolat", href: "#contact" },
  ],
  hero: {
    eyebrow: "Személyes, mégis üzleti tempójú digitális jelenlét",
    title: "Weboldal, ami nem csak szép, hanem irányt is ad.",
    lead: "Stratégiai szemmel tervezett landing page-eket és egyszerű digitális rendszereket készítek szolgáltató vállalkozásoknak. A cél: gyorsabb megértés, több jó megkeresés, kevesebb felesleges kör.",
    image: {
      src: "/images/hero-workspace.png",
      alt: "",
    },
    primaryAction: { label: "Konzultációt kérek", href: "#contact" },
    secondaryAction: { label: "Mit vállalok?", href: "#services" },
    stats: [
      { value: "1 oldal", label: "tiszta üzenettel" },
      { value: "2-4 hét", label: "átlagos indulási idő" },
      { value: "0 sablon", label: "egy kaptafára húzott megoldás" },
    ],
  },
  servicesIntro: {
    eyebrow: "Szolgáltatások",
    title: "A lényegre koncentráló digitális alapok.",
    lead: "Nem mindenkinek kell túlméretezett rendszer. Sokszor egy pontosan felépített oldal és néhány jól kitalált folyamat hozza meg a legjobb eredményt.",
  },
  services: [
    {
      title: "Landing page tervezés",
      text: "Egyoldalas bemutatkozó vagy kampányoldal világos szerkezettel, erős ajánlattal és végigvezetett felhasználói úttal.",
    },
    {
      title: "Tartalmi struktúra",
      text: "Üzenetek, szekciók, CTA-k és bizalmi elemek rendezése úgy, hogy a látogató gyorsan értse, miért érdemes továbbmennie.",
    },
    {
      title: "Astro alapú kivitelezés",
      text: "Gyors, statikus, könnyen karbantartható HTML, CSS és Astro megoldás, felesleges frontend rétegek nélkül.",
    },
    {
      title: "Lead-folyamat finomhangolás",
      text: "Kapcsolati útvonalak, űrlapok, mérési pontok és átadási logika, hogy a weboldal ténylegesen munkát vegyen le rólad.",
    },
  ],
  about: {
    eyebrow: "Folyamat",
    title: "Rendet teszek a mondanivaló és a megjelenés között.",
    lead: "A közös munka nem azzal indul, hogy választunk egy látványos blokkot. Először tisztázzuk, kinek szól az oldal, milyen döntést kell segítenie, és mitől lesz hiteles a vállalkozásod hangja.",
    steps: [
      "Rövid helyzetfelmérés és célok pontosítása.",
      "Oldalstruktúra, szövegirány és vizuális ritmus megtervezése.",
      "Astro komponensekre bontott, gyors és újrahasznosítható kivitelezés.",
    ],
  },
  trust: {
    eyebrow: "Bizalom",
    title: "Átlátható munka, mérhető kimenet.",
    items: [
      {
        value: "Komponens alap",
        label: "A szekciók később új sorrendben vagy más tartalommal is használhatók.",
      },
      {
        value: "Mobil első ellenőrzés",
        label: "A töréspontok nem utólagos javításként kerülnek be.",
      },
      {
        value: "Gyors betöltés",
        label: "Nincs felesleges framework, a statikus Astro alap marad a középpontban.",
      },
    ],
  },
  cta: {
    eyebrow: "Következő lépés",
    title: "Ha a jelenlegi oldalad már nem tart lépést veled, kezdjük egy tiszta új alappal.",
    text: "Írj pár mondatot arról, mit szeretnél eladni vagy bemutatni. Válaszban kapsz egy rövid javaslatot a következő lépésre.",
    primaryAction: { label: "Írok egy üzenetet", href: "#contact" },
    secondaryAction: { label: "Vissza a szolgáltatásokhoz", href: "#services" },
  },
  contact: {
    eyebrow: "Kapcsolat",
    title: "Mesélj röviden a projektről.",
    lead: "Nem kell kész brief. Elég, ha tudod, milyen ajánlatot szeretnél tisztábban megmutatni.",
    email: "hello@sajatstudio.hu",
    phone: "+36 30 123 4567",
    city: "Budapest és online",
    formAction: "mailto:hello@sajatstudio.hu",
  },
  footer: {
    links: [
      { label: "Szolgáltatások", href: "#services" },
      { label: "Bizalom", href: "#trust" },
      { label: "Kapcsolat", href: "#contact" },
    ],
  },
};
