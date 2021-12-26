import React from 'react';

// COMPONENTS
import HeaderInfo from './HeaderInfo';
import HeaderImg from './HeaderImg';
import Wrapper from './style';

export interface IHeaderProps {
  name: string;
  premiered: string;
  summary: string;
  rating: number;
  image: {
    medium: string;
    original: string;
  };
  genres?: string[] | null;
  ended?: string;
  seasons?: string;
}

function Header({
  name,
  genres,
  premiered,
  ended,
  summary,
  rating,
  seasons,
  image,
}: IHeaderProps) {
  return (
    <Wrapper>
      <HeaderInfo
        name={name}
        genres={genres}
        premiered={premiered}
        ended={ended}
        summary={summary}
        rating={rating}
        seasons={seasons}
      />
      <HeaderImg img={image} />
    </Wrapper>
  );
}

export default Header;
