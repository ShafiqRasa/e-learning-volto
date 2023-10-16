import { render } from '@testing-library/react';
import Contact from './contact.component';

describe('Test: Contact element', () => {
  test("match the Contact component with it's previous snapShot, nothing should be changed!", () => {
    const ContactElement = render(<Contact />);

    expect(ContactElement).toMatchSnapshot();
  });
});
