import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faPeopleGroup,
  faHandHoldingHeart,
  faCalendarCheck,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import classes from "../Layout/MainNavbar.module.css";

const MainNavbar = () => {
  const home = <FontAwesomeIcon icon={faHouseChimney} />;
  const team = <FontAwesomeIcon icon={faPeopleGroup} />;
  const services = <FontAwesomeIcon icon={faHandHoldingHeart} />;
  const booking = <FontAwesomeIcon icon={faCalendarCheck} />;
  const contact = <FontAwesomeIcon icon={faAddressCard} />;

  return (
    <Navbar
      bg="transparent"
      expand={false}
      fixed="top"
      className={classes.navbar}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className={classes.title}
            >
              Union Nail Salon
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className={classes.navbarLink}>
                <span className="mx-2"> {home} </span> Home
              </Nav.Link>

              <Nav.Link href="/#secondPage" className={classes.navbarLink}>
                <span className="mx-2">{team}</span>
                Our Team
              </Nav.Link>
              <Nav.Link href="/#thirdPage" className={classes.navbarLink}>
                <span className="mx-2">{services}</span>
                Services
              </Nav.Link>
              <Nav.Link href="/booking" className={classes.navbarLink}>
                <span className="mx-2">{booking}</span> Booking
              </Nav.Link>

              <Nav.Link href="/#fourthPage" className={classes.navbarLink}>
                <span className="mx-2">{contact}</span>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
