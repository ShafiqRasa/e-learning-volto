import { render } from '@testing-library/react';
import ContactCard from './contact-card.component';

describe('Test: Contact card', () => {
  test("match the Contact Card component with it's previous snapShot, nothing should be changed!", () => {
    const mockProps = {
      role: 'role',
      name: 'name',
      email: 'test@email.com',
    };
    const ContactElement = render(<ContactCard {...mockProps} />);

    expect(ContactElement).toMatchSnapshot();
  });
});
