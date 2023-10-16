// built-in imports
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Category } from '../index';

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: #6e6e73;
`;

const ECourses = () => {
  const { courses } = useSelector((state) => state.courses);

  return (
    <div>
      <Title>e-Learning Courses</Title>
      {courses ? (
        courses?.result?.map((category) => (
          <Category key={category.id} {...category} />
        ))
      ) : (
        <h1>No Course Exist!</h1>
      )}
    </div>
  );
};
export default ECourses;
