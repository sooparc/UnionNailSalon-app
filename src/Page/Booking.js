import React, { useState } from "react";
import classes from "../Page/Booking.module.css";
import { Modal, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [value, onChange] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [employee, setEmployee] = useState("");
  const [submitted, setSubmitted] = useState();
  const handleClose = () => setSubmitted(false);
  const handleShow = () => setSubmitted(true);

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;

  const bookHandler = (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      employee.trim() === ""
    ) {
      alert("Please fill out the form");
    } else {
      fetch(
        "https://unionnailsalon-app-default-rtdb.firebaseio.com/reservations.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phoneNumber,
            date: date,
            time: time,
            employee: employee,
          }),
        }
      ).then((response) => {
        setSubmitted(true);
      });
    }
  };

  return (
    <>
      <div className={classes.body}>
        <div className={classes.containerWrap}>
          <form>
            <div className={classes.container}>
              <p className={classes.title}>SCHEDULE YOUR APPOINTMENT</p>

              <label htmlFor="name" className={classes.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className={classes.input}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="email" className={classes.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={classes.input}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="number" className={classes.label}>
                Phone number
              </label>
              <input
                type="text"
                id="number"
                className={classes.input}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div className={classes.container}>
              <label htmlFor="date" className={classes.label}>
                Date
              </label>
              <input
                type="date"
                id="date"
                className={classes.input}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />

              <label htmlFor="time" className={classes.label}>
                Time
              </label>
              <select
                name="time"
                id="time"
                className={classes.input}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Please select
                </option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>

              <label htmlFor="manicurist" className={classes.label}>
                Employee
              </label>
              <select
                name="manicurist"
                id="manicurist"
                className={classes.input}
                onChange={(e) => {
                  setEmployee(e.target.value);
                }}
              >
                <option value="" disabled="disabled" selected>
                  Please select
                </option>
                <option value="First Available">First Available</option>
                <option value="Jessica">Jessica</option>
                <option value="Michelle">Michelle</option>
                <option value="Sophia">Sophia</option>
                <option value="Emily">Emily</option>
              </select>
            </div>

            <button
              type="submit"
              className={classes.continueBtn}
              onClick={bookHandler}
            >
              Book
            </button>
          </form>
        </div>

        <Modal
          show={submitted}
          size="lg"
          onHide={handleClose}
          className={classes.modal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Booking Confirmed </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p className={classes.modalTitle}>Booking Details</p>

            <div className={classes.modalContainer}>
              <p>
                Booking Date: {date}, {time}
              </p>
              <p>Name: {name}</p>
              <p>
                {emailIcon}
                <span> </span> {email}
              </p>
              <p>
                {phoneIcon}
                <span> </span> {phoneNumber}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Booking;
