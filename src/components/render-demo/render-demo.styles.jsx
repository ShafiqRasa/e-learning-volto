import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .icon {
    color: lightgray;
    width: 15px;
    height: 15px;
  }
  .active-circle {
    color: #83830d;
    width: 15px;
    height: 15px;
  }
  .active-star {
    color: red;
    width: 15px;
    height: 15px;
  }
`;
