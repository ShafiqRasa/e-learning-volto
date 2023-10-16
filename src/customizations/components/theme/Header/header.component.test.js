import { render } from '@testing-library/react';
import Header from './Header';

describe('Test: Header element ', () => {
  test("match the Header component with it's previous snapShot, nothing should be changed!", () => {
    const HeaderElement = render(<Header />);

    expect(HeaderElement).toMatchSnapshot();
  });
});
