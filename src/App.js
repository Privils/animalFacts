import React, { useEffect } from 'react';
import './App.css';
import CatImages from './components/CatImages';
import DogImages from './components/DogImages';
import DuckImages from './components/DuckImages';
import FoxImages from './components/FoxImages';
import Header from './components/Header';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  return (
    <Router basename='/animalLover'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/animalLover' element={<Home />} />
          <Route path='/CatImages' element={<CatImages />} />
          <Route path='/DogImages' element={<DogImages />} />
          <Route path='/DuckImages' element={<DuckImages />} />
          <Route path='/FoxImages' element={<FoxImages />} />
        </Routes>
    </Router>
  );
}

export default App;
