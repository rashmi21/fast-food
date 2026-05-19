import { Component } from "react";
import Users from "./Users";
import UsersClass from "./UsersClass";
import UserContext from "../utils/UserContext";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Contructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="bg-orange-200 h-192 overflow-y-auto">
        <h3> About Us</h3>
        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="font-bold text-lg">{loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2> Here is information about US !!!</h2>
        {/* <Users name={"Rashmi Deokar"} location={"Pune"}/> */}
        <UsersClass />
      </div>
    );
  }
}

export default AboutUs;
