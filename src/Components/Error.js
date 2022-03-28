import React, { useState } from "react";
import { STUDENTS } from "../studentList";
console.log(STUDENTS);
function Error({ values }) {
  console.log(values.joinDate);
  console.log(STUDENTS[0].validityDate);

  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {values.student !== ""
        ? !STUDENTS.map((i) => i.name).includes(values.student)
			? `Sorry, ${values.student} is not a verified student`
			: STUDENTS.map((i) => i.name).includes(values.student) && !STUDENTS.map((i) => i.validityDate).includes(values.joinDate)
			? `Sorry, ${values.student}'s validity has Expried`
			: ""
        : ""}
    </div>
  );
}

export default Error;
