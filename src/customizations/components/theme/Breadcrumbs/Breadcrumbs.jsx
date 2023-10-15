// built-in imports
import { Wrapper, Section } from './Breadcrumbs.styles';

const NavBar = () => {
  return (
    <Wrapper>
      <Section>
        <div className="route">
          <p>Home &#8827; E-Learning Courses</p>
        </div>
        <div className="admin">
          <p>Admin</p>
        </div>
      </Section>
    </Wrapper>
  );
};
export default NavBar;
