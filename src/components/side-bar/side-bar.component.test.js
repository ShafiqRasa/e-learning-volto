import { render } from '@testing-library/react';
import SideBar from './side-bar.component';

describe('Test: SideBar Element', () => {
  test("match the SideBar component with it's previous snapShot, nothing should be changed!", () => {
    const SideBarElement = render(<SideBar />);

    expect(SideBarElement).toMatchSnapshot();
  });
});
