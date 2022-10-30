import React, { Component } from "react";
import "./App.css";
import Modal from "./Modal";
import light from "./images/light.jpg";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      nickname: "",
      email: "",
      age: "",
      tel: "",
      dateOfBirth: "",
      favoriteColor: "",
      gender: "",
      level: "Beginner",
      skills: {
        html: false,
        css: false,
        javascript: false,
      },
      isOpen: false,
    };
  }

  render() {
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === "checkbox") {
        this.setState({
          skills: { ...skills, [name]: checked },
        });
      } else {
        this.setState({ [name]: value });
      }
      console.log(name, value, type, checked);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
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
        skills,
      } = this.state;

      var formattedSkills = [];
      for (const key in skills) {
        console.log(key);
        if (skills[key]) {
          formattedSkills.push(key.toUpperCase());
        }
      }

      const newData = {
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
        skills: formattedSkills,
      };

      this.setState({
        isOpen: true,
      });
      console.log(newData);
    };
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
      // level,
      skills,
    } = this.state;

    const close = () => {
      this.setState({
        isOpen: false,
      });
    };

    return (
      <>
        <a className="link" href="/howitworks">
          <img className="light" src={light} alt="how it works" />
        </a>
        <center>
          <h1 style={{ marginLeft: 46 }} className="title">
            React Form
          </h1>
        </center>
        <div className="centered-container">
          <div id="container">
            {this.state.isOpen ? (
              <center>
                <>
                  <Modal data={this.state} closeModal={close} />
                </>
              </center>
            ) : (
              <></>
            )}
            <div className="container">
              <form onSubmit={handleSubmit}>
                {/* <div> */}
                <label htmlFor="firstname">Firstname: </label>
                {/* <div> */}
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="lastname">Lastname: </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={lastname}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="nickname">Nickname: </label>
                <input
                  type="text"
                  name="nickname"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="age">Age: </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={age}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="tel">Telephone: </label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone number"
                  value={tel}
                  onChange={handleChange}
                  required
                />
                {/* </div> */}
                <div>
                  <label htmlFor="dateOfBirth">Date of Birth: </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="favoriteColor">Favorite Color: </label>
                  <input
                    type="color"
                    name="favoriteColor"
                    value={favoriteColor}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ lineHeight: 1.2 }}>
                  <label htmlFor="gender">Gender:</label>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      checked={gender === "Female"}
                      required
                    />
                    <label htmlFor="Female">Female</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      checked={gender === "Male"}
                      required
                    />
                    <label htmlFor="Male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={handleChange}
                      checked={gender === "Other"}
                      required
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <div style={{ marginTop: 7 }}>
                  <label htmlFor="skills">Skills:</label>

                  <div>
                    <br />
                    <input
                      type="checkbox"
                      name="html"
                      value="html"
                      onChange={handleChange}
                    />
                    <label htmlFor="html">html</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="css"
                      value="css"
                      onChange={handleChange}
                    />
                    <label htmlFor="css">css</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="javascript"
                      value="javascript"
                      onChange={handleChange}
                    />
                    <label htmlFor="javascript">javascript</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="level">How well you code </label>
                  <select name="level" onChange={handleChange}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Experienced">Experienced</option>
                    <option value="Proffessional">Proffessional</option>
                  </select>
                </div>
                <center>
                  <button className="submit-btn">Submit</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
