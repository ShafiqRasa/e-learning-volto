// built-in imports
import propsTypes from 'prop-types';
// internal imports
import { Wrapper } from './contact-card.styles';

const ContactCard = ({
  role = 'role',
  name = 'name',
  email = 'test@email.com',
}) => {
  return (
    <Wrapper>
      <p>{role}</p>
      <p>{name}</p>
      <p>{email}</p>
    </Wrapper>
  );
};

ContactCard.propsTypes = {
  role: propsTypes.string.isRequired,
  name: propsTypes.string.isRequired,
  email: propsTypes.string.isRequired,
};
export default ContactCard;
