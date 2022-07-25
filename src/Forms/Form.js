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
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [reviews, setReview] = useState();
  const [isStar1, setIsStar1] = useState(false);
  const [isStar2, setIsStar2] = useState(false);
  const [isStar3, setIsStar3] = useState(false);
  const [isStar4, setIsStar4] = useState(false);
  const [isStar5, setIsStar5] = useState(false);

  const onChangeHandler = (type, data) => {
    type === "name" && setName(data);
    type === "email" && setEmail(data);
    type === "number" && setNumber(data);
    type === "review" && setReview(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, name, number, reviews);
    setName("");
    setEmail("");
    setNumber("");
    setReview("");
  };
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
            onMouseOver={() =>
              setIsStar1(
                !isStar2 && !isStar3 && !isStar4 && !isStar5 && !isStar1
              )
            }
            src={isStar1 ? review1 : iniReview}
          />
          <img
            className="img2"
            onMouseOver={() => setIsStar2(isStar1 && !isStar2)}
            src={isStar2 ? review2 : iniReview}
          />
          <img
            className="img3"
            onMouseOver={() => setIsStar3(isStar1 && isStar2 && !isStar3)}
            src={isStar3 ? review3 : iniReview}
          />
          <img
            className="img4"
            onMouseOver={() =>
              setIsStar4(isStar1 && isStar2 && isStar3 && !isStar4)
            }
            src={isStar4 ? review4 : iniReview}
          />
          <img
            className="img5"
            onMouseOver={() =>
              setIsStar5(isStar1 && isStar2 && isStar3 && isStar4 && !isStar5)
            }
            src={isStar5 ? review5 : iniReview}
          />
        </span>
        <textarea
          placeholder="Write your review"
          type={"text"}
          onChange={(e) => {
            onChangeHandler("review", e.target.value);
          }}
          value={reviews}
        />
        <input
          placeholder="Name"
          type={"text"}
          onChange={(e) => {
            onChangeHandler("name", e.target.value);
          }}
          value={name}
        />
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) => {
            onChangeHandler("email", e.target.value);
          }}
          value={email}
        />
        <input
          placeholder="Number"
          type={"number"}
          onChange={(e) => {
            onChangeHandler("number", e.target.value);
          }}
          value={number}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;