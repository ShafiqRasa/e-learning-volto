// internal imports
import { NavigationCard, SideBarTitle } from '../index';
import { Wrapper } from './navigation.styles';
import { navigations } from '../../utils';

const Navigation = () => {
  return (
    <Wrapper>
      <SideBarTitle title="Navigation" />
      {navigations.map((nav) => (
        <NavigationCard key={nav.id} {...nav} />
      ))}
    </Wrapper>
  );
};
export default Navigation;
