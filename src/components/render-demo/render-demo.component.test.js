import { render } from '@testing-library/react';
import RednerDemo from './render-demo.component';

describe('Test: Render Demo Element', () => {
  test("match the RednerDemo component with it's previous snapShot, nothing should be changed!", () => {
    const mockProps = { value: 3, type: 'star' };
    const RenderDemoElement = render(<RednerDemo {...mockProps} />);

    expect(RenderDemoElement).toMatchSnapshot();
  });
});
