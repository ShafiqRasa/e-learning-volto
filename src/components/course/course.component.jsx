import propsTypes from 'prop-types';
import {
  Wrapper,
  SideInfo,
  BottomInfo,
  Button,
  RatingContainer,
} from './course.styles';
import { RednerDemo } from '../index';

const Course = ({ id, title, duration, progress, rating, instructor, len }) => {
  return (
    // considered border-none css class, to not render border for the last item!!!
    <Wrapper className={`${id === len ? 'border-none' : ''}`}>
      <div>
        <h4>{title}</h4>
        <BottomInfo>
          <Button>bestseller</Button>
          <RatingContainer>
            <p>{rating}</p>
            <RednerDemo value={rating} type="star" />
          </RatingContainer>
          <p>
            Instructor: <span className="instractor">{instructor}</span>
          </p>
        </BottomInfo>
      </div>
      <div>
        <SideInfo>
          <p>duration:</p>
          <p>{duration} week</p>
        </SideInfo>
        <SideInfo>
          <p>progress:</p>
          <RednerDemo value={progress} type="circle" />
        </SideInfo>
      </div>
    </Wrapper>
  );
};
Course.propsTypes = {
  id: propsTypes.number.isRequired,
  title: propsTypes.string.isRequired,
  duration: propsTypes.string.isRequired,
  progress: propsTypes.number.isRequired,
  rating: propsTypes.number.isRequired,
  instructor: propsTypes.string.isRequired,
  len: propsTypes.number.isRequired,
};
export default Course;
