import { render } from '@testing-library/react';
import Category from './category.component';

describe('Test: Category Element', () => {
  test("match the Category component with it's previous snapShot, nothing should be changed!", () => {
    const mockProps = { icon: 'icon', courses: [] };
    const CategoryElement = render(<Category {...mockProps} />);

    expect(CategoryElement).toMatchSnapshot();
  });
});
