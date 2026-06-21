import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import logohaze from '../assets/images/logohaze.png'
import brumehobby from '../assets/svg/brumehobby.svg'

import procreatebaddie from '../assets/art/procreatebaddie.png'
import procreatebaddiev2 from '../assets/art/procreatebaddiev2.JPG'
import iartwannabefrozen from '../assets/art/iartwannabefrozen.PNG'
import ibispaintxflowergirl from '../assets/art/ibispaintxflowergirl.JPG'
import ibispaintxgirl from '../assets/art/ibispaintxgirl.JPG'
import ibispaintxweirdtree from '../assets/art/ibispaintxweirdtree.PNG'
import procreatealien from '../assets/art/procreatealien.png'
import procreateangrylittlegirl from '../assets/art/procreateangrylittlegirl.png'
import procreatebabyface from '../assets/art/procreatebabyface.png'
import procreateblondhairedperson from '../assets/art/procreateblondhairedperson.png'
import procreateblondhairedpersonuncoloredversion from '../assets/art/procreateblondhairedpersonuncoloredversion.png'
import procreatecryingface from '../assets/art/procreatecryingface.png'
import procreatedontlookattheyesmistake from '../assets/art/procreatedontlookattheyesmistake.png'
import procreatedude from '../assets/art/procreatedude.png'
import procreatefairies from '../assets/art/procreatefairies.png'
import procreatehappylittleboy from '../assets/art/procreatehappylittleboy.png'
import procreatehugevsnormal from '../assets/art/procreatehugevsnormal.png'
import procreateidk from '../assets/art/procreateidk.png'
import procreatejellyfishgirl from '../assets/art/procreatejellyfishgirl.png'
import procreatemask from '../assets/art/procreatemask.png'
import procreatemymonster from '../assets/art/procreatemymonster.png'
import procreatepinkhairyellowglasses from '../assets/art/procreatepinkhairyellowglasses.png'
import procreaterabbit from '../assets/art/procreaterabbit.png'
import procreateselfinspo from '../assets/art/procreateselfinspo.JPG'
import procreateselfportrait from '../assets/art/procreateselfportrait.png'
import procreateselfportraitnewstyle from '../assets/art/procreateselfportraitnewstyle.png'
import procreatesideprofildude from '../assets/art/procreatesideprofildude.png'
import procreatesillydrawing from '../assets/art/procreatesillydrawing.png'
import procreatesufferingcharacter from '../assets/art/procreatesufferingcharacter.png'
import procreateunfinishedpiece from '../assets/art/procreateunfinishedpiece.png'
import procreatewannabeegyptianwannabejapanesegirl from '../assets/art/procreatewannabeegyptianwannabejapanesegirl.png'
import procreateweirdodude from '../assets/art/procreateweirdodude.png'
import procreatewhateverthisis from '../assets/art/procreatewhateverthisis.png'
import procreateyounggirl from '../assets/art/procreateyounggirl.png'
import traditionalartangelfrontpic from '../assets/art/traditionalartangelfrontpic.jpg'
import traditionalartangelsidepic from '../assets/art/traditionalartangelsidepic.jpg'
import traditionalartpinterestreferencegirl from '../assets/art/traditionalartpinterestreferencegirl.JPG'
import traditionaldrawingyoutubescreen from '../assets/art/traditionaldrawingyoutubescreen.jpg'

// ── POOL COMPLET (36 œuvres) ──
const ALL_HOBBIES = [
  { id: 1,  title: 'Baddie',                tech: 'Procreate',        images: [procreatebaddie, procreatebaddiev2] },
  { id: 2,  title: 'Wannabe Frozen',          tech: 'iArtBook',         images: [iartwannabefrozen] },
  { id: 3,  title: 'Flower Girl',             tech: 'ibis Paint X',     images: [ibispaintxflowergirl] },
  { id: 4,  title: 'Girl',                    tech: 'ibis Paint X',     images: [ibispaintxgirl] },
  { id: 5,  title: 'Weird Tree',              tech: 'ibis Paint X',     images: [ibispaintxweirdtree] },
  { id: 6,  title: 'Alien',                   tech: 'Procreate',        images: [procreatealien] },
  { id: 7,  title: 'Angry Little Girl',       tech: 'Procreate',        images: [procreateangrylittlegirl] },
  { id: 8,  title: 'Baby Face',               tech: 'Procreate',        images: [procreatebabyface] },
  { id: 9,  title: 'Blonde Haired Person',    tech: 'Procreate',        images: [procreateblondhairedperson, procreateblondhairedpersonuncoloredversion] },
  { id: 10, title: 'Crying Face',             tech: 'Procreate',        images: [procreatecryingface] },
  { id: 11, title: "Don't Look at the Eyes",  tech: 'Procreate',        images: [procreatedontlookattheyesmistake] },
  { id: 12, title: 'Dude',                    tech: 'Procreate',        images: [procreatedude] },
  { id: 13, title: 'Fairies',                 tech: 'Procreate',        images: [procreatefairies] },
  { id: 15, title: 'Happy Little Boy',        tech: 'Procreate',        images: [procreatehappylittleboy] },
  { id: 16, title: 'Huge vs Normal',          tech: 'Procreate',        images: [procreatehugevsnormal] },
  { id: 17, title: 'Idk',                     tech: 'Procreate',        images: [procreateidk] },
  { id: 18, title: 'Jellyfish Girl',          tech: 'Procreate',        images: [procreatejellyfishgirl] },
  { id: 19, title: 'Mask',                    tech: 'Procreate',        images: [procreatemask] },
  { id: 20, title: 'My Monster',              tech: 'Procreate',        images: [procreatemymonster] },
  { id: 21, title: 'Pink Hair Yellow Glasses',tech: 'Procreate',        images: [procreatepinkhairyellowglasses] },
  { id: 22, title: 'Rabbit',                  tech: 'Procreate',        images: [procreaterabbit] },
  { id: 23, title: 'Self Inspo',              tech: 'Procreate',        images: [procreateselfinspo] },
  { id: 24, title: 'Self Portrait',           tech: 'Procreate',        images: [procreateselfportrait] },
  { id: 25, title: 'Self Portrait New Style', tech: 'Procreate',        images: [procreateselfportraitnewstyle] },
  { id: 26, title: 'Side Profile Dude',       tech: 'Procreate',        images: [procreatesideprofildude] },
  { id: 27, title: 'Silly Drawing',           tech: 'Procreate',        images: [procreatesillydrawing] },
  { id: 28, title: 'Suffering Character',     tech: 'Procreate',        images: [procreatesufferingcharacter] },
  { id: 29, title: 'Unfinished Piece',        tech: 'Procreate',        images: [procreateunfinishedpiece] },
  { id: 30, title: 'Wannabe Egyptian Girl',   tech: 'Procreate',        images: [procreatewannabeegyptianwannabejapanesegirl] },
  { id: 31, title: 'Weirdo Dude',             tech: 'Procreate',        images: [procreateweirdodude] },
  { id: 32, title: 'Whatever This Is',        tech: 'Procreate',        images: [procreatewhateverthisis] },
  { id: 33, title: 'Young Girl',              tech: 'Procreate',        images: [procreateyounggirl] },
  { id: 34, title: 'Angel (Front)',           tech: 'Art Traditionnel', images: [traditionalartangelfrontpic, traditionalartangelsidepic] },
  { id: 35, title: 'Pinterest Reference Girl',tech: 'Art Traditionnel', images: [traditionalartpinterestreferencegirl] },
  { id: 36, title: 'YouTube Screen',          tech: 'Art Traditionnel', images: [traditionaldrawingyoutubescreen] },
]

const VERTICAL_IDS = new Set([2, 7, 9, 15, 16, 18, 20, 21, 25, 28, 29, 33])
const VERTICAL_HOBBIES = ALL_HOBBIES.filter(h => VERTICAL_IDS.has(h.id))

function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

// ── CONFIGURATIONS DES POSITIONS (Séparation Desktop et Mobile) ──
const DESKTOP_SLOTS = [
  { shape: 'rect',   top: '25vh', left: '5vw',  rotate: '-7deg', dur: '5.8s', delay: '0s',    ein: '0.4s', width: '21vw', height: '52vh' },
  { shape: 'circle', top: '42vh', left: '29vw', rotate: '0deg',  dur: '7.1s', delay: '-2.3s', ein: '0.6s', width: '22vw', height: '22vw' },
  { shape: 'square', top: '56vh', left: '55vw', rotate: '0deg',  dur: '6.4s', delay: '-4.1s', ein: '0.8s', width: '18vw', height: '18vw' },
  { shape: 'rect',   top: '30vh', left: '76vw', rotate: '5deg',  dur: '5.2s', delay: '-1.7s', ein: '0.55s',width: '19vw', height: '48vh' },
]

// ── AJUSTEMENTS MOBILE : Tailles réduites, espacements améliorés ──
const MOBILE_SLOTS = [
  { shape: 'rect',   top: '21dvh', left: '6vw',  rotate: '-7deg', dur: '5.8s', delay: '0s',    ein: '0.4s', width: '38vw', height: '32dvh' },
  { shape: 'circle', top: '24dvh', left: '52vw', rotate: '0deg',  dur: '7.1s', delay: '-2.3s', ein: '0.6s', width: '38vw', height: '38vw' },
  { shape: 'square', top: '57dvh', left: '8vw',  rotate: '0deg',  dur: '6.4s', delay: '-4.1s', ein: '0.8s', width: '36vw', height: '36vw' },
  { shape: 'rect',   top: '51dvh', left: '52vw', rotate: '6deg',  dur: '5.2s', delay: '-1.7s', ein: '0.55s',width: '40vw', height: '31dvh' },
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&family=Quicksand:wght@600;700&display=swap');

/* ── KEYFRAMES ── */
@keyframes cardFloat {
  0%   { transform: rotate(var(--r)) translateY(0px); }
  50%  { transform: rotate(calc(var(--r) + 1deg)) translateY(-10px); }
  100% { transform: rotate(var(--r)) translateY(0px); }
}
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateX(-50%) translateY(-18px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes cardFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes cardFloatLoop {
  0%   { transform: rotate(var(--r)) translateY(0px); }
  50%  { transform: rotate(calc(var(--r) + 1deg)) translateY(-10px); }
  100% { transform: rotate(var(--r)) translateY(0px); }
}

/* ── BASE ── */
.hobby-pg { width: 100vw; height: 100vh; background: #ffffff; position: relative; overflow: hidden; font-family: 'Quicksand', sans-serif; }

/* ── BRUME DESKTOP (En haut, inversée) ── */
.hobby-brume {
  position: absolute; 
  top: -2vh; 
  left: 0; 
  width: 100%; 
  height: auto; 
  min-height: 55%;
  object-fit: cover; 
  pointer-events: none; 
  z-index: 1;
  transform: scaleY(-1); 
  animation: fadeIn 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s both;
}

/* ── HEADER ── */
.hobby-header {
  position: absolute; top: -5vh; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: row; align-items: center; gap: 0; z-index: 10;
  animation: fadeSlideDown 0.9s cubic-bezier(0.22,1,0.36,1) 0.05s both;
}
.hobby-logo { width: 246.83px; height: 408.992px; object-fit: contain; cursor: pointer; transform: rotate(-16.616deg); transition: transform 0.3s; }
.hobby-logo:hover { transform: rotate(-16.616deg) scale(1.05); }

/* Titre par défaut */
.hobby-title { 
  font-family: 'Henny Penny', cursive; 
  font-weight: 400;
  font-size: 177px; 
  color: #000; 
  margin: 0 0 0 -25px; 
  pointer-events: none; 
  text-shadow: 0 4px 4px rgba(0,0,0,0.25); 
}

/* ── CARTES DESKTOP & MOBILE ── */
.hobby-card {
  position: absolute; 
  background: #000000; 
  border-radius: 0; 
  z-index: 5;
  padding: 25px; 
  box-shadow: 0 4px 10px rgba(0,0,0,0.3); 
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.3s;
  animation:
    cardFadeIn 0.7s ease var(--ein) both,
    cardFloatLoop var(--dur) ease-in-out 0s infinite;
}
.hobby-card:hover { transform: scale(1.03); z-index: 8; }
.hobby-card-img { width: 100%; height: 100%; object-fit: cover; display: block; background: #d9d9d9; }

/* Variantes de cadres */
.hobby-card-circle { border-radius: 50%; padding: 23px; }
.hobby-card-circle .hobby-card-img { border-radius: 50%; aspect-ratio: 1/1; height: 100%; }
.hobby-card-square { border-radius: 0; }

.hobby-contact {
  position: absolute; left: 3vw; bottom: 7vh; z-index: 10;
  color: #000; 
  font-weight: 600; font-size: 16px;
  animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 1s both;
}

/* ── MODALE DESKTOP ── */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(43, 0, 16, 0.85); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-card { position: relative; background: #fff; padding: 40px 30px; border-radius: 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 20px 50px rgba(0,0,0,0.5); width: 85vw; height: 85vh; overflow: hidden; }
.modal-close { position: absolute; top: 15px; right: 25px; font-size: 36px; background: none; border: none; cursor: pointer; color: #4B0B22; font-weight: bold; }
.modal-nav-btn { font-family: 'Henny Penny', cursive; font-size: 90px; color: #4B0B22; background: none; border: none; cursor: pointer; transition: transform 0.2s; padding: 0 20px; line-height: 1; flex-shrink: 0; }
.modal-nav-btn:hover { transform: scale(1.15); color: #B11A50; }
.modal-display-area { flex: 1; height: 100%; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
.modal-img-container { flex: 1; width: 100%; min-width: 0; min-height: 0; display: flex; align-items: center; justify-content: center; padding-bottom: 20px; overflow: hidden; }
.modal-img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; border-radius: 12px; }
.modal-infos { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.modal-legende { font-weight: 700; font-size: 18px; color: #4B0B22; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; }
.modal-counter { font-weight: 600; font-size: 15px; color: #666; }

/* ── VERSION MOBILE ── */
@media (max-width: 768px) {
  .hobby-pg { 
    display: block; 
    height: 100dvh; 
    overflow: hidden;
    overflow-x: hidden;
    max-width: 100vw;
  }

  /* ── CADRES RÉDUITS POUR MOBILE ── */
  .hobby-card { padding: 4.5vw; } 
  .hobby-card-circle { padding: 4.5vw; }

  /* ── HEADER MOBILE ── */
  .hobby-header { 
    position: absolute;
    top: calc(25 / 874 * 100dvh);
    left: 47%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    z-index: 14;
    pointer-events: none;
    white-space: nowrap;
    animation: fadeSlideDown 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both;
  }

  .hobby-logo { 
    position: relative; left: auto; top: auto;
    width: calc(99 / 402 * 100vw); height: auto; transform: none;
    pointer-events: auto; flex-shrink: 0;
  }

  .hobby-title { 
    position: relative; left: auto; top: auto;
    font-size: calc(52 / 402 * 100vw);
    margin: 0; 
    line-height: 1;
  }

  /* ── CARROUSEL CENTRAL ── */
  .mobile-carousel-main {
    position: absolute;
    top: 18.5dvh;
    left: 0; width: 100vw;
    display: flex; flex-direction: column; align-items: center;
    z-index: 20; 
    animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }

  .mob-img-area { position: relative; display: flex; align-items: center; justify-content: center; width: 100vw; }
  .mob-img-box { width: 78vw; height: 43dvh; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .mob-img-box img { max-width: 100%; max-height: 100%; width: auto; height: auto; display: block; object-fit: contain; border-radius: 12px; }

  .mob-nav-btn {
    position: absolute; top: 50%; transform: translateY(-50%);
    font-family: 'Henny Penny', cursive; font-weight: 400; font-size: 55px; 
    color: #4B0B22; background: none; border: none; padding: 10px; z-index: 15;
  }
  .mob-nav-btn.prev { left: 1vw; }
  .mob-nav-btn.next { right: 1vw; }

  .mob-info-area { margin-top: 10px; text-align: center; }
  .mob-legende { font-size: 14px; color: #4B0B22; font-weight: 700; text-transform: uppercase; }
  .mob-counter { font-size: 12px; color: #888; margin-top: 4px; display: block; }

  /* ── BRUME MOBILE (En bas, endroit) ── */
  .hobby-brume { 
    position: absolute;
    height: 38dvh; min-height: auto; 
    top: auto; bottom: 0; 
    left: 0; width: 100vw;
    object-fit: cover; object-position: bottom center; 
    z-index: 1;
    transform: scaleY(1); 
    animation: fadeIn 1.2s ease 0.1s both;
  }

  /* ── BOUTON FERMER (carrousel mobile) ── */
  .mob-close-btn { position: absolute; top: -1dvh; right: 2vw; font-size: 34px; line-height: 1; color: #4B0B22; background: none; border: none; padding: 8px; z-index: 16; }

  .hobby-contact { 
    position: absolute; bottom: 3dvh; left: 5vw; 
    font-size: 13px; line-height: 1.4; z-index: 10; color: #fff;
    text-shadow: 0 1px 5px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7);
    animation: fadeIn 0.8s ease 1s both;
  }
}
`

function Hobby() {
  const navigate = useNavigate()
  const visibleHobbies = useMemo(() => pickRandom(VERTICAL_HOBBIES, 4), [])

  const [currentPoolIdx, setCurrentPoolIdx] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const selectedHobby = currentPoolIdx !== null ? ALL_HOBBIES[currentPoolIdx] : null
  const N = ALL_HOBBIES.length

  const changeHobby = (step) => {
    setCurrentPoolIdx(prev => (prev + step + N) % N)
    setImgIndex(0)
  }

  const openHobby = (hobby) => {
    const idx = ALL_HOBBIES.findIndex(h => h.id === hobby.id)
    setCurrentPoolIdx(idx)
    setImgIndex(0)
    setIsClosing(false)
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => { setCurrentPoolIdx(null); setIsClosing(false) }, 220)
  }

  const closeMobile = () => setCurrentPoolIdx(null)

  const activeSlots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS

  return (
    <>
      <style>{css}</style>
      <div className="hobby-pg">
        <img src={brumehobby} alt="" className="hobby-brume" />

        <div className="hobby-header">
          <img src={logohaze} alt="Logo" className="hobby-logo" onClick={() => navigate('/menu')} />
          <h1 className="hobby-title">HOBBY</h1>
        </div>

        {/* ── CARROUSEL DIRECT (MOBILE UNIQUEMENT) ── */}
        {selectedHobby && isMobile && (
          <div className="mobile-carousel-main">
            <button className="mob-close-btn" onClick={closeMobile}>×</button>
            <div className="mob-img-area">
              <button className="mob-nav-btn prev" onClick={() => changeHobby(-1)}>‹</button>
              <div className="mob-img-box">
                <img src={selectedHobby.images[imgIndex]} alt={selectedHobby.title} />
              </div>
              <button className="mob-nav-btn next" onClick={() => changeHobby(1)}>›</button>
            </div>
            <div className="mob-info-area">
              <span className="mob-legende">{selectedHobby.tech}</span>
              <span className="mob-counter">Œuvre {currentPoolIdx + 1} / {N}</span>
            </div>
          </div>
        )}

        {/* ── CARTES ── */}
        {!(isMobile && selectedHobby) && visibleHobbies.map((hobby, i) => {
          const slot = activeSlots[i]
          if (!slot) return null;
          
          return (
            <div
              key={hobby.id}
              className={`hobby-card ${slot.shape === 'circle' ? 'hobby-card-circle' : ''} ${slot.shape === 'square' ? 'hobby-card-square' : ''}`}
              style={{
                top: slot.top,
                left: slot.left,
                width: slot.width,
                height: slot.height,
                '--r': slot.rotate,
                '--dur': slot.dur,
                '--ein': slot.ein,
              }}
              onClick={() => openHobby(hobby)}
            >
              <img src={hobby.images[0]} alt={hobby.title} className="hobby-card-img" />
            </div>
          )
        })}

        <div className="hobby-contact">
          <div>kimpeses@gmail.com</div>
          <div>www.linkedin.com/in/stella-kds</div>
        </div>

        {/* ── MODALE (DESKTOP UNIQUEMENT) ── */}
        {selectedHobby && !isMobile && (
          <div className={`modal-overlay ${isClosing ? 'leaving' : 'entering'}`} onClick={closeModal}>
            <div className={`modal-card ${isClosing ? 'leaving' : 'entering'}`} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <button className="modal-nav-btn" onClick={() => changeHobby(-1)}>‹</button>
              <div className="modal-display-area">
                <div className="modal-img-container">
                  <img src={selectedHobby.images[imgIndex]} alt={selectedHobby.title} className="modal-img" />
                </div>
                <div className="modal-infos">
                  <span className="modal-legende">{selectedHobby.tech}</span>
                  <span className="modal-counter">Œuvre {currentPoolIdx + 1} / {N}</span>
                </div>
              </div>
              <button className="modal-nav-btn" onClick={() => changeHobby(1)}>›</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Hobby