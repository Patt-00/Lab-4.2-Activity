import { useEffect, useState } from "react";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";

const initialStudents = [
  { id: 1, name: "Student 1", status: "Present" },
  { id: 2, name: "Student 2", status: "Absent" },
  { id: 3, name: "Student 3", status: "Present" },
  { id: 4, name: "Student 4", status: "Absent" },
  { id: 5, name: "Student 5", status: "Present" },
];

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : initialStudents;
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function toggleStatus(id) {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Present" ? "Absent" : "Present",
            }
          : student,
      ),
    );
  }

  function addStudent(newStudent) {
    setStudents((previousStudents) => {
      const nextId = Math.max(0, ...previousStudents.map((student) => student.id)) + 1;

      return [...previousStudents, { ...newStudent, id: nextId }];
    });
  }

  const displayedStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="app">
      <h1>Student Attendance</h1>
      <AddStudentForm onAddStudent={addStudent} />

      <label htmlFor="student-search">Search students</label>
      <input
        id="student-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by name"
      />

      <StudentList students={displayedStudents} onToggleStatus={toggleStatus} />
    </main>
  );
}

export default App;
