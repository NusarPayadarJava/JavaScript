
"use strict";

//constructor
function Book(t1, t2, t3, t4) {
    this.name =t1; 
    this.sub = t2;
    this.page = t3;
    this.isbn = t4 ;

    this.getBookInfo = function() {
      document.write(
        "Book: "+this.name  +"<br>" 
        +"Topic: "+this.sub +"<br>"
        +"Pages: "+this.page+"<br>"
        +"ISBN: "+this.isbn +"<br>"
        +"-----"+"<br>"
        );
      }

};

  function addBook(){

        var a=new Book();
        var b=new Book();
        var c=new Book();

        var books=[a,b,c];
        let j=1;

         var index= prompt("enter antalBook: ");
         for(let i=0; i<index; i++) {
          books[i].name=prompt("Add book: ("+(j)+") Name: ");
          books[i].sub=prompt("Add book: ("+(j)+") Subject: ");
          books[i].page=prompt("Add book: ("+(j)+") Pages: ");
          books[i].isbn=prompt("Add book: ("+(j)+") ISBN: ");
          j++;

         books[i].getBookInfo();
         console.log("Hello world!"); 



        }

        

       

        
  };
