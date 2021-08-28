import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Avatar, Link } from "@material-ui/core";
import DetailButton from "./DetailButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "12.3px",
    margin: "40px",
    textAlign: "center",
    width: theme.spacing(37),
    height: theme.spacing(46.6),
    borderRadius: 10,
  },
  avatar: {
    backgroundColor: "#7289DA",
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "50px",
    margin: "auto",
  },
}));

export default function UserCard({ user }) {
  const classes = useStyles();
  console.log(user.name.charAt(0));

  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>@{user.username}</p>
          <Link>{user.website}</Link>
        </Typography>
      </CardContent>
      <DetailButton user={user} />
    </Card>
  );
}
