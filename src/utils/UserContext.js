import { createContext } from "react";

const UserContext = createContext({user :{
    name : "Abhinandhu",
    email: "abhi@gmail.com"
}});

UserContext.displayName = "UserContext";
export default UserContext;