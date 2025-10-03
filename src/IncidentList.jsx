
import { useState, useContext } from "react";
import Incident from "./Incident.jsx";
import style from "./incident.module.css";
import { ThemeContext } from "./ThemeContext";

function IncidentList({ incidents, onDelete, addIncident }) {
  const darkmode = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    incident_id: "",
    title: "",
    priority: "low",
    status: "open",
    severity: "3 - Low",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addIncident({ ...formData });
    setFormData({ incident_id: "", title: "", priority: "low", status: "open", severity: "3 - Low" });
  };

  return (
    <>
      <div className={`${style["form-container"]} ${darkmode === "dark" ? style.dark : ""}`}>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="incident_id" placeholder="INC-111111" value={formData.incident_id} onChange={handleInputChange} />
          <input type="text" name="title" placeholder="Incident Title" value={formData.title} onChange={handleInputChange} />
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleInputChange}>
            <option value="open">Open</option>
            <option value="inprogress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
          <label>Severity</label>
          <select name="severity" value={formData.severity} onChange={handleInputChange}>
            <option value="3 - Low">Low</option>
            <option value="1 - Critical">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
          <button type="submit">Add Incident</button>
        </form>
      </div>

      <div className={`${style.card} ${darkmode === "dark" ? style.dark : ""}`}>
        {incidents.map(incident => (
          <Incident key={incident.incident_id} incident={incident} handleClick={() => onDelete(incident.incident_id)} />
        ))}
      </div>
    </>
  );
}

export default IncidentList;
