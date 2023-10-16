import { render } from '@testing-library/react';
import NavigationCard from './navigation-card.component';

describe('Test: Navigation card element', () => {
  test("match the Navigation Card component with it's previous snapShot, nothing should be changed!", () => {
    const mockProps = { icon: 'icon', label: 'test' };
    const NavigationCardElement = render(<NavigationCard {...mockProps} />);

    expect(NavigationCardElement).toMatchSnapshot();
  });
});
