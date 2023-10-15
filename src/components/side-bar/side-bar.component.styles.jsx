import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 0;
  @media screen and (max-width: 900px) {
    position: relative;
  }
`;
