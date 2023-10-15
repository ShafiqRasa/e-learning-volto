import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  transition: 0.3s ease-in-out all;

  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;
