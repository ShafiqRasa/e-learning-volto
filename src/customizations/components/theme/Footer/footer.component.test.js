import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Test: Footer Element', () => {
  test("match the Footer component with it's previous snapShot, nothing should be changed!", () => {
    const FooterElement = render(<Footer />);

    expect(FooterElement).toMatchSnapshot();
  });
});
