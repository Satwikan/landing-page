import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

import Button from "@material-ui/core/Button";
import animation from "assets/css/animation.module.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  section: {
    display: "grid",
    pt: [11, 11, 11, 12, 12, 12, 14],

    // pb: [7, 7, 7, 9, 9, 10, 11],
  },
  SearchField: {
    width: "33vw",
    height: "2rem",
    // "::placeholder": { color: "red" },
  },

  searchButton: {
    fontSize: "2rem",
    minHeight: "4rem",
    maxWidth: "20vw",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "1vh" }}
    >
      <Grid item>
        <Input
          className={classes.SearchField}
          placeholder="  Launcher ID"
          // style={{ color: "black", "::placeholder": { color: "red" } }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={(classes.searchButton, animation["snip1417"])}
          startIcon={<SearchIcon />}
          style={{ color: "white", background: " #009b00" }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
