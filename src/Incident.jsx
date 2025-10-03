import style from "./incident.module.css";

function Incident({ incident, handleClick }) {  
  const { incident_id, title, status, priority } = incident;

  return (
    <div className={style.incident}>
      <p>ID: {incident_id}</p>
      <p>Title: {title}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      <h1>heloooo</h1>
      <button type="button" onClick={handleClick}>delete</button>
    </div>
  );
}

export default Incident;
