import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// CONTEXT
import ShowContext from '../../context/showContext';

// COMPONENTS
import EpisodeCards from '../../components/EpisodeCards';
import { Header, HeaderList, HeaderTitle } from './style';

// MODELS
import IEpisode from '../../interfaces/Episode';

function getEpsBySeason(episodes: IEpisode[]) {
  const list: Array<Array<IEpisode>> = [];
  let currentSeasonIndex = 0;

  function setValue(value: IEpisode) {
    if (!list[currentSeasonIndex]) {
      list[currentSeasonIndex] = [];
    }

    return list[currentSeasonIndex].push(value);
  }

  episodes.map((ep) => {
    if (currentSeasonIndex + 1 === ep.season) {
      return setValue(ep);
    }

    currentSeasonIndex += 1;

    return setValue(ep);
  });

  return list;
}

function EpisodeList() {
  window.scrollTo({
    top: 0,
  });

  const { episodes, showId, show } = useContext(ShowContext);

  if (!episodes || !show) return null;

  const list = getEpsBySeason(episodes);

  return (
    <>
      <Header>
        <HeaderTitle>
          <Link to="/">
            {show.name}
            <span>
              ({show.premiered.split('-')[0]} - {show.ended.split('-')[0]})
            </span>
          </Link>
        </HeaderTitle>
        <HeaderList>Episode List</HeaderList>
      </Header>
      {list.map((listEps, index) => (
        <EpisodeCards
          title={`Season ${index + 1}`}
          key={listEps[0].name}
          episodes={listEps}
          episodeUrl={`/episode/${showId}`}
        />
      ))}
    </>
  );
}

export default EpisodeList;
