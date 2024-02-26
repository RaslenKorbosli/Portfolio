import Contact from './ui/Contact';
import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
// import { MdOutlineMail } from 'react-icons/md';
const contactData = [
  {
    contactId: '123',
    contact: 'Email',
    contactInfo: 'raslen.korbosli01@gmail.com',
    contactLogo: <IoLocationOutline />,
  },
  {
    contactId: '125',
    contact: 'Phone',
    contactInfo: '(+216)22027872',
    contactLogo: <MdOutlineEmail />,
  },
  {
    contactId: '127',
    contact: 'Location',
    contactInfo: 'Tunisia/Tunis',
    contactLogo: <FiPhone />,
  },
];
const H2 = styled.h2`
  font-size: 2.4rem;
  margin-top: 2rem;
`;
const Logo = styled.span`
  font-size: 3.5rem;
`;
const P = styled.p`
  text-decoration: underline;
  font-weight: 400;
`;
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4.8rem 2.4rem;
  align-content: center;
  max-width: 120rem;
  margin: 0 auto;
`;
const ContactBox = styled.div`
  justify-self: center;
  text-align: center;
`;
function ContactSection() {
  return (
    <ContactContainer>
      {contactData.map((contact) => (
        <Contact key={contact.contactId}>
          <ContactBox>
            <Logo> {contact.contactLogo}</Logo>
            <H2>{contact.contact}</H2>
            <P>{contact.contactInfo}</P>
          </ContactBox>
        </Contact>
      ))}
    </ContactContainer>
  );
}

export default ContactSection;
