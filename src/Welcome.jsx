

import { useState, useEffect, useContext } from "react";
import style from "./Home.module.css";
import { ThemeContext } from "./ThemeContext";
import axios from "axios";

function Welcome() {
  const [joke, setJoke] = useState("");
  const darkmode = useContext(ThemeContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      let res = await axios.get("https://api.chucknorris.io/jokes/random", { signal });
     
      setJoke(res.data.value);
    }

    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <div className={darkmode === "dark" ? style.dark : style.light}>
      <h1 className={style.wel}>Welcome to the page..</h1>
      <p>{joke}</p>
    </div>
  );
}

export default Welcome;
