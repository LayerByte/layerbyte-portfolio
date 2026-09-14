const translations = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    heroTitle: "LayerByte",
    heroLine: "Developer / Cybersecurity student / Ethical hacking enthusiast",
    heroCommand: "Building practical security tools and clean open-source projects.",
    statTools: "Tools",
    statYears: "Years learning",
    statMode: "Learning",
    aboutTitle: "About",
    aboutText: "LayerByte is focused on cybersecurity, networking, Linux, Windows, and small tools that solve real problems without unnecessary complexity.",
    aboutOne: "Learning ethical hacking and defensive security.",
    aboutTwo: "Building utilities for certificates, DNS, files, headers, and hashes.",
    aboutThree: "Keeping projects simple, useful, and maintainable.",
    skillsTitle: "Skills",
    skillsCode: "Code",
    skillsSecurity: "Security",
    skillsSystems: "Systems",
    projectsTitle: "Projects",
    projectCertwatch: "TLS certificate expiration checker for quick school and lab checks.",
    projectHashvault: "Hash storage and verification utility focused on speed and clarity.",
    projectFiletrace: "Lightweight file tracking and audit monitor for system changes.",
    projectTracebit: "Network trace and packet analysis helper for learning and quick checks.",
    projectHeaderguard: "Minimal HTTP security header scanner for browser-based checks.",
    projectDnsradar: "DNS reconnaissance helper for lookups and record enumeration.",
    footerText: "Czech Republic / Joined Sep 2026 / 178 contributions in the last year"
  },
  cs: {
    navAbout: "O mně",
    navSkills: "Dovednosti",
    navProjects: "Projekty",
    heroTitle: "LayerByte",
    heroLine: "Vývojář / student kyberbezpečnosti / fanoušek etického hackingu",
    heroCommand: "Stavím praktické bezpečnostní nástroje a čisté open-source projekty.",
    statTools: "Nástroje",
    statYears: "Roky učení",
    statMode: "Učení",
    aboutTitle: "O mně",
    aboutText: "LayerByte se zaměřuje na kyberbezpečnost, sítě, Linux, Windows a malé nástroje, které řeší reálné problémy bez zbytečné složitosti.",
    aboutOne: "Učím se etický hacking a obrannou bezpečnost.",
    aboutTwo: "Stavím utility pro certifikáty, DNS, soubory, hlavičky a hashe.",
    aboutThree: "Držím projekty jednoduché, užitečné a udržovatelné.",
    skillsTitle: "Dovednosti",
    skillsCode: "Kód",
    skillsSecurity: "Bezpečnost",
    skillsSystems: "Systémy",
    projectsTitle: "Projekty",
    projectCertwatch: "Kontrola expirace TLS certifikátů pro rychlé školní a lab testy.",
    projectHashvault: "Ukládání a ověřování hashů se zaměřením na rychlost a přehlednost.",
    projectFiletrace: "Lehký monitor souborových změn pro audit systému.",
    projectTracebit: "Pomocník pro trasování sítě a analýzu paketů při učení a rychlých kontrolách.",
    projectHeaderguard: "Minimální skener HTTP security headerů pro kontroly v prohlížeči.",
    projectDnsradar: "DNS reconnaissance pomocník pro dotazy a enumeraci záznamů.",
    footerText: "Česká republika / Připojen Sep 2026 / 178 příspěvků za poslední rok"
  }
};

const applyLanguage = (language) => {
  const selected = translations[language] ? language : "en";

  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[selected][key] || translations.en[key] || node.textContent;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selected);
  });
  localStorage.setItem("layerbyte-language", selected);
};

document.body.classList.add("is-loading");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.querySelector("[data-loader]")?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 2200);
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("layerbyte-language") || "en");

document.addEventListener("copy", (event) => event.preventDefault());
document.addEventListener("cut", (event) => event.preventDefault());
document.addEventListener("dragstart", (event) => event.preventDefault());
document.addEventListener("contextmenu", (event) => event.preventDefault());
