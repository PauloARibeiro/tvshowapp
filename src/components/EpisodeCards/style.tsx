import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 10;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
`;

const HeaderTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 3.4rem;

  @media only screen and (max-width: 850px) {
    font-size: 2.4rem;
  }
`;

const HeaderSeeAll = styled.div`
  font-weight: 300;
  font-size: 1.6rem;

  a {
    color: rgba(rgba(var(--white), 1), 1);
    text-decoration: none;
    transition: color 0.12s ease-in;
  }

  &:hover {
    a {
      color: rgba(var(--white), 0.8);
    }
  }
`;

const CardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30.2rem, 1fr));
  gap: 2rem;
  color: rgba(var(--white), 1);
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 1042px) {
    grid-template-columns: repeat(auto-fit, minmax(22.1rem, 1fr));
  }

  @media only screen and (max-width: 555px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
`;

const Card = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  color: rgba(var(--white), 1);
  cursor: pointer;

  &:hover {
    h4 {
      color: rgba(var(--white), 0.7);
    }

    img {
      transform: scale(1.05);
    }
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

const CardImage = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  color: rgba(var(--white), 1);
  transition: 0.13s ease-in-out transform;
`;

const CardTitle = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 1.2rem;
  transition: color 0.12s ease-in;
`;

const CardRating = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardDate = styled.span`
  margin: 0;
  font-weight: 300;
  font-size: 1.4rem;
  opacity: 0.5;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export {
  Wrapper,
  CardWrapper,
  Header,
  HeaderTitle,
  HeaderSeeAll,
  Card,
  CardTitle,
  CardRating,
  CardDate,
  CardImage,
  CardImageWrapper,
};
