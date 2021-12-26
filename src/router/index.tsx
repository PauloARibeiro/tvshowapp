import React from 'react';
import { Routes, Route } from 'react-router-dom';

// VIEWS
import Show from '../views/Show';
import EpisodeList from '../views/EpisodeList';
import EpisodeDetails from '../views/EpisodeDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Show />} />
      <Route path="/:showId" element={<Show />} />
      <Route path="/list/:showId" element={<EpisodeList />} />
      <Route path="/episode/:showId/:episodeId" element={<EpisodeDetails />} />
    </Routes>
  );
}

export default AppRoutes;
