import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  color: rgba(var(--white), 1);

  @media only screen and (max-width: 850px) {
    padding: 2rem;
  }
`;

export default Wrapper;
