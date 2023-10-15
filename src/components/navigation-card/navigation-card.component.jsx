import propsTypes from 'prop-types';
import { Wrapper } from './navigation-card.styles';

const NavigationCard = ({ icon = 'icon', label = 'label' }) => {
  return (
    <Wrapper>
      <img src={`/assets/icons/${icon}`} alt={icon} />
      <p>{label}</p>
    </Wrapper>
  );
};

NavigationCard.prototype = {
  icon: propsTypes.string.isRequired,
  label: propsTypes.string.isRequired,
};
export default NavigationCard;
