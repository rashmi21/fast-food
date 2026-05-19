import react from "react";

const UserContext = react.createContext({
  loggedinUser: "Default User",
});

export default UserContext;
