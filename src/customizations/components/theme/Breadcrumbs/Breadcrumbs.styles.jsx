import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 0 2rem 0;
  @media screen and (max-width: 900px) {
    margin-top: 5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: white;
  border: 1px solid #676767;
  border-radius: 0.25rem;
  overflow: hidden;
  .route {
    padding: 10px;
    p {
      color: #6e6e73;
    }
  }
  .admin {
    min-width: 150px;
    background-color: #676767;
    padding: 10px;
    text-align: left;
    p {
      color: #fff;
    }
    @media screen and (max-width: 700px) {
      min-width: auto;
    }
  }
`;
