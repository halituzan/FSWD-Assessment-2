import React, { useState } from "react";
import { STUDENTS } from "../studentList";
// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ setFunc, values }) {
  const [studentName, setStudentName] = useState("");
  const [joiningDate, setJoiningDate] = useState("gg.aa.yyy");
  const setterFunc = () => {
    setFunc.setStudent(studentName);
    setFunc.setJoinDate(joiningDate);

    STUDENTS.filter((i) => {
      if ((STUDENTS.filter((i) => i.name.toLowerCase() == studentName.toLowerCase() && i.validityDate === joiningDate)[0] !== undefined) && !values.residentList.some(i=>i.name.toLowerCase()=== studentName.toLowerCase())) {
        return setFunc.setResidentList([
          ...values.residentList,
          STUDENTS.filter(
            (i) =>
              i.name.toLowerCase() == studentName.toLowerCase() &&
              i.validityDate === joiningDate
          )[0],
        ]);
      } 
    });

    setStudentName("");
    setJoiningDate("gg.aa.yyyy");
    setFunc.setErrTime(true);
  };

  return (
    <div className="my-50 d-flex flex-column layout-row align-items-center justify-content-center form-group">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
            type="text"
            className="mr-30 mt-10 input-group-text"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10 input-group date"
          />
        </div>
      </label>
      <button
        onClick={setterFunc}
        type="button"
        data-testid="addBtn"
        className="btn btn-success my-3 small"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
