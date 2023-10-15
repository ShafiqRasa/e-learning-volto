import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 0.5rem;
  align-items: start;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid lightgray;

  p {
    color: #6e6e73;
  }
  &:hover {
    cursor: pointer;
    h4 {
      color: #1d1d1f;
    }
  }
  &:hover {
    .instractor {
      text-decoration: underline;
      color: #0363b1;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
export const BottomInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0;
`;

export const Button = styled.button`
  background-color: #eceb98;
  padding: 5px 10px;
  text-transform: capitalize;
  border: none;
  &:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
