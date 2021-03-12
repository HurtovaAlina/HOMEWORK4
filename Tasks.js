//================Task 1============================
function calcRectangleArea() {
      if (typeof h !== "number" || typeof w !== "number") {
           throw new Error("Entered value is NOT a number");
      } else 
      if (h==0 || w==0){
          throw new Error("Entered value is 0");
      } else 
      if (h<0 || w<0){
          throw new Error("Entered value is NOT a positive");
      } 
      return (h*w);
  }
  let h = 3;
  let w = -8;
  let area = calcRectangleArea(h,w);
  console.log(area);

 //================Task 2============================ 
 function checkAge() {
      let age = prompt("Enter your age:", "");
      //console.log(typeof age);
      if (age ===""||age.trim()==="") {
           throw new Error("The field is empty! Please enter your age");
      } else 
      if (!parseInt(age)){
           throw new Error("The entered value is NOT a number! Please enter your age");
      } else
      if (age<14){
            throw new Error("The entered age is less than 14! Please wait");
      }
      alert("Welcome to the cinema, you can watch the movie");
  }
  try {
      checkAge();
  } catch (exception) {
     alert(exception.name+" "+exception.message);
  }

  //================Task 3============================ 
  class MonthException {
    constructor(message) {
      this.message = message;
    }
  };

   function showMonthName(month){
    switch(month) {
      case 1:
          alert ("January");
          break;
      case 2:
           alert ("February");
          break;
      case 3:
           alert ("March");
           break;
      case 4:
           alert ("April");
           break;
      case 5:
           alert ("May");
           break;
      case 6:
           alert ("June");
           break;
      case 7:
           alert ("July");
           break;
      case 8:
           alert ("August");
           break;
      case 9:
           alert ("September");
           break;
      case 10:
           alert ("October");
           break;
      case 11:
           alert ("November");
           break;
      case 12:
           alert ("December");
           break;
      default: {
        throw new MonthException("Incorrect month number");}     
    }
    };
  
  
  let month = Number(prompt("Enter month", ""));
   
  try {
  showMonthName(month);
  } catch (monthException){
  console.log(monthException);
  console.log(monthException.message);
  };
  //================Task 4============================ 
  function showUser(id) {
    if (id<0){ 
    throw new Error ("ID must not be negative: " +id);
    }
      return id; 
    };
     
   function showUsers(ids){
     let newArray = [];
     for (let i=0; i<ids.length; i++){
    try{
     id = ids[i];
     let user = new Object();
     user.id = showUser(id);
     newArray.push(user);
    } catch(exception){
    console.log(exception.name+" "+exception.message);
    };
     };
     return newArray;
     };  
     
     let id;
     let ids = [7,-12,44,22];
     console.log(showUsers(ids));
