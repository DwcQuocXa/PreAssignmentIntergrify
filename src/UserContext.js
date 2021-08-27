import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersInfo = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(usersInfo.data);
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {children}
    </UserContext.Provider>
  );
};
