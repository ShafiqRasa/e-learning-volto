// built-in imports
import styled from 'styled-components';
// internal imports
const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: #6e6e73;
`;

const ECourses = () => {
  return (
    <div>
      <Title>e-Learning Courses</Title>
    </div>
  );
};
export default ECourses;
