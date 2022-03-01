import React, { useState, Fragment } from "react";
import axios from "axios";
import classes from "./JokePage.module.css";

function JokePage() {
  const [joke, setJoke] = useState("");

  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke/png",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": "7a3cf9078dmsh8271614b81009c2p168afcjsna9f3fb1ae07a",
    },
  };

  const getJoke = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setJoke(
          response.data.body.setup + " ... " + response.data.body.punchline
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <div className={classes.jokePage}>
        <div className={classes.title}>Joke page</div>
        <div className={classes.jokeItem}>{joke}</div>
        <button onClick={getJoke} className={classes.jokeBtn}>
          Get joke
        </button>
      </div>
    </Fragment>
  );
}

export default JokePage;
