// Static mock content captured from the netflix.com (US, en) homepage.
// Images are loaded from Netflix's public CDNs at runtime and are not stored in this repo.

const HERO_BASE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/US-en-20261026-TRIFECTA-perspective_8e099b5b-d21f-4b9e-ac5f-5fe1e6512e68";

export const heroImage = {
  src: `${HERO_BASE}_large.jpg`,
  srcSet: `${HERO_BASE}_large.jpg 2000w, ${HERO_BASE}_medium.jpg 1279w, ${HERO_BASE}_small.jpg 959w`,
};

export const hero = {
  headline: "Unlimited movies, TV shows, and more",
  subhead: "Starts at $8.99. Cancel anytime.",
  ctaPrompt: "Ready to watch? Enter your email to create or restart your membership.",
};

export const adsBanner = {
  title: "The Netflix you love for just $8.99.",
  body: "Get our most affordable, ad-supported plan.",
  cta: "Learn More",
};

export type Title = {
  rank: number;
  name: string;
  poster: string;
  backdrop: string;
  logo: string;
  tags: string[];
  synopsis: string;
};

const CDN = "https://occ-0-470-3996.1.nflxso.net/dnm/api/v6";
const P = `${CDN}/_YyUT33Ze3kFXjMydIZFIm6ajHk`;
const B = `${CDN}/6AYY37jfdO6hpXcMjf9Yu5cnmO0`;
const L = `${CDN}/S4oi7EPZbv2UEPaukW54OORa0S8`;

export const trending: Title[] = [
  {
    rank: 1,
    name: "Cyberpunk: Edgerunners",
    poster: `${P}/AAAABQQf-KHvD6qPDzILwDavZkn685XCsGv5gAflhsk2g-FEP3OlLHaRX_ab9XRpyaSLIk3OsFL74MNPGX5PR6eGI-k5kJ1EWnaIFUwW9fOS__6ODp91hnRuQm-xqNvgQ0XoWu-b.webp?r=e6e`,
    backdrop: `${B}/AAAABdCuLLfkNQxVNHGDlOsHWxA3QpOlGlhfIIO3F4MeQAK-dhJjXFkfwWF-Qa7l5t2fZuhn5-mRNfNYna_Tv4o4_MmEH-RxbVg5Rw3I.webp?r=c18`,
    logo: `${L}/AAAABfRp_1lCyjNAFQJXr3ILGsWNyAk_cE86AjGB4koLGtSth74QK_jpA_P1Wg0sIf05xAVt0PtOqdvZ5kTnRKV-5ygRwaQGQQST4Q.webp?r=6ba`,
    tags: ["2026", "TV-MA", "Show", "Action", "Anime", "Sci-Fi"],
    synopsis:
      "Night City has a new story every season — and a new crew of misfits ready to tell it — in this acclaimed series set in the world of Cyberpunk 2077.",
  },
  {
    rank: 2,
    name: "Nobody Wants This",
    poster: `${P}/AAAABVqDMNnREFynMFZEJDkFNW-KUwKUDunHv995SANNeO5ELF7xzdR58FtoYIWve91wayY5pm2vCO0DRbKBhUED6sswOwQ-WM8JviiTIBbt5lxI1qAlT7zWho0AEVh3-Ipv9Sfu.webp?r=717`,
    backdrop: `${B}/AAAABfv-H6QDD2dlLsS0dgiE86zDUzJoQCNel0I-Y4Ornmfd2czrS2nqtSOE3jmerPkMDAWDouGbswgQjuqERNV-ORoQ5hlXSp_-CxZ8.webp?r=bc5`,
    logo: `${L}/AAAABXzKawyLq_mZFki5otA5cDbQ3jMuyqAjdtBeNHH51dE0vx0pX_ndBFn3t8Ojbi809p5JGhzZ0VoCUn8cwvE3gWiKFxwLS54g9Q.webp?r=342`,
    tags: ["2026", "TV-MA", "Show", "Comedies", "Romance"],
    synopsis:
      "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
  },
  {
    rank: 3,
    name: "Doing Life",
    poster: `${P}/AAAABRK426QZ-TFwh60wUiWjm4CNZv84m6dVSUZ4MLMpA1yfQ057bZDcWcZm-odSOlTNORwXec5NFAjGuGDdyWec_e0D40WFaldkBiLltAkhAu5NbcIigMc8wUC0gSUq16BUcJO3.webp?r=b41`,
    backdrop: `${B}/AAAABRYMkxU945NSDu4HujvcjsxwiLhWFTdGkbOpa2b79q-tHM52WOfBqpBUDkhLblgvd6aYfYNVagFE7ws7ntF3b3dtpYZDhBwQ1yQO.webp?r=dd5`,
    logo: `${L}/AAAABWB8zv3zKJA-nq33KupMWiSpRioX_kPtZMz_-1C6LH_4CDdLEdrpgV5_hgS_LK4fvDsBSb25-r0CtTH21mHjN3B_mdzico4otg.webp?r=273`,
    tags: ["2026", "TV-MA", "Movie", "Romance", "Dramas"],
    synopsis:
      "A single mother and an incarcerated man forge an unlikely bond through heartfelt letters, unlocking a door to redemption, hope and love against all odds.",
  },
  {
    rank: 4,
    name: "The One About Matthew Perry",
    poster: `${P}/AAAABRpR1J0yzmUX416CZ_lWvIv2cbCUpfgbQLudcNLcJ5WRKvKkYO02WoX4MC99GsZq-EQKKRHONhBbX6dvrktl7w_cDVqw1C736ZCemHz_wBYEhHeFTnO4qw3bxxbWoa-krgkv.webp?r=2c4`,
    backdrop: `${B}/AAAABTkaEkSr70i0i6rYAFK2SiMbFtvMQJOtF6bupg03t0mceD8rt-3VxQoFH-OCZ2z-aG7zQ9h6BmBGfLauXh_TdqlT35YyPXITYkjT.webp?r=a66`,
    logo: `${L}/AAAABf9zMmzB7b5ge1n8t75wUy1sWVLtzLz-HZqEpMB55JPI0iNWDHoqdrrYLuDme3OasL0c8OGS6CimZPUcVJ_5LOWhwIwTIKKaPQ.webp?r=2eb`,
    tags: ["2026", "TV-MA", "Show", "Documentaries"],
    synopsis:
      'This documentary series chronicles the Hollywood success, outspoken advocacy and tragic death of the beloved "Friends" star, as told by his inner circle.',
  },
  {
    rank: 5,
    name: "Below",
    poster: `${P}/AAAABR8fE_Dqk_up1j82UmUUt7PgrkWYIP75i4Louk7L78N7c7fdL2w4LxE9tHy9Kjq0YOi1mMF23R0VQqIeWx6wjDHW0CGd9NlDfPqlkDFLsJ8DpJFiU5Xx0pZa6QMqrRC2gQQW.webp?r=e87`,
    backdrop: `${B}/AAAABWeAepZPJVmJl_h2ov68OrFBIou6E8ZrXSaVQjHu2eKucA6juX9xsJ5EOCeDmJdYkK5U0VMLV3vUIcBTI29PZi2Bak95FFKTUqNz.webp?r=f62`,
    logo: `${L}/AAAABUvaAWt_3c5fnQQZm-CDJOp0MAPiMPdtzbB7IP9KU-wY_IVfOQIzkHUSUVTZnu7C6qp0yP5ZI_R3OHwrEVZYZttWT3-otR-7vw.webp?r=297`,
    tags: ["2026", "TV-MA", "Show", "Horror", "Thrillers", "Dramas"],
    synopsis:
      "When a mysterious sea creature starts terrorizing a coastal town, a fisherman must fight to protect his family and his community's vanishing way of life.",
  },
  {
    rank: 6,
    name: "Animals",
    poster: `${P}/AAAABaViQtYN9jRvipVTf7oxK3UEucSn6x6Hrn-OKsTE_AysHDsmAV-tX0adwo84oYjYHTcKaP9i6669y3UvV_KxZyEy7wPT21pAIEkY2qb_6D1y9QYWcRu-O9KOg5LkiWz6OI_E.webp?r=670`,
    backdrop: `${B}/AAAABbGztlzd7ukKt39Ads8sSozQiSp_sk9hryYqsIeeJXMb_Q4fsRF2s8Y7v3g_Ugy9_r5NFyXizsO1zHx3UnQ6mbiMRssQNgoNlTRE.webp?r=c8a`,
    logo: `${L}/AAAABXnBrxPHbAXf43lI_EZhXYh0zl6Bx-NYmeyYsujUdGTcevPXjUD_6VybFnK5eTZxjvVzY0B8aECUCFBKXnVpHAh0bQUYnJP04Q.webp?r=106`,
    tags: ["2026", "R", "Movie", "Thrillers", "Dramas"],
    synopsis:
      "When their son is kidnapped, an LA mayoral candidate and his wife scramble to raise the ransom while making choices that could tear their world apart.",
  },
  {
    rank: 7,
    name: "The Diplomat",
    poster: `${P}/AAAABaMQBNtSd0xCN4l1nvpJ2hKPU0sACnD0y7drphfdzZBf-D5-5-vGC5wAiWhiu4WBWpwBsOlo5OEpDI9fUlFgUvySGSThGe2ccscEoPn3jWOSjqViwvWKFXFE3u8dStgV6J0w.webp?r=fa5`,
    backdrop: `${B}/AAAABSZyHK7fgk5CL108vr_QdnyLSKNJYsiRra8evBJEiX6ynTXO3RNTiQ5FPvPtQ62CVTQmCCVmI8Evn8uwyVkUSkxA5IaYKmGzOKyV.webp?r=699`,
    logo: `${L}/AAAABYdom4gKmnwUzMMoxlNn6Trgg5YGNu7i7BvVNxeSffpWKt-WYj0stmH79yicCyYPCcbHIMxkterodISBx0c-2pDrQeo2XiH3Hw.webp?r=277`,
    tags: ["2026", "TV-MA", "Show", "Thrillers", "Dramas"],
    synopsis:
      "A sharp, principled US diplomat negotiates her high-stakes role as ambassador to the UK and her strained marriage to an ambitious political strategist.",
  },
  {
    rank: 8,
    name: "Why Did I Get Married Again?",
    poster: `${P}/AAAABekXfOxAn9xoonBf5-pbrOhOZKH1yuGzjB4KtT3-qFle8n13uTDKVVheUmGOkOy34RfRQcqFk-gGBERJePF_VPnwEjgfelvir7PPZXunWy-P64qrAMySMJXdc0utvZ6aYq4L.webp?r=cc9`,
    backdrop: `${B}/AAAABS33M1Qhp8M3LtpgAg54_BA5TJpcs0YJ_ds63bJnBMkE1PumyUY2UvrsTXZEbAF0dAJTROLIf0eSuYvUFRLAg0ZHsycqJil2WHP3.webp?r=e97`,
    logo: `${L}/AAAABYY0-28LX42twioQiq4KgzOIbi4x9zVHzswlytWIpnMhRN8FW2gvI6qb7gxaKwx3y412kp3stP4Dx_I2FQ3D0sVekEZgnTmuMQ.webp?r=0b7`,
    tags: ["2026", "PG-13", "Movie", "Comedies", "Romance", "Dramas"],
    synopsis:
      'The couples reunite for the destination wedding of Marcus and Angela\'s daughter, bringing drama old and new as they ask, "Why did we get married again?"',
  },
  {
    rank: 9,
    name: "A Different World",
    poster: `${P}/AAAABTDNxAiAMicIE5x3mRysYDr3Z18iefCWUoXy49apR4C-UmyXu-cFqK3c_YlYSWODCaC5IBi-Hy3YrrlF7BmLLQcnLzemnWzaW36k4V9ZmStye6aVPD-3jk5PIW5X8STygLuA.webp?r=337`,
    backdrop: `${B}/AAAABRRZCWzrXkc8RlhDfg3ADQr3JNEteThxM4RxJ23QsBEAP4swG_K4M5ZRF25l7LxuupBhlh2Hu-90jyHLGlHjIV8mjkFFObJJbSW1.webp?r=475`,
    logo: `${L}/AAAABTPwrZZ1uSqoPXqe7iZsT9yRJznrSUnEVk1z592y9YdGydqHftd5L0g1K5W5q2gQ4-A6aDj5SJsp9Y0TRtcqE1o-UK1kAYu6sQ.webp?r=7b7`,
    tags: ["2026", "TV-14", "Show", "Comedies", "Romance", "Dramas"],
    synopsis:
      "A freshman and her ride-or-die crew juggle school, romantic drama and family legacy at a historically Black college.",
  },
  {
    rank: 10,
    name: "Beauty in Black",
    poster: `${P}/AAAABYatJ8dCwx4YNZWJ7XLkb0bCVmmfx1WU0aJk5lizYTKSA9RhYCJqv7kfOcG6yIc0WBsB30TlH1jIsDufgsm9O6NSJC2FhL9qyMehUuGm-MB0p9IlrWYTBIXCJBwx0BEfEZoW.webp?r=63e`,
    backdrop: `${B}/AAAABb7EXKAHjzpfRUL_b35W6Ycz4OF3N8TGIdM9CnH31Sx9WHx9kVBhHnGCBh8V7I4Rxvv3t6fqqN-PWHW-yurupu2WcJsLgdjKZHDj.webp?r=b09`,
    logo: `${L}/AAAABY7yso3rXOQvrRuL1ZJ29zMr3XiK7ebw-7RUmQdz6zlM-WJMjbJfV3mJcn_Nj31PQjqDjj_a73wIb3p11NcKHChkOhHJJYMZrg.webp?r=f3e`,
    tags: ["2026", "TV-MA", "Show", "Dramas"],
    synopsis:
      "An exotic dancer's fate takes a turn when she crosses paths with the dysfunctional family behind a cosmetics dynasty and a devious trafficking scheme.",
  },
];

export const valueProps = [
  {
    title: "Enjoy on your TV",
    body: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "/images/enjoy-on-tv.svg",
  },
  {
    title: "Download your shows to watch offline",
    body: "Save your favorites easily and always have something to watch.",
    icon: "/images/download.svg",
  },
  {
    title: "Watch everywhere",
    body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "/images/watch-everywhere.svg",
  },
  {
    title: "Create profiles for kids",
    body: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "/images/kids-profiles.svg",
  },
];

// Answers are arrays of paragraphs; Netflix renders them separated by <br><br>.
export const faqs: { question: string; answer: string[] }[] = [
  {
    question: "What is Netflix?",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    ],
  },
  {
    question: "How much does Netflix cost?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $26.99/month (pre-tax).",
    ],
  },
  {
    question: "Where can I watch?",
    answer: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    question: "How do I cancel?",
    answer: [
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    ],
  },
  {
    question: "What can I watch on Netflix?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
  {
    question: "Is Netflix good for kids?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ],
  },
];

export const footerPhone = "1-844-569-7700";

export const footerLinks = [
  "FAQ",
  "Help Center",
  "Account",
  "Netflix House",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Netflix Shop",
  "Redeem Gift Cards",
  "Buy Gift Cards",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
  "Do Not Sell or Share My Personal Information",
  "Ad Choices",
];

export const languages = [
  { value: "en-US", label: "English" },
  { value: "es-US", label: "Español" },
];
