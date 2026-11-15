/* contenu : projets et œuvres
   drive, site : '' si pas de lien
   type : affiché sur la carte
   note (facultatif) : affichée sous les liens de la fiche */
const PROJETS = [
  { titre: "N.W.A", type: "Projet scolaire · Bachelor", groupe: "Groupe de 3 (2025)", duree: "1 trimestre",
    problematique: "Retranscrire l'héritage de N.W.A à travers une expérience web interactive.",
    outils: ["Figma", "Illustrator", "Photoshop", "VS Code", "GitHub", "After Effects"],
    drive: "https://drive.google.com/drive/folders/1cB_MixwHEFijkTt3nRpm1Cr7ineGFCRD?usp=drive_link", site: "https://mamazorus.github.io/NWA/",
    images: [
      { src: "assets/img/projets/NWAfirstscreen.png", alt: "Écran d'entrée du site, N.W.A" },
      { src: "assets/img/projets/NWAloadingpage.png", alt: "Écran de chargement « Straight Outta Compton », N.W.A" },
      { src: "assets/img/projets/NWAhistorystart.jpg", alt: "Début de l'histoire, chapitre Origines, N.W.A" },
      { src: "assets/img/projets/Chapitre1.png", alt: "Création d'icônes et interface, N.W.A (1)" },
      { src: "assets/img/projets/Chapitre2.png", alt: "Création d'icônes et interface, N.W.A (2)" },
      { src: "assets/img/projets/Chapitre3.png", alt: "Création d'icônes et interface, N.W.A (3)" },
      { src: "assets/img/projets/Chapitre4.png", alt: "Création d'icônes et interface, N.W.A (4)" },
      { src: "assets/img/projets/Chapitre5.png", alt: "Création d'icônes et interface, N.W.A (5)" },
    ] },
  { titre: "Bookster", type: "Projet scolaire · Bachelor", groupe: "Solo (2026)", duree: "1 mois",
    problematique: "Comment l'amour et l'amitié sont source de bonheur mais mènent à la séparation/mort.",
    outils: ["Figma", "Procreate", "Adobe Illustrator"],
    drive: "https://drive.google.com/drive/folders/17vP9mmjqXGYZuQ3V8m63sCMDJ7GAhf6v?usp=drive_link", site: "",
    images: [
      { src: "assets/img/projets/bookster-poster.jpg", alt: "Affiche du livre illustré Le Petit Prince, Bookster" },
      { src: "assets/img/projets/HappyLpp.png", alt: "Illustrations originales — Le Petit Prince, Bookster (1)" },
      { src: "assets/img/projets/LppNew.png", alt: "Illustrations originales — Le Petit Prince, Bookster (2)" },
      { src: "assets/img/projets/LppKid.png", alt: "Illustrations originales — Le Petit Prince, Bookster (3)" },
      { src: "assets/img/projets/lppoldred.png", alt: "Illustrations originales — Le Petit Prince, Bookster (4)" },
      { src: "assets/img/projets/lppoldblack.png", alt: "Illustrations originales — Le Petit Prince, Bookster (5)" },
    ] },
  { titre: "Typewriter Art", type: "Projet scolaire · Bachelor", groupe: "Binôme (2026)", duree: "1 trimestre",
    problematique: "Transformer une histoire fragmentée en expérience narrative cohérente.",
    outils: ["Figma", "VS Code", "GitHub", "Claude AI"],
    drive: "https://drive.google.com/drive/folders/1Z-vtbn1Od2E5vqhIVdjFKdPxcsMjKFWR?usp=drive_link", site: "https://dyzfnction.github.io/t2-typewriter/",
    note: "Site pensé pour mobile : ouvrez-le sur votre téléphone, ou sur ordinateur faites clic droit › Inspecter (F12) puis activez l’affichage mobile (Ctrl + Maj + M).",
    images: [
      { video: "assets/video/typewriter-art.mp4", src: "assets/img/projets/typewriter-art-poster.jpg", ratio: 0.6,
        alt: "Vidéo de démonstration du site sur mobile, Typewriter Art" },
      { src: "assets/img/projets/ottoartypewriter.png", alt: "Aperçu mobile-first, Typewriter Art (1)" },
      { src: "assets/img/projets/asciiartauteure.png", alt: "Aperçu mobile-first, Typewriter Art (2)" },
      { src: "assets/img/projets/typewriter3d.png", alt: "Aperçu mobile-first, Typewriter Art (3)" },
    ] },
  { titre: "Octime Web", type: "Projet professionnel", groupe: "Binôme (Stage)", duree: "1 heure",
    problematique: "Création d'affiches de recrutement et de formation RH.",
    outils: ["Canva"],
    drive: "https://drive.google.com/drive/folders/1exUjWEwxsCmopFQ8QySgmF3FUeQJNZr7?usp=drive_link", site: "",
    images: [
      { src: "assets/img/projets/formationoctimeweb.jpg", alt: "Supports de communication (2024), Octime Web (1)" },
      { src: "assets/img/projets/tutoctime1.png", alt: "Supports de communication (2024), Octime Web (2)" },
      { src: "assets/img/projets/tutoctime2.png", alt: "Supports de communication (2024), Octime Web (3)" },
    ] },
  { titre: "Site marchand", type: "Projet scolaire · BTS SIO", groupe: "Binôme puis Solo", duree: "1 semestre",
    problematique: "Réaliser un site marchand sur le thème des vélos électriques.",
    outils: ["Notepad++", "Canva"],
    drive: "https://drive.google.com/drive/folders/1NBrp-Ogzv5nA3SnLTPoDBg5jnW77oTMY?usp=drive_link", site: "",
    images: [
      { src: "assets/img/projets/veloclassicowboy.png", alt: "Aperçu du site vitrine, Site marchand (principale)" },
      { src: "assets/img/projets/sitemarchandcowboy.png", alt: "Page d'accueil du site vitrine, Site marchand" },
      { src: "assets/img/projets/siteM.jpg", alt: "Aperçus du site vitrine, Site marchand" },
    ] },
];
/* technique : légende affichée (logiciel ou support)
   images : la première est dans la bande, toutes dans la loupe
   titre au survol automatique (« Œuvre 1 », « Œuvre 2 »…) */
const OEUVRES = [
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatebaddie.png", "assets/img/oeuvres/procreatebaddiev2.jpg"] },
  { technique: "iArtBook", images: ["assets/img/oeuvres/iartwannabefrozen.png"] },
  { technique: "ibis Paint X", images: ["assets/img/oeuvres/ibispaintxflowergirl.jpg"] },
  { technique: "ibis Paint X", images: ["assets/img/oeuvres/ibispaintxgirl.jpg"] },
  { technique: "ibis Paint X", images: ["assets/img/oeuvres/ibispaintxweirdtree.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatealien.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateangrylittlegirl.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatebabyface.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateblondhairedperson.png", "assets/img/oeuvres/procreateblondhairedpersonuncoloredversion.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatecryingface.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatedontlookattheyesmistake.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatedude.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatefairies.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatehappylittleboy.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatehugevsnormal.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateidk.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatejellyfishgirl.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatemask.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatemymonster.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatepinkhairyellowglasses.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreaterabbit.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateselfinspo.jpg"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateselfportrait.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateselfportraitnewstyle.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatesideprofildude.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatesillydrawing.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatesufferingcharacter.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateunfinishedpiece.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatewannabeegyptianwannabejapanesegirl.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateweirdodude.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreatewhateverthisis.png"] },
  { technique: "Procreate", images: ["assets/img/oeuvres/procreateyounggirl.png"] },
  { technique: "Art traditionnel", images: ["assets/img/oeuvres/traditionalartangelfrontpic.jpg", "assets/img/oeuvres/traditionalartangelsidepic.jpg"] },
  { technique: "Art traditionnel", images: ["assets/img/oeuvres/traditionalartpinterestreferencegirl.jpg"] },
  { technique: "Art traditionnel", images: ["assets/img/oeuvres/traditionaldrawingyoutubescreen.jpg"] },
];

/* image provisoire si src est vide */
function provisoire(seed, w = 16, h = 9) {
  const a = 20 + (seed * 37) % 60, b = 25 + (seed * 53) % 50;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w * 100} ${h * 100}'><rect width='100%' height='100%' fill='#2a0012'/><circle cx='${a}%' cy='${b}%' r='${Math.min(w, h) * 32}' fill='#D3C8A6' opacity='.18'/></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}
const srcDe = (img, seed, w, h) => img.src || provisoire(seed, w, h);
const doux = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;
const echap = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---- projets : pile de cartes ---- */
const pile = document.getElementById('pile');
const ROTS = ['-1.5deg', '1.5deg', '-1deg', '2deg', '-2.5deg'];
let ordre = PROJETS.map((_, i) => i);            // ordre[0] = carte du dessus
const tirages = PROJETS.map((p, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tirage';
  b.style.setProperty('--rot', ROTS[i % ROTS.length]);
  b.innerHTML = `<span class="carte__titre"></span><span class="carte__outils"></span>`;
  b.querySelector('.carte__titre').textContent = p.titre;
  b.querySelector('.carte__outils').textContent = p.type;   // carte : cadre du projet (les outils sont dans la fiche)
  b.setAttribute('aria-label', `Ouvrir le projet ${p.titre}`);
  b.addEventListener('click', () => { if (!b.dataset.glisse) ouvrirProjet(i); });
  pile.appendChild(b);
  return b;
});
document.getElementById('pileTotal').textContent = PROJETS.length;
function ranger() {
  ordre.forEach((i, p) => {
    const t = tirages[i];
    t.dataset.p = p; t.style.setProperty('--p', p);
    t.tabIndex = p === 0 ? 0 : -1;
    t.setAttribute('aria-hidden', p === 0 ? 'false' : 'true');
  });
  document.getElementById('pileNum').textContent = ordre[0] + 1;
}
let occupe = false;
const sortie = (t, on) => { t.style.setProperty('--dx', on ? '66%' : '0px'); t.style.setProperty('--tilt', on ? '6deg' : '0deg'); };
function suivant() {
  if (occupe) return; occupe = true;
  const t = tirages[ordre[0]];
  t.classList.add('sort'); sortie(t, true);       // 1. la carte du dessus sort sur la droite…
  setTimeout(() => {
    t.classList.remove('sort');
    ordre.push(ordre.shift()); ranger();          // 2. …passe derrière les autres…
    requestAnimationFrame(() => { sortie(t, false); setTimeout(() => (occupe = false), 450); });  // 3. …et se glisse au fond du paquet
  }, doux() ? 320 : 0);
}
function precedent() {
  if (occupe) return; occupe = true;
  const t = tirages[ordre[ordre.length - 1]];
  t.classList.add('sort'); sortie(t, true);       // la carte du fond sort de derrière le paquet…
  setTimeout(() => {
    t.classList.remove('sort');
    ordre.unshift(ordre.pop()); ranger();         // …passe devant…
    requestAnimationFrame(() => { sortie(t, false); setTimeout(() => (occupe = false), 450); });  // …et se pose sur la pile
  }, doux() ? 320 : 0);
}
document.getElementById('pileSuiv').addEventListener('click', suivant);
document.getElementById('pilePrec').addEventListener('click', precedent);
pile.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); suivant(); tirages[ordre[0]].focus(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); precedent(); tirages[ordre[0]].focus(); }
});
// glisser la carte du dessus pour changer de carte
let prise = null;
pile.addEventListener('pointerdown', (e) => {
  const t = tirages[ordre[0]];
  if (!t.contains(e.target)) return;
  prise = { x: e.clientX, t }; t.classList.add('est-tire'); delete t.dataset.glisse;
});
addEventListener('pointermove', (e) => {
  if (!prise) return;
  const dx = e.clientX - prise.x;
  if (Math.abs(dx) > 6) prise.t.dataset.glisse = '1';
  prise.t.style.setProperty('--dx', dx + 'px');
});
addEventListener('pointerup', (e) => {
  if (!prise) return;
  const { t } = prise; const dx = e.clientX - prise.x; prise = null;
  t.classList.remove('est-tire');
  if (Math.abs(dx) > 90) { t.style.setProperty('--dx', '0px'); if (dx < 0) suivant(); else precedent(); }
  else t.style.removeProperty('--dx');
  setTimeout(() => delete t.dataset.glisse, 50);
});
ranger();

/* ---- hobby : la salle obscure (halo de lanterne qui suit le curseur ou se promène seul) ---- */
const mur = document.getElementById('mur');

// ordinateur : le mur fait trois lignes de largeur à peu près égale
// téléphone : pas de rangées, le mur se replie librement
const NB_LIGNES = 3;
const lignesMur = Array.from({ length: NB_LIGNES }, () => { const l = document.createElement('div'); l.className = 'mur__ligne'; mur.appendChild(l); return l; });
const proportions = OEUVRES.map(() => 3 / 4);   // largeur / hauteur d'un dessin : 3/4 avant le chargement de l'image
const tuiles = OEUVRES.map((o, i) => {
  const b = document.createElement('button');
  b.className = 'oeuvre-tuile'; b.type = 'button'; b.title = `Œuvre ${i + 1}`;
  const im = new Image(); im.loading = 'lazy'; im.decoding = 'async';
  im.addEventListener('load', () => {
    if (!im.naturalWidth || !im.naturalHeight) return;
    proportions[i] = im.naturalWidth / im.naturalHeight;
    b.style.setProperty('--prop', proportions[i]);
    ajusterMur();
  });
  im.src = o.images[0] || provisoire(20 + i, 3, 4); im.alt = `Œuvre ${i + 1}, ${o.technique}`;
  b.appendChild(im);
  b.addEventListener('click', () => ouvrirOeuvre(i));
  return b;
});
const salle = document.querySelector('.salle'), voile = salle.querySelector('.lanterne');

// répartit les dessins en 3 lignes de largeurs proches
let disposition = '';
function disposerMur() {
  const tient = (max) => { let n = 1, s = 0; for (const p of proportions) { if (s + p > max) { n++; s = p; } else s += p; } return n <= NB_LIGNES; };
  let bas = Math.max(...proportions), haut = proportions.reduce((a, p) => a + p, 0);
  for (let k = 0; k < 40; k++) { const m = (bas + haut) / 2; if (tient(m)) haut = m; else bas = m; }
  const groupes = Array.from({ length: NB_LIGNES }, () => []);
  let l = 0, s = 0;
  proportions.forEach((p, i) => {
    if (s + p > haut && l < NB_LIGNES - 1) { l++; s = 0; }
    groupes[l].push(i); s += p;
  });
  const cle = groupes.map((g) => g.join()).join('|');
  if (cle !== disposition) { disposition = cle; groupes.forEach((g, k) => g.forEach((i) => lignesMur[k].appendChild(tuiles[i]))); }
  return groupes;
}
disposerMur();

// téléphone : le mur doit tenir dans l'écran…
// …les vignettes rapetissent jusqu'à ce que ça tienne
// ordinateur : cherche la hauteur de vignette qui fait tenir les 3 lignes dans la largeur
const mobile = matchMedia('(max-width: 700px)');
let ajustement = 0;
function ajusterMur() {
  cancelAnimationFrame(ajustement);
  ajustement = requestAnimationFrame(() => {
    mur.style.removeProperty('--tuile');
    const im = mur.querySelector('img');
    if (!im) return;
    if (mobile.matches) return;   // téléphone : grille gérée par le CSS, rien à ajuster
    const groupes = disposerMur(), largeur = mur.clientWidth;
    if (!largeur) return;   // section pas encore affichée : recalcul dès qu'elle l'est
    const ecart = parseFloat(getComputedStyle(lignesMur[0]).columnGap) || 0;
    let h = Infinity;
    groupes.forEach((g) => {
      if (g.length) h = Math.min(h, (largeur - (g.length - 1) * ecart) / g.reduce((a, i) => a + proportions[i], 0));
    });
    if (isFinite(h)) mur.style.setProperty('--tuile', Math.floor(h) + 'px');
  });
}
if ('ResizeObserver' in window) {
  let largeurVue = 0;
  new ResizeObserver(() => { if (mur.clientWidth !== largeurVue) { largeurVue = mur.clientWidth; ajusterMur(); } }).observe(mur);
}
addEventListener('resize', ajusterMur); mobile.addEventListener('change', ajusterMur);
ajusterMur();

/* ---- hobby (téléphone) : « Glissez → », barre de progression et petit coup de pouce au premier passage ---- */
const friseAide = document.querySelector('.frise__aide'), friseTrait = friseAide.querySelector('.frise__barre i');
let teaser = false, touche = false;
function majFrise() {
  const vu = salle.clientWidth, total = salle.scrollWidth, max = total - vu;
  friseAide.classList.toggle('sans-defilement', max <= 4);
  if (max <= 4) return;
  const r = vu / total;
  friseTrait.style.width = (r * 100) + '%';
  friseTrait.style.transform = `translateX(${(salle.scrollLeft / max) * (1 / r - 1) * 100}%)`;
  if (!teaser) friseAide.classList.toggle('a-glisse', salle.scrollLeft > 12);
}
salle.addEventListener('scroll', majFrise, { passive: true });
salle.addEventListener('pointerdown', () => { touche = true; teaser = false; }, { passive: true });
addEventListener('resize', majFrise); mobile.addEventListener('change', majFrise);
if ('ResizeObserver' in window) new ResizeObserver(majFrise).observe(salle);
majFrise();
let pousse = false;
if ('IntersectionObserver' in window) new IntersectionObserver((es) => {       // la frise glisse un peu vers la gauche puis revient (une fois)
  if (pousse || touche || !es[0].isIntersecting || !mobile.matches || !doux()) return;
  pousse = true; teaser = true;
  setTimeout(() => { if (!touche) salle.scrollTo({ left: 72, behavior: 'smooth' }); }, 600);
  setTimeout(() => { if (!touche) salle.scrollTo({ left: 0, behavior: 'smooth' }); }, 1400);
  setTimeout(() => { teaser = false; majFrise(); }, 2200);
}, { threshold: 0.7 }).observe(salle);

if (!doux()) salle.classList.add('eclairee');   // animations réduites : salle éclairée
else {
  let cibleL = null, mvt = -1e9, visibleL = false;
  const posL = { x: .5, y: .5 };
  const viser = (e) => { const r = salle.getBoundingClientRect(); cibleL = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }; mvt = performance.now(); };
  salle.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') viser(e); });
  salle.addEventListener('pointerdown', viser);
  salle.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') mvt = -1e9; });
  new IntersectionObserver(([e]) => { visibleL = e.isIntersecting; }).observe(salle);
  (function eclairer(t) {
    if (visibleL) {
      // sans geste depuis 2,5 s : la lanterne se promène sur le mur
      const promenade = { x: .5 + .4 * Math.sin(t / 4300), y: .5 + .34 * Math.sin(t / 3100 + 1.2) };
      const suit = t - mvt < 2500 && cibleL;
      const vise = suit ? cibleL : promenade, k = suit ? .12 : .03;
      posL.x += (vise.x - posL.x) * k; posL.y += (vise.y - posL.y) * k;
      // lanterne placée en pixels dans le repère du voile
      const s = salle.getBoundingClientRect(), v = voile.getBoundingClientRect();
      salle.style.setProperty('--lx', (s.left - v.left + posL.x * s.width).toFixed(1) + 'px');
      salle.style.setProperty('--ly', (s.top - v.top + posL.y * s.height).toFixed(1) + 'px');
    }
    requestAnimationFrame(eclairer);
  })(0);
}
const duree = OEUVRES.length * 11 + 's';
document.querySelector('.pied__vague').style.setProperty('--duree', duree);

/* ---- menu des sections : point actif selon la section à l'écran ---- */
const reperes = [...document.querySelectorAll('.repere')];
/* ---- bulle du chat : présente chaque section ---- */
// nuit : chat réveillé ; jour : il s'endort en descendant (pas de bulle dans le footer)
const PAROLES = {
  nuit: {
    projets: "Voici les projets scolaires et professionnels de Haze !",
    oeuvres: "Le dessin est sa passion. Surtout en digital et parfois sur papier.",
  },
  jour: {
    projets: "Voici… les projets de Haz…",   // jour : il parle moins
    oeuvres: "Retrouvez ses… sa passion pour le… dessin… *bâille*",                      // jour : il s'endort presque
  },
};
const repliqueDe = (section) => PAROLES[document.body.classList.contains('jour') ? 'jour' : 'nuit'][section];
// ferme la bulle ; un halo invite à la rouvrir
function cacherBulle() {
  clearTimeout(parlerChat.minuteur); clearTimeout(parlerChat.cacher);
  document.getElementById('bulle').classList.remove('est-visible');
  document.getElementById('chatGuetteur').classList.toggle('peut-parler', !!repliqueDe(parlerChat.section));
}
function parlerChat(section) {
  const bulle = document.getElementById('bulle');
  clearTimeout(parlerChat.minuteur); clearTimeout(parlerChat.cacher);
  bulle.classList.remove('est-visible');              // l'ancienne réplique s'efface…
  document.getElementById('chatGuetteur').classList.remove('peut-parler');
  parlerChat.section = section;
  const replique = repliqueDe(section);
  if (!replique) return;
  const jour = document.body.classList.contains('jour');
  parlerChat.minuteur = setTimeout(() => {               // …puis la nouvelle apparaît
    bulle.innerHTML = '';
    bulle.appendChild(Object.assign(document.createElement('span'), { className: 'bulle__texte', textContent: replique }));
    // jour : la bulle rapetisse quand le chat s'endort
    bulle.classList.toggle('somnolente', jour && section === 'projets');
    bulle.classList.toggle('endormie', jour && section === 'oeuvres');
    bulle.classList.add('est-visible');
    // téléphone : la bulle se retire après 4 s (en plus des 0,45 s d'apparition)
    if (matchMedia('(max-width: 700px)').matches) parlerChat.cacher = setTimeout(cacherBulle, 4000);
  }, 450);
}

function majReperes() {
  const milieu = innerHeight * 0.5;
  let courant = null;
  reperes.forEach((r) => {
    const s = document.getElementById(r.dataset.cible);
    if (s.getBoundingClientRect().top < milieu) courant = r.dataset.cible;
  });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) courant = 'contact';
  reperes.forEach((r) => r.setAttribute('aria-current', r.dataset.cible === courant ? 'true' : 'false'));
  // à chaque changement de section, affiche le nom à côté du point
  if (courant !== majReperes.dernier) {
    majReperes.dernier = courant;
    clearTimeout(majReperes.minuteur);
    reperes.forEach((r) => r.classList.toggle('montre-nom', r.dataset.cible === courant));
    majReperes.minuteur = setTimeout(() => reperes.forEach((r) => r.classList.remove('montre-nom')), 1800);
    parlerChat(courant);
  }
  const nav = document.querySelector('.reperes').getBoundingClientRect();
  const pied = document.getElementById('pied').getBoundingClientRect();
  document.querySelector('.reperes').classList.toggle('sur-clair', pied.top < nav.bottom - 20 && innerWidth > 700);
  const logo = document.getElementById('retour');
  logo.classList.toggle('sur-clair', pied.top < logo.getBoundingClientRect().bottom - 10);
}
addEventListener('scroll', () => requestAnimationFrame(majReperes), { passive: true });
reperes.forEach((r) => r.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById(r.dataset.cible).scrollIntoView({ behavior: doux() ? 'smooth' : 'auto', block: 'start' });
}));
majReperes();

// écran d'entrée (téléphone) : le bouton mène aux projets
document.getElementById('suite')?.addEventListener('click', () => {
  document.getElementById('projets').scrollIntoView({ behavior: doux() ? 'smooth' : 'auto', block: 'start' });
});
// téléphone : pendant la saisie, le chat, la bulle, le menu et la patte s'effacent
document.querySelectorAll('#formContact input, #formContact textarea').forEach((c) => {
  c.addEventListener('focus', () => document.body.classList.add('saisie'));
  c.addEventListener('blur', () => document.body.classList.remove('saisie'));
});

/* chat du footer : fixé en bas de l'écran, se pose sur la vague au footer */
const chat = document.getElementById('chatGuetteur');
const pied = document.getElementById('pied');
const patteHaut = document.getElementById('patteHaut');
function placerChat() {
  const haut = pied.getBoundingClientRect().top;
  // le chat se réveille à partir des projets et se rendort en haut de page
  const reveille = document.getElementById('projets').getBoundingClientRect().top < innerHeight * 0.7;
  // mode jour : les paupières tombent en descendant (0 = yeux ouverts, 1 = endormi)
  const debut = document.getElementById('projets').offsetTop - innerHeight * .3;
  const fin = document.documentElement.scrollHeight - innerHeight;
  const sommeil = Math.min(1, Math.max(0, (scrollY - debut) / Math.max(1, fin - debut)));
  const somnole = 1 - Math.pow(1 - sommeil, 2);   // les paupières tombent vite au début : bien visibles dès les projets
  const ouvert = (1 - .86 * somnole).toFixed(3), endort = sommeil > .97;
  const avant = { ouvert: chat.style.getPropertyValue('--ouvert') || '1', endort: chat.classList.contains('s-endort') };
  chat.style.setProperty('--ouvert', ouvert);
  chat.classList.toggle('s-endort', endort);
  chat.classList.toggle('est-reveille', reveille);
  patteHaut.classList.toggle('est-visible', reveille);
  patteHaut.classList.toggle('sur-clair', haut < innerHeight - 60);
  // le menton se pose sous la crête de la vague
  const decale = document.body.classList.contains('jour') && matchMedia('(min-width: 701px)').matches ? 0.34 : 0.42;   // même valeur que le translateY du chat en CSS
  const marge = chat.offsetHeight * decale + pied.querySelector('.pied__vague').offsetHeight * 0.45;
  const pose = haut <= innerHeight + marge;
  if (pose !== chat.classList.contains('est-pose')) {
    chat.classList.toggle('est-pose', pose);
    if (pose) { pied.appendChild(chat); chat.style.bottom = `calc(100% + ${marge}px)`; }
    else { pied.parentNode.insertBefore(chat, pied); chat.style.bottom = ''; }
    // un élément déplacé ne joue pas ses transitions : on repart de l'état précédent…
    // …puis on applique le nouvel état à l'image suivante
    chat.style.setProperty('--ouvert', avant.ouvert); chat.classList.toggle('s-endort', avant.endort);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      chat.style.setProperty('--ouvert', ouvert); chat.classList.toggle('s-endort', endort);
    }));
  }
  if (pose) chat.style.bottom = `calc(100% + ${marge}px)`;   // suit le changement jour/nuit
}
addEventListener('scroll', () => requestAnimationFrame(placerChat), { passive: true });
addEventListener('resize', placerChat);
/* tout en bas : l'espace au-dessus du footer complète la hauteur de l'écran */
function ajusterPied() {
  // le formulaire remplit le vide au-dessus du footer
  const sec = document.getElementById('contact');
  const marge = parseFloat(getComputedStyle(pied).marginTop);
  sec.style.minHeight = Math.max(0, innerHeight - pied.offsetHeight - marge) + 'px';
}
// texte du contact placé au milieu de l'espace entre le logo et le chat…
// …(ordinateur uniquement ; rien à faire sur téléphone)
function centrerContact() {
  const sec = document.getElementById('contact'), texte = sec.querySelector('.contact__texte');
  texte.style.marginTop = '';
  if (getComputedStyle(sec).display !== 'grid') return;
  const bas = document.documentElement.scrollHeight - innerHeight;                  // défilement tout en bas
  const logoBas = bas + document.getElementById('retour').getBoundingClientRect().bottom;   // logo fixe
  const piedHaut = pied.getBoundingClientRect().top + scrollY;
  const chatHaut = piedHaut - chat.offsetHeight - pied.querySelector('.pied__vague').offsetHeight * .45;   // même calcul que placerChat
  const debut = sec.getBoundingClientRect().top + scrollY + parseFloat(getComputedStyle(sec).paddingTop);
  const milieu = (logoBas + chatHaut) / 2;
  texte.style.marginTop = Math.max(0, milieu - texte.offsetHeight / 2 - debut) + 'px';
}
addEventListener('resize', () => { ajusterPied(); placerChat(); centrerContact(); });
// un clic sur le chat ferme sa bulle, un autre la rouvre
chat.addEventListener('click', () => {
  if (document.getElementById('bulle').classList.contains('est-visible')) cacherBulle();
  else parlerChat(parlerChat.section);
});

patteHaut.addEventListener('click', () => window.scrollTo({ top: 0, behavior: doux() ? 'smooth' : 'auto' }));

/* ---- visionneuse ---- */
const vis = document.getElementById('visionneuse');
const loupe = document.getElementById('loupe');

/* ---- téléphone : fiche projet en pages glissées (Aperçu, Détails, Visuels) ---- */
const contenuFiche = vis.querySelector('.visionneuse__contenu');
function depaginerFiche() {   // remet la fiche dans sa structure d'origine
  vis.classList.remove('en-pages');
  const tete = contenuFiche.querySelector('.fiche__tete');
  if (tete) contenuFiche.prepend(tete);
  contenuFiche.querySelectorAll(':scope > .fiche__page').forEach((p) => p.remove());
}
function paginerFiche() {
  depaginerFiche();
  if (!mobile.matches) return;
  const c = contenuFiche;
  const page = (nom, ...els) => {
    const sec = Object.assign(document.createElement('section'), { className: `fiche__page fiche__page--${nom}` });
    sec.append(...els.filter(Boolean));
    c.appendChild(sec);
  };
  page('apercu', c.querySelector('.fiche__tete'), c.querySelector('.fiche__hero'), c.querySelector('.fiche__p1'));
  page('details', c.querySelector('.fiche__p2'));
  page('visuels', c.querySelector('.fiche__galerie'));
  c.querySelector('.fiche__page--visuels:empty')?.remove();   // projet sans autres images : pas de 3e page
  vis.classList.add('en-pages');
}
function pagesFiche() {
  vis.querySelector('.fiche__points')?.remove();
  if (!mobile.matches) return;
  const noms = ['Aperçu', 'Détails'];
  if (contenuFiche.querySelector('.fiche__galerie')) noms.push('Visuels');
  const nav = Object.assign(document.createElement('nav'), { className: 'fiche__points' });
  nav.setAttribute('aria-label', 'Pages du projet');
  noms.forEach((nom, k) => {
    const bt = Object.assign(document.createElement('button'), { type: 'button', textContent: nom });
    bt.addEventListener('click', () => contenuFiche.scrollTo({ left: k * contenuFiche.clientWidth, behavior: doux() ? 'smooth' : 'auto' }));
    nav.appendChild(bt);
  });
  vis.appendChild(nav);
  majPagesFiche();
}
function majPagesFiche() {
  const nav = vis.querySelector('.fiche__points');
  if (!nav) return;
  const k = Math.round(contenuFiche.scrollLeft / (contenuFiche.clientWidth || 1));
  [...nav.children].forEach((bt, j) => bt.setAttribute('aria-current', j === k ? 'true' : 'false'));
}
contenuFiche.addEventListener('scroll', () => requestAnimationFrame(majPagesFiche), { passive: true });
/* invitation à toucher : visible 4 s puis repliée en « ? » ; un toucher sur le « ? » la réaffiche */
function replierCta(cta, delai = 4000) {
  if (!cta) return;
  clearTimeout(cta.minuteur);
  cta.classList.remove('replie');
  cta.minuteur = setTimeout(() => cta.classList.add('replie'), delai);
  if (!cta.ecoute) {
    cta.ecoute = true;
    cta.addEventListener('click', (e) => { e.stopPropagation(); replierCta(cta, 3500); });
  }
}
// celle de hobby démarre la première fois que la bande arrive à l'écran
const ctaHobby = document.querySelector('#oeuvres .cta-toucher');
if (ctaHobby && 'IntersectionObserver' in window) {
  const vu = new IntersectionObserver(([e]) => { if (e.isIntersecting) { replierCta(ctaHobby); vu.disconnect(); } }, { threshold: .6 });
  vu.observe(ctaHobby);
}

/* ---- fiche projet : image principale fixe et bande d'images qui défile ----
   images[0] = image principale (un clic l'agrandit), les suivantes défilent de droite à gauche
   la piste est faite de deux moitiés identiques, décalées d'une moitié (animation « defile ») */
const VITESSE_BANDE = 34;   // pixels par seconde
let observeurVideos = null;

function vignette(im, k, { clone = false, hero = false, lazy = false } = {}) {
  const b = Object.assign(document.createElement('button'), { type: 'button', className: hero ? 'fiche__hero' : 'fiche__vignette' });
  b.setAttribute('aria-label', `Agrandir : ${im.alt || 'image ' + (k + 1)}`);
  if (clone) { b.tabIndex = -1; b.setAttribute('aria-hidden', 'true'); }
  let m;
  if (im.video) {
    m = document.createElement('video');
    m.muted = true; m.loop = true; m.playsInline = true; m.preload = hero ? 'auto' : 'metadata'; m.poster = im.src; m.src = im.video;
    m.setAttribute('muted', ''); m.setAttribute('playsinline', ''); m.setAttribute('aria-hidden', 'true');
    if (im.ratio) m.style.aspectRatio = String(im.ratio);
  } else {
    m = Object.assign(new Image(), { src: im.src, alt: '', draggable: false });
    if (lazy) m.loading = 'lazy';
  }
  b.appendChild(m);
  b.addEventListener('click', () => ouvrirLoupe(k));
  return b;
}

// images : celles de la bande ; decalage : leur rang dans la loupe (l'image principale est le rang 0)
function bandeDefilante(box, images, decalage = 0) {
  const piste = Object.assign(document.createElement('div'), { className: 'fiche__piste' });
  const serie = (clone, copies = 1) => {
    const d = Object.assign(document.createElement('div'), { className: 'fiche__serie' });
    for (let c = 0; c < copies; c++) images.forEach((im, k) => d.appendChild(vignette(im, k + decalage, { clone: clone || c > 0 })));
    return d;
  };
  const attendre = (el) => Promise.all([...el.querySelectorAll('img')].map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve())));
  let genere = 0;
  const construire = async () => {
    const mon = ++genere;
    box.classList.toggle('statique', !doux());                  // animations réduites : pas de défilement automatique
    piste.style.removeProperty('--duree'); piste.classList.remove('en-marche');
    piste.replaceChildren(serie(false));
    if (!piste.isConnected) box.appendChild(piste);
    await attendre(piste);
    if (mon !== genere) return;
    const une = piste.firstChild.getBoundingClientRect().width;  // largeur d'une série
    if (!doux() || !une) { setObservateur(piste, box); return; }
    const copies = Math.max(1, Math.ceil(box.clientWidth / une)); // une moitié couvre au moins la bande
    piste.replaceChildren(serie(false, copies), serie(true, copies));
    await attendre(piste);
    if (mon !== genere) return;
    const moitie = piste.firstChild.getBoundingClientRect().width;
    piste.style.setProperty('--duree', Math.max(20, moitie / VITESSE_BANDE).toFixed(1) + 's');
    piste.classList.add('en-marche');                            // le défilement démarre une fois la boucle prête
    setObservateur(piste, box);
  };
  construire();
  return construire;
}
// les vidéos de la bande ne tournent que lorsqu'elles sont visibles
function setObservateur(piste, box) {
  observeurVideos?.disconnect();
  const videos = piste.querySelectorAll('video');
  if (!videos.length || !('IntersectionObserver' in window)) return;
  observeurVideos = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && doux()) e.target.play().catch(() => {}); else e.target.pause();
  }), { root: box, threshold: .2 });
  videos.forEach((v) => observeurVideos.observe(v));
}

// téléphone : images empilées à la largeur de l'écran ; un toucher les agrandit
function galerieTelephone(images) {
  const total = images.length - 1;
  const g = Object.assign(document.createElement('div'), { className: 'fiche__galerie' });
  const entete = Object.assign(document.createElement('div'), { className: 'fiche__galerie-tete' });
  const compteur = Object.assign(document.createElement('span'), { className: 'fiche__compteur', textContent: `1 / ${total}` });
  entete.append(Object.assign(document.createElement('p'), { className: 'fiche__etiq', textContent: 'Visuels' }), compteur);
  const piste = Object.assign(document.createElement('div'), { className: 'fiche__defile' });
  images.slice(1).forEach((im, k) => piste.appendChild(vignette(im, k + 1, { lazy: true })));
  piste.addEventListener('scroll', () => requestAnimationFrame(() => {
    const premiere = piste.firstElementChild;
    if (!premiere) return;
    const pas = premiere.getBoundingClientRect().width + (parseFloat(getComputedStyle(piste).columnGap) || 0);
    compteur.textContent = `${Math.min(total, Math.round(piste.scrollLeft / pas) + 1)} / ${total}`;
  }), { passive: true });
  const indice = Object.assign(document.createElement('p'), { className: 'fiche__indice', textContent: 'Touchez une image pour l’agrandir' });
  g.append(entete, piste, indice);
  return g;
}
// téléphone : boutons projet précédent / suivant en bas de la fiche
function ajouterNavProjets(i) {
  const n = PROJETS.length;
  const nav = Object.assign(document.createElement('nav'), { className: 'fiche__nav' });
  nav.setAttribute('aria-label', 'Autres projets');
  [[(i - 1 + n) % n, '← Précédent'], [(i + 1) % n, 'Suivant →']].forEach(([j, sens]) => {
    const b = Object.assign(document.createElement('button'), { type: 'button' });
    const mot = sens.replace(/[←→]/, '').trim();
    b.innerHTML = '<i class="fiche__fleche" aria-hidden="true"></i><span class="fiche__mot"></span>';
    b.querySelector('.fiche__fleche').textContent = sens.includes('←') ? '←' : '→';
    b.querySelector('.fiche__mot').textContent = mot;
    b.setAttribute('aria-label', `${mot} : ${PROJETS[j].titre}`);
    b.addEventListener('click', () => { while (ordre[0] !== j) ordre.push(ordre.shift()); ranger(); ouvrirProjet(j); });
    nav.appendChild(b);
  });
  (document.querySelector('#vImages .fiche__galerie') || document.querySelector('#vAjout .fiche__p2') || document.getElementById('vImages')).appendChild(nav);
}

function remplir(num, titre, htmlTexte, images) {
  depaginerFiche();
  document.getElementById('vNum').textContent = num;
  document.getElementById('vTitre').textContent = titre;
  document.getElementById('vAjout').innerHTML = htmlTexte;
  const box = document.getElementById('vImages'); box.innerHTML = '';
  loupe.images = images;                                          // la loupe passe de l'image principale aux suivantes
  const hero = vignette(images[0], 0, { hero: true });
  box.appendChild(hero);
  const avecBande = images.length > 1;
  vis.querySelector('.visionneuse__contenu').classList.toggle('sans-bande', !avecBande);
  vis.reconstruireBande = null;
  const telephone = mobile.matches;   // téléphone : galerie verticale (pas de bande qui défile)
  let bande = null;
  if (avecBande && !telephone) { bande = Object.assign(document.createElement('div'), { className: 'fiche__bande' }); box.appendChild(bande); }
  if (avecBande && telephone) box.appendChild(galerieTelephone(images));
  if (!vis.open) vis.showModal();
  vis.scrollTop = 0; contenuFiche.scrollLeft = 0;
  majCtaDefiler(); setTimeout(majCtaDefiler, 400);
  if (avecBande && telephone) setObservateur(box.querySelector('.fiche__galerie'), vis);   // les vidéos ne tournent que quand on les voit
  if (bande) vis.reconstruireBande = bandeDefilante(bande, images.slice(1), 1);   // construite une fois la fiche affichée (largeurs connues)
  const v = hero.querySelector('video'); if (v && doux()) v.play().catch(() => {});
  vis.querySelector('.visionneuse__contenu').focus({ preventScroll: true });   // retire l'anneau de focus sur la croix
  document.documentElement.style.overflow = 'hidden';   // bloque le défilement de la page derrière la fiche
}
function ouvrirProjet(i) {
  const p = PROJETS[i];
  const liens = [p.drive && `<a class="fiche__lien${p.site ? '' : ' fiche__lien--principal'}" href="${echap(p.drive)}" target="_blank" rel="noopener">Voir le Drive ↗</a>`,
                 p.site && `<a class="fiche__lien fiche__lien--principal" href="${echap(p.site)}" target="_blank" rel="noopener">Voir le site ↗</a>`].filter(Boolean).join('');
  const ledeHtml = `<div><p class="fiche__etiq">Problématique</p><p class="fiche__lede">${echap(p.problematique)}</p></div>`;
  const resteHtml = `<dl class="fiche__faits">`
    +   (p.type ? `<div class="fiche__fait--type"><dt class="fiche__etiq">Type</dt><dd>${echap(p.type)}</dd></div>` : '')
    +   `<div><dt class="fiche__etiq">Cadre</dt><dd>${echap(p.groupe)}</dd></div>`
    +   `<div><dt class="fiche__etiq">Durée</dt><dd>${echap(p.duree)}</dd></div>`
    +   `<div class="fiche__outils"><dt class="fiche__etiq">Outils</dt><dd>${p.outils.map((o) => `<span class="fiche__outil">${echap(o)}</span>`).join('<span class="fiche__sep"> · </span>')}</dd></div>`
    + `</dl>`
    + (liens ? `<div class="fiche__liens">${liens}</div>` : '')
    + (p.note ? `<p class="fiche__note">${echap(p.note)}</p>` : '');
  const texte = mobile.matches ? `<div class="fiche__p1">${ledeHtml}</div><div class="fiche__p2">${resteHtml}</div>` : ledeHtml + resteHtml;
  remplir(`Projet ${i + 1} sur ${PROJETS.length}`, p.titre, texte,
          p.images.map((im, k) => ({ src: srcDe(im, i + 1 + k * 7), alt: im.alt || `${p.titre}, image ${k + 1}`, video: im.video, ratio: im.ratio })));
  if (mobile.matches && PROJETS.length > 1) ajouterNavProjets(i);
  paginerFiche(); pagesFiche();
  contenuFiche.scrollLeft = 0;
}
// une œuvre s'ouvre directement en grand ; les flèches changent d'image ou d'œuvre
const imagesOeuvres = OEUVRES.flatMap((o, i) => o.images.map((src, k) => ({
  src, oeuvre: i, legende: o.technique,
  alt: `Œuvre ${i + 1}${o.images.length > 1 ? ` (${k + 1})` : ''}, ${o.technique}` })));
function ouvrirOeuvre(i) {
  loupe.classList.add('loupe--oeuvre');   // taille réduite pour les dessins (pas pour les images de projets)
  loupe.images = imagesOeuvres;
  ouvrirLoupe(imagesOeuvres.findIndex((im) => im.oeuvre === i));
  document.documentElement.style.overflow = 'hidden';
}
document.getElementById('fermerVisionneuse').addEventListener('click', () => vis.close());
// le signe du logo ferme tout et ramène à l'accueil
const logoFiche = document.querySelector('.visionneuse__logo');
[vis, document.getElementById('loupe')].forEach((d) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'dialogue__logo';
  b.setAttribute('aria-label', 'Haze, revenir à l’écran d’accueil');
  b.appendChild(d === vis ? logoFiche : logoFiche.cloneNode(true));
  d.prepend(b);
  b.addEventListener('click', () => {
    const l = document.getElementById('loupe');
    if (l.open) l.close();
    if (vis.open) vis.close();
    document.getElementById('retour').click();
  });
});
// téléphone : invitation à défiler, visible en haut de la fiche s'il y a de la suite
const ctaDefiler = Object.assign(document.createElement('p'), { className: 'cta-defiler' });
ctaDefiler.setAttribute('aria-hidden', 'true');
ctaDefiler.innerHTML = '<span>Faites défiler pour découvrir le projet</span><i class="cta-defiler__fleche"></i>';
vis.appendChild(ctaDefiler);
function majCtaDefiler() {
  const asDeLaSuite = mobile.matches && vis.scrollHeight > vis.clientHeight + 48;
  ctaDefiler.classList.toggle('visible', vis.open && asDeLaSuite && vis.scrollTop < 24);
}
vis.addEventListener('scroll', majCtaDefiler, { passive: true });
vis.addEventListener('load', majCtaDefiler, true);   // recalcul quand les images chargées changent la hauteur de la fiche
addEventListener('resize', majCtaDefiler);
vis.addEventListener('close', () => {
  document.documentElement.style.overflow = '';
  observeurVideos?.disconnect(); vis.querySelectorAll('video').forEach((v) => v.pause());
});
let minuteurBande;
addEventListener('resize', () => {
  if (!vis.open || !vis.reconstruireBande) return;
  clearTimeout(minuteurBande); minuteurBande = setTimeout(() => vis.reconstruireBande(), 200);
});

/* ---- loupe : image agrandie, navigation d'une image à l'autre ---- */
const loupeImg = document.getElementById('loupeImg');
const loupeVideo = document.getElementById('loupeVideo');
function montrerLoupe(k) {
  const n = loupe.images.length;
  loupe.index = (k + n) % n;
  const { src, alt, legende, video } = loupe.images[loupe.index];
  loupeImg.src = src; loupeImg.alt = alt || '';
  // une image peut être une vidéo : la loupe la lit avec ses commandes
  loupeImg.hidden = !!video; loupeVideo.hidden = !video;
  if (video) {
    loupeVideo.poster = src; loupeVideo.setAttribute('aria-label', alt || 'Vidéo');
    if (!loupeVideo.src.endsWith(video)) loupeVideo.src = video;
    if (loupe.open) loupeVideo.play().catch(() => {});
  } else { loupeVideo.pause(); }
  // œuvres : le logiciel ; projets : le compteur
  document.getElementById('loupeCompteur').textContent = legende || (n > 1 ? `${loupe.index + 1}/${n}` : '');
  loupe.classList.toggle('seule', n < 2);
}
function ouvrirLoupe(k) { montrerLoupe(k); loupe.showModal(); if (!loupeVideo.hidden) loupeVideo.play().catch(() => {}); }
document.getElementById('loupePrec').addEventListener('click', () => montrerLoupe(loupe.index - 1));
document.getElementById('loupeSuiv').addEventListener('click', () => montrerLoupe(loupe.index + 1));
document.getElementById('fermerLoupe').addEventListener('click', () => loupe.close());
// ouverte depuis hobby (sans fiche) : la page redéfile
loupe.addEventListener('close', () => { loupe.classList.remove('loupe--oeuvre'); loupeVideo.pause(); if (!vis.open) document.documentElement.style.overflow = ''; });
// un clic à côté de l'image ferme la loupe (Échap ne ferme que la loupe)
loupe.addEventListener('click', (e) => { if (e.target === loupe || e.target.classList.contains('loupe__cadre')) loupe.close(); });
loupe.addEventListener('keydown', (e) => {
  if (loupe.images.length < 2) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); montrerLoupe(loupe.index + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); montrerLoupe(loupe.index - 1); }
});
// glisser du doigt pour changer d'image
let departLoupe = null;
loupe.addEventListener('pointerdown', (e) => { departLoupe = e.target.closest?.('video') ? null : e.clientX; });   // la barre de lecture ne change pas d'image
loupe.addEventListener('pointerup', (e) => {
  if (departLoupe === null || loupe.images.length < 2) return;
  const dx = e.clientX - departLoupe; departLoupe = null;
  if (Math.abs(dx) > 60) montrerLoupe(loupe.index + (dx < 0 ? 1 : -1));
});


/* ---- index et pop-up : calés sur la maquette 1440 x 1024 ---- */
const popup = document.getElementById('popup');
const ouvrir = document.getElementById('ouvrir');
const scene = document.getElementById('scene');
const titreHaze = document.getElementById('titreHaze');
const aide = document.getElementById('aide');

// ajuste « HAZE » : lettres sur x 253 → 1186, y 112 → 462 (maquette)
function calerTitre() {
  const ctx = document.createElement('canvas').getContext('2d');
  const famille = getComputedStyle(titreHaze).fontFamily;
  ctx.font = `100px ${famille}`;
  const m = ctx.measureText('HQZE');
  const larg = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
  const haut = m.actualBoundingBoxAscent;
  const totale = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;   // la queue du Q descend sous la ligne
  if (!larg) return;
  // le mot tient dans la zone de la maquette et s'arrête au-dessus du logo
  const taille = Math.min(100 * (1186 - 253) / larg, 100 * (482 - 112) / totale);
  const decalage = ((1186 - 253) - larg * taille / 100) / 2;               // centré au-dessus du logo
  document.querySelectorAll('.titre-haze').forEach((t) => {
    t.setAttribute('font-size', taille.toFixed(1));
    t.setAttribute('text-anchor', 'start');
    t.setAttribute('x', (253 + decalage + m.actualBoundingBoxLeft * taille / 100).toFixed(1));
    t.setAttribute('y', (112 + haut * taille / 100).toFixed(1));
    t.classList.add('est-cale');
  });
}
document.fonts.load('100px "Henny Penny"').then(calerTitre, calerTitre);
document.fonts.ready.then(calerTitre);
setTimeout(() => document.querySelectorAll('.titre-haze').forEach((t) => t.classList.add('est-cale')), 1500); // affiche le titre après 1,5 s même si la police n'est pas chargée

// téléphone (écran en hauteur) : recadrage de la scène pour garder le titre et le logo grands
function cadrer() {
  const portrait = innerHeight > innerWidth * 1.05;
  document.body.classList.toggle('portrait', portrait);
  scene.setAttribute('viewBox', portrait ? '50 140 1340 860' : '0 0 1440 1024');   // téléphone : marges sur les côtés du logo
  aide.setAttribute('x', portrait ? 720 : 67);
  aide.setAttribute('text-anchor', portrait ? 'middle' : 'start');
  aide.setAttribute('y', portrait ? 1005 : 955);
  aide.setAttribute('font-size', portrait ? 34 : 22.5);
}

// convertit un point de la maquette en pixels écran
function placerPopup() {
  // le cadre suit les lettres du logo (unités du dessin : 1023 × 490) : du bord gauche du signe (x 284)…
  // …jusqu'au Z (x 778), du haut de la tête du signe (y 101) au bas de sa spirale (y 302)
  const m = document.querySelector('#ouvrir svg').getScreenCTM();
  const x = (v) => m.a * v + m.e, y = (v) => m.d * v + m.f;
  const pl = x(284), pr = x(778), pt = y(101), pb = y(302);
  popup.style.setProperty('--pl', pl + 'px'); popup.style.setProperty('--pt', pt + 'px');
  popup.style.setProperty('--pw', (pr - pl) + 'px'); popup.style.setProperty('--ph', (pb - pt) + 'px');
  popup.style.setProperty('--k', (pb - pt) / 215 + 'px');
}
cadrer();
ouvrir.addEventListener('click', () => { placerPopup(); popup.showModal(); });
ouvrir.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ouvrir.click(); } });
window.addEventListener('resize', () => { cadrer(); if (popup.open) placerPopup(); });
document.getElementById('fermer').addEventListener('click', () => popup.close());
popup.addEventListener('close', () => { if (!document.body.classList.contains('est-entree')) ouvrir.focus(); });

document.getElementById('entrer').addEventListener('click', () => {
  popup.close();
  document.body.classList.add('est-entree');
  window.scrollTo(0, 0);
  majReperes(); ajusterPied(); placerChat(); centrerContact(); ajusterMur();
  if (!doux()) document.getElementById('chatQuiDort').pauseAnimations();
});
document.getElementById('retour').addEventListener('click', () => {
  document.body.classList.remove('est-entree');
  window.scrollTo(0, 0);
  ouvrir.focus();
});

/* ---- mode jour / nuit ---- */
const boutonTheme = document.getElementById('theme');
function appliquerTheme(jour) {
  document.body.classList.toggle('jour', jour);
  document.documentElement.classList.toggle('jour', jour);   // change aussi le curseur de la racine
  const dort = document.getElementById('chatQuiDort');          // le chat du haut arrête de respirer comme un dormeur
  if (dort && doux()) dort.unpauseAnimations();                 // jour comme nuit, ses oreilles continuent de bouger
  if (typeof placerChat === 'function') placerChat();
  if (typeof parlerChat === 'function' && parlerChat.section) parlerChat(parlerChat.section);   // la réplique du chat suit l'humeur
  boutonTheme.setAttribute('aria-pressed', jour);
  boutonTheme.setAttribute('aria-label', jour ? 'Passer en mode nuit' : 'Passer en mode jour');
}
try { appliquerTheme(localStorage.getItem('hqze-theme') === 'jour'); } catch (e) {}
boutonTheme.addEventListener('click', () => {
  const jour = !document.body.classList.contains('jour');
  const changer = () => {
    appliquerTheme(jour);
    try { localStorage.setItem('hqze-theme', jour ? 'jour' : 'nuit'); } catch (e) {}
  };
  // le cercle part du centre du bouton et grandit jusqu'au coin le plus éloigné
  const r = boutonTheme.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const racine = document.documentElement.style;
  racine.setProperty('--theme-x', x + 'px'); racine.setProperty('--theme-y', y + 'px');
  racine.setProperty('--theme-r', Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 'px');
  if (document.startViewTransition && doux()) document.startViewTransition(changer);
  else changer();
});

/* ---- mode jour : les pupilles du chat suivent le curseur ---- */
const yeux = document.getElementById('yeuxJour');
let souris = null, derniere = 0;
addEventListener('pointermove', (e) => { souris = { x: e.clientX, y: e.clientY }; derniere = performance.now(); }, { passive: true });
function regarder(t) {
  if (document.body.classList.contains('jour') && document.body.classList.contains('est-entree')) {
    const r = yeux.getBoundingClientRect();
    let dx, dy;
    if (souris && t - derniere < 2500 && r.width) {
      const vx = souris.x - (r.left + r.width / 2), vy = souris.y - (r.top + r.height / 2);
      const n = Math.hypot(vx, vy) || 1, f = Math.min(1, n / 300);
      dx = vx / n * 27 * f; dy = vy / n * 12 * f;
    } else {                                         // sans souris (ou immobile) : le regard va de gauche à droite
      dx = Math.sin(t / 1300) * 27; dy = 0;
    }
    yeux.style.setProperty('--px', dx.toFixed(1) + 'px');
    yeux.style.setProperty('--py', dy.toFixed(1) + 'px');
  }
  requestAnimationFrame(regarder);
}
if (doux()) requestAnimationFrame(regarder);

/* ---- formulaire de contact : envoi par FormSubmit vers kimpeses@gmail.com ----
   premier envoi : un mail d'activation à valider
   si l'envoi échoue : ouvre la messagerie du visiteur avec le message prêt */
const ADRESSE_CONTACT = 'kimpeses@gmail.com';
document.getElementById('formContact').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.target, retour = document.getElementById('cRetour'), bouton = f.querySelector('button[type="submit"]');
  const vide = [...f.querySelectorAll('[required]')].find((c) => !c.value.trim() || !c.checkValidity());
  if (vide) {
    retour.textContent = vide.type === 'email' && vide.value ? 'Cette adresse e-mail ne semble pas valide.' : 'Il manque encore un petit quelque chose.';
    vide.focus(); return;
  }
  const mail = f.email.value.trim(), objet = f.objet.value.trim(), message = f.message.value.trim();
  bouton.disabled = true;
  retour.textContent = 'Envoi en cours…';
  try {
    const rep = await fetch(`https://formsubmit.co/ajax/${ADRESSE_CONTACT}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: mail, objet, message, _subject: `[Haze] ${objet}`, _template: 'table', _captcha: 'false', _honey: '' }),
    });
    const donnees = await rep.json().catch(() => ({}));
    if (!rep.ok || donnees.success === false || donnees.success === 'false') throw new Error('envoi refusé');
    f.reset();
    retour.textContent = 'Merci ! Votre message est bien parti, je vous réponds vite.';
  } catch {
    const lien = document.createElement('a');
    lien.href = `mailto:${ADRESSE_CONTACT}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(`${message}\n\n${mail}`)}`;
    lien.click();
    retour.textContent = 'L’envoi direct a échoué : votre messagerie s’ouvre avec le message prêt à partir.';
  } finally {
    bouton.disabled = false;
  }
});

/* ---- transitions : les contenus sortent de la brume en arrivant et y replongent en partant ---- */
const apparitions = [...document.querySelectorAll('.section > h2, .pile-zone, #oeuvres .salle, .contact__texte, .contact__form')];
if ('IntersectionObserver' in window && doux()) {
  apparitions.forEach((el) => {
    el.classList.add('apparait');
    if (el.matches('.pile-zone, .defile, .contact__form')) el.style.transitionDelay = '.12s';   // le contenu suit son titre
    el.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity' && el.classList.contains('est-visible')) el.classList.add('fini');
    });
  });
  const veille = new IntersectionObserver((entrees) => entrees.forEach(({ target, isIntersecting }) => {
    target.classList.toggle('est-visible', isIntersecting);
    if (!isIntersecting) target.classList.remove('fini');
  }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  apparitions.forEach((el) => veille.observe(el));
}

/* ---- défilement section par section à la molette ----
   au doigt et au clavier, le scroll-snap CSS suffit ; un geste de molette = une section (un seul geste par rafale) */
const arrets = () => {
  const bas = document.documentElement.scrollHeight - innerHeight;
  return [0, ...['projets', 'oeuvres', 'contact'].map((s) => Math.min(document.getElementById(s).offsetTop, bas)), bas]
    .filter((v, k, t) => t.indexOf(v) === k).sort((a, b) => a - b);
};
// un geste de molette = une section :
// - un petit effleurement (moins de 90 px cumulés) ne fait rien ;
// - pendant le défilement et la rafale (inertie du pavé tactile), tout est ignoré ;
// - une pause de 0,15 s après le défilement est nécessaire pour un nouveau geste.
let cibleMolette = null, derniereMolette = 0, cumulMolette = 0, signeMolette = 0, verrouJusqua = 0, verrouille = false;
addEventListener('scrollend', () => { cibleMolette = null; });
addEventListener('wheel', (e) => {
  const actif = document.body.classList.contains('est-entree') && innerHeight > 540
    && !document.querySelector('dialog[open]') && Math.abs(e.deltaY) > Math.abs(e.deltaX);
  if (!actif || e.ctrlKey) return;   // ctrl + molette = zoom du navigateur
  e.preventDefault();
  const t = performance.now(), calme = t - derniereMolette > 150;
  derniereMolette = t;
  if (verrouille) {
    if (!(calme && t > verrouJusqua)) return;   // même geste (ou animation en cours)
    verrouille = false; cumulMolette = 0;
  }
  const dy = e.deltaMode !== 0 ? e.deltaY * 40 : e.deltaY;   // lignes ou pages → pixels
  if (calme || Math.sign(dy) !== signeMolette) cumulMolette = 0;
  signeMolette = Math.sign(dy);
  cumulMolette += dy;
  if (Math.abs(cumulMolette) < 90) return;
  cumulMolette = 0;
  const y = cibleMolette ?? scrollY, a = arrets();
  // une section plus haute que l'écran se parcourt par écrans entiers
  const cible = dy > 0
    ? Math.min(a.find((v) => v > y + 4) ?? y, y + innerHeight)
    : Math.max([...a].reverse().find((v) => v < y - 4) ?? y, y - innerHeight);
  if (cible === y) return;
  cibleMolette = cible;
  verrouille = true; verrouJusqua = t + 800;
  scrollTo({ top: cible, behavior: doux() ? 'smooth' : 'auto' });
}, { passive: false });
/* ---- oreilles des chats : frémissements, tics, et réaction à la souris ----
   Le tracé des deux chats est un seul chemin SVG. On reprend ici son animation (valeurs, durées, courbes de l'<animate>)
   et on y ajoute le mouvement des oreilles : chaque point de l'oreille pivote autour de sa base, d'autant plus qu'il est près de la pointe. */
(function oreilles() {
  if (!doux()) return;                                   // animations réduites : on garde le tracé fixe
  const rad = (deg) => deg * Math.PI / 180;
  const borne = (v, a, b) => Math.min(b, Math.max(a, v));
  const lisse = (v) => v * v * (3 - 2 * v);
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const X = (t) => ((ax * t + bx) * t + cx) * t, Y = (t) => ((ay * t + by) * t + cy) * t;
    return (x) => { let lo = 0, hi = 1, t = x; for (let i = 0; i < 24; i++) { const v = X(t); if (Math.abs(v - x) < 1e-4) break; if (v < x) lo = t; else hi = t; t = (lo + hi) / 2; } return Y(t); };
  }

  // reprend le chemin et son <animate> ; renvoie null si quelque chose ne colle pas (le SMIL d'origine continue alors)
  function preparer(svg, defs) {
    const chemin = svg && svg.querySelector('path'), anim = chemin && chemin.querySelector('animate');
    if (!anim) return null;
    const jetons = (anim.getAttribute('values').split(';')[0]).match(/[A-Za-z]|-?\d*\.?\d+/g);
    const nombres = (v) => Float64Array.from(v.match(/-?\d*\.?\d+/g), Number);
    const kf = anim.getAttribute('values').split(';').map(nombres);
    const temps = anim.getAttribute('keyTimes').split(';').map(Number);
    const courbes = anim.getAttribute('keySplines').split(';').map((s) => bezier(...s.trim().split(/\s+/).map(Number)));
    const dur = parseFloat(anim.getAttribute('dur')) * 1000;
    const n = kf[0].length;
    if (n % 2 || kf.some((k) => k.length !== n) || kf.length !== temps.length || courbes.length !== kf.length - 1) return null;
    const lettres = jetons.map((j) => (/[A-Za-z]/.test(j) ? j : null));
    // oreilles : points concernés et poids (0 à la base, 1 à la pointe)
    const oreillesChat = defs.map((d) => {
      const dx = d.pointe[0] - d.pivot[0], dy = d.pointe[1] - d.pivot[1], R = Math.hypot(dx, dy), ax = dx / R, ay = dy / R;
      const idx = [], poids = [];
      for (let j = 0; j < n / 2; j++) {
        const x = kf[0][2 * j], y = kf[0][2 * j + 1];
        if (!d.zone(x, y)) continue;
        const u = ((x - d.pivot[0]) * ax + (y - d.pivot[1]) * ay) / R;
        const w = lisse(borne((u - .06) / .8, 0, 1));
        if (w > .002) { idx.push(j); poids.push(w); }
      }
      return { ...d, idx, poids, angle: 0, soulevement: 0, tics: [], prochain: performance.now() + 600 + Math.random() * 2500,
        ph: Math.random() * 6.28, p1: 1500 + Math.random() * 900, p2: 520 + Math.random() * 300, perkAngle: rad(d.perkAngle), swivel: rad(d.swivel), amp: rad(d.amp), balance: rad(d.balance), tremble: d.tremble };
    });
    return { svg, chemin, anim, kf, temps, courbes, dur, n, lettres, cur: new Float64Array(n), ears: oreillesChat,
      perk: 0, cible: 0, avant: 0, surprise: 0, lateral: 0, lateralLisse: 0, tenir: 0, visible: false };
  }

  const dessiner = (c, t) => {
    const p = (t % c.dur) / c.dur;
    let k = 0; while (k < c.temps.length - 2 && p >= c.temps[k + 1]) k++;
    const u = c.courbes[k]((p - c.temps[k]) / (c.temps[k + 1] - c.temps[k]));
    const a = c.kf[k], b = c.kf[k + 1], cur = c.cur;
    for (let i = 0; i < c.n; i++) cur[i] = a[i] + (b[i] - a[i]) * u;
    for (const o of c.ears) {
      if (Math.abs(o.angle) < 1e-4 && Math.abs(o.soulevement) < .01) continue;
      for (let m = 0; m < o.idx.length; m++) {
        const j = o.idx[m], w = o.poids[m];
        const x = cur[2 * j] - o.pivot[0], y = cur[2 * j + 1] - o.pivot[1];
        const ang = o.angle * w, ca = Math.cos(ang), sa = Math.sin(ang);
        cur[2 * j] = o.pivot[0] + x * ca - y * sa;
        cur[2 * j + 1] = o.pivot[1] + x * sa + y * ca - o.soulevement * w;
      }
    }
    let d = '', ni = 0;
    for (let i = 0; i < c.lettres.length; i++) d += c.lettres[i] !== null ? c.lettres[i] : cur[ni++].toFixed(1) + ' ';
    c.chemin.setAttribute('d', d);
  };

  const majChat = (c, t, dt) => {
    const cible = (c.cible || t < c.tenir) ? 1 : 0;
    if (cible === 1 && c.avant === 0) c.surprise = 1;      // il vient d'être interpellé : sursaut des oreilles
    c.avant = cible;
    c.perk += (cible - c.perk) * (1 - Math.exp(-dt / (cible > c.perk ? 60 : 380)));
    c.surprise = Math.max(0, c.surprise - dt / 560);
    c.lateralLisse += (c.lateral - c.lateralLisse) * (1 - Math.exp(-dt / 150));
    const s = c.surprise, perk = c.perk * (1 + .6 * s), tremble = s * s * Math.sin(t / 32);
    for (const o of c.ears) {
      let a = o.balance * (Math.sin(t / o.p1 + o.ph) * .6 + Math.sin(t / o.p2 + o.ph * 2) * .4);   // léger balancement permanent
      if (t >= o.prochain) {                                                                            // tic : petit coup d'oreille, parfois double
        o.tics.push({ t0: t, A: o.amp * (.75 + Math.random() * .5), d: 220 + Math.random() * 120 });
        if (Math.random() < .35) o.tics.push({ t0: t + 190, A: o.amp * .6, d: 200 });
        o.prochain = t + (1600 + Math.random() * 3600) * (c.perk > .5 ? 1.5 : 1);
      }
      for (let i = o.tics.length; i--;) {
        const x = o.tics[i], tau = (t - x.t0) / x.d;
        if (tau >= 1) o.tics.splice(i, 1); else if (tau > 0) a += x.A * Math.sin(Math.PI * tau);
      }
      a += perk * o.perkAngle + c.lateralLisse * c.perk * o.swivel + tremble * o.tremble;   // dressées vers la souris quand on le survole
      o.angle = a; o.soulevement = perk * o.lift;
    }
    dessiner(c, t);
  };

  // les deux chats : l'ouverture (couché, tournant la tête) et celui du footer
  const R = rad;
  const chats = [
    preparer(document.getElementById('chatQuiDort'), [
      { pivot: [464, 170], pointe: [548, 0], zone: (x, y) => x >= 360 && x <= 578 && y < 216,           // grande oreille dressée
        perkAngle: 5, swivel: 16, amp: -20, balance: 2.6, lift: 46, tremble: rad(3.5) },
      { pivot: [205, 320], pointe: [63, 205], zone: (x, y) => x < 215 && y > 170 && y < 470,            // oreille couchée à gauche
        perkAngle: 9, swivel: 3, amp: 11, balance: 2, lift: 10, tremble: rad(2.2) },
    ]),
    preparer(document.getElementById('chatGuetteur'), [
      { pivot: [291, 268], pointe: [3, 3], zone: (x, y) => x < 440 && y < 430,                           // oreille gauche
        perkAngle: 12, swivel: 10, amp: -17, balance: 3, lift: 30, tremble: rad(4) },
      { pivot: [863, 288], pointe: [1175, 3], zone: (x, y) => x > 735 && y < 470,                        // oreille droite
        perkAngle: -12, swivel: 10, amp: 17, balance: 3, lift: 30, tremble: rad(-4) },
    ]),
  ].filter(Boolean);
  if (!chats.length) return;
  const bas = chats.find((c) => c.svg.closest('#chatGuetteur'));
  const haut = chats.find((c) => c !== bas);

  let dernier = 0, tourne = false;
  const boucle = (t) => {
    const dt = Math.min(64, t - dernier || 16); dernier = t;
    let actif = false;
    for (const c of chats) if (c.visible) { actif = true; majChat(c, t, dt); }
    if (actif && !document.hidden) requestAnimationFrame(boucle); else tourne = false;
  };
  const demarrer = () => { if (!tourne) { tourne = true; dernier = performance.now(); requestAnimationFrame(boucle); } };

  // le SMIL d'origine est remplacé : on retire l'<animate> une fois la première image tracée
  chats.forEach((c) => { dessiner(c, performance.now()); c.anim.remove(); });

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((es) => es.forEach((e) => { const c = chats.find((x) => x.svg === e.target); if (c) { c.visible = e.isIntersecting; if (c.visible) demarrer(); } }));
    chats.forEach((c) => obs.observe(c.svg));
  } else { chats.forEach((c) => { c.visible = true; }); demarrer(); }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) demarrer(); });

  // souris : le chat est interpellé quand on le survole, ses oreilles se tournent vers le curseur
  const viser = (c, e) => { const r = c.svg.getBoundingClientRect(); c.lateral = borne((e.clientX - (r.left + r.width / 2)) / (r.width / 2 + 30), -1, 1); };
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    if (haut && haut.visible) {
      const r = haut.svg.getBoundingClientRect();
      haut.cible = e.clientX > r.left - 24 && e.clientX < r.right + 24 && e.clientY > r.top - 24 && e.clientY < r.bottom + 24 ? 1 : 0;
    }
    for (const c of chats) if (c.cible) viser(c, e);
  }, { passive: true });
  if (bas) {
    chat.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { bas.cible = 1; viser(bas, e); demarrer(); } });
    chat.addEventListener('pointerleave', () => { bas.cible = 0; });
  }
  // doigt : un toucher le fait sursauter et dresser les oreilles un instant
  const toucher = (c) => () => { c.tenir = performance.now() + 1100; demarrer(); };
  chats.forEach((c) => (c === bas ? chat : c.svg).addEventListener('pointerdown', toucher(c)));
})();