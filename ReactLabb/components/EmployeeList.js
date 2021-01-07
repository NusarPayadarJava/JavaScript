import React from "react";
import { useState } from 'react';
import boy from './boy.png';
import girl from './girl.png';
import Employee from "./Employee.js";


 function  EmployeeList  ()  {

    const emp1= {
      name :"john jonson", 
      email: "john@testemail.com",
      phone: "05555555555555", 
      skills: "html,js",
      avatar:   <img src={boy} class="avatar" />,
    }
    const emp2= {
      name :"andreas anderson", 
      email: "andreas@testemail.com",
      phone: "0521212155555", 
      skills: "html,js, angular, c++",
      avatar:   <img src={boy} class="avatar" />,
    }
    const emp3= {
      name :"anika johan", 
      email: "anika@testemail.com",
      phone: "01111115555", 
      skills: "c++, , react, html,js",
      avatar:   <img src={girl} class="avatar" />,
    }
    const emp4= {
      name :"anna johason", 
      email: "anna@testemail.com",
      phone: "0123455555", 
      skills: "java, c++, html,js",
      avatar:   <img src={girl} class="avatar" />,
  
     }
    
     const [employess, SetEmployess] = useState(null);
  
     
     return (  
      
      <div>
        
        <p><h3>Employee List  </h3></p>
        <button class= "button" 
        onClick={() => SetEmployess(
  
          <div class= "EmployeeDiv"> 
                        <div class= "avatar"><Employee  />  {emp4.avatar} </div>
  
             <h2> <Employee  /> {emp4.name} </h2>
               <Employee  /> email: {emp4.email} 
               <Employee  /> phone: {emp4.phone} 
               <Employee  /> skills: {emp4.skills} 
               </div>
  
  
         ) }> Add Employee </button>
         
        <div class= "EmployeeDiv">
                <div class= "avatar"><Employee  />  {emp1.avatar} </div>
                
                 <h3> <Employee  />  {emp1.name}  </h3>  
             <Employee  /> email: {emp1.email}   
             <Employee  /> phone: {emp1.phone} 
             <Employee  /> skills: {emp1.skills}
               
  
               
                 </div>
                
                <div class= "EmployeeDiv"> 
                <div class= "avatar"><Employee  />  {emp2.avatar} </div>
  
                <h3> <Employee  /> {emp2.name} </h3>
               <Employee  /> email: {emp2.email} 
               <Employee  /> phone: {emp2.phone} 
               <Employee  /> skills: {emp2.skills} 
                </div>
  
               <div  class= "EmployeeDiv"> 
               <div class= "avatar"><Employee  />  {emp3.avatar} </div>
  
               <h3><Employee  /> {emp3.name} </h3>
               <Employee  /> email: {emp3.email} 
               <Employee  /> phone: {emp3.phone} 
               <Employee  /> skills: {emp3.skills} 
                </div>
  
               <p><h3> {employess}</h3></p>
        
       </div>
  
       
    );
    
  
    
  }
  export default EmployeeList;