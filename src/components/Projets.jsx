import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logohazew from '../assets/images/logohazew.svg'

const css = `
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght=600&family=Henny+Penny&display=swap');

.proj-pg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #4B0B22 0%, #2B0010 50%, #000000 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  user-select: none;
}

/* ── TITRE ── */
.proj-title {
  position: absolute;
  left:       calc(432  / 1920 * 100%);
  top:        calc(140   / 1080 * 100%);
  font-family: 'Henny Penny', cursive;
  font-weight: 400;
  font-size: calc(200  / 1920 * 100vw);
  color: #fff;
  line-height: 1;
  margin: 0;
  z-index: 10;
  pointer-events: none;
}

/* ── LOGO ── */
.proj-logo {
  position: absolute;
  left:   calc(1307 / 1920 * 100%);
  top:    calc(114   / 1080 * 100%);
  width:  calc(288  / 1920 * 100%);
  height: auto;
  transform: rotate(20deg);
  transform-origin: top left;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.proj-logo:hover {
  transform: rotate(20deg) scale(1.05);
  transform-origin: top left;
}

/* ── CAROUSEL (desktop) ── */
.proj-carousel {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: calc(70 / 1080 * 100%);
  height: calc(600 / 1080 * 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── CERCLE (desktop) ── */
.proj-c {
  position: absolute;
  border-radius: 50%;
  border: none;
  background: linear-gradient(to bottom, #1A020C 10%, #540D27 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: width 0.5s cubic-bezier(0.4,0,0.2,1),
              height 0.5s cubic-bezier(0.4,0,0.2,1),
              left 0.5s cubic-bezier(0.4,0,0.2,1),
              top 0.5s cubic-bezier(0.4,0,0.2,1),
              opacity 0.5s ease;
  transform: translateY(-50%);
}

/* Animation de flottement fluide pour le desktop */
@keyframes desktopFloat {
  0%, 100% { transform: translateY(-50%) translateY(0); }
  50%      { transform: translateY(-50%) translateY(-10px); }
}

.proj-c.is-active {}

.proj-c-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  white-space: pre-line;
  line-height: 1.5;
  letter-spacing: 0.05em;
  transition: font-size 0.5s ease, opacity 0.5s ease;
}

/* ── CONTACT ── */
.proj-contact {
  position: absolute;
  left:   calc(55  / 1920 * 100%);
  bottom: calc(60  / 1080 * 100%);
  z-index: 10;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: calc(18 / 1920 * 100vw);
  line-height: 1.8;
}

/* ════════════════════════════════════════════════════════════════
   MOBILE
════════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  .proj-pg { height: 100dvh; }

  /* ── HEADER GROUP (même pattern qu'Accueil) ── */
  .proj-hdr-group {
    position: absolute;
    top: 25px;
    left: 47%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 14;
    pointer-events: none;
  }

  .proj-logo {
    position: static;
    left: auto;
    top: auto;
    width: calc(99 / 402 * 100vw);
    height: auto;
    transform: none;
    transform-origin: unset;
    pointer-events: auto;
  }
  .proj-logo:hover { transform: scale(1.05); }

  .proj-title {
    position: static;
    left: auto;
    top: auto;
    font-size: calc(48 / 402 * 100vw);
    white-space: nowrap;
    transform: none;
    pointer-events: none;
  }

  .proj-carousel {
    top:    0;
    left:   0;
    width:  100%;
    height: 100%;
    bottom: auto;
    display: block;
  }

  .proj-c-mobile {
    position: absolute;
    border-radius: 50%;
    border: none;
    background: linear-gradient(to bottom, #1A020C 10%, #540D27 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @keyframes bubbleFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(-1vh); }
  }

  .proj-c-label {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    white-space: pre-line;
    line-height: 1.5;
    font-size: calc(16 / 402 * 100vw);
    letter-spacing: 0.05em;
  }

  .proj-contact {
    left:      calc(30  / 402 * 100vw);
    bottom:    calc(25  / 874 * 100dvh);
    font-size: calc(11  / 402 * 100vw);
    line-height: 1.6;
    z-index: 20;
  }
}
`

/* Ajout des timings d'animation pour désynchroniser le mouvement sur desktop */
const PROJECTS = [
  { id: 1, label: 'SITE\nMARCHAND',  href: '#', dur: '5.2s', delay: '0s' },
  { id: 2, label: 'BOOKSTER',         href: '#', dur: '6.0s', delay: '-1.5s' },
  { id: 3, label: 'NWA',              href: '#', dur: '4.8s', delay: '-3.2s' },
  { id: 4, label: 'TYPEWRITER\nART', href: '#', dur: '6.5s', delay: '-0.8s' },
  { id: 5, label: 'OCTIME\nWEB',     href: '#', dur: '5.5s', delay: '-2.1s' },
]

const DESKTOP_CONFIG = {
  0: { size: '23.3vw', fontSize: '1.6vw', opacity: 1,    zBase: 5, yShift: '1.5vw' }, 
  1: { size: '15vw',   fontSize: '1.1vw', opacity: 1,    zBase: 4, yShift: '-2vw' },  
  2: { size: '10vw',   fontSize: '0.8vw', opacity: 0.55, zBase: 1, yShift: '-5vw' },  
}
const DESKTOP_STEP = { fg: 20, bg: 14 }

const MOBILE_BUBBLES = [
  { id: 1, label: 'SITE\nMARCHAND',    left: '50%', top: '16dvh', size: '32vw', opacity: 1, z: 1, dur: '3.0s', delay: '0s'    },
  { id: 2, label: 'BOOKSTER',           left: '22%', top: '27dvh', size: '32vw', opacity: 1, z: 3, dur: '3.0s', delay: '-0.6s' },
  { id: 3, label: 'NWA',               left: '50%', top: '40dvh', size: '42vw', opacity: 1, z: 5, dur: '3.0s', delay: '-1.2s' },
  { id: 4, label: 'TYPEWRITER\nART',   left: '75%', top: '58dvh', size: '34vw', opacity: 1, z: 3, dur: '3.0s', delay: '-1.8s' },
  { id: 5, label: 'OCTIME\nWEB',       left: '50%', top: '73dvh', size: '32vw', opacity: 1, z: 1, dur: '3.0s', delay: '-2.4s' },
]

function Projets() {
  const navigate   = useNavigate()
  const [active, setActive] = useState(2)
  const dragStart  = useRef(null)
  const isMobile   = window.innerWidth <= 768

  const N = PROJECTS.length

  function go(dir) {
    setActive(prev => (prev + dir + N) % N)
  }

  function signedDist(i) {
    let d = i - active
    if (d >  Math.floor(N / 2)) d -= N
    if (d < -Math.floor(N / 2)) d += N
    return d
  }

  function handleBubbleClick(sd, dist, projectId) {
    if (dist === 0 || isMobile) {
      navigate(`/projets/${projectId}`)
    } else {
      go(sd > 0 ? 1 : -1)
    }
  }

  function onPointerDown(e) {
    dragStart.current = { x: e.clientX, y: e.clientY }
  }

  function onPointerUp(e) {
    if (!dragStart.current) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    if (isMobile) {
      if (dy < -40) go(-1)
      else if (dy > 40) go(1)
    } else {
      if (dx < -40) go(1)
      else if (dx > 40) go(-1)
    }
    dragStart.current = null
  }

  return (
    <>
      <style>{css}</style>
      <div
        className="proj-pg"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* ── MOBILE : header groupe centré ── */}
        {isMobile && (
          <div className="proj-hdr-group">
            <img
              src={logohazew}
              alt="Logo Haze"
              className="proj-logo"
              onClick={() => navigate('/menu')}
            />
            <h1 className="proj-title">PROJETS</h1>
          </div>
        )}

        {/* ── DESKTOP : logo + titre positionnés séparément ── */}
        {!isMobile && (
          <>
            <h1 className="proj-title">PROJETS</h1>
            <img
              src={logohazew}
              alt="Logo Haze"
              className="proj-logo"
              onClick={() => navigate('/menu')}
            />
          </>
        )}

        {/* ── MOBILE ── */}
        {isMobile && (
          <div className="proj-carousel">
            {MOBILE_BUBBLES.map(b => (
              <div
                key={b.id}
                className="proj-c-mobile"
                onClick={() => navigate(`/projets/${b.id}`)}
                style={{
                  width:           b.size,
                  height:          b.size,
                  left:            b.left,
                  top:             b.top,
                  opacity:         b.opacity,
                  zIndex:          b.z,
                  transform:       'translateX(-50%)',
                  animation:       `bubbleFloat ${b.dur} linear ${b.delay} infinite`,
                }}
              >
                <span className="proj-c-label">{b.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── DESKTOP ── */}
        {!isMobile && (
          <div className="proj-carousel">
            {PROJECTS.map((p, i) => {
              const sd   = signedDist(i)
              const dist = Math.abs(sd)
              const c    = DESKTOP_CONFIG[Math.min(dist, 2)]
              const xOff = dist <= 1
                ? sd * DESKTOP_STEP.fg
                : (sd > 0 ? 1 : -1) * (DESKTOP_STEP.fg + DESKTOP_STEP.bg)

              return (
                <div
                  key={p.id}
                  className={`proj-c${dist === 0 ? ' is-active' : ''}`}
                  onClick={() => handleBubbleClick(sd, dist, p.id)}
                  style={{
                    width:      c.size,
                    height:     c.size,
                    opacity:    c.opacity,
                    left:       `calc(50% + ${xOff}vw)`,
                    top:        `calc(50% + ${c.yShift})`,
                    marginLeft: `calc(-${c.size} / 2)`,
                    zIndex:     c.zBase,
                    borderWidth: '3px',
                    animation:  `desktopFloat ${p.dur} ease-in-out ${p.delay} infinite`,
                  }}
                >
                  <span className="proj-c-label" style={{ fontSize: c.fontSize }}>
                    {p.label}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        <div className="proj-contact">
          <div>kimpeses@gmail.com</div>
          <div>www.linkedin.com/in/stella-kds</div>
        </div>
      </div>
    </>
  )
}

export default Projets