import { Container, Navbar } from "react-bootstrap";
import navLogo from "../assets/images/logo.svg";

const MenuBar = () => {
  return (
    <Navbar expand='lg' bg='light' className='sticky-top shadow-sm'>
      <Container>
        <Navbar.Brand href='#home' className='d-flex align-items-center'>
          <img
            src={navLogo}
            width='40'
            height='40'
            className='d-inline-block align-top me-2'
            alt='Logo'
          />
          <span className='fw-bold fs-5'>My Media Player</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
