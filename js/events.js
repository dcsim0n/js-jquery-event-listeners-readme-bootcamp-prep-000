//define functions here
  function getIt(){
    alert("Hey!");
  }
  
  function frameIt(){
    $('img').addClass('tasty');
  }
  
  function pressIt(){
    key = event.which;
    trigger = 71;
    if(key === trigger){
      alert("Did you mean to press G?");
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
