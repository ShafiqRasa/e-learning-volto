// internal imports
import { Wrapper, StickyContainer } from './side-bar.component.styles';
import { Navigation, Contact } from 'components';

const SideBar = () => {
  return (
    <Wrapper>
      <StickyContainer>
        <Navigation />
        <Contact />
      </StickyContainer>
    </Wrapper>
  );
};
export default SideBar;
