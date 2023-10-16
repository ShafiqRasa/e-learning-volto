import { render } from '@testing-library/react';
import SideBarTitle from './sidebar-title.component';

describe("Test: SideBar's Title", () => {
  test("match the SideBarTitle component with it's previous snapShot, nothing should be changed!", () => {
    const SideBarTitleElement = render(<SideBarTitle title="title" />);

    expect(SideBarTitleElement).toMatchSnapshot();
  });
});
