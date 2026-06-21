import { useNavigate } from 'react-router-dom'
import logohazew from '../assets/images/logohazew.png'

function Start() {
  const navigate = useNavigate()

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom, #4B0B22 0%, #B11A50 100%)',
      position: 'relative',
    }}>

      {/* ── VERSION DESKTOP (inchangée) ── */}
      <div className="start-desktop">
        <h1 style={{
          fontFamily: "'Henny Penny', cursive",
          fontSize: '17vw',
          color: '#FFFFFF',
          margin: 0,
          fontWeight: 400,
          lineHeight: 1,
          textAlign: 'center',
          paddingTop: '18vh',
        }}>
          HAZE
        </h1>
        <img
          src={logohazew}
          alt="Logo Haze"
          onClick={() => navigate('/accueil')}
          style={{
            width: '22vw',
            position: 'absolute',
            top: '50vh',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'translateX(-50%) scale(1.1)'}
          onMouseLeave={e => e.target.style.transform = 'translateX(-50%) scale(1)'}
        />
      </div>

      {/* ── VERSION MOBILE ── */}
      <div className="start-mobile">
        <h1 style={{
          fontFamily: "'Henny Penny', cursive",
          fontSize: '30vw',
          color: '#FFFFFF',
          margin: 0,
          fontWeight: 400,
          lineHeight: 1,
          textAlign: 'center',
          letterSpacing: '0.02em',
          marginBottom: '-4vw',
        }}>
          HAZE
        </h1>
        <img
          src={logohazew}
          alt="Logo Haze"
          onClick={() => navigate('/accueil')}
          style={{
            width: '50vw',
            maxWidth: '220px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onTouchStart={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onTouchEnd={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      <style>{`
        .start-desktop {
          display: block;
          width: 100%;
          height: 100%;
        }
        .start-mobile {
          display: none;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2vh;
        }
        @media (max-width: 768px) {
          .start-desktop { display: none; }
          .start-mobile  { display: flex; }
        }
      `}</style>
    </div>
  )
}

export default Start