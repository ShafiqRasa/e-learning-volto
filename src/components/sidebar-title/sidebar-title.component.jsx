// built-in imports
import propsTypes from 'prop-types';
// internal imports
import { Wrapper } from './sidebar-title.styles';

const SideBarTitle = ({ title = 'title' }) => {
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};

SideBarTitle.propsTypes = {
  title: propsTypes.string.isRequired,
};
export default SideBarTitle;
