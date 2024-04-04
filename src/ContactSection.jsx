import Contact from './ui/Contact';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
// import { MdOutlineMail } from 'react-icons/md';
const contactData = [
  {
    contactId: '123',
    contact: 'Email',
    contactInfo: 'raslen.korbosli01@gmail.com',
    href: 'mailto:raslen.korbosli01@gmail.com',
    contactLogo: <MdOutlineEmail />,
  },
  {
    contactId: '125',
    contact: 'Phone',
    contactInfo: '(+216)22027872',
    href: 'tel:22027872',
    contactLogo: <IoLocationOutline />,
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
    margin-top: 0;
  }
`;
const Logo = styled.span`
  font-size: 3.8rem;
  @media (max-width: 770px) {
    font-size: 2.8rem;
  }
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
  max-width: 100vw;
  grid-template-columns: repeat(3, minmax(200px, 400px));
  justify-content: center;
  gap: 20rem;
  padding: 8.2rem 2.4rem;

  align-content: center;
  margin: 0 auto;
  background-color: var(--color-main-background);
  @media (max-width: 770px) {
    grid-template-columns: minmax(200px, 1fr);
    font-size: 1.8rem;
    gap: 2rem;
  }
`;

const ContactBox = styled.div`
  justify-self: center;
  text-align: center;
`;
function ContactSection() {
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
  const myRef = useRef();
  const [isElementVisible, setIsElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        entry.isIntersecting && setIsElementVisible(true);
      },
      {
        threshold: 0.4,
      }
    );
    observer.observe(myRef.current);
  }, [isElementVisible]);
  return (
    <section className={darkModeToggle ? 'dark' : ''}>
      <ContactContainer
        id="contact"
        ref={myRef}
        style={{
          gap: isElementVisible && '2rem',
          opacity: isElementVisible && '1',
          transition: '0.6s ease',
        }}
        className="dark:bg-neutral-900 dark:text-neutral-200 transition-all"
      >
        {contactData.map((contact) => (
          <Contact key={contact.contactId}>
            <ContactBox>
              <Logo> {contact.contactLogo}</Logo>
              <H2>{contact.contact}</H2>
              <Link
                href={contact.href || null}
                target="blanc"
                className="dark:text-neutral-300"
              >
                {contact.contactInfo}
              </Link>
            </ContactBox>
          </Contact>
        ))}
      </ContactContainer>
    </section>
  );
}

export default ContactSection;
