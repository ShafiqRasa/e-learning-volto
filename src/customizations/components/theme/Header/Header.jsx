import { Wrapper, Logo } from './header.styles';
import logo from '../../../../icons/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="e-learning logo" />
    </Wrapper>
  );
};
export default Header;
