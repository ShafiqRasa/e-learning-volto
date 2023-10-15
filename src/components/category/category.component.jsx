import propTypes from 'prop-types';
import { Wrapper, Container } from './category.styles';
import { Course } from 'components';

const Category = ({ icon = 'icon', courses = [] }) => {
  return (
    <Wrapper>
      <img src={`/assets/icons/${icon}`} alt={icon} />

      <Container>
        {courses.map((course) => (
          <Course key={course.id} len={courses.length} {...course} />
        ))}
      </Container>
    </Wrapper>
  );
};
Category.propTypes = {
  icon: propTypes.string.isRequired,
  courses: propTypes.array.isRequired,
};
export default Category;
