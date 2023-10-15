// built-in imports
import propsTypes from 'prop-types';
// built-in imports
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Wrapper } from './render-demo.styles';

const getIcon = (type) =>
  ({
    circle: BsFillCheckCircleFill,
    star: AiFillStar,
  })[type];

const RednerDemo = ({ value = 0, type = 'star' }) => {
  const intValue = Math.abs(Math.ceil(value)) - 1;
  const Icon = getIcon(type);

  return (
    <Wrapper>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          data-testid={`iconId-${index}`}
          key={index}
          className={`${
            intValue >= 0 && index <= intValue ? `active-${type}` : 'icon'
          }`}
        />
      ))}
    </Wrapper>
  );
};

RednerDemo.propsTypes = {
  value: propsTypes.number.isRequired,
  type: propsTypes.string.isRequired,
};
export default RednerDemo;
