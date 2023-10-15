// built-in imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// internal imports
import { Container } from './MultilingualRedirector.styles';
import { SideBar, ECourses } from 'components';
import data from '../../../../utils/mock/data.json';
import { COURSE_ACTIONS } from 'reducers/course/course';

const MultilingualRedirector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: COURSE_ACTIONS.SET_COURSES, payload: data });
  }, [dispatch]);
  return (
    <Container data-testid="content-section">
      <SideBar />
      <ECourses />
    </Container>
  );
};
export default MultilingualRedirector;
