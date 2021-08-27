import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "30%",
    margin: "0 auto",
    borderRadius: "30",
    marginTop: "5rem",
  },
  avatar: {
    backgroundColor: "#7289DA",
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "50px",
    margin: "auto",
  },
  content: {
    textAlign: "center",
  },
  user_detail_sub: {
    display: "flex",
    flexWrap: "wrap",
  },
  user_info: {
    marginTop: "10px",
    borderBottom: "1px solid #e6e6e6",
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();
  const userDetail = users.find((user) => user.id === Number(id));

  console.log(id);
  console.log(users);
  console.log(userDetail);

  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar}>{userDetail.name.charAt(0)}</Avatar>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.content}
        >
          {userDetail.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="div"
          className={classes.content}
        >
          <p>@{userDetail.username}</p>
        </Typography>
        <Typography variant="body2" component="div">
          <Box fontSize="1rem" className={classes.user_info}>
            Email: <br /> {userDetail.email}{" "}
          </Box>
          <Box fontSize="1rem" className={classes.user_info}>
            Phone: <br /> {userDetail.phone}{" "}
          </Box>
          <Box fontSize="1rem" className={classes.user_info}>
            Company: <br /> {userDetail.company.name}
          </Box>
          <Box fontSize="1rem" className={classes.user_info}>
            Website: <br /> <Link>{userDetail.website}</Link>
          </Box>
          <Box fontSize="1rem" className={classes.user_info}>
            Address: <br />
            Street: {userDetail.address.street} <br />
            Suite: {userDetail.address.suite} <br />
            City: {userDetail.address.city} <br />
            Zip: {userDetail.address.zipcode}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
