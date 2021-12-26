import styled from 'styled-components';

const Header = styled.div``;

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 5.6rem;

  span {
    font-weight: 300;
    font-size: 1.6rem;
    opacity: 0.8;
    margin-left: 1.2rem;
  }

  @media only screen and (max-width: 850px) {
    font-size: 3.5rem;

    a {
      display: flex;
      flex-direction: column;
    }

    span {
      margin-left: 0;
      margin-bottom: 1.2rem;
    }
  }
`;

const HeaderImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 5vw;
  height: auto;
`;

const HeaderList = styled.span`
  font-weight: 400;
  font-size: 2.5rem;
`;

export { Header, HeaderTitle, HeaderList, HeaderImg };
