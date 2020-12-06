"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

//************************************************************************************************

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  
  var x = document.createElement("FORM");
  x.setAttribute("id", "loginForm");
  document.body.appendChild(x);

}
//-----------------------------------------------------------------------------------------------

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  
  var newItem = document.createElement("LABEL");  
  document.getElementById("loginForm").appendChild(newItem);
  newItem.textContent = "Username";


  var textnode = document.createTextNode(" "); 
  newItem.appendChild(textnode);   
  var j = document.getElementById("loginForm");    
  j.insertBefore(newItem, j.childNodes[0]);    

}
//----------------------------------------------------------------------------------------------


function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  var y = document.createElement("INPUT");
      y.setAttribute("id", "input");
      y.required=true;

      document.getElementById("loginForm").appendChild(y);
}
//-----------------------------------------------------------------------------------------------

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  //Add it to the form element. (TIP: use .appendChild).

  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border 
  //style to the input element: "3px solid red". (TIP: use .style.border).
  var btn = document.createElement("BUTTON");
  document.getElementById("loginForm").appendChild(btn);
  btn.textContent = "Login";
  btn.setAttribute("id", "button");

  btn.addEventListener("click", validateLoginInfo() );

}
//-----------------------------------------------------------------------------------------

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
     document.getElementById("button").addEventListener("click", function() {
      let v = document.getElementById("input").value;

      for (var i=0; i<3; i++){
          if (v == usernames[i] ) {   
           alert ("Welcome!"); 
           return true; 
          }
              

            else if (i == 2    ){
              document.getElementById("input").style.border = "3px solid red";
              return false;
              
            }

      }  
        
    });
    
  

}

//Write code here to call the init function only after 
//the dom has been loaded (TIP: check "DOMContentLoaded" event)
document.addEventListener("DOMContentLoaded", init() );
