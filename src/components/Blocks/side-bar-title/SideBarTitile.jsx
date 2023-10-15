// built-in imports
import propsTypes from 'prop-types';
// internal imports
import { Wrapper } from './SideBarTitle.styles';

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
