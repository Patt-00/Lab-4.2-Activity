import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Present");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    onAddStudent({ name: name.trim(), status });
    setName("");
    setStatus("Present");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="student-name">Student name</label>
      <input
        id="student-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a name"
      />

      <label htmlFor="student-status">Initial status</label>
      <select
        id="student-status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Add student</button>
    </form>
  );
}

export default AddStudentForm;
