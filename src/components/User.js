import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Developer Name: {name}</h1>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default User;
