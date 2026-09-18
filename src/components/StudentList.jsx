import StudentCard from "./StudentCard";

function StudentList({ students, onToggleStatus }) {
  return (
    <section>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </section>
  );
}

export default StudentList;
