import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

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
