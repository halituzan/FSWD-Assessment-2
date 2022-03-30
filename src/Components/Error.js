import React, { useEffect } from "react";
import { STUDENTS } from "../studentList";

function Error({ values, errFunc }) {
  useEffect(() => {
    const timeSet = setTimeout(() => {
      errFunc(false);
    }, 5000);

    return () => clearTimeout(timeSet);
  }, [values.errTime]);

  return (
    <div
      data-testid="errorMsg"
      className="alert error mt-20 slide-up-fade-in"
      style={
        values.errTime ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      {values.student !== "" 
        ? !STUDENTS.map((i) => i.name.toLowerCase()).includes(values.student.toLowerCase())
          ? `Sorry, ${values.student} is not a verified student`
          : STUDENTS.map((i) => i.name.toLowerCase()).includes(values.student.toLowerCase()) &&
            !STUDENTS.map((i) => i.validityDate).includes(values.joinDate)
          ? `Sorry, ${values.student}'s validity has Expried`
          : ""
        : ""}
    </div>
  );
}

export default Error;
