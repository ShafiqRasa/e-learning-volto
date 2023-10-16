import { render } from '@testing-library/react';
import NavBar from './Breadcrumbs';

describe('Test: Nav bar element', () => {
  test("match the NavBar component with it's previous snapShot, nothing should be changed!", () => {
    const NavBarElement = render(<NavBar />);

    expect(NavBarElement).toMatchSnapshot();
  });
});
