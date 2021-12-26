import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export default Wrapper;
