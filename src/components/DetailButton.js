import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#97A9B4",
    color: "white",
    "&:hover": {
      backgroundColor: "#7289DA",
    },
    borderRadius: 10,
  },
});

export default function ContainedButtons({ user }) {
  const classes = useStyles();
  return (
    <div>
      <Link to={`/${user.id}`} key={user.id} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" className={classes.button}>
          More Details
        </Button>
      </Link>
    </div>
  );
}
