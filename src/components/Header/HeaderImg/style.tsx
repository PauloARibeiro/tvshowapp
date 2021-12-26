import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

const Img = styled.img`
  z-index: 10;
  max-width: 400px;
  height: auto;

  @media only screen and (max-width: 850px) {
    max-width: unset;
    width: 100%;
  }
`;

const BgImg = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 110%;
  filter: blur(6px);

  @media only screen and (max-width: 850px) {
    background-image: none;
  }
`;

export { Wrapper, Img, BgImg };
