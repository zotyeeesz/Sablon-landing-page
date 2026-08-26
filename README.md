# Astro landing page sablon

Ez a projekt egy konfigurációvezérelt Astro landing page sablon. Az alapelv: új landing oldalnál elsősorban a konfigurációt, képeket és jogi tartalmakat kell cserélni, nem a komponensek belső kódját.

## Gyors kezdés

```sh
npm install
npm run dev
npm run build
```

A fejlesztői szerver háttérmódban indul. Hasznos parancsok:

```sh
npm run dev:status
npm run dev:logs
npm run dev:stop
```

## Fő szerkesztési pont

Az új landing fő konfigurációja:

```text
src/config/site.ts
```

Itt található:

- `seo`: title, description, canonical/site URL, Open Graph és Twitter preview adatok.
- `brand`: márkanév, alcím, logó, rövid leírás.
- `theme`: CSS-változók, színek, árnyékok, konténerszélesség, radius.
- `assets`: faviconok és preloadolt képek.
- `header`: felső CTA.
- `navigation`: fő navigációs linkek.
- `landing.sections`: a főoldali szekciók sorrendje és bekapcsolása.
- `hero`, `servicesIntro`, `services`, `about`, `trust`, `cta`, `contact`: a landing tartalma.
- `legal`: impresszumhoz használt adatok.
- `footer`: lábléc szövegek és linkek.

A konfigurációt a `SiteConfig` típus ellenőrzi:

```text
src/types/site.ts
```

## Szekciók kapcsolása

A főoldal a `landing.sections` lista alapján épül fel:

```ts
landing: {
  sections: [
    { id: "hero", enabled: true },
    { id: "services", enabled: true },
    { id: "aboutTrust", enabled: true },
    { id: "cta", enabled: true },
    { id: "contact", enabled: true },
  ],
},
```

Elérhető szekcióazonosítók:

- `hero`
- `services`
- `aboutTrust`
- `cta`
- `contact`

Egy szekció kikapcsolásához állítsd `enabled: false` értékre, vagy vedd ki a listából. A sorrend a lista sorrendjét követi.

## Téma és arculat

A komponensek a `theme.variables` CSS-változóit használják. Új projekt indításakor általában ezekhez érdemes hozzányúlni:

```ts
theme: {
  colorScheme: "light",
  variables: {
    "--color-ink": "#17211d",
    "--color-bg": "#f7f8f3",
    "--color-surface": "#ffffff",
    "--color-accent": "#c75f48",
    "--color-accent-strong": "#9d3f2e",
    "--container": "1180px",
    "--radius": "8px",
  },
},
```

A `src/styles/global.css` tartalmaz alapértelmezett fallback értékeket, de az oldal tényleges témáját a konfiguráció írja felül.

## Képek és statikus fájlok

A publikus assetek helye:

```text
public/
  favicon.svg
  favicon.ico
  images/
    landora-logo.png
    hero-workspace.png
```

Ajánlott méretek:

- logó: legalább `512x512`, lehetőleg átlátszó PNG vagy SVG;
- hero kép: legalább `1800px` széles, WebP vagy optimalizált PNG/JPG;
- social preview kép: `1200x630`.

Az asset útvonalakat a `src/config/site.ts` fájlban kell beállítani.

## Űrlap és kapcsolat

A kapcsolat szekció mezői és beküldési módja konfigurációból jön:

```ts
contact: {
  email: "hello@example.com",
  form: {
    action: "mailto:hello@example.com",
    method: "post",
    enctype: "text/plain",
    submitLabel: "Üzenet küldése",
    fields: [...],
  },
},
```

Később ugyanitt cserélhető Formspree, Netlify Forms vagy saját API endpoint használatára.

## Jogi oldalak

Az impresszum adatai a `legal` konfigurációból jönnek. Az adatkezelési tájékoztató külön Markdown fájl:

```text
src/pages/impresszum.astro
src/pages/adatkezeles.md
```

Éles publikálás előtt a jogi szövegeket és a kiegészítendő mezőket mindig ellenőrizni kell.

## Projektstruktúra

```text
src/
  components/
    AboutTrust.astro
    CTA.astro
    Contact.astro
    Footer.astro
    Header.astro
    Hero.astro
    Services.astro
  config/
    site.ts
  data/
    site.ts
  layouts/
    BaseLayout.astro
    LegalMarkdownLayout.astro
  pages/
    index.astro
    impresszum.astro
    adatkezeles.md
  styles/
    global.css
  types/
    site.ts
```

`src/data/site.ts` csak kompatibilitási re-export. Új módosításokat a `src/config/site.ts` fájlban érdemes végezni.

## Ellenőrzés

Minden nagyobb konfigurációs vagy komponensmódosítás után:

```sh
npm run build
```

Astro dokumentáció:

- Routing: https://docs.astro.build/en/guides/routing/
- Astro komponensek: https://docs.astro.build/en/basics/astro-components/
- Styling: https://docs.astro.build/en/guides/styling/
