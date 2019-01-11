//define functions here
  function getIt(){
    alert("Hey!");
  }
  
  function frameIt(){
    $('img').addClass('tasty');
  }
  
  function pressIt(){
    $('#typing').on('keydown',function(e){
    if (e.which === 71){ 
      alert("You did it!"); 
      
    }
  });
  }
  
  function submitIt(){
    alert("Your form is going to be submitted now.");
  }
$(document).ready(function(){

  // call functions here
  $('p').on('click',getIt);//.on same as .click
  $('img').on('load', frameIt);
  pressIt();
  $('form').on('submit',submitIt);
  
});
