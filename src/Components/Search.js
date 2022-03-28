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
  const [studentName, setStudentName] = useState();
  const [joiningDate, setJoiningDate] = useState();
  console.log(setFunc);
  console.log(values.residentList);
  const setterFunc = () => {
    setFunc.setStudent(studentName);
    setFunc.setJoinDate(joiningDate);
    setStudentName("");
    setJoiningDate("gg.aa.yyyy");
    console.log(
      STUDENTS.filter(
        (i) => i.name == studentName && i.validityDate === joiningDate
      )
    );
    setFunc.setResidentList(
      ...values.residentList,
      STUDENTS.filter(
        (i) => i.name == studentName && i.validityDate === joiningDate
      )[0]
    );
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
            type="text"
            className="mr-30 mt-10"
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
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button
        onClick={setterFunc}
        type="button"
        data-testid="addBtn"
        className="small mb-0"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
