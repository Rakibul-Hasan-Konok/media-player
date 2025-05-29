import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='bg-light text-center py-3 mt-auto border-top'>
      <Container>
        <small className='text-muted'>
          &copy; {new Date().getFullYear()} My Media Player. All rights reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
