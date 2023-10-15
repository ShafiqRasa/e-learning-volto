import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-auto-rows: auto;
  gap: 1rem;
  padding: 0.5rem 0;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    .side-bar {
      display: none;
    }
  }
`;
