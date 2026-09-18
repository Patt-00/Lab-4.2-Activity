function StudentCard({ student }) {
  const statusStyle = {
    color: student.status === "Present" ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <article>
      <h2>{student.name}</h2>
      <p style={statusStyle}>{student.status}</p>
      <button type="button" onClick={() => onToggleStatus(student.id)}>
        Mark {student.status === "Present" ? "Absent" : "Present"}
      </button>
    </article>
  );
}

export default StudentCard;
