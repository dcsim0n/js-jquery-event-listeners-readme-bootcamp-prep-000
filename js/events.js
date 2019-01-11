//define functions here
  function getIt(){
    alert("Hey!");
  }
  
  function frameIt(){
    $('img').addClass('tasty');
  }
  
  function pressIt(){
    
  }
  
  function submitIt(){
    
  }
$(document).ready(function(){

  // call functions here
  $('p').on('click',getIt);//.on same as .click
  $('img').load(frameIt);
  
});
