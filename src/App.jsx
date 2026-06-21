import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PageTransition from './components/PageTransition'; 
import Start from './components/Start';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Projets from './components/Projets';
import ProjetDetail from './components/ProjetDetail';
import Hobby from './components/Hobby';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Start /></PageTransition>} />
        <Route path="/accueil" element={<PageTransition><Accueil /></PageTransition>} />
        <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
        <Route path="/projets" element={<PageTransition><Projets /></PageTransition>} />
        <Route path="/projets/:id" element={<PageTransition><ProjetDetail /></PageTransition>} />
        <Route path="/hobby" element={<PageTransition><Hobby /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;