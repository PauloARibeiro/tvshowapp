import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(var(--white), 0.9);
  transition: 0.13s ease-in-out transform, 0.2s ease-in-out opacity;
  opacity: 0;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 850px) {
    &:hover {
      transform: unset;
    }
  }
`;

export default Wrapper;
