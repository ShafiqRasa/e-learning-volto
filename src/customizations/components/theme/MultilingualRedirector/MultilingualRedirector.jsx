import { Container } from './MultilingualRedirector.styles';
import { SideBar, ECourses } from 'components';

const MultilingualRedirector = () => {
  return (
    <Container data-testid="content-section">
      <SideBar />
      <ECourses />
    </Container>
  );
};
export default MultilingualRedirector;
