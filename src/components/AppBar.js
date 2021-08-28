import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    //backgroundColor: "#10837B",
    backgroundColor: "#1D2023",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button className={classes.title}>Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
