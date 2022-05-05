$(document).ready(function(){
$.ajax({
    type: 'GET',
    url:'./php/cargar_tabs.php',
   
   })
   .done(function(listas_ejercicios){
    $('.nav-item').html(listas_ejercicios)
  })
    .fail(function(){
        alert('Hubo un errror al cargar los ejercicios')
      })
    
  





});