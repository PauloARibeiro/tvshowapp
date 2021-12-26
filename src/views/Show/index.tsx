import React, { useContext } from 'react';

// COMPONENTS
import Header from '../../components/Header';
import ShowContext from '../../context/showContext';
import EpisodeCards from '../../components/EpisodeCards';

function Show() {
  const { show, seasons, episodes, showId } = useContext(ShowContext);

  if (!show || !seasons || !episodes) return null;

  return (
    <>
      <Header
        name={show.name}
        genres={show.genres}
        premiered={show.premiered}
        ended={show.ended}
        summary={show.summary}
        rating={show.rating.average}
        image={show.image}
        seasons={`${seasons.length} seasons`}
      />
      <EpisodeCards
        episodes={episodes.slice(0, 8)}
        showAllUrl={`/list/${showId}`}
        episodeUrl={`/episode/${showId}`}
      />
    </>
  );
}

export default Show;
