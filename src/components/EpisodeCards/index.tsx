import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import {
  Wrapper,
  CardWrapper,
  Header,
  HeaderSeeAll,
  HeaderTitle,
  Card,
  CardTitle,
  CardRating,
  CardDate,
  CardImage,
  CardImageWrapper,
} from './style';

// MODELS
import IEpisode from '../../interfaces/Episode';

export interface IEpisdoeCardsProps {
  episodes: IEpisode[];
  title?: string | null;
  showAllUrl?: string | null;
  episodeUrl?: string | null;
}

function EpisodeCards({
  title = 'Episodes',
  episodes,
  showAllUrl = null,
  episodeUrl = null,
}: IEpisdoeCardsProps) {
  function renderEpisode({ name, airdate, image, id }: IEpisode) {
    const url = `${episodeUrl}/${id}`;

    return (
      <Link to={url} key={url}>
        <Card title={name}>
          <CardImageWrapper className="card-img-wrapper">
            <CardImage src={image.medium} />
          </CardImageWrapper>
          <CardTitle>{name}</CardTitle>
          <CardRating />
          <CardDate>{airdate}</CardDate>
        </Card>
      </Link>
    );
  }

  if (episodes.length === 0) return null;

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSeeAll>
          {showAllUrl ? <Link to={showAllUrl}>See All</Link> : null}
        </HeaderSeeAll>
      </Header>
      <CardWrapper>{episodes.map(renderEpisode)}</CardWrapper>
    </Wrapper>
  );
}

export default EpisodeCards;
