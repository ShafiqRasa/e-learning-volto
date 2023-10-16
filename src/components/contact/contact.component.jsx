import { SideBarTitle, ContactCard } from '../index';
import { Wrapper } from './contact.styles';
import { contactInfos } from '../../utils';

const Contact = () => {
  return (
    <Wrapper>
      <SideBarTitle title="contact" />
      {contactInfos.map((contactInfo) => (
        <ContactCard key={contactInfo.id} {...contactInfo} />
      ))}
    </Wrapper>
  );
};
export default Contact;
