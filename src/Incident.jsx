import style from "./incident.module.css";
import {Button} from "@mui/material"

function Incident({ incident, handleClick }) {  
  const { incident_id, title, status, priority } = incident;

  return (
    <div className={style.incident}>
      <p>ID: {incident_id}</p>
      <p>Title: {title}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      
      <Button  sx={{ my: "50px" }} variant="contained" color="error" type="button" onClick={handleClick}>delete</Button>
    </div>
  );
}

export default Incident;
