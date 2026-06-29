import React from 'react'
import { useNavigate } from 'react-router-dom'
import logohazew from '../assets/images/logohazew.svg'
import moi from '../assets/images/moi.png'

const css = `
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&family=Henny+Penny&display=swap');

.pg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #000000 0%, #360819 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
}

/* ── ACCESSIBILITÉ : Classe pour les lecteurs d'écran (invisible) ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ── LOGO ICON ── */
.hdr-logo {
  position: absolute;
  left: calc(60 / 1920 * 100%);
  top: calc(20 / 1080 * 100%);
  width: calc(160 / 1920 * 100%);
  height: calc(350 / 1920 * 100%);
  object-fit: contain;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform; /* Fluidité GPU */
}

.hdr-logo:hover {
  transform: scale(1.1);
}

/* Indicateur visuel si navigation au clavier (Tab) */
.hdr-logo:focus-visible {
  outline: 3px solid #B11A50;
  outline-offset: 5px;
  border-radius: 8px;
}

/* ── TITRE ── */
.hdr-title {
  position: absolute;
  left: calc(210 / 1920 * 100%);
  top: calc(80 / 1080 * 100%);
  font-family: 'Henny Penny', cursive;
  font-weight: 400;
  font-size: calc(80 / 1920 * 100vw);
  color: #fff;
  line-height: 1;
  text-shadow: 1px 2px 6px rgba(0,0,0,0.4);
  z-index: 10;
  margin: 0;
}

/* ── NUAGE 1 haut gauche ── */
.nuage-1 {
  position: absolute;
  left: calc(-233 / 1920 * 100%);
  top: calc(-231 / 1080 * 100%);
  width: calc(1193 / 1920 * 100%);
  height: calc(543 / 1080 * 100%);
  z-index: 6;
}

.nuage-1-mirror { display: none; }

/* ── NUAGE 2 bas droite ── */
.nuage-2 {
  position: absolute;
  left: calc(960 / 1920 * 100%);
  top: calc(785 / 1080 * 100%);
  width: calc(1197 / 1920 * 100%);
  height: calc(525 / 1080 * 100%);
  z-index: 11;
}

.nuage-2-mirror { display: none; }

/* ── CERCLE SOUS LA BULLE ── */
.circle {
  position: absolute;
  left: calc(500 / 1920 * 100%);
  top: calc(250 / 1080 * 100%);
  width: calc(520 / 1920 * 100%);
  height: calc(1070 / 1920 * 100%);
  border-radius: 50%;
  background: #4B0B22;
  z-index: 3;
}

/* ── BULLE ── */
.bbl {
  position: absolute;
  left: calc(517 / 1920 * 100%);
  top: calc(310 / 1080 * 100%);
  width: calc(520 / 1920 * 100%);
  height: calc(520 / 1080 * 100%);
  transform: rotate(-19deg);
  z-index: 8;
}

.bbl svg {
  width: 100%;
  height: 100%;
}

.bbl-text {
  position: absolute;
  top: 46%;
  left: 46%;
  transform: translate(-50%, -50%) rotate(19deg);
  width: 52%;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: calc(20 / 1920 * 100vw);
  color: #111;
  line-height: 1.7;
  z-index: 9;
}

.bbl-cta {
  position: absolute;
  left: calc(517 / 1920 * 100%);
  top: calc(715 / 1080 * 100%);
  width: calc(480 / 1920 * 100%);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: calc(13 / 1920 * 100vw);
  color: #777;
  z-index: 9;
}

/* ── CONTACT ── */
.contact {
  position: absolute;
  left: calc(55 / 1920 * 100%);
  bottom: calc(60 / 1080 * 100%);
  z-index: 10;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: calc(18 / 1920 * 100vw);
  line-height: 1.8;
}

/* ── PERSONNAGE FLOTTANT ── */
.char {
  position: absolute;
  left: 65%;
  top: 49%;
  transform: translate(-50%, -50%);
  height: 85vh;
  z-index: 10;
  pointer-events: none;
  animation: flt 4s ease-in-out infinite;
  will-change: transform; /* Fluidité GPU */
}

@keyframes flt {
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, calc(-50% - 13px)); }
}

/* Respect du choix utilisateur s'il désactive les animations */
@media (prefers-reduced-motion: reduce) {
  .char { animation: none !important; }
}

/* ══════════════════════════════════════
   TABLETTE — scale la scène desktop
══════════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1366px) {
  .pg {
    width: 1920px !important;
    height: 1080px !important;
    transform-origin: top left;
    transform: scale(var(--s, 0.5));
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
  }
}

/* ══════════════════════════════════════
   MOBILE — coordonnées calées sur 402×874
══════════════════════════════════════ */
@media (max-width: 768px) {

  .pg {
    width: 100%;
    height: 100dvh;
    overflow: hidden;
  }

  .hdr-group {
    position: absolute;
    top: 25px;
    left: 47%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 14;
  }

  .hdr-logo {
    position: static;
    left: auto;
    top: auto;
    width: calc(99  / 402 * 100vw);
    height: auto;
  }

  .hdr-title {
    position: static;
    left: auto;
    top: auto;
    font-size: calc(52  / 402 * 100vw);
    margin: 0;
  }

  .nuage-1 {
    left:  calc(-45  / 402 * 100vw);
    top:   calc(-213 / 874 * 100vw);
    width: calc(565  / 402 * 100vw);
    height: auto;
    // transform: scaleX(-1);
    z-index: 13;
  }

  .nuage-2 {
    display : none;
  }

  .nuage-2-mirror {
    display: block;
    position: absolute;
    right:  calc(-118 / 402 * 100vw);
    top:    calc(590   / 874 * 100dvh);
    width:  calc(634  / 402 * 100vw);
    height: auto;
    transform: scaleX(-1);
    z-index: 11;
  }

  .circle {
    display: none;
  }

  .bbl {
    position: absolute;
    left:   calc(20   / 402 * 100vw);
    top:    calc(115   / 874 * 100dvh);
    width:  calc(270  / 402 * 100vw);
    height: calc(270  / 402 * 100vw);
    transform: rotate(40deg);
    z-index: 12;
  }

  .bbl-text {
    position: absolute;
    top:  48%;
    left: 48%;
    transform: translate(-50%, -50%) rotate(-40deg);
    width: 62%;
    font-size: calc(11 / 402 * 100vw);
    line-height: 1.5;
  }

  .bbl-cta {
    display: block;
    position: absolute;
    left:   calc(155 / 402 * 100vw);
    top:    calc(330 / 874 * 100dvh);
    width:  calc(130 / 402 * 100vw);
    transform: translateX(-50%);
    text-align: center;
    font-size: 0;
    color: #777;
    z-index: 13;
  }

  .bbl-cta::before {
    content: "Cliquez sur le logo";
    font-size: calc(10 / 402 * 100vw);
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  .char {
    position: absolute;
    left:   calc(245  / 402 * 100vw);
    top:    calc(280  / 874 * 100dvh);
    height: calc(600  / 874 * 100dvh);
    transform: translateX(-50%);
  }

  @keyframes flt {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(-10px); }
  }

  .contact {
    position: absolute;
    left:   calc(30   / 402 * 100vw);
    bottom: calc(25   / 874 * 100dvh);
    font-size: calc(13 / 402 * 100vw);
    z-index: 20;
  }
}
`

const BUBBLE_TEXT = "Je suis Haze aka Stella,\nétudiante en Bachelor Web\n& Digital. Je conçois\ndes expériences numériques\nsoignées (du front-end au\nback-end) avec une touche\nde créativité."
const WELCOME = "Bienvenue à vous"
const CTA = "Cliquez sur le logo pour accéder\nau menu"
const SPEED = 45

function useTypewriter(sequences) {
  const [phase, setPhase] = React.useState(0)
  const [displayed, setDisplayed] = React.useState('')
  const [done, setDone] = React.useState([])

  React.useEffect(() => {
    if (phase >= sequences.length) return
    const { text, keep, delay = 0 } = sequences[phase]
    let i = 0
    setDisplayed('')
    
    let intervalId;
    let timeoutId2;

    const timeoutId1 = setTimeout(() => {
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          if (keep) {
            setDone(prev => [...prev, phase])
            setPhase(p => p + 1)
          } else {
            timeoutId2 = setTimeout(() => {
              setDisplayed('')
              setPhase(p => p + 1)
            }, 800)
          }
        }
      }, SPEED)
    }, delay)

    // Nettoyage rigoureux des timers
    return () => {
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      clearInterval(intervalId)
    }
  }, [phase, sequences]) // Ajout des dépendances de base

  return { phase, displayed, done }
}

function useTabletScale() {
  React.useEffect(() => {
    let frameId;
    function apply() {
      // requestAnimationFrame pour des redimensionnements très fluides
      frameId = requestAnimationFrame(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        if (w > 768) {
          const s = Math.min(w / 1920, h / 1080)
          document.documentElement.style.setProperty('--s', s)
        } else {
          document.documentElement.style.removeProperty('--s')
        }
      })
    }
    apply()
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('resize', apply)
      cancelAnimationFrame(frameId)
    }
  }, [])
}

function Accueil() {
  const navigate = useNavigate()
  useTabletScale()

  const sequences = React.useMemo(() => [
    { text: WELCOME,     keep: false, delay: 600 },
    { text: BUBBLE_TEXT, keep: true,  delay: 200 },
    { text: CTA,         keep: true,  delay: 300 },
  ], [])

  const { phase, displayed, done } = useTypewriter(sequences)

  // Gérer le clic via le clavier sur le logo
  const handleLogoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      navigate('/menu')
    }
  }

  return (
    <>
      <style>{css}</style>
      <main className="pg"> {/* Balise sémantique au lieu d'une div */}

        {/* ── ACCESSIBILITÉ : Texte brut lisible instantanément par les lecteurs d'écran ── */}
        <div className="sr-only" aria-live="polite">
          {WELCOME}. {BUBBLE_TEXT} {CTA}
        </div>

        {/* ── GROUPE LOGO + TITRE (le wrapper ne fait rien en desktop ;
             il sert uniquement à centrer le tout en mobile) ── */}
        <div className="hdr-group">
          {/* ── LOGO ACCESSIBLE AU CLAVIER ── */}
          <img
            src={logohazew}
            alt="Logo Haze - Accéder au menu"
            className="hdr-logo"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/menu')}
            onKeyDown={handleLogoKeyDown}
          />

          {/* ── TITRE ── */}
          <h1 className="hdr-title">ACCUEIL</h1>
        </div>

        {/* ── NUAGE 1 haut gauche ── */}
        <svg aria-hidden="true" className="nuage-1" viewBox="0 0 1193 543" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 501.815 543.000 C 557.134 543.000 607.049 519.869 642.418 482.752 C 658.034 487.737 674.676 490.430 691.945 490.430 C 737.470 490.430 778.626 471.731 808.156 441.597 C 829.645 454.856 854.962 462.508 882.066 462.508 C 935.791 462.508 982.494 432.449 1006.280 388.233 C 1110.066 384.309 1193.000 298.933 1193.000 194.188 C 1193.000 86.941 1106.059 0.000 998.812 0.000 C 891.566 0.000 804.626 86.941 804.626 194.188 C 804.626 197.347 804.702 200.489 804.852 203.612 C 803.390 204.571 801.946 205.556 800.522 206.567 C 771.725 180.744 733.670 165.035 691.945 165.035 C 661.938 165.035 633.829 173.161 609.695 187.329 C 578.839 166.674 541.735 154.626 501.815 154.626 C 463.990 154.626 428.692 165.442 398.842 184.148 C 363.513 116.705 292.847 70.687 211.432 70.687 C 94.661 70.687 0.000 165.348 0.000 282.118 C 0.000 398.889 94.661 493.550 211.432 493.550 C 258.585 493.550 302.132 478.114 337.298 452.020 C 371.656 506.674 432.493 543.000 501.815 543.000 Z" fill="url(#nuage1_grad)"/>
          <defs>
            <linearGradient id="nuage1_grad" x1="596.5" y1="0" x2="596.5" y2="543" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4B0B22"/>
              <stop offset="1" stopColor="#B11A50"/>
            </linearGradient>
          </defs>
        </svg>

        {/* ── NUAGE 2 bas droite ── */}
        <svg aria-hidden="true" className="nuage-2" viewBox="0 0 1197 525" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M699.841 0C604.615 0 526.812 74.5823 521.651 168.52C517.442 168.223 513.193 168.068 508.908 168.068C489.068 168.068 469.984 171.308 452.155 177.284C446.331 111.131 390.783 59.251 323.117 59.251C267.877 59.251 220.714 93.8274 202.086 142.519C185.734 136.378 168.022 133.018 149.525 133.018C66.9449 133.018 0 199.962 0 282.543C0 365.123 66.9449 432.068 149.525 432.068C220.828 432.068 280.471 382.159 295.433 315.37C304.352 317.312 313.615 318.336 323.117 318.336C326.346 318.336 329.548 318.216 332.718 317.983C331.223 327.28 330.442 336.816 330.442 346.534C330.442 445.098 410.344 525 508.908 525C604.135 525 681.939 450.417 687.099 356.479C691.307 356.776 695.556 356.932 699.841 356.932C749.315 356.932 794.085 336.798 826.41 304.28C857.304 370.688 924.617 416.727 1002.69 416.728C1110 416.728 1197 329.731 1197 222.414C1197 115.097 1110 28.0996 1002.69 28.0996C944.675 28.0998 892.603 53.5216 856.999 93.8311C826.849 37.9625 767.779 0 699.841 0Z" fill="url(#nuage2_grad)"/>
          <defs>
            <linearGradient id="nuage2_grad" x1="598.5" y1="0" x2="598.5" y2="525" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4B0B22"/>
              <stop offset="1" stopColor="#B11A50"/>
            </linearGradient>
          </defs>
        </svg>

        {/* ── NUAGE 2 miroir (mobile uniquement) ── */}
        <svg aria-hidden="true" className="nuage-2-mirror" viewBox="0 0 1197 525" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M699.841 0C604.615 0 526.812 74.5823 521.651 168.52C517.442 168.223 513.193 168.068 508.908 168.068C489.068 168.068 469.984 171.308 452.155 177.284C446.331 111.131 390.783 59.251 323.117 59.251C267.877 59.251 220.714 93.8274 202.086 142.519C185.734 136.378 168.022 133.018 149.525 133.018C66.9449 133.018 0 199.962 0 282.543C0 365.123 66.9449 432.068 149.525 432.068C220.828 432.068 280.471 382.159 295.433 315.37C304.352 317.312 313.615 318.336 323.117 318.336C326.346 318.336 329.548 318.216 332.718 317.983C331.223 327.28 330.442 336.816 330.442 346.534C330.442 445.098 410.344 525 508.908 525C604.135 525 681.939 450.417 687.099 356.479C691.307 356.776 695.556 356.932 699.841 356.932C749.315 356.932 794.085 336.798 826.41 304.28C857.304 370.688 924.617 416.727 1002.69 416.728C1110 416.728 1197 329.731 1197 222.414C1197 115.097 1110 28.0996 1002.69 28.0996C944.675 28.0998 892.603 53.5216 856.999 93.8311C826.849 37.9625 767.779 0 699.841 0Z" fill="url(#nuage2m_grad)"/>
          <defs>
            <linearGradient id="nuage2m_grad" x1="598.5" y1="0" x2="598.5" y2="525" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4B0B22"/>
              <stop offset="1" stopColor="#B11A50"/>
            </linearGradient>
          </defs>
        </svg>

        {/* ── CERCLE SOUS LA BULLE ── */}
        <div aria-hidden="true" className="circle" />

        {/* ── BULLE ── */}
        <div aria-hidden="true" className="bbl">
          <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="240" cy="240" r="240" fill="white"/>
            <polygon points="400,260 520,310 380,330" fill="white"/>
          </svg>
          <div className="bbl-text">
            {phase === 0 && (
              <span>{displayed}</span>
            )}
            {(done.includes(1) || phase === 1) && (
              <span style={{ whiteSpace: 'pre-line' }}>
                {done.includes(1) ? BUBBLE_TEXT : displayed}
              </span>
            )}
          </div>
        </div>

        {/* CTA desktop */}
        {(done.includes(2) || phase === 2) && (
          <div aria-hidden="true" className="bbl-cta" style={{ whiteSpace: 'pre-line' }}>
            {done.includes(2) ? CTA : displayed}
          </div>
        )}

        {/* ── CONTACT ── */}
        <div className="contact">
          <div>kimpeses@gmail.com</div>
          <div>www.linkedin.com/in/stella-kds</div>
        </div>

        {/* ── PERSONNAGE FLOTTANT ── */}
        <img src={moi} alt="Illustration de Stella (Haze)" className="char" />

      </main>
    </>
  )
}

export default Accueil