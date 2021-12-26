import React from 'react';

// COMPONENTS
import StarRatings from 'react-star-ratings';

// MODELS
import {
  Wrapper,
  Title,
  SubTitleWrapper,
  SubTitle,
  GenresWrapper,
  Genres,
  Summary,
} from './style';

export interface IHeaderProps {
  name: string;
  summary: string;
  rating: number;
  premiered: string;
  ended?: string | null;
  seasons?: string | null;
  genres?: string[] | null;
}

function HeaderInfo({
  name,
  seasons,
  ended,
  premiered,
  genres,
  summary,
  rating,
}: IHeaderProps) {
  function renderDate() {
    if (premiered && ended) {
      return `${premiered.split('-')[0]} - ${ended.split('-')[0]}`;
    }

    return premiered;
  }

  return (
    <Wrapper>
      <Title>{name}</Title>
      <SubTitleWrapper>
        <SubTitle>{renderDate()}</SubTitle>
        {seasons ? <SubTitle>{seasons}</SubTitle> : null}
      </SubTitleWrapper>
      <GenresWrapper>
        {genres &&
          genres.map((genre: string) => <Genres key={genre}>{genre} </Genres>)}
      </GenresWrapper>
      <StarRatings
        rating={rating / 2}
        starRatedColor="rgba(var(--yellow), 1)"
        starEmptyColor="rgba(var(--white), 0.8)"
        starDimension="3rem"
        starSpacing="0.3rem"
        numberOfStars={5}
      />
      <Summary dangerouslySetInnerHTML={{ __html: summary }} />
    </Wrapper>
  );
}

export default HeaderInfo;
