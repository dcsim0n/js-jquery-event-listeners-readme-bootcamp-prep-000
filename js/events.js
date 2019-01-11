//define functions here
  function getIt(){
    alert("Hey!");
  }
  
  function frameIt(){
    $('img').addClass('tasty');
  }
  
  function pressIt(){
    alert ("You did it!");
  }
  
  function submitIt(){
    alert("Your form is going to be submitted now.");
  }
$(document).ready(function(){

  // call functions here
  $('p').on('click',getIt);//.on same as .click
  $('img').on('load', frameIt);
  $('input#typing').on('keydown',function(event){
    if (event.which === 71){ pressIt(); }
  });
  $('form').on('submit',submitIt);
  
});
