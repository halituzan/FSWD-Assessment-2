import React, { useState } from "react";
import { STUDENTS } from "../studentList";

function ResidentsList({ residentList }) {
  return (
    <div className="pa-10 mt-10 w-100">
      {residentList.length > 0 ? (
        <div className="font-weight-bold text-center bg-dark text-light">
          Residents List
        </div>
      ) : (
        ""
      )}
      <ul
        className="mt-10 styled mx-auto list-group"
        data-testid="residentsNameList"
      >
        {residentList.length > 0
          ? residentList?.map((i, ind) => (
              <li key={ind} className="slide-up-fade-in list-group-item">
                {i.name ? i.name : ""}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default ResidentsList;
