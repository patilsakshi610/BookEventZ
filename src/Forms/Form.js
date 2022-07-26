import React, { useState } from "react";
import review1 from "../Assets/review1.svg";
import review2 from "../Assets/review2.svg";
import review3 from "../Assets/review3.svg";
import review4 from "../Assets/review4.svg";
import review5 from "../Assets/review5.svg";
import iniReview from "../Assets/iniReview.svg";
import "./Form.css";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    review: "",
    phone: "",
  });
  const [show, setShow] = useState(false);
  const [isStar1, setIsStar1] = useState(false);
  const [isStar2, setIsStar2] = useState(false);
  const [isStar3, setIsStar3] = useState(false);
  const [isStar4, setIsStar4] = useState(false);
  const [isStar5, setIsStar5] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const disabledBtn =
    !inputData.name ||
    !inputData.phone ||
    !inputData.email ||
    !inputData.review;

  return (
    <div className="form_wrapper">
      <NavLink style={{ color: "white" }} to="/tabs/shipping">
        Go to Tabs
      </NavLink>
      <form
        className="formInner"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div className="form_header">Please mark your ratings</div>
        <span>
          <img
            className="img1"
            onMouseOver={
              () => {
                if (!isStar1) {
                  setIsStar1((prev) => !prev);
                } else {
                  setIsStar1(false);
                  setIsStar2(false);
                  setIsStar3(false);
                  setIsStar4(false);
                  setIsStar5(false);
                }
              }
              // !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
            }
            src={isStar1 ? review1 : iniReview}
          />
          <img
            className="img2"
            onMouseOver={
              () => {
                if (!isStar2) {
                  setIsStar2((prev) => !prev);
                  setIsStar1(true);
                } else {
                  setIsStar2(false);
                  setIsStar3(false);
                  setIsStar4(false);
                  setIsStar5(false);
                }
              }
              // !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
            }
            src={isStar2 ? review2 : iniReview}
          />
          <img
            className="img3"
            onMouseOver={
              () => {
                if (!isStar3) {
                  setIsStar3((prev) => !prev);
                  setIsStar1(true);
                  setIsStar2(true);
                } else {
                  setIsStar3(false);
                  setIsStar4(false);
                  setIsStar5(false);
                }
              }
              // !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
            }
            src={isStar3 ? review3 : iniReview}
          />
          <img
            className="img4"
            onMouseOver={
              () => {
                if (!isStar4) {
                  setIsStar4((prev) => !prev);
                  setIsStar1(true);
                  setIsStar2(true);
                  setIsStar3(true);
                } else {
                  setIsStar4(false);
                  setIsStar5(false);
                }
              }
              // !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
            }
            src={isStar4 ? review4 : iniReview}
          />
          <img
            className="img5"
            onMouseOver={
              () => {
                if (!isStar5) {
                  setIsStar5((prev) => !prev);
                  setIsStar1(true);
                  setIsStar2(true);
                  setIsStar3(true);
                  setIsStar4(true);
                } else {
                  setIsStar5(false);
                }
              }
              // !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
            }
            src={isStar5 ? review5 : iniReview}
          />
        </span>
        <textarea
          placeholder="Write your review"
          type={"text"}
          onChange={(e) =>
            setInputData({ ...inputData, review: e.target.value })
          }
        />
        <input
          placeholder="Name"
          type={"text"}
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          value={inputData.name}
        />
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
          value={inputData.email}
        />
        <input
          placeholder="Contact"
          type={"number"}
          onChange={(e) => {
            if (e.target.value.length <= 10)
              setInputData({ ...inputData, phone: e.target.value });
          }}
          value={inputData.phone}
        />
        <button className="btn" disabled={disabledBtn} type="submit">
          Submit
        </button>
      </form>
      <div>
        {show && (
          <div onClick={() => setShow(false)}>
            <div className="whiteContent">
              <p> Name: {inputData.name}</p>
              <p>Email: {inputData.email}</p>
              <p>Phone Number: {inputData.phone}</p>
            </div>
            <div className="blackOverlay"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
