import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import UserCards from "./UserCards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#2C2F33",
  },
});

export default function HomePage() {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {users.map((user) => (
        <UserCards user={user} key={user.id} />
      ))}
    </div>
  );
}
