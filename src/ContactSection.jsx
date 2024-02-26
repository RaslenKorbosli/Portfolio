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
    href: 'mailto:raslen.korbosli01@gmail.com',
    contactLogo: <IoLocationOutline />,
  },
  {
    contactId: '125',
    contact: 'Phone',
    contactInfo: '(+216)22027872',
    href: '',
    contactLogo: <MdOutlineEmail />,
  },
  {
    contactId: '127',
    contact: 'Location',
    href: 'https://www.google.com/maps/place/Tunis/@36.7637674,10.2160688,11.47z/data=!4m6!3m5!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8064948!4d10.1815316!16zL20vMGZ0bjg?entry=ttu',
    contactInfo: 'Tunisia/Tunis',
    contactLogo: <FiPhone />,
  },
];
const H2 = styled.h2`
  font-size: 2.4rem;
  margin-top: 2rem;
  @media (max-width: 770px) {
    font-size: 2rem;
  }
`;
const Logo = styled.span`
  font-size: 3.5rem;
`;
const Link = styled.a`
  text-decoration: underline;
  font-weight: 400;
  &:hover {
    color: var(--color-hover);
  }
`;
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2rem;
  padding: 7.2rem 2.4rem;
  align-content: center;
  max-width: 120rem;
  margin: 0 auto;
  @media (max-width: 770px) {
    grid-template-columns: minmax(200px, 1fr);
    font-size: 1.8rem;
    gap: 3.2rem;
  }
`;

const ContactBox = styled.div`
  justify-self: center;
  text-align: center;
`;
function ContactSection() {
  return (
    <ContactContainer id="contact">
      {contactData.map((contact) => (
        <Contact key={contact.contactId}>
          <ContactBox>
            <Logo> {contact.contactLogo}</Logo>
            <H2>{contact.contact}</H2>
            <Link href={contact.href || null} target="blanc">
              {contact.contactInfo}
            </Link>
          </ContactBox>
        </Contact>
      ))}
    </ContactContainer>
  );
}

export default ContactSection;
