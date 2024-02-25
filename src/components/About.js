import User from "./User";
import { Link } from "react-router-dom";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }
  componentDidMount() {
    //console.log("Parent component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <>
        <div>
          <h1>About us</h1>
          <h3>
            This is Namaste React course. Trying to learn React concepts using
            this project.
          </h3>
          <User name="Amrish Tembe" location="Ratnagiri" />
          <Link to="/">Go back to homepage</Link>
        </div>
      </>
    );
  }
}

export default About;
