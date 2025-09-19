import "../../styles/routes/register.scss";
import useTicket from "../../hooks/useTicket";
import React from "react";
import { useRouter } from "next/router";
export default function Register() {
  const router = useRouter();
  const {
    noOfPeople,
    setNoOfPeople,
    ticketPrice,
    setTicketPrice,
    snu,
    setSnu,
    setNameOne,
    setNameTwo,
    setEmailOne,
    setEmailTwo,
    setPhoneOne,
    setPhoneTwo,
  } = useTicket();
  const handleClick = (isSnu) => {
    if (isSnu == "snu") {
      setSnu(true);
    } else {
      setSnu(false);
    }
  };
  const [name1, setName1] = React.useState("");
  const [name2, setName2] = React.useState("");
  const [email1, setEmail1] = React.useState("");
  const [email2, setEmail2] = React.useState("");
  const [phone1, setPhone1] = React.useState("");
  const [phone2, setPhone2] = React.useState("");
  const calculatePrice = () => {
    if (snu && noOfPeople) {
      return "750";
    } else if (snu && !noOfPeople) {
      return "1300";
    } else if (!snu && noOfPeople) {
      return "750";
    } else {
      return "1300";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@snu\.edu\.in$/;
    const emailRegex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:\d{10}|\+\d{1,3}\s?\d{10})$/;
    if (noOfPeople) {
      // if (name1 === '' || email1 === '' || phone1 === '') {
      //     alert('Please fill all the fields');
      //     return;
      // }
    } else {
      // if (name1 === '' || email1 === '' || phone1 === '' || name2 === '' || email2 === '' || phone2 === '') {
      //     alert('Please fill all the fields');
      //     return;
      // }
    }
    if (snu) {
      if (noOfPeople) {
        if (emailRegex.test(email1) && phoneRegex.test(phone1)) {
          setEmailOne(email1);
          setNameOne(name1);
          setPhoneOne(phone1);
          localStorage.setItem("email1", email1);
          localStorage.setItem("name1", name1);
          localStorage.setItem("phone1", phone1);
          localStorage.setItem("email2", "");
          localStorage.setItem("name2", "");
          localStorage.setItem("phone2", "");
          localStorage.setItem("snu", true);
          localStorage.setItem("noOfPeople", 1);
          router.push("/register/payment");
        } else {
          alert("Please enter a valid SNU email ID");
          return;
        }
      } else {
        if (
          emailRegex.test(email1) &&
          emailRegex.test(email2) &&
          phoneRegex.test(phone1) &&
          phoneRegex.test(phone2)
        ) {
          setEmailOne(email1);
          setNameOne(name1);
          setPhoneOne(phone1);
          setEmailTwo(email2);
          setNameTwo(name2);
          setPhoneTwo(phone2);
          localStorage.setItem("email1", email1);
          localStorage.setItem("name1", name1);
          localStorage.setItem("phone1", phone1);
          localStorage.setItem("email2", email2);
          localStorage.setItem("name2", name2);
          localStorage.setItem("phone2", phone2);
          localStorage.setItem("snu", true);
          localStorage.setItem("noOfPeople", 2);
          router.push("/register/payment");
        } else {
          alert("Please enter a valid SNU email ID");
          return;
        }
      }
    } else {
      if (noOfPeople) {
        if (emailRegex2.test(email1)) {
          setEmailOne(email1);
          setNameOne(name1);
          setPhoneOne(phone1);
          localStorage.setItem("email1", email1);
          localStorage.setItem("name1", name1);
          localStorage.setItem("phone1", phone1);
          localStorage.setItem("email2", "");
          localStorage.setItem("name2", "");
          localStorage.setItem("phone2", "");
          localStorage.setItem("snu", false);
          localStorage.setItem("noOfPeople", 1);
          router.push("/register/payment");
        } else {
          alert("Please enter a valid email ID");
          return;
        }
      } else {
        if (emailRegex2.test(email1) && emailRegex2.test(email2)) {
          setEmailOne(email1);
          setNameOne(name1);
          setPhoneOne(phone1);
          setEmailTwo(email2);
          setNameTwo(name2);
          setPhoneTwo(phone2);
          localStorage.setItem("email1", email1);
          localStorage.setItem("name1", name1);
          localStorage.setItem("phone1", phone1);
          localStorage.setItem("email2", email2);
          localStorage.setItem("name2", name2);
          localStorage.setItem("phone2", phone2);
          localStorage.setItem("snu", false);
          localStorage.setItem("noOfPeople", 2);
          router.push("/register/payment");
        } else {
          alert("Please enter a valid email ID");
          return;
        }
      }
    }
  };
  return (
    <>
      <div className="RegisterSection">
        <div className="RegisterSection__details">
          <div className="RegisterSection__details--snu">
            <p>Enter Details</p>
            <div className="RegisterSection__details--snu__options">
              <p
                className={
                  snu
                    ? "RegisterSection__details--snu__options--red"
                    : "RegisterSection__details--snu__options--white"
                }
                onClick={() => handleClick("snu")}
              >
                SNU Student
              </p>
              <p
                className={
                  snu
                    ? "RegisterSection__details--snu__options--white"
                    : "RegisterSection__details--snu__options--red"
                }
                onClick={() => handleClick("nosnu")}
              >
                Non - SNU Student / Faculty
              </p>
            </div>
          </div>
          <div className="RegisterSection__details--people">
            <p>No. Of People</p>
            <div className="RegisterSection__details--people__options">
              <p
                className={
                  noOfPeople
                    ? "RegisterSection__details--snu__options--red"
                    : "RegisterSection__details--snu__options--white"
                }
                onClick={() => setNoOfPeople(true)}
              >
                1
              </p>
              <p
                className={
                  noOfPeople
                    ? "RegisterSection__details--snu__options--white"
                    : "RegisterSection__details--snu__options--red"
                }
                onClick={() => setNoOfPeople(false)}
              >
                2
              </p>
            </div>
          </div>
          {noOfPeople ? (
            <div className="RegisterSection__details--value">
              <p>Details Student 1</p>
              <div className="RegisterSection__details--value__name">
                <p>Full Name</p>
                <input
                  onChange={(e) => setName1(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="RegisterSection__details--value__email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail1(e.target.value)}
                  type="email"
                  placeholder="Email Id"
                  required
                />
                {snu ? (
                  <p className="RegisterSection__details--value__email--warn">
                    Please enter only snu email id
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="RegisterSection__details--value__phone">
                <p>Mobile Number</p>
                <input
                  onChange={(e) => setPhone1(e.target.value)}
                  type="text"
                  placeholder="Mobile Number"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="RegisterSection__details--value">
              <p>Details Student 1</p>
              <div className="RegisterSection__details--value__name">
                <p>Full Name</p>
                <input
                  onChange={(e) => setName1(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="RegisterSection__details--value__email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail1(e.target.value)}
                  type="email"
                  placeholder="Email Id"
                  required
                />
                {snu ? (
                  <p className="RegisterSection__details--value__email--warn">
                    Please enter only snu email id
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="RegisterSection__details--value__phone">
                <p>Mobile Number</p>
                <input
                  onChange={(e) => setPhone1(e.target.value)}
                  type="text"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <p>Details Student 2</p>
              <div className="RegisterSection__details--value__name">
                <p>Full Name</p>
                <input
                  onChange={(e) => setName2(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="RegisterSection__details--value__email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail2(e.target.value)}
                  type="email"
                  placeholder="Email Id"
                  required
                />
                {snu ? (
                  <p className="RegisterSection__details--value__email--warn">
                    Please enter only snu email id
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="RegisterSection__details--value__phone">
                <p>Mobile Number</p>
                <input
                  onChange={(e) => setPhone2(e.target.value)}
                  type="text"
                  placeholder="Mobile Number"
                  required
                />
              </div>
            </div>
          )}
          <div
            onClick={(e) => handleSubmit(e)}
            style={{ color: "black" }}
            className="RegisterSection__details--submit"
          >
            Submit
          </div>
        </div>
        <div className="RegisterSection__amount">
          <img
            className="RegisterSection__amount--image"
            src="/Images/Assets/payment.png"
          />
          <div className="RegisterSection__amount--priceDetails">
            <p>Price Details</p>
            <div className="RegisterSection__amount--priceDetails__snu">
              <p>Type Of Person</p>
              <p>{snu ? "SNU" : "NON-SNU"}</p>
            </div>
            <div className="RegisterSection__amount--priceDetails__people">
              <p>No. Of People</p>
              <p>{noOfPeople ? "1" : "2"}</p>
            </div>
            <div className="RegisterSection__amount--priceDetails__ticket">
              <p>Ticket Price (per person)</p>
              <p>{noOfPeople ? "750" : "650"}</p>
            </div>
            <hr />
            <div className="RegisterSection__amount--priceDetails__total">
              <p>Total Amount</p>
              <p>{calculatePrice()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
