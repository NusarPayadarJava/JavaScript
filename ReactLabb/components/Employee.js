import React from "react";
import "./employee.css";


export default function Employee (EmployeesData) {
    return <div>
       <h2>{EmployeesData.name} </h2>
       <h4> {EmployeesData.email}
            {EmployeesData.phone}
            {EmployeesData.skills} 
            {EmployeesData.avatar} </h4> 
      </div>
  }