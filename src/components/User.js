import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: null,
      },
    };
    console.log(`${this.state.userInfo.name} Child Contructor`);
  }

  async componentDidMount() {
    console.log(`${this.state.userInfo.name} Child component Did Mount`);
    const data = await fetch("https://api.github.com/users/amrishtembe1998");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log("Child component Did Update called at last");
  }

  componentWillUnmount() {
    // Clear the things like Intervals/Timeouts
    console.log("Child component Will unmount will be called when we move to another page")
  }

  render() {
    console.log(`${this.state.userInfo.name} Child Render`);
    // const { name, location } = this.props;
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url}></img>
        <h1>Developer Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default User;
