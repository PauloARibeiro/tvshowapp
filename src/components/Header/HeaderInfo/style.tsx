import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: rgba(var(--white), 1);
  z-index: 10;

  .star-ratings {
    margin: 1.4rem 0;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 5.6rem;

  @media only screen and (max-width: 850px) {
    font-size: 3.5rem;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const SubTitle = styled.h3`
  font-weight: 500;
  margin: 0;
  font-size: 1.8rem;

  &:nth-child(1) {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      right: -1rem;
      height: 50%;
      width: 0.2rem;
      top: 50%;
      transform: translate(0%, -50%);
      background-color: rgba(var(--white), 1);
    }
  }
`;

const GenresWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Genres = styled.span`
  font-weight: 300;
  font-size: 1.6rem;
  opacity: 0.5;
`;

const Summary = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
`;

export {
  Wrapper,
  Title,
  SubTitleWrapper,
  SubTitle,
  GenresWrapper,
  Genres,
  Summary,
};
