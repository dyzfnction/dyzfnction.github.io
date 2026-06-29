import React from 'react'
import { useNavigate } from 'react-router-dom'
import logohazew from '../assets/images/logohazew.svg'
import brume1 from '../assets/images/brume1.svg'
import brume2 from '../assets/images/brume2.svg'
import brume3 from '../assets/images/brume3.svg'

const css = `
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&family=Henny+Penny&display=swap');

.menu-pg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #000000 0%, #360819 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
}

/* ── GROUPE logo + nav ── */
.menu-group {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: calc(25 / 1920 * 100vw);
  height: calc(1000 / 1080 * 100vh);
}

/* ── LOGO ── */
.menu-logo {
  position: absolute;
  top: 50%;
  left: calc(500 / 1920 * 100%);
  width: calc(340 / 1920 * 100vw);
  height: calc(900 / 1080 * 100vh);
  object-fit: contain;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}

.menu-logo:hover {
  transform: translateY(-50%) scale(1.1);
}

/* ── NAV ── */
.menu-nav {
  position: absolute;
  top: 50%;
  left: calc(860 / 1920 * 100%);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(14 / 1080 * 100vh);
  z-index: 10;
}

.menu-item {
  font-family: 'Henny Penny', cursive;
  font-size: calc(72 / 1920 * 100vw);
  color: #fff;
  text-decoration: none;
  line-height: 1;
  opacity: 0;
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  transition: color 0.4s ease, text-shadow 0.4s ease, transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  will-change: transform, opacity, color;
}

.menu-item:nth-child(1) { animation-delay: 0.4s; margin-top: calc(50 / 1080 * 100vh); }
.menu-item:nth-child(2) { animation-delay: 0.55s; }
.menu-item:nth-child(3) { animation-delay: 0.7s; }

.menu-item:hover {
  color: #B11A50;
  text-shadow: 0 0 30px rgba(177, 26, 80, 0.5);
  transform: translateX(15px);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── BRUMES ── */
.menu-brume {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  transform-origin: center center;
  will-change: transform, opacity;
}

.menu-brume-1 {
  z-index: 2;
  opacity: 0;
  animation: slideInLeft 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.6s;
}

.menu-brume-2 {
  z-index: 3;
  opacity: 0;
  animation: slideInRight 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.35s;
}

.menu-brume-3 {
  z-index: 5;
  top: 20%;
  opacity: 0;
  animation: slideInBottom 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.1s;
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-60px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(60px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInBottom {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}


/* ── CONTACT ── */
.menu-contact {
  position: absolute;
  left: calc(55 / 1920 * 100%);
  bottom: calc(60 / 1080 * 100%);
  z-index: 10;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: calc(18 / 1920 * 100vw);
  line-height: 1.8;
  opacity: 0;
  animation: fadeUp 0.7s ease forwards 1s;
}

/* ══════════════════════════════════════
   TABLETTE — scale la scène desktop
══════════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1366px) {
  .menu-pg {
    width: 1920px !important;
    height: 1080px !important;
    transform-origin: top left;
    transform: scale(var(--s, 0.5));
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
  }
}

/* ════════════════════════════════════════════════════════════════
   RESPONSIVE MOBILE
   ════════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* FIX: utilise dvh pour que la hauteur tienne compte
     de la barre d'adresse Chrome sur Android */
  .menu-pg {
    height: 100dvh;
  }

  .menu-group {
    flex-direction: row;
    align-items: center;
    gap: calc(0 / 402 * 100vw);
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-logo {
    top: 50%;
    left: 0%;
    width: calc(210 / 402 * 100vw);
    height: calc(210 / 402 * 100vw);
    transform: translateY(-50%);
  }

  .menu-logo:hover {
    transform: translateY(-50%) scale(1.05);
  }

  .menu-nav {
    top: 50%;
    left: 47%;
    transform: translateY(-50%);
    flex-direction: column;
    align-items: flex-start;
    gap: calc(2 / 402 * 100vw);
  }

  .menu-item {
    font-size: calc(37 / 402 * 100vw);
    margin-top: 0 !important;
    text-align: left;
    line-height: 1.30;
  }

  .menu-item:hover {
    transform: translateX(5px);
  }

  .menu-item:nth-child(1) { animation-delay: 0.4s; }
  .menu-item:nth-child(2) { animation-delay: 0.55s; }
  .menu-item:nth-child(3) { animation-delay: 0.7s; }

  .menu-brume-1 {
    position: absolute;
    left:   calc(-201 / 402 * 100vw);
    top:    calc(0    / 874 * 100dvh);
    width:  calc(1005 / 402 * 100vw);
    height: 45vh;
    z-index: 2;
    animation-delay: 1.26s;
  }

  .menu-brume-2 {
    position: absolute;
    left:   calc(-201 / 402 * 100vw);
    top:    calc(157  / 874 * 100dvh);
    width:  calc(1005 / 402 * 100vw);
    height: 75vh;
    z-index: 3;
    animation-delay: 0.63s;
  }

  .menu-brume-3 {
    position: absolute;
    left:   calc(-201 / 402 * 100vw);
    top:    calc(500  / 874 * 100dvh);
    width:  calc(1005 / 402 * 100vw);
    height: 63vh;
    z-index: 8;
    animation-delay: 0s;
  }

  /* FIX: dvh + valeur augmentée pour que les deux lignes
     restent visibles quand la barre d'adresse est affichée */
  .menu-contact {
    left:   calc(35 / 402 * 100vw);
    bottom: calc(70 / 874 * 100dvh);
    text-align: left;
    font-size: calc(12 / 402 * 100vw);
    line-height: 1.6;
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* ════════════════════════════════════════════════════════════════
   PETITS PHONES (≤ 480px)
   ════════════════════════════════════════════════════════════════ */
@media (max-width: 480px) {

  .menu-logo {
    width: calc(210 / 375 * 100vw);
    height: calc(210 / 375 * 100vw);
  }

  .menu-nav {
    left: 47%;
    gap: calc(2 / 375 * 100vw);
  }

  .menu-item {
    font-size: calc(37 / 375 * 100vw);
  }

  .menu-brume-1 { height: 55vh; }
  .menu-brume-2 { height: 55vh; }
  .menu-brume-3 {
    height: 55vh;
    left:0vh; 
  }

  /* FIX: dvh ici aussi pour cohérence sur petits phones */
  .menu-contact {
    font-size: calc(11 / 375 * 100vw);
    bottom: calc(70 / 874 * 100dvh);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* ════════════════════════════════════════════════════════════════
   TABLETTES (769px – 1024px)
════════════════════════════════════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1024px) {

  .menu-logo {
    left: calc(400 / 1024 * 100%);
    width: calc(260 / 1024 * 100vw);
    height: calc(600 / 768 * 100vh);
  }

  .menu-nav {
    left: calc(680 / 1024 * 100%);
    gap: calc(10 / 768 * 100vh);
  }

  .menu-item {
    font-size: calc(55 / 1024 * 100vw);
  }

  .menu-brume-1 {
    left:   calc(-512 / 1024 * 100vw);
    top:    calc(0    / 768  * 100vh);
    width:  calc(2560 / 1024 * 100vw);
    height: 65vh;
  }

  .menu-brume-2 {
    left:   calc(-512 / 1024 * 100vw);
    top:    calc(138  / 768  * 100vh);
    width:  calc(2560 / 1024 * 100vw);
    height: 65vh;
  }

  .menu-brume-3 {
    left:   calc(-512 / 1024 * 100vw);
    top:    calc(400  / 768  * 100vh);
    width:  calc(2560 / 1024 * 100vw);
    height: 80vh;
  }

  .menu-contact {
    font-size: calc(14 / 1024 * 100vw);
  }
}
`

const MENU_ITEMS = [
  { label: 'ACCUEIL', href: '/accueil' },
  { label: 'PROJETS', href: '/projets' },
  { label: 'HOBBY',   href: '/hobby' },
]

function useTabletScale() {
  React.useEffect(() => {
    let frameId;
    function apply() {
      frameId = requestAnimationFrame(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        if (w > 768) {
          const s = Math.min(w / 1920, h / 1080)
          document.documentElement.style.setProperty('--s', s)
        } else {
          document.documentElement.style.removeProperty('--s')
        }
      });
    }
    apply()
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('resize', apply)
      cancelAnimationFrame(frameId)
    }
  }, [])
}

function Menu() {
  const navigate = useNavigate()
  useTabletScale()

  return (
    <>
      <style>{css}</style>
      <div className="menu-pg">

        {/* ── BRUMES ── */}
        <img src={brume3} alt="" className="menu-brume menu-brume-3" />
        <img src={brume2} alt="" className="menu-brume menu-brume-2" />
        <img src={brume1} alt="" className="menu-brume menu-brume-1" />

        {/* ── LOGO ── */}
        <img
          src={logohazew}
          alt="Logo Haze"
          className="menu-logo"
          onClick={() => navigate('/')}
        />

        {/* ── NAV ── */}
        <nav className="menu-nav">
          {MENU_ITEMS.map((item) => (
            <span
              key={item.label}
              className="menu-item"
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* ── CONTACT ── */}
        <div className="menu-contact">
          <div>kimpeses@gmail.com</div>
          <div>www.linkedin.com/in/stella-kds</div>
        </div>

      </div>
    </>
  )
}

export default Menu