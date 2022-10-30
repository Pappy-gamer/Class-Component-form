import React from "react";
import singleState from ".//images/singleState.jpg";
import multipleState from "./images/multipleState.jpg";
import singleChange from "./images/singleChange.jpg";
import multipleChange from "./images/multipleChange.jpg";
import Submit from "./images/Submit.jpg";
import FirstDemo from "./FirstDemo";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <center>
        <h1 className="title">how it works</h1>{" "}
      </center>
      <main>
        <center>
          <p style={{ color: "white" }}>
            This project was built to show how form is being handled using{" "}
            <strong>React Class Components</strong>
          </p>
        </center>

        <p>
          The main requirements to creating a form using class components are:
        </p>

        <span>
          <p>
            <strong>1. State variables:</strong>
          </p>
          <img src={singleState} alt="singleState" />
          <p>
            As you can see, the component "demo" has a state variable of
            "firstName", which im sure you have guessed by now, stores the value
            of first name in your form
          </p>
          <p>
            While the above illustration is cool and all, ideallly in a real
            world scenerio, you will hardly find a form with just one input.
            Lets say for example, you want to sign up for a netflix account,
            what are the necessary information you would be asked to provide?,
            first name, lastname, e-mail address, phone number and so on. The
            image below shows how we can achieve this
          </p>
          <img src={multipleState} alt="multipleState" />
          <p style={{ marginTop: 35 }}>
            <strong>2. Handling Changes:</strong>
          </p>
          <p>
            Now that we understand how we set state variables, now we need a way
            to monitor the changes on the input fields. To accomplish this, we
            are going to make use of javascript functions
          </p>
          <img src={singleChange} alt="singleChange" />
          <p>
            "handleChange" is a function which updates the state "firstName".
            The "e.target.value" gets the current key pressed. Below is a live
            demo to better understand this everytime a new key is pressed(
            <i>Fill in the firstName field</i>)
          </p>
          <FirstDemo />
          <p>
            Now things this are starting to get interesting with the above
            illustration, BUT, what if we had more state variables of different
            types (remember the netflix scenerio?), how would we handle that?.
            We can use the above approach but this will lead to redundant and
            messy code. What this basically implies is that, imagine if we had
            twelve state variables(in which their types may vary),this means we
            have to create twelve separate functions for each input field and
            therefor leading to more memory consumption.
          </p>
          <p>
            <strong>BUT</strong> what if i told you there was a way to handle
            this with the use of just <strong>ONE FUNCTION!</strong>,yes, just{" "}
            <strong>ONE FUNCTION!</strong> wouldn't that be incredible and less
            time consuming?. Let me show you
          </p>
          <img src={multipleChange} alt="multiple states" />
          <p>
            The above function destructures name, value, type and checked from
            e.target, lets not forget that these four variables are also
            properties of an input field. With this approach, we can update any
            state variable(with a type = = = "text") by using [name]: value.
            Also do make sure that the name property of your input field matches
            the state variable to avoid errors when trying to update it.
          </p>
          <p style={{ marginTop: 35 }}>
            <strong>3. Submitting the form:</strong>
          </p>
          <p>
            Now, we have finally come to the third and final requirement to
            successfully create a form.
          </p>
          <img src={Submit} alt="handle submit" />
          <p>
            so what we do here is to create a function with 'e.preventDefault()'
            as the first line of code. All it does is to prevent the default
            behaviour of browsers to reload once a button is clicked.
          </p>
          <p>
            After that we will probably want to send the data gotten from the
            form to a remote server, but in our case, i choose to console log
            the value of our state.
          </p>

          <p>
            We have finally come to the end of this article, i really hope it
            was able to break down the concept of react forms to you. And if you
            still find some aspects confusing, don't worry, try, try, and try
            again, DON'T GIVE UP
          </p>
        </span>
      </main>
    </div>
  );
};

export default HowItWorks;

//   state = {
//     firstName: "",
//   };
// handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(this.state);
// };
//   render() {
//     return (
//       <form>
//         <label>Firstname</label>
//         <input name="firstName" onChange={this.handleChange} />
//       </form>
//     );
//   }
// }
//  lastName: "",
//     email: "",
//     phoneNumber: "",
//     country: ""
