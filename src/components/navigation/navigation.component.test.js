import { render } from '@testing-library/react';
import Navigation from './navigation.component';

describe('Test: Navigation element', () => {
  test("match the Navigation component with it's previous snapShot, nothing should be changed!", () => {
    const NavigationElement = render(<Navigation />);

    expect(NavigationElement).toMatchSnapshot();
  });
});
