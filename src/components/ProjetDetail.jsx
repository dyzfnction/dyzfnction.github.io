import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import arbreGauche from '../assets/svg/arbregauche.svg';
import arbreDroite from '../assets/svg/arbredroite.svg';
import buisson from '../assets/svg/buisson.svg';
import feuille from '../assets/svg/feuille.svg';
import logohazew from '../assets/images/logohazew.svg';

// ── IMPORTS DES IMAGES DES PROJETS ──
import siteM from '../assets/images/siteM.jpg';
import veloclassicowboy from '../assets/images/veloclassicowboy.png';
import sitemarchandcowboy from '../assets/images/sitemarchandcowboy.png';

import HappyLpp from '../assets/images/HappyLpp.png';
import LppNew from '../assets/images/LppNew.png';
import LppKid from '../assets/images/LppKid.png';
import lppoldred from '../assets/images/lppoldred.png';
import lppoldblack from '../assets/images/lppoldblack.png';

import Chapitre1 from '../assets/images/Chapitre1.png';
import Chapitre2 from '../assets/images/Chapitre2.png';
import Chapitre3 from '../assets/images/Chapitre3.png';
import Chapitre4 from '../assets/images/Chapitre4.png';
import Chapitre5 from '../assets/images/Chapitre5.png';

import ottoartypewriter from '../assets/images/ottoartypewriter.png';
import asciiartauteure from '../assets/images/asciiartauteure.png';
import typewriter3d from '../assets/images/typewriter3d.png';

import formationoctimeweb from '../assets/images/formationoctimeweb.jpg';
import tutoctime1 from '../assets/images/tutoctime1.png';
import tutoctime2 from '../assets/images/tutoctime2.png';


// ── DONNÉES DES PROJETS ──
const DATA_PROJETS = [
  {
    id: 1,
    nom: 'SITE MARCHAND',
    images: [siteM, veloclassicowboy, sitemarchandcowboy],
    legende: "Aperçus du site vitrine",
    outils: ['NotePad++', 'Canva'],
    contexte: { groupe: 'Binôme puis Solo', problematique: 'Réaliser un site marchand sur le thème des vélos électriques.', duree: '1 semestre' },
    driveUrl: 'https://drive.google.com/drive/folders/1NBrp-Ogzv5nA3SnLTPoDBg5jnW77oTMY?usp=drive_link',
    siteUrl: null, 
  },
  {
    id: 2,
    nom: 'BOOKSTER',
    images: [HappyLpp, LppNew, LppKid, lppoldred, lppoldblack],
    legende: 'Illustrations originales — Le Petit Prince',
    outils: ['Figma', 'Procreate', 'Adobe Illustrator'],
    contexte: { groupe: 'Solo (2026)', problematique: "Comment l'amour et l'amitié sont source de bonheur mais mènent à la séparation/mort.", duree: '1 mois' },
    driveUrl: 'https://drive.google.com/drive/folders/17vP9mmjqXGYZuQ3V8m63sCMDJ7GAhf6v?usp=drive_link',
    siteUrl: null,
  },
  {
    id: 3,
    nom: 'NWA',
    images: [Chapitre1, Chapitre2, Chapitre3, Chapitre4, Chapitre5],
    legende: "Création d'icônes et interface",
    outils: ['Figma', 'Illustrator', 'Photoshop', 'VS Code', 'GitHub', 'After Effects'],
    contexte: { groupe: 'Groupe de 3 (2025)', problematique: "Retranscrire l'héritage de N.W.A à travers une expérience web interactive.", duree: '1 trimestre' },
    driveUrl: 'https://drive.google.com/drive/folders/1cB_MixwHEFijkTt3nRpm1Cr7ineGFCRD?usp=drive_link',
    siteUrl: 'https://mamazorus.github.io/NWA/',
  },
  {
    id: 4,
    nom: 'TYPEWRITER ART',
    images: [ottoartypewriter, asciiartauteure, typewriter3d],
    legende: "Aperçu mobile-first",
    outils: ['Figma', 'VS Code', 'GitHub', 'Claude AI'],
    contexte: { groupe: 'Binôme (2026)', problematique: 'Transformer une histoire fragmentée en expérience narrative cohérente.', duree: '1 trimestre' },
    driveUrl: 'https://drive.google.com/drive/folders/1Z-vtbn1Od2E5vqhIVdjFKdPxcsMjKFWR?usp=drive_link',
    siteUrl: 'https://dyzfnction.github.io/t2-typewriter/',
  },
  {
    id: 5,
    nom: 'OCTIME WEB',
    images: [formationoctimeweb, tutoctime1, tutoctime2],
    legende: "Supports de communication (2024)",
    outils: ['Canva'],
    contexte: { groupe: 'Binôme (Stage)', problematique: 'Création d\'affiches de recrutement et de formation RH.', duree: '1 heure' },
    driveUrl: 'https://drive.google.com/drive/folders/1exUjWEwxsCmopFQ8QySgmF3FUeQJNZr7?usp=drive_link',
    siteUrl: null,
  },
];

function ProjetDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const projet = DATA_PROJETS.find((p) => p.id === parseInt(id, 10));
  const [imgIndex, setImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // États pour les Popups Mobiles
  const [showOutils, setShowOutils] = useState(false);
  const [showContexte, setShowContexte] = useState(false);

  if (!projet) {
    return (
      <div style={{ color: '#fff', background: '#2b0010', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <div>
          <p>Projet introuvable.</p>
          <button onClick={() => navigate('/projets')} style={{ marginTop: 16, padding: '10px 24px', borderRadius: 8, background: '#870A37', color: '#fff', border: 'none', cursor: 'pointer' }}>
            &lt; Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  const nbImages = projet.images.length;

  function changeImage(step) {
    setImgIndex((prev) => (prev + step + nbImages) % nbImages);
  }

  return (
    <div className="pd-wrapper">
      {/* ── LOGO (DESKTOP) ── */}
      <img
        src={logohazew}
        alt="Logo"
        className="hdr-logo"
        onClick={() => navigate('/menu')}
      />

      {/* ── TITRE PAGE (DESKTOP) ── */}
      <h1 className="hdr-title">PROJETS</h1>

      {/* ── BOUTON RETOUR (DESKTOP) ── */}
      <button 
        className="btn-retour" 
        onClick={() => navigate('/projets')} 
        aria-label="Retour aux projets"
      >
        <span className="arrow-sym">&lt;</span> RETOUR
      </button>

      {/* ── GAUCHE : OUTILS (DESKTOP) ── */}
      <div className="section-outils" aria-label="Outils utilisés sur ce projet">
        <h2 className="outils-title">OUTILS<br />UTILISÉS</h2>
        <div className="badges-container">
          {projet.outils.map((outil, index) => (
            <div key={index} className="badge-outil">
              <span className="badge-dot"></span>
              {outil}
            </div>
          ))}
        </div>
      </div>

      {/* ── DROITE : CONTEXTE & LIENS (DESKTOP) ── */}
      <div className="section-contexte">
        <h2 className="contexte-title">CONTEXTE</h2>
        <div className="contexte-card">
          <div className="contexte-field">
            <span className="field-label">Groupe ou solo :</span>
            <span className="field-value">{projet.contexte?.groupe}</span>
          </div>
          <div className="contexte-field">
            <span className="field-label">Problématique :</span>
            <span className="field-value">{projet.contexte?.problematique}</span>
          </div>
          <div className="contexte-field">
            <span className="field-label">Durée :</span>
            <span className="field-value">{projet.contexte?.duree}</span>
          </div>
        </div>

        <div className="action-wrapper">
          <a href={projet.driveUrl} target="_blank" rel="noreferrer" className="btn-link">Drive</a>
          {projet.siteUrl && (
            <a href={projet.siteUrl}  target="_blank" rel="noreferrer" className="btn-link">Site</a>
          )}
        </div>
      </div>

      {/* ── DÉCORS (DESKTOP) ── */}
      <img src={buisson}     className="bg-element bottom-bush" alt="" />
      <img src={arbreGauche} className="bg-element left-tree"   alt="" />
      <img src={arbreDroite} className="bg-element right-tree"  alt="" />

      {[...Array(6)].map((_, i) => (
        <img key={i} src={feuille} className={`floating-leaf leaf-${i + 1}`} alt="" />
      ))}

      {/* ── BLOC CENTRAL (DESKTOP) ── */}
      <div className="pd-container-lifted">
        <h2 className="project-heading-name">{projet.nom}</h2>

        <div className="carousel-wrapper">
          <div className="circle-container" onClick={() => setIsModalOpen(true)}>
            <svg viewBox="0 0 100 100" className="circle-svg">
              <circle cx="50" cy="50" r="44" stroke="#4B0B22" strokeWidth="10" fill="none" />
            </svg>

            <div className="carousel-content">
              <div className="carousel-placeholder">
                <span className="placeholder-label">cliquez pour voir les</span>
                <span className="placeholder-num">{nbImages}</span>
                <span className="placeholder-label">images</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FENÊTRE MODALE INTERACTIVE (DESKTOP + MOBILE ADAPTÉ) ── */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Fermer">×</button>
            
            {/* Flèche Gauche */}
            <button className="modal-nav-btn" onClick={() => changeImage(-1)} aria-label="Image précédente">‹</button>

            {/* Zone d'affichage */}
            <div className="modal-display-area">
              <div className="modal-img-container">
                <img
                  src={projet.images[imgIndex]}
                  alt={`${projet.nom} — vue ${imgIndex + 1}`}
                  className="modal-img"
                />
              </div>
              <div className="modal-infos">
                <span className="modal-legende">{projet.legende}</span>
                <span className="modal-counter">{imgIndex + 1} / {nbImages}</span>
              </div>
            </div>

            {/* Flèche Droite */}
            <button className="modal-nav-btn" onClick={() => changeImage(1)} aria-label="Image suivante">›</button>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          LAYOUT MOBILE UNIQUEMENT
      ═════════════════════════════════════════════════════════════ */}
      <div className="mobile-layout">
        
        {/* ARBRE EN FOND */}
        <img src={arbreGauche} alt="" className="mob-bg-tree" />

        {/* FEUILLES TOMBANTES */}
        {[...Array(6)].map((_, i) => (
          <img key={i} src={feuille} className={`mob-floating-leaf mob-leaf-${i + 1}`} alt="" />
        ))}

        {/* ── HEADER : groupe flex centré (même pattern qu'Accueil) ── */}
        <div className="mob-hdr-group">
          <img
            src={logohazew}
            alt="Logo"
            className="mob-logo"
            onClick={() => navigate('/menu')}
          />
          <h1 className="mob-title">PROJETS</h1>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="mob-content">
          <h2 className="mob-projet-name">{projet.nom}</h2>
          
          {/* Cercle Modale */}
          <div className="mob-circle" onClick={() => setIsModalOpen(true)}>
            <svg viewBox="0 0 100 100" className="mob-circle-svg">
              <circle cx="50" cy="50" r="44" stroke="#4B0B22" strokeWidth="8" fill="#f5f0f2" />
            </svg>
            <div className="mob-circle-inner">
              <span className="mob-placeholder-label">voir les</span>
              <span className="mob-placeholder-num">{nbImages}</span>
              <span className="mob-placeholder-label">images</span>
            </div>
          </div>

          {/* Boutons d'actions pour les Pop-ups */}
          <div className="mob-actions-buttons">
            <button className="mob-btn-action" onClick={() => setShowOutils(true)}>OUTILS</button>
            <button className="mob-btn-action" onClick={() => setShowContexte(true)}>CONTEXTE</button>
          </div>
        </div>

        {/* BOUTON RETOUR (BAS DROITE) */}
        <button className="mob-btn-retour" onClick={() => navigate('/projets')}>
          <span>‹</span> RETOUR
        </button>

        {/* ── POP-UP OUTILS ── */}
        {showOutils && (
          <div className="mob-popup-overlay" onClick={() => setShowOutils(false)}>
            <div className="mob-popup-card" onClick={e => e.stopPropagation()}>
              <button className="mob-popup-close" onClick={() => setShowOutils(false)}>×</button>
              <h3 className="mob-popup-title">OUTILS UTILISÉS</h3>
              <div className="mob-popup-badges">
                {projet.outils.map((outil, i) => (
                  <div key={i} className="mob-popup-badge">
                    <span className="badge-dot"></span>{outil}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── POP-UP CONTEXTE ── */}
        {showContexte && (
          <div className="mob-popup-overlay" onClick={() => setShowContexte(false)}>
            <div className="mob-popup-card" onClick={e => e.stopPropagation()}>
              <button className="mob-popup-close" onClick={() => setShowContexte(false)}>×</button>
              <h3 className="mob-popup-title">CONTEXTE</h3>
              <div className="mob-popup-field">
                <span className="mob-field-label">Groupe ou solo :</span>
                <span className="mob-field-value">{projet.contexte?.groupe}</span>
              </div>
              <div className="mob-popup-field">
                <span className="mob-field-label">Problématique :</span>
                <span className="mob-field-value">{projet.contexte?.problematique}</span>
              </div>
              <div className="mob-popup-field">
                <span className="mob-field-label">Durée :</span>
                <span className="mob-field-value">{projet.contexte?.duree}</span>
              </div>
              
              <div className="mob-popup-links">
                <a href={projet.driveUrl} target="_blank" rel="noreferrer" className="btn-link">Drive</a>
                {projet.siteUrl && <a href={projet.siteUrl} target="_blank" rel="noreferrer" className="btn-link">Site</a>}
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap');

        .pd-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #fff;
          overflow: hidden;
          font-family: 'Quicksand', sans-serif;
        }

        /* ── CSS DESKTOP (Inchangé) ── */
        .hdr-logo { position: absolute; left: calc(60 / 1920 * 100%); top: calc(20 / 1080 * 100%); width: calc(160 / 1920 * 100%); height: calc(350 / 1920 * 100%); object-fit: contain; z-index: 100; cursor: pointer; transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
        .hdr-logo:hover { transform: scale(1.1); }
        .hdr-title { position: absolute; left: calc(210 / 1920 * 100%); top: calc(80 / 1080 * 100%); font-family: 'Henny Penny', cursive; font-weight: 400; font-size: calc(80 / 1920 * 100vw); color: #fff; line-height: 1; text-shadow: 1px 2px 6px rgba(0,0,0,0.4); z-index: 100; margin: 0; pointer-events: none; }
        .btn-retour { position: absolute; right: calc(80 / 1920 * 100vw); top: calc(80 / 1080 * 100vh); z-index: 100; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(0, 0, 0, 0.1); color: #2b0010; padding: 10px 24px; border-radius: 50px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 16px; display: flex; align-items: center; gap: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: all 0.3s ease; }
        .btn-retour .arrow-sym { font-family: 'Henny Penny', cursive; font-size: 20px; line-height: 1; transform: translateY(3px); }
        .btn-retour:hover { background: #870A37; color: #fff; transform: translateX(-5px); }
        .section-outils { position: absolute; left: calc(80 / 1920 * 100vw); top: 55%; transform: translateY(-50%); z-index: 20; display: flex; flex-direction: column; gap: 25px; }
        .outils-title { font-weight: 700; font-size: 24px; color: #fff; margin: 0; }
        .badges-container { display: flex; flex-direction: column; gap: 14px; border-left: 2px dashed rgba(255,255,255,0.2); padding-left: 15px; }
        .badge-outil { background: rgba(43, 0, 16, 0.65); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 12px 24px; border-radius: 12px; font-weight: 600; display: flex; align-items: center; gap: 10px; width: fit-content; }
        .badge-dot { width: 6px; height: 6px; background: #870A37; border-radius: 50%; }
        .section-contexte { position: absolute; right: calc(80 / 1920 * 100vw); top: 55%; transform: translateY(-50%); z-index: 20; display: flex; flex-direction: column; gap: 25px; width: 340px; }
        .contexte-title { font-weight: 700; font-size: 24px; color: #fff; text-align: right; margin: 0; }
        .contexte-card { background: rgba(255,255,255,0.82); padding: 25px; border-radius: 30px 8px 30px 35px; display: flex; flex-direction: column; gap: 16px; }
        .contexte-field { display: flex; flex-direction: column; gap: 4px; }
        .field-label { font-size: 14px; font-weight: 700; color: #2b0010; text-transform: uppercase; }
        .field-value { font-size: 15px; font-weight: 500; color: #444444; }
        .action-wrapper { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
        .btn-link { background: linear-gradient(90deg, #320314 0%, #870A37 100%); color: #fff; text-decoration: none; padding: 10px 0; width: 160px; text-align: center; border-radius: 50px; font-weight: 600; font-size: 14px; text-transform: uppercase; }
        
        .pd-container-lifted { position: absolute; left: 50%; top: 53%; transform: translate(-50%, -50%); z-index: 4; display: flex; flex-direction: column; align-items: center; }
        .project-heading-name { font-weight: 700; font-size: 28px; color: #2b0010; margin: 0 0 25px 0; letter-spacing: 0.04em; }
        .circle-container { width: 480px; height: 480px; position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .circle-svg { position: absolute; width: 100%; height: 100%; }
        .carousel-content { position: relative; z-index: 1; width: 78%; height: 78%; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .carousel-placeholder { display: flex; flex-direction: column; align-items: center; color: #4B0B22; transition: transform 0.3s ease; }
        .carousel-placeholder:hover{ transform: scale(1.1); }
        .placeholder-num { font-family: 'Henny Penny', cursive; font-size: 80px; line-height: 0.8; margin: 20px 0 5px; }
        .placeholder-label { font-family: 'Quicksand', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(43, 0, 16, 0.85); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-card { position: relative; background: #ffffff; padding: 40px 30px; border-radius: 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); width: 85vw; height: 85vh; animation: modalFadeIn 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
        @keyframes modalFadeIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-close { position: absolute; top: 15px; right: 25px; font-size: 36px; background: none; border: none; cursor: pointer; color: #4B0B22; font-weight: bold; }
        .modal-nav-btn { font-family: 'Henny Penny', cursive; font-size: 90px; color: #4B0B22; background: none; border: none; cursor: pointer; padding: 0 20px; line-height: 1; }
        .modal-display-area { flex: 1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
        .modal-img-container { flex: 1; width: 100%; display: flex; align-items: center; justify-content: center; padding-bottom: 20px; min-height: 0; }
        .modal-img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px; }
        .modal-infos { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .modal-legende { font-weight: 700; font-size: 18px; color: #4B0B22; text-transform: uppercase; }
        .modal-counter { font-weight: 600; font-size: 15px; color: #666; }

        .bg-element { position: absolute; pointer-events: none; }
        .bottom-bush { bottom: 0; width: 100%; z-index: 1; }
        .left-tree, .right-tree { top: 0; height: 100%; z-index: 2; }
        .left-tree  { left: 0; } .right-tree { right: 0; }
        .floating-leaf { position: absolute; width: 40px; z-index: 3; opacity: 0; animation: fall linear infinite; }
        @keyframes fall { 0% { transform: translateY(-100px) rotate(0deg); opacity: 0; } 10%, 90% { opacity: 1; } 100% { transform: translateY(110vh) rotate(360deg); opacity: 0; } }
        .leaf-1 { left: 10%; animation-duration: 8s; } .leaf-2 { left: 25%; animation-duration: 10s; } .leaf-3 { left: 45%; animation-duration: 7s; } .leaf-4 { left: 60%; animation-duration: 9s; } .leaf-5 { left: 75%; animation-duration: 8s; } .leaf-6 { left: 90%; animation-duration: 11s; }

        @media (max-width: 1400px) { .section-outils { left: 40px; } .section-contexte { right: 40px; width: 280px; } }
        @media (max-width: 1100px) { .section-outils, .section-contexte { display: none; } .pd-container-lifted { top: 50%; } }

        .mobile-layout { display: none; }

        /* ═════════════════════════════════════════════════════════════
            STYLES MOBILE UNIQUEMENT
        ═════════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          body { background: #2C0714 !important; }
          .pd-wrapper { background: #2C0714 !important; }

          /* Cache le layout desktop complet */
          .pd-wrapper > .hdr-logo, .pd-wrapper > .hdr-title, .pd-wrapper > .btn-retour,
          .pd-wrapper > .section-outils, .pd-wrapper > .section-contexte,
          .pd-wrapper > .bg-element, .pd-wrapper > .floating-leaf,
          .pd-wrapper > .pd-container-lifted { display: none !important; }

          /* Layout Mobile */
          .mobile-layout {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100dvh;
            background: #2C0714;
            overflow: hidden;
            z-index: 50;
          }

          /* Feuilles tombantes mobile */
          .mob-floating-leaf {
            position: absolute;
            width: 35px;
            z-index: 8;
            opacity: 0;
            pointer-events: none;
            animation: fall linear infinite;
          }
          @keyframes fall {
            0%   { transform: translateY(-100px) rotate(0deg); opacity: 0; }
            10%, 90% { opacity: 1; }
            100% { transform: translateY(110dvh) rotate(360deg); opacity: 0; }
          }
          .mob-leaf-1 { left: 8%;  animation-duration: 8s;  animation-delay: 0s; }
          .mob-leaf-2 { left: 22%; animation-duration: 10s; animation-delay: -3s; }
          .mob-leaf-3 { left: 42%; animation-duration: 7s;  animation-delay: -1.5s; }
          .mob-leaf-4 { left: 62%; animation-duration: 9s;  animation-delay: -5s; }
          .mob-leaf-5 { left: 78%; animation-duration: 8s;  animation-delay: -2s; }
          .mob-leaf-6 { left: 92%; animation-duration: 11s; animation-delay: -4s; }

          /* ── HEADER GROUP (même pattern qu'Accueil) ── */
          .mob-hdr-group {
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
          .mob-logo {
            position: static;
            left: auto;
            top: auto;
            width: calc(99 / 402 * 100vw);
            height: auto;
            transform: none;
            pointer-events: auto;
          }
          .mob-logo:hover { transform: scale(1.05); }
          .mob-title {
            position: static;
            left: auto;
            top: auto;
            font-family: 'Henny Penny', cursive;
            font-weight: 400;
            font-size: calc(48 / 402 * 100vw);
            color: #ffffff;
            margin: 0;
            white-space: nowrap;
            transform: none;
            pointer-events: none;
          }

          .mob-bg-tree {
            position: absolute;
            top: 65%;
            left: 95%;
            transform: translate(-50%, -60%);
            height: 130dvh;
            width: 200%;
            opacity: 1;
            z-index: 2;
            pointer-events: none;
          }

          /* Feuilles tombantes mobile */
          .floating-leaf { display: block !important; z-index: 2; }

          /* CONTENU PRINCIPAL */
          .mob-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 5;
            padding-top: calc(80 / 874 * 100dvh);
          }

          .mob-projet-name {
            font-family: 'Quicksand', sans-serif;
            font-weight: 700;
            font-size: calc(24 / 402 * 100vw);
            color: #ffffff;
            margin: 0 0 8px 0;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-align: center;
            mix-blend-mode: difference;
          }

          /* CERCLE CAROUSEL */
          .mob-circle {
            position: relative;
            width: calc(240 / 402 * 100vw);
            height: calc(240 / 402 * 100vw);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-top: 23px;
            margin-bottom: 30px;
          }
          .mob-circle-svg { position: absolute; width: 100%; height: 100%; }
          .mob-circle-inner {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            color: #4B0B22;
          }
          .mob-placeholder-num {
            font-family: 'Henny Penny', cursive;
            font-size: calc(60 / 402 * 100vw);
            line-height: 1;
            color: #4B0B22;
            display: block;
          }
          .mob-placeholder-label {
            font-family: 'Quicksand', sans-serif;
            font-size: calc(11 / 402 * 100vw);
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #4B0B22;
            display: block;
            text-align: center;
          }

          /* BOUTONS ACTIONS (Pour les Pop-ups) */
          .mob-actions-buttons {
            display: flex;
            gap: 15px;
          }
          .mob-btn-action {
            background: #4B0B22;
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: 50px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 700;
            font-size: calc(12 / 402 * 100vw);
            letter-spacing: 0.05em;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }

          /* BOUTON RETOUR - Bas Droite */
          .mob-btn-retour {
            position: absolute;
            bottom: calc(25 / 874 * 100dvh);
            right: calc(30 / 402 * 100vw);
            background: #ffffff;
            color: #000000;
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 700;
            font-size: calc(13 / 402 * 100vw);
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 20;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          .mob-btn-retour span { font-family: 'Henny Penny', cursive; font-size: 18px; line-height: 1; transform: translateY(1px); }

          /* POP-UPS (Outils / Contexte) */
          .mob-popup-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.6);
            display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px;
          }
          .mob-popup-card {
            background: #fff; width: 100%; max-width: 320px; padding: 30px 20px;
            border-radius: 20px; position: relative; box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          }
          .mob-popup-close {
            position: absolute; top: 10px; right: 15px; font-size: 28px; border: none; background: none; color: #4B0B22; font-weight: bold;
          }
          .mob-popup-title { font-family: 'Quicksand', sans-serif; font-size: 18px; font-weight: 700; color: #4B0B22; margin: 0 0 20px 0; text-align: center; }
          .mob-popup-badges { display: flex; flex-direction: column; gap: 10px; }
          .mob-popup-badge { display: flex; align-items: center; gap: 10px; font-weight: 600; color: #444; font-size: 15px; }
          .mob-popup-field { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
          .mob-field-label { font-size: 13px; font-weight: 700; color: #4B0B22; text-transform: uppercase; }
          .mob-field-value { font-size: 15px; font-weight: 500; color: #444; }
          .mob-popup-links { display: flex; gap: 10px; margin-top: 20px; }
          .mob-popup-links .btn-link { flex: 1; padding: 12px 0; border-radius: 12px; font-size: 13px; }

          /* AJUSTEMENT DE LA MODALE IMAGES POUR L'ACCESSIBILITÉ MOBILE */
          .modal-card {
            width: 95vw;
            height: auto;
            max-height: 75vh;
            padding: 35px 10px 15px;
            flex-direction: column;
            justify-content: center;
          }
          .modal-display-area {
            height: auto;
            width: 100%;
          }
          .modal-img-container {
            max-height: 50vh;
          }
          .modal-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 45px;
            padding: 10px;
            z-index: 10;
          }
          .modal-nav-btn:first-of-type { left: 0; }
          .modal-nav-btn:last-of-type { right: 0; }
          .modal-infos { margin-top: 15px; }
          .modal-legende { font-size: 14px; text-align: center; }
          .modal-counter { font-size: 13px; }
        }

      `}</style>
    </div>
  );
}

export default ProjetDetail;