
import { useReducer, useState, useContext } from "react";
import style from "./Home.module.css";
import IncidentList from "./IncidentList";
import Welcome from "./Welcome.jsx";
import data from "./incidents.json";
import { ThemeContext } from "./ThemeContext";
import {Link, Route, Routes} from "react-router-dom";

function Home({ toggleDarkmode }) {
  const darkmode = useContext(ThemeContext);
  const date = new Date();
  let user = { prefix: "Kambala", lastName: "Likhitha" };

  
  const [incidents, dispatch] = useReducer(incidentsReducer, data);

  
  function incidentsReducer(incidents, action) {  
    switch(action.type) {
      case "ADD":
        return [...incidents, action.payload];
      case "DELETE":
        return incidents.filter(incident => incident.incident_id !== action.payload);
      default:
        return incidents;
    }
  }

  const handleDelete = id => dispatch({ type: "DELETE", payload: id });
  const addIncident = newIncident => dispatch({ type: "ADD", payload: newIncident });

 

  return (
    <div className={darkmode === "dark" ? style.dark : style.light}>
      <header className={style.header}>
        <div className={style.div}>
          <h1 className={style.h1}>Welcome {user.prefix} {user.lastName}!</h1>
          <p>Today's date is {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</p>
        </div>
        <nav className={style.navbar}>
          <ul className={style.navLinks}>
            <li><Link  to="/" className={style.navButton} >Home</Link></li>
            <li><Link to="/incidents"  className={style.navButton} >Accident</Link></li>
          </ul>
          <button onClick={toggleDarkmode} className={style.navButton}>DarkMode</button>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/incidents" element={
          <IncidentList incidents={incidents} 
            onDelete={handleDelete} 
            addIncident={addIncident} 
          />
        } />
      </Routes>
      
    </div>
  );
}

export default Home;
