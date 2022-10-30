import React from "react";
import "./App.css";

const Modal = (props) => {
  const {
    firstname,
    lastname,
    nickname,
    email,
    age,
    tel,
    dateOfBirth,
    favoriteColor,
    gender,
    level,
    // skills,
  } = props.data;

  return (
    <>
      <div className="modal">
        <center>
          <h1>DATA ENTERED</h1>
        </center>
        <div>
          <h3>Firstname: {firstname}</h3>
        </div>
        <div>
          <h3>lastname: {lastname}</h3>
        </div>
        <div>
          <h3>Nickname: {nickname}</h3>
        </div>
        <div style={{ lineHeight: 1.1 }}>
          <h3>Email: {email}</h3>
        </div>
        <div>
          <h3>Age: {age}</h3>
        </div>
        <div>
          <h3>Telephone: {tel}</h3>
        </div>
        <div>
          <h3>Date: {dateOfBirth}</h3>
        </div>
        <div>
          <h3>Fav-Color: {favoriteColor}</h3>
        </div>
        <div>
          <h3>Gender: {gender}</h3>
        </div>

        <div>
          <h3>level: {level}</h3>
        </div>
        <center>
          <button
            className="close-btn"
            onClick={() => {
              return props.closeModal();
            }}
          >
            close
          </button>
        </center>
      </div>
    </>
  );
};

export default Modal;
