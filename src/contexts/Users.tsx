import { createContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

interface IUser {
  _id: string;
  name?: string;
  phone?: string;
  location?: string;
  age?: string;
  email?: string;
  gender?: string;
  occupation?: string;
  marital_status?: string;
}

interface UsersContextValue {
  loggedInUser: IUser;
  setLoggedInUser: Function;
}

export const UsersContext = createContext({} as UsersContextValue);

const Users: React.FC<Props> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    let user = localStorage.getItem("farcry_user");
    if (user !== null) {
      return JSON.parse(user);
    } else return {};
  });

  useEffect(() => {
    window.localStorage.setItem("farcry_user", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  console.log(loggedInUser);

  return (
    <UsersContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default Users;
