import React from 'react';

// CONTEXT
import ShowContext from '../context/showContext';

// MODELS
import IShowContext from '../interfaces/Context';
// import IEpisode from '../interfaces/Episode';

// ROUTES
import AppRoutes from '../router';

// COMPONENTS
import Wrapper from './style';
import BackToTop from '../components/BackToTop';

// HOOKS
import {
  useFetchEpisodes,
  useFetchShow,
  useFetchShowSeasons,
} from '../hooks/useFetchShows';

const initalState = new IShowContext();

function App() {
  const [show] = useFetchShow(initalState.showId);
  const [episodes] = useFetchEpisodes(initalState.showId);
  const [seasons] = useFetchShowSeasons(initalState.showId);

  if (!show || !episodes || !seasons) {
    return null;
  }

  initalState.episodes = episodes;
  initalState.seasons = seasons;
  initalState.show = show;

  return (
    <Wrapper>
      <BackToTop />
      <ShowContext.Provider value={initalState}>
        <AppRoutes />
      </ShowContext.Provider>
    </Wrapper>
  );
}

export default App;
