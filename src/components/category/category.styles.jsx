import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  border: 1px solid #d8d8d8;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  .border-none {
    border: 0;
    padding-bottom: 0;
  }
  img {
    width: 50px;
    height: 50px;
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    img {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
