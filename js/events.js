//define functions here
  function getIt(){
    alert("Hey!");
  }
  
  function frameIt(){
    $('img').addClass('tasty');
  }
  
  function pressIt(){
    if(event.key === "g"){
      alert("You did it");
    }
    if(this.key === "g"){
      alert("You really did it");
    }
  }
  
  function submitIt(){
    alert("Your form is going to be submitted now.");
  }
$(document).ready(function(){

  // call functions here
  $('p').on('click',getIt);//.on same as .click
  $('img').on('load', frameIt);
  $('input#typing').on('keydown',pressIt);
  $('form').on('submit',submitIt);
  
});
