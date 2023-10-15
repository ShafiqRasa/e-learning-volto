import { Wrapper } from './header.styles';
import Logo from '../../../../icons/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      {/* <Logo src={Logo} alt="e-learning logo" /> */}
    </Wrapper>
  );
};
export default Header;
