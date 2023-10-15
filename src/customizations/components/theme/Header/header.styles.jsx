import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  padding: 0.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 900px) {
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
`;
export const Logo = styled.img`
  height: 50px;
  margin: 0 1rem;
`;
