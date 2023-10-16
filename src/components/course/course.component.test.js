import { render, screen } from '@testing-library/react';
import Course from './course.component';

describe('Test: Course Card Element', () => {
  test("match the Course component with it's previous snapShot, nothing should be changed!", () => {
    const mockProps = {
      id: 1,
      title: 'title',
      duration: 'duration',
      progress: 0,
      rating: 0,
      instructor: 'test',
      len: 0,
    };
    const CourseEleement = render(<Course {...mockProps} />);

    expect(CourseEleement).toMatchSnapshot();
  });
});
