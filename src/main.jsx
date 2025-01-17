import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Playlist from './Playlist.jsx';
import Project from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />}/>
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/projects" element={<Project />} />
      </Routes>
  </Router>
)
