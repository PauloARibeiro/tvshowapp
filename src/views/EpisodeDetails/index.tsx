import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// CONTEXT
import ShowContext from '../../context/showContext';

// COMPONENTS
import Header from '../../components/Header';
import EpisodeCards from '../../components/EpisodeCards';

// MODEL
import IEpisode from '../../interfaces/Episode';

function getEpsFromSeason(season: number, eps: IEpisode[], epId: number) {
  return eps.filter((ep) => ep.season === season && ep.id !== epId);
}

function EpisodeDetails() {
  window.scrollTo({
    top: 0,
  });

  const { episodeId } = useParams();

  const { episodes, showId } = useContext(ShowContext);

  const episode = episodes.filter((ep) => ep.id.toString() === episodeId)[0];

  if (!episode) return null;

  const list = getEpsFromSeason(episode.season, episodes, episode.id);

  return (
    <>
      <Header
        name={episode.name}
        premiered={episode.airdate}
        summary={episode.summary}
        rating={episode.rating.average || 0}
        image={episode.image}
        seasons={`Season ${episode.season}`}
      />
      <EpisodeCards
        title={`More from season ${episode.season}`}
        episodes={list}
        showAllUrl={`/list/${showId}`}
        episodeUrl={`/episode/${showId}`}
      />
    </>
  );
}

export default EpisodeDetails;
