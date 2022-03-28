import React, { useState } from "react";
import { STUDENTS } from "../studentList";

function ResidentsList({residentList}) {
  console.log(residentList)
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
		  {
			  residentList?.map((i,ind)=>(
				<li key={ind} className="slide-up-fade-in">{i.name}</li>
			  ))
		  }
       
      </ul>
    </div>
  );
}

export default ResidentsList;
