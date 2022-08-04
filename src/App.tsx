import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Game from './pages/Game';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import BoardSize from './pages/settings/BoardSize';
import Control from './pages/settings/Control';
import Food from './pages/settings/Food';
import Mods from './pages/settings/Mods';
import SnakeColor from './pages/settings/snake/Color';
import SnakeSpeed from './pages/settings/snake/Speed';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/board-size' element={<BoardSize />} />
      <Route path='/snake-color' element={<SnakeColor />} />
      <Route path='/snake-speed' element={<SnakeSpeed />} />
      <Route path='/mods' element={<Mods />} />
      <Route path='/control' element={<Control />} />
      <Route path='/food' element={<Food />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
