import React, { useState, useRef } from "react";
import classes from "../Page/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faEnvelope,
  faPhone,
  faMobileScreenButton,
  faPersonWalking,
  faArrowTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Card, Popover, Button, Overlay } from "react-bootstrap";
import workersData from "../Data/workersData";

const Home = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowDownLong} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const mobileIcon = <FontAwesomeIcon icon={faMobileScreenButton} />;
  const walkinIcon = <FontAwesomeIcon icon={faPersonWalking} />;
  const arrowUpIcon = <FontAwesomeIcon icon={faArrowTurnUp} />;

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const arrowClick = () => {
    let arrow = document.getElementById("secondPage");
    arrow.scrollIntoView();
  };

  const arrowUpClick = () => {
    let arrow2 = document.getElementById("firstPage");
    arrow2.scrollIntoView();
  };

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className={classes.body}>
      {/* Main page */}
      <div className={classes.container} id="firstPage">
        <div className={classes.title}>Union Nail Salon</div>
        <div className={classes.arrowBtn} onClick={arrowClick}>
          {arrowIcon}
        </div>
      </div>

      {/* Staff page */}
      <div className={classes.secondPage} id="secondPage">
        <div className={classes.secondContainer}>
          <div className={classes.secondTitle}>Staff</div>
          <div className={classes.secondContent}>
            Our team brings a wealth of experience from some of the world's most
            well-known nail salons
          </div>
          <div className="row">
            {workersData.map((data, i) => (
              <div className="col-md-3" key={i}>
                <Card className={classes.card}>
                  <Card.Img
                    variant="top"
                    src={data.image_url}
                    className={classes.personImg}
                  />
                  <Card.Body>
                    <Card.Title className={classes.cardTitle}>
                      {data.name}
                    </Card.Title>
                    <Card.Text className={classes.cardContent}>
                      {data.introduction}
                    </Card.Text>
                    <div className={classes.icon} onClick={handleClick}>
                      {phoneIcon}
                    </div>
                    <div ref={ref} style={{ display: "inline-block" }}>
                      <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20}
                      >
                        <Popover id="popover-contained">
                          <Popover.Body>123-456-7890</Popover.Body>
                        </Popover>
                      </Overlay>
                    </div>
                    <a href="mailto:soozin@gmail.com" className={classes.icon}>
                      {emailIcon}
                    </a>
                    <div className={classes.icon}>{instagramIcon}</div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service page */}
      <div className={classes.thirdPage} id="thirdPage">
        <div className={classes.thirdContainer}>
          <div className={classes.thirdTitle}>Services</div>
          <div className={classes.thirdLeftContent}>
            <div className={classes.thirdLeftTitle}>PRICE LIST</div>
            <div className={classes.priceListTitle}>Arcylic Powder</div>
            <ul>
              <li className={classes.nailList}>
                Regular Tip with Gel ..... $55
              </li>
              <li className={classes.nailList}>
                Arcylic Powder Color ..... $65
              </li>
              <li className={classes.nailList}>
                Pink & White with Gel ..... $65
              </li>
              <li className={classes.nailList}>
                Pink & Glitter with Gel ..... $65
              </li>
              <li className={classes.nailList}>Ombre Nails ..... $65</li>
              <li className={classes.nailList}>
                Builder Gel with Gel Color ..... $65
              </li>
            </ul>
            <div className={classes.priceListTitle}>Additional Services</div>
            <ul>
              <li className={classes.nailList}>
                Cuticle Care & Shaping ..... $15+
              </li>
              <li className={classes.nailList}>French Tip ..... $5+</li>
              <li className={classes.nailList}>Gel Polish ..... $30</li>
              <li className={classes.nailList}>Nail Design ..... Varies</li>
              <li className={classes.nailList}>Nail Repair ..... Varies</li>
              <li className={classes.nailList}>Polish Change ..... $15+</li>
              <li className={classes.nailList}>Nail Removal ..... $15+</li>
            </ul>
          </div>

          <div className={classes.thirdRightContent}>
            <div className={classes.nailImages}>
              <div className={classes.thirdRightImage}>
                <img
                  src="https://images.unsplash.com/photo-1522336552288-a9cc74a8dfd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM1fHxuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />

                <img
                  src="https://images.unsplash.com/photo-1612887390768-fb02affea7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5haWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
              </div>
              <div className={classes.thirdRightImage}>
                <img
                  src="https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5haWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />

                <img
                  src="https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
              </div>
              <div className={classes.thirdRightImage}>
                <img
                  src="https://images.unsplash.com/photo-1587729927031-830c32f520da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG5haWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1591926079847-8181980b0f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG5haWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className={classes.nailImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fourthPage} id="fourthPage">
        <div className={classes.fourthContainer}>
          <Card className={classes.contactCard}>
            <Card.Body>
              <Card.Title className={classes.contactTitle}>
                CONTACT US
              </Card.Title>
              <Card.Text>
                <div className="row">
                  <div className="col-md-4">
                    <div className={classes.contactInfo}>
                      <span className={classes.contactIcon}>{mobileIcon}</span>
                      <div className={classes.contactContent}>MOBILE</div>
                      <div className={classes.contactInformation}>
                        123-456-7890
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={classes.contactInfo}>
                      <span className={classes.contactIcon}>{emailIcon}</span>
                      <div className={classes.contactContent}>EMAIL</div>
                      <div className={classes.contactInformation}>
                        unionsalon@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={classes.contactInfo}>
                      <span className={classes.contactIcon}>{walkinIcon}</span>
                      <div className={classes.contactContent}>WALK IN</div>
                      <div className={classes.contactInformation}>
                        We welcome walk ins
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <span className={classes.arrowUpIcon} onClick={arrowUpClick}>
          {arrowUpIcon}
        </span>
      </div>
    </div>
  );
};

export default Home;
